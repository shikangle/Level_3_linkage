/// <reference path="jquery-1.10.2.min.js" />
var aProvince = ["河北省", "山西省", "湖北省","陕西省"];
var aCity = [["石家庄市", "张家口市", "承德市", "秦皇岛市"], ["太原市", "朔州市", "大同市", "阳泉市"], ["武汉市", "孝感市", "宜昌市", "襄阳市"],["西安市","咸阳市","延安市","铜川市"]];
var aCountry = [[["无极县", "赵县", "栾城县"], ["沽源县", "尚义县", "阳原县"], ["平泉县", "滦平县", "隆化县"], ["抚宁县", "卢龙县", "昌黎县"]],
[["清徐县", "阳曲县", "娄烦县"], ["山阴县", "应县", "右玉县"], ["左云县", "阳高县", "天镇县"], ["盂县", "平定县", "矿区"]], [["武昌区", "洪山区", "东湖新区"], ["云梦县", "大悟县", "应城市"], ["秭归县", "远安县", "枝江市"], ["枣阳市", "老河口市", "谷城县"]],[["鄠邑区","长安区","新城区","雁塔区"],["秦都区","杨凌区","潍城区"],["宝塔区","延长县","子长县","安塞县"],["王益区","印台区","耀州区","宜君县"]]];
var num1 = 0;
var num2 = 0;
$(function () {
    for (var i = 0; i < aProvince.length; i++) {//遍历出所有的省
        $("#selProvince").append("<option>" + aProvince[i] + "</option>");//追加省
    }


    $("#selProvince").change(function () {//点击省的时候 触发
         $("#selCity").children("option").not(":eq(0)").remove();//清空
        $("#selCounty").children("option").not(":eq(0)").remove();//清空 避免累加
        num1 = parseInt($(this).children("option:selected").index());//获取到当前用户选中的option的索引
        if (num1 > 0) {
            var ac = aCity[num1 - 1];//去掉请选择
            for (var ii = 0; ii < ac.length; ii++) {//循环遍历出市
                $("#selCity").append("<option>" + ac[ii] + "</option>");//追加市
            }
        }
    });
    $("#selCity").change(function () {//点击市 触发
        $("#selCounty").children("option").not(":eq(0)").remove();//清空
        num2 = parseInt($(this).children("option:selected").index());//获取到用户点击的option
        if (num2 > 0) {
            var ac = aCountry[num1 - 1][num2 - 1];//去掉请选择
            for (var i = 0; i < ac.length; i++) {
                $("#selCounty").append("<option>" + ac[i] + "</option>");//遍历出县
            }
        }
		
    });
	
});