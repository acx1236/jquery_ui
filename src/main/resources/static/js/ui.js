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

function WaitDialog() {
    var masking = $('<div class="ui-widget-overlay ui-front" style="z-index: 100">');
    var waiting = $('<img id="waiting" src="/img/waiting.png"' +
        'style="width: 160px; height: 160px; z-index: 150;position: fixed; top: 0; left: 0; right: 0; bottom: 0; margin: auto">');
    var interval;
    this.open = function () {
        $(document.body).append(masking).append(waiting);
        var rotate = 0;
        interval = setInterval(function () {
            rotate += 30;
            rotate = rotate % 360;
            waiting.css("transform", "rotate(" + rotate + "deg)");
        }, 100);
    };
    this.close = function () {
        if (interval !== undefined) {
            clearInterval(interval);
        }
        waiting.remove();
        masking.remove();
    };
}