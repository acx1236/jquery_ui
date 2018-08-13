jQuery(function ($) {
    $.fn.navigate = function () {
        if (!this.is('ul')) {
            console.log('不是ul标签，无法完成初始化操作');
            return;
        }
        $(this).css('display', 'inline-block');
        $(this).css('padding', '0');
        $(this).css('margin', '0');
        return this.each(function () {
            new Navigate(this);
        });
    };

    var Navigate = function (element) {

        var $obj = $(element), currActive, time = 300;

        this.init = function () {
            var html = '<div align="center" class="navigate-container">' +
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
            html += '<div class="navigate-text">';
            $obj.find('li').each(function (index) {
                var position = $(this).attr("position");
                if (index === 0) {
                    html += '<span index="' + index + '" class="navigate-textView navigate-textView-active" position="' + position + '">' + $(this).text() + '</span>';
                } else {
                    html += '<span index="' + index + '" class="navigate-textView" position="' + position + '">' + $(this).text() + '</span>';
                }
            });
            html += '</div></div>';
            $obj.empty().html(html);
            this.eventBind();
        };

        this.eventBind = function () {
            currActive = $obj.find('span[index="0"]');
            $obj.off().on('click', 'span', function () {
                currActive.removeClass('navigate-textView-active');
                currActive = $(this);
                var index = $(this).attr('index');
                // 18 根据图片大小修改；50 根据.brink和.join的高度修改
                var newTop = (18 + 40 * index) + 'px';
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
            $(window).scroll(function () {
                if ($(this).data('scrollTimeout')) {
                    clearTimeout($(this).data('scrollTimeout'));
                }
                $(this).data('scrollTimeout', setTimeout(function () {
                    var change = false;
                    var totalView = $('.navigate-textView').each(function (index) {
                        var top = $($(this).attr('position')).offset().top;
                        if (top >= $(window).scrollTop() && top < ($(window).scrollTop() + $(window).height())) {
                            var newTop = (18 + 40 * index) + 'px';
                            $("#rightIndicate").animate({top: newTop}, time);
                            $('.navigate-textView-active').removeClass('navigate-textView-active');
                            $(this).addClass('navigate-textView-active');
                            change = true;
                            return false;
                        }
                    });
                    if (!change) {
                        var newTop = (18 + 40 * (totalView.length - 1)) + 'px';
                        $("#rightIndicate").animate({top: newTop}, time);
                        $('.navigate-textView-active').removeClass('navigate-textView-active');
                        $('.navigate-textView:last').addClass('navigate-textView-active');
                    }
                }, 1000));
            });
        };

        this.init();
    }
});