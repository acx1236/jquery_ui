function selectMenu(addClassName) {
    $("select").each(function () {
        var button = $(this).selectmenu().selectmenu("instance").button;
        button.addClass("commonSelectMenu");
        if (addClassName !== undefined) {
            button.addClass(addClassName);
        }
    });
}

function setButton(button, classes) {
    button.addClass(classes);
}

function setIconButton(button, classes, icon) {
    setButton(button, classes);
    button.addClass("leftIconButton");
    button.css("background-image", "url(" + icon + ")");
}