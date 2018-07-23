jQuery(function ($) {
    $.fn.navigate = function () {
        if (!this.is('ul')) {
            console.log('不是ul标签，无法完成初始化操作');
            return;
        }
        console.log('\n\n初始化导航控件\n\n\n');
        $(this).css('display', 'inline-block');
        return this.each(function () {
            new Navigate(this);
        });
    };

    var Navigate = function (element) {

        var $obj = $(element), currActive, time = 300;

        this.init = function () {
            var html = '<div class="navigate-container">' +
                '<div class="navigate-bar"><em class="whiteCircle" style="margin-bottom: 2px"></em><em class="brink"></em>';
            var length = $obj.find('li').length;
            for (var i = 0; i < length; i++) {
                if (i === length - 1) {
                    html += '<em class="greyCircle"></em>';
                } else {
                    html += '<em class="greyCircle"></em><em class="join"></em>';
                }
            }
            html += '<em class="brink"></em><em class="whiteCircle" style="margin-top: 2px"></em><em id="rightIndicate" class="right"></em></div>';
            html += '<div class="navigate-text" align="left">';
            $obj.find('li').each(function (index) {
                var position = $(this).attr("position");
                if (index === 0) {
                    html += '<span index="' + index + '" class="navigate-textView navigate-textView-active" position="' + position + '">' + $(this).text() + '</span>';
                } else {
                    html += '<span index="' + index + '" class="navigate-textView" position="' + position + '">' + $(this).text() + '</span>';
                }
            });
            html += '</div></div>';
            var navigateTextWidth = $obj.width() + 40; // 加上span标签的左内边距
            var parentWidth = $obj.parent().width();
            var navigateTextRight = parentWidth - (parentWidth - navigateTextWidth) / 2; // 在父标签的中间
            $obj.empty().html(html);
            $obj.find('.navigate-text').css('width', navigateTextWidth + 'px');
            $obj.find('.navigate-container').css('right', navigateTextRight + 'px');
            this.eventBind();
        };

        this.eventBind = function () {
            currActive = $obj.find('span[index="0"]');
            $obj.off().on('click', 'span', function () {
                currActive.removeClass('navigate-textView-active');
                currActive = $(this);
                var index = $(this).attr('index');
                // 18 根据图片大小修改；50 根据.brink和.join的高度修改
                var newTop = (18 + 50 * index) + 'px';
                var position = $(this).attr('position');
                var target = $(position);
                var offset = target.offset();
                if (offset !== undefined) {
                    $("html,body").animate({scrollTop: offset.top}, time);
                } else {
                    $("html,body").animate({scrollTop: $(document).height()}, time);
                }
                $("#rightIndicate").animate({top: newTop}, time);
                currActive.addClass('navigate-textView-active');
            });
        };

        this.init();
    }
});