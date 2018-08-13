jQuery(function ($) {

    //配置参数
    var defaults = {
        pageCount: 1, //总页数
        currentPage: 1, //当前第几页
        count: 3, //显示页码总数
        callback: function () {
        } //回调
    };

    var Pagination = function (element, options) {
        //全局变量
        var opts = options, //配置
            currentPage = options.currentPage,
            pageCount = options.pageCount,
            positionOffSet = Math.ceil(options.count / 2) - 1,
            count = options.count > options.pageCount ? options.pageCount : options.count,
            $obj = $(element); //容器

        this.setCurrentPage = function (setPage) {
            currentPage = setPage;
        };

        this.getCurrentPage = function () {
            return currentPage;
        };

        /**
         * 填充数据
         */
        this.filling = function () {
            var html = '';
            if (currentPage > 1) { //显示上一页
                html += '<a href="javascript:;" class="prev"><</a>';
            }
            var startMax = pageCount - count + 1;
            startMax = startMax > 0 ? startMax : 1;
            var start = currentPage - positionOffSet;
            start = start > startMax ? startMax : start;
            start = start < 1 ? 1 : start;
            var end = start + count - 1;
            for (; start <= end; start++) {
                if (start !== currentPage) {
                    html += '<a href="javascript:;" data-page="' + start + '">' + start + '</a>';
                } else {
                    html += '<span class="active">' + start + '</span>';
                }
            }
            if (currentPage < pageCount) { //显示下一页
                html += '<a href="javascript:;" class="next">></a>';
            }
            $obj.empty().html(html);
        };

        //绑定事件
        this.eventBind = function () {
            var that = this;
            $obj.off().on('click', 'a', function () {
                if ($(this).hasClass('next')) {
                    currentPage = parseInt($obj.find('.active').text()) + 1;
                } else if ($(this).hasClass('prev')) {
                    currentPage = parseInt($obj.find('.active').text()) - 1;
                } else {
                    currentPage = parseInt($(this).data('page'));
                }
                that.filling();
                typeof opts.callback === 'function' && opts.callback(that);
            });
        };

        //初始化
        this.init = function () {
            if (pageCount <= 1) {
                return;
            }
            this.filling();
            this.eventBind();
        };
        this.init();
    };

    $.fn.pagination = function (parameter, callback) {
        if (typeof parameter === 'function') { //重载
            callback = parameter;
            parameter = {};
        } else {
            parameter = parameter || {};
            callback = callback || function () {
            };
        }
        var options = $.extend({}, defaults, parameter);
        return this.each(function () {
            var pagination = new Pagination(this, options);
            callback(pagination);
        });
    };

});