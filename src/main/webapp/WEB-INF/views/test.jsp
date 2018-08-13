<%@ page pageEncoding="utf-8" %>
<html>
<head>
    <title>Title</title>
    <link rel="stylesheet" href="css/umeditor.css">
    <script src="js/jquery.js"></script>
    <script src="js/umeditor.config.js"></script>
    <script src="js/umeditor.js"></script>
    <script src="js/zh-cn.js"></script>
    <style>
        .um {
            width: 100%;
            height: 200px;
        }
    </style>
    <script type="text/javascript">

        var start = 65;

        function generate() {
            var option = String.fromCharCode(start);
            var trId = "tr_" + option;
            var tr = $('<tr id="' + trId + '">');
            var td1 = $('<td style="width: 7%">');
            td1.append('<label style="width: 100%; padding: 20px"><input type="radio" name="option"> ' + option + '</label>');
            tr.append(td1);
            var td2 = $('<td style="width: 90%">');
            td2.append($('<div id="option_' + option + '" class="um" group="option">'));
            tr.append(td2);
            var td3 = $('<td style="width: 3%">');
            if (start > 66) {
                td3.append('<img style="width: 100%" src="images/close.png" onclick="deleteThis(\'' + trId + '\')">');
            }
            tr.append(td3);
            $("#optionBody").append(tr);
            UM.getEditor('option_' + option);
            start++;
        }

        function deleteThis(trId) {
            var element = $("#" + trId);
            var currIndex = element.prevAll().length + 65;
            var nextAll = element.nextAll();
            nextAll.each(function (index) {
                var preOption = String.fromCharCode(currIndex + index);
                var thisOption = String.fromCharCode(currIndex + index + 1);
                UM.getEditor("option_" + preOption).setContent(UM.getEditor("option_" + thisOption).getContent(), false);
                if (index + 1 === nextAll.length) {
                    UM.getEditor('option_' + thisOption).destroy();
                    $(this).remove();
                }
            });
            if (nextAll.length === 0) {
                UM.getEditor('option_' + String.fromCharCode(currIndex)).destroy();
                element.remove();
            }
            start--;
        }

        $(function () {
            UM.getEditor('stem');
            UM.getEditor('analysis');
            generate();
            generate();
        });

        function save() {
            console.log("题干");
            console.log(">>>>>    " + UM.getEditor("stem").getContent());
            console.log("选项");
            $("div[group='option']").each(function (index) {
                var option = String.fromCharCode(65 + index);
                console.log(">>>>>    " + $("#tr_" + option).find("td").eq(0).text());
                console.log(">>>>>    " + UM.getEditor("option_" + option).getContent());
            });
            console.log("解析");
            console.log(">>>>>    " + UM.getEditor("analysis").getContent());
            alert("已输出到控制台");
        }
    </script>
</head>
<body>

<table style=" border-spacing: 20px; width: 100%">
    <colgroup>
        <col width="80px">
    </colgroup>
    <tbody>
    <tr>
        <td align="right">*试题类型:</td>
        <td>
            <label><input type="radio" name="questionType" checked>单选题</label>
            <label><input type="radio" name="questionType">多选题</label>
            <label><input type="radio" name="questionType">判断题</label>
        </td>
    </tr>
    <tr>
        <td align="right" style="vertical-align: top">*题干:</td>
        <td>
            <div id="stem" class="um"></div>
        </td>
    </tr>
    <tr>
        <td align="right" style="vertical-align: top">*选项:</td>
        <td>
            <div style="border: 1px solid #000000; position: relative">
                <span style="position: absolute; top: 10px; left: 20px;">正确答案</span>
                <table style="width: 100%; border-spacing: 20px 0">
                    <tbody id="optionBody"></tbody>
                </table>
                <button onclick="generate()" style="margin: 20px">添加选项</button>
            </div>
        </td>
    </tr>
    <tr>
        <td align="right" style="vertical-align: top">*解析:</td>
        <td>
            <div id="analysis" class="um"></div>
        </td>
    </tr>
    <tr>
        <td align="right">*知识点:</td>
        <td>
            <p onclick="alert('添加知识点')">点击添加知识点</p>
        </td>
    </tr>
    <tr>
        <td align="right">*难度:</td>
        <td>
            <label><input type="radio" name="difficult" checked>容易</label>
            <label><input type="radio" name="difficult">较易</label>
            <label><input type="radio" name="difficult">中等</label>
            <label><input type="radio" name="difficult">较难</label>
            <label><input type="radio" name="difficult">困难</label>
        </td>
    </tr>
    <tr>
        <td align="right">考试类型:</td>
        <td>
            <select>
                <option>请选择考试类型</option>
                <option>随堂测验</option>
                <option>单元测试</option>
                <option>专题练习</option>
                <option>月考</option>
                <option>期中考试</option>
                <option>期末考试</option>
                <option>会考</option>
                <option>高考模拟</option>
                <option>高考真题</option>
            </select>
        </td>
    </tr>
    <tr>
        <td align="right">地区:</td>
        <td>
            <select>
                <option>请选择地区</option>
            </select>
        </td>
    </tr>
    <tr>
        <td align="right">出题年份:</td>
        <td>
            <select>
                <option>请选择出题年份</option>
                <option>2018</option>
                <option>2017</option>
                <option>2016</option>
                <option>2015</option>
                <option>更早以前</option>
            </select>
        </td>
    </tr>
    <tr>
        <td align="right">适用年级:</td>
        <td>
            <select>
                <option>请选择年级</option>
                <option>七年级</option>
                <option>八年级</option>
                <option>九年级</option>
            </select>
        </td>
    </tr>
    </tbody>
</table>
<div style="padding-bottom: 20px">
    <button id="back" style="margin-left: 20px; padding: 5px 10px;">返回
    </button>
    <button id="save" onclick="save()" style="float: right; margin-right: 20px; padding: 5px 10px;">保存</button>
</div>

</body>
</html>