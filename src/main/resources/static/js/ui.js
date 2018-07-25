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

jQuery(function ($) {
    $.fn.setDialogStyle = function () {
        $('.ui-dialog-buttonpane.ui-widget-content.ui-helper-clearfix').each(function () {
            $(this).css('padding-left', '0');
            $(this).css('padding-right', '0');
            $(this).css('text-align', 'center');
            $(this).find('div').each(function () {
                $(this).removeClass('ui-dialog-buttonset');
                $(this).find('button').addClass('commonButton');
            });
        });
    };
});