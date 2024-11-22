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
            <canvas id="doomcanvas"></canvas>
        `;
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