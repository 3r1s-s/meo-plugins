// uwu code from somewhere i forgor
// github i think

class Seed {
    seeder;

    constructor(seed) {
        this.seeder = this.xmur3(seed);
    }

    random(min = 0, max = 1) {
        // Make sure the minimum and maximum values are correct
        if (min > max) {
            throw new Error("The minimum value must be below the maximum value");
        }
        if (min === max) {
            throw new Error("The minimum value cannot equal the maximum value");
        }

        return this.denormalize(this.sfc32(), min, max);
    }

    randomInt(min = 0, max = 1) {
        return Math.round(this.random(min, max));
    }

    denormalize(value, min, max) {
        return value * (max - min) + min;
    }

    // https://github.com/bryc/code/blob/master/jshash/PRNGs.md
    xmur3(str) {
        let h = 1779033703 ^ str.length;

        for (let i = 0; i < str.length; i++) {
            h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
            h = h << 13 | h >>> 19;
        }

        return () => {
            h = Math.imul(h ^ h >>> 16, 2246822507);
            h = Math.imul(h ^ h >>> 13, 3266489909);
            return (h ^= h >>> 16) >>> 0;
        };
    }

    // https://github.com/bryc/code/blob/master/jshash/PRNGs.md
    sfc32() {
        let a = this.seeder();
        let b = this.seeder();
        let c = this.seeder();
        let d = this.seeder();

        a >>>= 0;
        b >>>= 0;
        c >>>= 0;
        d >>>= 0;
        let t = (a + b) | 0;
        a = b ^ (b >>> 9);
        b = (c + (c << 3)) | 0;
        c = (c << 21) | (c >>> 11);
        d = (d + 1) | 0;
        t = (t + d) | 0;
        c = (c + t) | 0;
        return (t >>> 0) / 4294967296;
    }
}

// Code from OwO-mod (https://github.com/WlodekM/Vencord/)
const faces = [
    "(・`ω´・)",
    ";;w;;",
    "OwO",
    "UwU",
    ">w<",
    "^w^",
    "ÚwÚ",
    "^-^",
    ":3",
    "x3",
];
const exclamations = ["!?", "?!!", "?!?1", "!!11", "?!?!"];
const actions = [ // this isnt used but im gonna leave it in because funny
    "*blushes*",
    "*whispers to self*",
    "*cries*",
    "*screams*",
    "*sweats*",
    "*twerks*",
    "*runs away*",
    "*screeches*",
    "*walks away*",
    "*sees bulge*",
    "*looks at you*",
    "*notices buldge*", // O///O
    "*starts twerking*",
    "*huggles tightly*",
    "*boops your nose*",
];
const uwuMap = [
    [/(?:r|l)/g, "w"],
    [/(?:R|L)/g, "W"],
    [/n([aeiou])/g, "ny$1"],
    [/N([aeiou])/g, "Ny$1"],
    [/ove/g, "uv"],

];

let _wordsModifier, _exclamationsModifier, _spacesModifier;

function isAt(value) {
    // Check if the first character is '@'
    const first = value.charAt(0);
    return first === "@";
}

function isUri(value) {
    if (!value) return false;

    // Check for illegal characters
    if (
        /[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(value)
    ) {
        return false;
    }

    // Check for hex escapes that aren't complete
    if (
        /%[^0-9a-f]/i.test(value) || /%[0-9a-f](:?[^0-9a-f]|$)/i.test(value)
    ) {
        return false;
    }

    // Directly from RFC 3986
    const split = value.match(
        /(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/,
    );

    if (!split) return false;

    const [, scheme, authority, path] = split;

    // Scheme and path are required, though the path can be empty
    if (!(scheme && scheme.length && path.length >= 0)) return false;

    // If authority is present, the path must be empty or begin with a /
    if (authority && authority.length) {
        if (!(path.length === 0 || /^\//.test(path))) return false;
    } else if (/^\/\//.test(path)) {
        // If authority is not present, the path must not start with //
        return false;
    }

    // Scheme must begin with a letter, then consist of letters, digits, +, ., or -
    if (!/^[a-z][a-z0-9\+\-\.]*$/.test(scheme.toLowerCase())) return false;

    return true;
}

/** @param {string} value */
function isEmoji(value) {
    return value.match(/<:[A-z0-9]*>/g)
}

function uwuifyExclamations(sentence) {
    const words = sentence.split(" ");
    const pattern = new RegExp("[?!]+$");

    const uwuifiedSentence = words.map((word) => {
        const seed = new Seed(word);

        // If there are no exclamations return
        if (
            !pattern.test(word) || seed.random() > _exclamationsModifier
        ) {
            return word;
        }

        word = word.replace(pattern, "");
        word +=
            exclamations[seed.randomInt(0, exclamations.length - 1)];

        return word;
    }).join(" ");

    return uwuifiedSentence;
}

function uwuifyWords(sentence) {
    const words = sentence.split(" ");

    const uwuifiedSentence = words.map((word) => {
        if (isAt(word)) return word;
        if (isUri(word)) return word;
        if (isEmoji(word)) return word;

        const seed = new Seed(word);

        for (const [oldWord, newWord] of uwuMap) {
            // Generate a random value for every map so words will be partly uwuified instead of not at all
            if (seed.random() > _wordsModifier) continue;

            word = word.replace(oldWord, newWord);
        }

        return word;
    }).join(" ");

    return uwuifiedSentence;
}

function uwuifySentence(sentence) {
    let uwuifiedString = sentence;

    uwuifiedString = uwuifyWords(uwuifiedString);
    uwuifiedString = uwuifyExclamations(uwuifiedString);

    return uwuifiedString;
}

function applyRules(content) {
    if (content.length === 0)
        return content;

    if (true) {
        const edgeCases = ["lmao", "will", "lol"];
        edgeCases.forEach((edgeCase, i) => {
            // if (!rule.find || !rule.replace) continue;
            content = ` ${content} `.replaceAll(edgeCase, `[$ec#${i}$]`).replace(/^\s|\s$/g, "");
        });

        content = uwuifySentence(content);

        edgeCases.forEach((edgeCase, i) => {
            // if (!rule.find || !rule.replace) continue;
            content = ` ${content} `.replaceAll(`[$ec#${i}$]`, edgeCase).replace(/^\s|\s$/g, "");
        });
    }

    content = content.trim();
    return content;
}

function doMixin(func, origFunc) {
    return function() {func();origFunc();}
}

console.log("Doing signature mixin")
sendpost = doMixin(function () {
    const msgbox = document.getElementById('msg');
    msgbox.value = applyRules(msgbox.value)
}, sendpost)
