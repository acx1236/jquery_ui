$.widget('ui.selectMenu', {

    options: {
        addClassName: "",
        defaultText: ""
    },
    _create: function () {

        var main = $("<div>").addClass("select-main"), icon = $("<span>").addClass("select-icon"),
            value = $("<div>").addClass("select-value"), block = $("<div>").addClass("select-block"),
            select = $(this.element), that = this,
            list = $("<ul>").addClass("select-list");

        function drawSelect() {
            block.append(list);
            main.append(value).append(icon).append(block);
            main.addClass(that.options.addClassName);
            main.addClass(select.attr('class'));
        }

        function drawMenu() {
            var item = '';
            select.find('option').each(function () {
                item += '<li class="select-item">' + $(this).text() + '</li>';
            });
            list.append(item);
            if (that.options.defaultText === '') {
                value.html(select.find('option:first').text());
            } else {
                value.html(that.options.defaultText);
            }
        }

        function drawComplete() {
            select.after(main);
            value.css('line-height', value.height() + 'px');
            block.css('line-height', value.height() - 10 + 'px');
            block.css('width', main.innerWidth() + 'px');
            block.css('top', main.innerHeight() + 1 + 'px');
            select.hide();
        }


        function bindClick() {
            main.click(function () {
                if (block.is(":hidden")) {
                    block.show();
                    icon.addClass('reverse');
                } else {
                    block.hide();
                    icon.removeClass('reverse');
                }
            });
            main.blur(function () {
                block.hide();
                icon.removeClass('reverse');
            });
        }

        drawSelect();
        drawMenu();
        drawComplete();
        bindClick();

    }

});