function doMixin(func, origFunc) {
    return function() {origFunc();func();}
}

renderChats = doMixin(function () {
    document.querySelectorAll(`.navigation-button.button.gcbtn`)[1].remove();
}, renderChats)
