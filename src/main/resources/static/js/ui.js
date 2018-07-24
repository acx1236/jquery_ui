function selectMenu(select) {
    select
        .selectmenu("instance")
        .button
        .addClass("commonSelectMenu");
}

function setButton(button, classes) {
    button.addClass(classes);
}

function setIconButton(button, classes, icon) {
    setButton(button, classes);
    button.addClass("leftIconButton");
    button.css("background-image", "url(" + icon + ")");
}