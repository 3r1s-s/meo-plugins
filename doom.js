function doMixin(func, origFunc) {
    return function() {func();origFunc();}
}

const settingsPages = {}

settingsPages['doom'] = {
    displayName: "Doom",
    func: function load() {
        setTop();
        let pageContainer = document.querySelector(".settings");
        pageContainer.innerHTML = `
            <canvas id="doomcanvas" style="aspect-ratio: 4 / 3;width: 100%"></canvas>
            <button id="startdoom">Start DOOM (warning: may be laggy)</button>
        `;
        const script = document.createElement('script');
        script.src = 'https://js-dos.com/6.22/current/js-dos.js';
        document.getElementById("startdoom").onclick = function() {
            const canvas = document.getElementById("doomcanvas");
            const dosInstance = Dos(canvas, {
                wdosboxUrl: "https://js-dos.com/6.22/current/wdosbox.js",
                cycles: 1000,
                autolock: false,
            });

            dosInstance.ready(function (fs, main) {
                fs.extract("https://js-dos.com/cdn/upload/DOOM-@evilution.zip").then(function () {
                    main(["-c", "cd DOOM", "-c", "DOOM.EXE"]).then(function (ci) {
                        window.ci = ci;
                    });
                });
            });
        };

        // Append the script to the document's head
        document.head.appendChild(script);
    }
}

window.settingsPages = settingsPages

let realLoadstgs = loadstgs;
loadstgs = function () {
    realLoadstgs()
    navc = document.querySelector(".nav-top");
    for (pageid in settingsPages) {
        const pageData = settingsPages[pageid];
        navc.innerHTML += `
    <input type='button' class='settings-button button' id='submit' value='${pageData.displayName.replaceAll("'", "&apos;")}' onclick='window.settingsPages.${pageid}.func()' aria-label="${pageid}">`
    }
};