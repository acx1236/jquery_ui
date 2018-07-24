<%@ page pageEncoding="utf-8" %>
<html>
<head>
    <title>Title</title>
    <base target="_blank"/>
    <link rel="stylesheet" href="jquery-ui/jquery-ui.css">
    <link rel="stylesheet" href="css/ui.css">
    <link rel="stylesheet" href="css/crewListView.css">
    <link rel="stylesheet" href="css/page.css">
    <link rel="stylesheet" href="css/navigate.css">
    <script src="js/jquery.js"></script>
    <script src="jquery-ui/jquery-ui.js"></script>
    <script src="js/ui.js"></script>
    <script src="js/page.js"></script>
    <script src="js/navigate.js"></script>
    <script type="text/javascript">
        $(function () {
            setButton($("#search").button(), "commonButton");
            selectMenu($("select").selectmenu());
            setButton($("#shippingCertificate").button(), "smallButton");
            setButton($("#techniqueFile").button(), "smallButton");
            setButton($("#deviceList").button(), "smallButton");
            setButton($("#save").button(), "blueButton");
            setButton($("#cancel").button(), "whiteButton");
            setButton($("#determine").button(), "blueButton");
            setButton($("#delete").button(), "redButton");
            setButton($("#addEmbarkPerson").button(), "noBorderWhiteButton");
            setButton($("#addPlanSuccessor").button(), "noBorderWhiteButton");
            $('.M-box11').pagination({
                count: 3,
                pageCount: 9,
                callback: function (page) {
                    alert('进入第' + page.getCurrentPage() + '页');
                }
            }, function (page) {
                console.log('进入第' + page.getCurrentPage() + '页');
            });
            $('#navigate').navigate();
        });
    </script>
</head>
<body style="padding: 0">

<table style="width: 100%;" cellspacing="15px">
    <tr>
        <td width="80%">
            <div class="container" style="padding-bottom: 200px" id="inputArea">
                <label>Name:
                    <input type="text" style="width: 200px;" required>
                </label>
                <div style="margin-top: 30px">
                    <button id="determine" type="submit">确定</button>
                    <button id="delete" type="reset">删除</button>
                </div>
            </div>
        </td>
        <td style="width: 20%;background-color: #FFFFFF" rowspan="6" valign="top" align="center">
            <ul id="navigate">
                <li position="#inputArea">1.输入区域</li>
                <li position="#searchDiv">2.搜索标签</li>
                <li position="#tableListView">3.列表</li>
                <li position="#aButton">4.链接集合</li>
                <li position="#pager">5.分页</li>
            </ul>
            <div style="position: fixed; top: 60%; right: 80px;">
                <button id="save" type="submit">保存</button>
                <button id="cancel" type="reset">取消</button>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="container" style="padding-bottom: 200px" id="searchDiv">
                <select name="speed" id="speed">
                    <option>Slower</option>
                    <option>Slow</option>
                    <option>Medium</option>
                    <option>Fast</option>
                    <option>Faster</option>
                </select>

                <button id="search">搜索</button>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="container" style="padding-bottom: 200px" id="tableListView">
                <table class="listView">
                    <thead>
                    <tr>
                        <td>列一</td>
                        <td>列二</td>
                        <td>列三</td>
                        <td>操作一</td>
                        <td>操作二</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>test</td>
                        <td><a class="embark" href="http://www.baidu.com">上船</a></td>
                        <td><a class="disembark" href="http://www.baidu.com">下船</a></td>
                        <td>
                            <button id="shippingCertificate" class="warn">
                                文件证书
                                <img src="img/warn.png">
                            </button>
                            <button id="techniqueFile">技术文件</button>
                            <button id="deviceList" style="margin: auto">设备清单</button>
                        </td>
                        <td>
                            <a class="detail" href="http://www.baidu.com">详情</a>
                            <a class="update" href="http://www.baidu.com">修改</a>
                            <a class="delete" href="http://www.baidu.com">删除</a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="container" style="padding-bottom: 200px" id="aButton">
                <a class="add" onclick="javascirpt:alert('新增')" href="javascript:void(0)">新增</a>
                <span class="interval"></span>
                <a class="upload" onclick="javascirpt:alert('导入')" href="javascript:void(0)">导入</a>
                <span class="interval"></span>
                <a class="download" onclick="javascirpt:alert('下载')" href="javascript:void(0)">下载</a>
                <span class="interval"></span>
                <a class="export" onclick="javascirpt:alert('导出')" href="javascript:void(0)">导出</a>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div id="pager" class="container" style="padding-bottom: 200px">
                <div class="m-style M-box11"></div>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="container" style="padding-bottom: 200px">
                <table class="crewListView">
                    <thead>
                    <tr>
                        <td rowspan="2"></td>
                        <td colspan="6">
                            在船人员（10）
                            <button id="addEmbarkPerson" style="float: right; right: 15px">+ 上船人</button>
                        </td>
                        <td colspan="4">
                            上船计划
                            <button id="addPlanSuccessor" style="float: right; right: 15px">+ 计划接班人</button>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 10%">姓名</td>
                        <td style="width: 13%">已在船天数</td>
                        <td style="width: 10%">计划下船时间</td>
                        <td style="width: 10%">计划下船港</td>
                        <td style="width: 7%">备注</td>
                        <td style="width: 7%">操作</td>
                        <td style="width: 8%">姓名</td>
                        <td style="width: 11%">计划上船时间</td>
                        <td style="width: 9%">计划上船港</td>
                        <td style="width: 7%">操作</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>船长</td>
                        <td>王老五</td>
                        <td>
                            150
                            <span class="noteTextView">17-12-01大连港上</span>
                        </td>
                        <td>18-09-30</td>
                        <td>天津</td>
                        <td></td>
                        <td>
                            <a class="disembark" href="http://www.baidu.com">下船</a>
                            <a class="update" href="http://www.baidu.com">修改</a>
                        </td>
                        <td colspan="4" class="noSuccessorTextView">尚无人接班</td>
                    </tr>
                    <tr>
                        <td>副手</td>
                        <td colspan="6" class="noCrewTextView">尚无人上船</td>
                        <td>张三</td>
                        <td>18-10-01</td>
                        <td>天津</td>
                        <td>
                            <a class="embark" href="http://www.baidu.com">上船</a>
                            <a class="update" href="http://www.baidu.com">修改</a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </td>
    </tr>
</table>

</body>
</html>