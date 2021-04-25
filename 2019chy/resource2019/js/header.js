// JavaScript Document
$(document).ready(function(){
	//右下角的新冠病毒弹框start
	$(".index_btm_tips").css('display','block'); 
	$(".index_btm_tips h3 a").html("").attr("href","http://www.bjchy.gov.cn/2020hsjc/hssearch.html");
	$(".index_tips_cont").html("<a href='http://www.bjchy.gov.cn/2020hsjc/hssearch.html' target='_blank'><span style='color:#c00; font-size:25px;'>新冠病毒核酸检测<br/>结果查询</span></a>");     
	//右下角的新冠病毒弹框end
	
	$("a").click(function(event) {
		//alert("11");
		$.ajax({
			cache: false,
			type: "post",
			url: "http://www.bjchy.gov.cn/robot/traffic.traffic.do?m=traffic",
			data:{"link":this.href},     
			async: true,
			error: function(request) {
				//alert("22");
			},
			success: function(data) {
				//alert("ok");
			}
		});
	});
});

function yj(){
    $.ajax({
		url : 'http://www.beijing.gov.cn/shouye/hsyj/pushAlarm_9100.jsonp',
		dataType : "jsonp",
		scriptCharset:'gb2312',
		jsonp : "pushInfoJsonpCallBack",
		jsonpCallback:"pushInfoJsonpCallBack",
		success : function(data) {
			$(".index_btm_tips").css('display','none'); 
			if(data.length<1){
				$("#hsyjxx").css('display','none'); 
			}else{
				$.each(data,function(i,json){
					$("#hsyjxx").append('<ul style="color:#000000; font-size:16px; font-weight:bold; padding-left:10px; text-align:center; padding-bottom:10px;"><a style="color:#000000;" href="'+json.link+'" target="_blank">'+json.title+'</a></ul>');
					$("#hsyjxx").append('<ul class="content" style="float:left; padding-left:10px;line-height:32px; padding-top:18px; font-size:16px;"><a href="'+json.link+'" target="_blank">'+json.content+'</a></ul>');
					$("#hsyjxx").append('<ul class="gb"><img src="http://www.beijing.gov.cn/images/wza2010/index/hsyjxx_gb_20150415.jpg" width="18" height="55" title="关闭红色预警信息" alt="关闭红色预警信息" class="close" ></ul>');
					$("#hsyjxx").find(".close").bind("click", function (){
						$("#hsyjxx").css('display','none'); 
					});
					
				});
				$(".index_btm_tips").css('display','block'); 
				$.each(data,function(i,json){
					$(".index_btm_tips h3 a").html(json.title).attr("href",json.link);
					$(".index_tips_cont").html(json.content.substring(0,94)+"...<a href="+json.link+" target='_blank'>[详细]</a>");     
				})
			}
		},
		 error:function(){
			   alert('fail');
			   //$("#hsyjxx").css('display','none'); 
		}
	});
//红色预警信息关闭
}



//引入无障碍js
document.write("<script defer  async type=\'text/javascript\' src=\'http://api.govwza.cn/cniil/assist.js?sid=9685&pos=left&bar=1\'></script>");
document.writeln("<div class=\'g_head_box\'>");
document.writeln("	<div class=\'w1200\'>");
document.writeln("	<div class=\'top_qw\'><font>区委</font><a href=\'http://chyrd.bjchy.gov.cn\' target=\'_blank\'>区人大</a><a href=\'http://www.bjchy.gov.cn/\' target=\'_blank\'>区政府</a><a href=\'http://chyzx.bjchy.gov.cn\' target=\'_blank\'>区政协</a></div>");
document.writeln("		</div>");
document.writeln("		<div class=\'clear\'></div>");
document.writeln("   <div class=\'m_head\'>  	");
document.writeln("    <div class=\'m_logo\'>");
document.writeln("     <a href=\'/\' target=\'_blank\'><img src=\'http://www.bjchy.gov.cn/2019chy/resource2019/images/2020logo.png\' alt=\'北京市朝阳区人民政府\'></a>");
document.writeln("    </div>");
document.writeln("            <div class=\'search m_search\'>");
document.writeln("<dl class=\'sskmbs\'><dd class=\'sl1\'>搜本网</dd>");
document.writeln("    <dt class=\'sl2\'>一网通查</dt>");
document.writeln("</dl>");
document.writeln("	<input class=\'\' type=\'hidden\' name=\'sousuoform\' id=\'sousuoform\' value=\'1\'>");
document.writeln("<form name=\'searchForm\' class=\'form0\' action=\'http://www.bjchy.gov.cn/so/s\' onkeydown=\"if(event.keyCode==13)return false;\" method=\'get\' target=\'_blank\'>");
document.writeln("	<input class=\'\' type=\'hidden\' name=\'sousuo\' id=\'sousuo\' value=\'1\'>");

document.writeln("  <input class=\'sear fl_header\' type=\'text\' id=\'q1\' name=\'temp\' value=\"请输入关键词\" type=\"text\" autocomplete=\"off\" onfocus=\"if(this.value=='请输入关键词') {this.value='';this.focus();}\" onblur=\"if(this.value==''){this.value='请输入关键词'}\">");
document.writeln("  <input class=\'sub fl_header\' type=\'button\' value=\'\' onclick=\'checkForm();\'>");
document.writeln("</form>");
document.writeln("<form name=\'searchForm2\' action=\'http://www.beijing.gov.cn/so/s\' onkeydown=\"if(event.keyCode==13)return false;\" method=\'get\' class=\'form1 bjsss\' target=\'_blank\' >");
document.writeln("	<input class=\'\' type=\'hidden\' name=\'sousuo2\' id=\'sousuo2\' value=\'2\'>");
document.writeln("	<input type=\'hidden\' name=\'sourceCode\' value=\'1101050069\'>");
document.writeln("  <input name=\'qt\' type=\'text\' id=\'qt\' size=\'50\' value=\"请输入关键词\" type=\"text\" autocomplete=\"off\" onfocus=\"if(this.value=='请输入关键词') {this.value='';this.focus();}\" onblur=\"if(this.value==''){this.value='请输入关键词'}\">");
document.writeln("  <input type=\'button\' name=\'button\' id=\'button\' value=\'\' onclick=\'checkForm2()\'>");
document.writeln("</form>");
document.writeln("");
document.writeln("            </div>");
document.writeln("    <div class=\'m_links\'>");
document.writeln("     <div class=\'m_logo_sc\'>");
document.writeln(" <a href=\'http://www.beijing.gov.cn/\' target=\'_blank\'> ");
document.writeln(" <img src=\'http://www.bjchy.gov.cn/2019chy/resource2019/images/2020sdzc.png\' alt=\'首都之窗\'></a>");
document.writeln("     </div>");
document.writeln("     <div class=\'m-login-box\'>");
document.writeln("      <a class=\'btn-login\' id=\'cniil_wza\'  href=\'javascript:void(0)\' title=\'无障碍\'>无障碍</a>");
document.writeln("     </div>");
document.writeln("     <a class=\'u_answering\' href=\'http://chyhd.bjchy.gov.cn/cyrobot\' target=\'_blank\' title=\'智能问答\'>智能问答</a>");
document.writeln("     <div class=\'m_function\'>");
document.writeln("      <a class=\'u_mr\' onclick=\'\' href=\'http://www.beijing.gov.cn/hudong/yonghu/uSpace/myCenter\' target=\'_blank\' title=\'个人中心\'>个人中心</a>");
document.writeln("		 <a class=\'u_answering\' href=\'http://mail.bjchy.gov.cn/index.php\' target=\'_blank\' title=\'政府邮箱\'>政府邮箱</a>");
document.writeln("<!--      <div class=\'m_version_link_box\'>");
document.writeln("       <a class=\'u_icon_jt\' href=\'jhttp://mail.bjchy.gov.cn/index.php\' title=\'简体版\'>政府邮箱登录</a>");
document.writeln("       <ul class=\'m_version_link\'>");
document.writeln("        <li><a href=\'javascript:zh_tran(\'t\');\' title=\'繁体版\'>繁体</a></li>");
document.writeln("       </ul>");
document.writeln("      </div>-->");
document.writeln("     </div>");
document.writeln("    </div>");
document.writeln("   </div>");
document.writeln("  </div>");
document.writeln("	<div class=\'clear\'></div>");
document.writeln("<!--nav-->");
document.writeln("	<div class=\'nav\'>");
document.writeln("    <div class=\'w1200 appps\' style=\'position: relative;z-index: 20\'>");
document.writeln("");
document.writeln("        <ul class=\'pnav\'>");
document.writeln("            <li id=\'menu_01\' class=\'on\'><a href=\'http://www.bjchy.gov.cn/\'>首页</a></li>");
document.writeln("			<li><a href=\'http://chynews.bjchy.gov.cn/web/992/index.html\' target=\'_blank\'>新闻中心</a></li>");
document.writeln("            <li class=\'las\' id=\'menu_02\'><a href=\'http://www.bjchy.gov.cn/affair\'>政务公开</a>");
document.writeln("            <div class=\'bbg\'>");
document.writeln("                <dl>");
document.writeln("                    <dd><a href=\'http://www.bjchy.gov.cn/affair/ldzc\'>领导班子</a></dd>");
document.writeln("                    <dd><a href=\'http://www.bjchy.gov.cn/affair/govintro/index_jg.html\'>机构职能</a></dd>");
document.writeln("                    <dd><a href=\'http://www.bjchy.gov.cn/affair/announcement\'>政府公告</a></dd>");
document.writeln("                    <dd><a href=\'http://www.bjchy.gov.cn/affair/file\'>政策文件</a></dd>");
document.writeln("                    <dd><a href=\'http://www.bjchy.gov.cn/affair/ghjh\'>规划计划</a></dd>");
document.writeln("                    <dd><a href=\'http://www.bjchy.gov.cn/affair/tjxx\'>统计信息</a></dd>");
document.writeln("                    <dd><a href=\'http://www.bjchy.gov.cn/affair/caizhengsz\'>财政收支</a></dd>");
document.writeln("                    <dd><a href=\'http://www.bjchy.gov.cn/affair/zfcg/\'>政府采购</a></dd>");
document.writeln("                    <dd><a href=\'http://www.bjchy.gov.cn/affair/zdxm\'>重大项目</a></dd>");
document.writeln("                    <dd><a href=\'http://www.bjchy.gov.cn/affair/domain\'>重点领域</a></dd>");
document.writeln("                    <dd><a href=\'http://www.bjchy.gov.cn/affair/yjglnew\'>应急管理</a></dd>");
document.writeln("                    <dd><a href=\'http://www.bjchy.gov.cn/affair/civilemployed/zkzp/\'>人事信息</a></dd>");
document.writeln("                </dl>");
document.writeln("            </div>");
document.writeln("            </li>");
document.writeln("            <li><a target=\'_blank\' href=\'http://banshi.beijing.gov.cn/?&locationCode=110105000000\'>政务服务</a>");
document.writeln("            </li>");
document.writeln("            <li class=\'las\' id=\'menu_03\'><a href=\'http://www.bjchy.gov.cn/hdpt\'>政民互动</a>");
document.writeln("             <div class=\'bbg\'>");
document.writeln("                <dl>");
document.writeln("                    <dd><a href=\'http://www.bjchy.gov.cn/survey/html/surveyList.htm\' target=\'_blank\'>民意征集</a></dd>");
document.writeln("                    <dd><a href=\'http://chyhd.bjchy.gov.cn/xinxiang/\' target=\'_blank\'>区长信箱</a></dd>");
document.writeln("                    <dd><a href=\'http://chyhd.bjchy.gov.cn/zixun/index.html?colName=1；\'>我要咨询</a></dd>");
document.writeln("                    <dd><a href=\'http://chyhd.bjchy.gov.cn/zixun/index.html?colName=2\'>我要建议</a></dd>");
document.writeln("                    <dd><a href=\'http://chyhd.bjchy.gov.cn/zixun/index.html?colName=3\'>我要投诉</a></dd>");
document.writeln("					<dd><a href=\'http://chyhd.bjchy.gov.cn/zixun/index.html?colName=4\'>我要表扬</a></dd>");
document.writeln("                </dl>");
document.writeln("                </div>");
document.writeln("            </li>");
document.writeln("            <li class=\'las\' id=\'menu_04\'><a href=\'http://www.bjchy.gov.cn/msfw\'>民生服务</a>");
document.writeln("      		<div class=\'bbg\'>");
document.writeln("              	<dl>");
document.writeln("                  	<dd><a href=\'http://www.bjchy.gov.cn/msfw#jypx\'>教育培训</a></dd>");
document.writeln("                    	<dd><a href=\'http://www.bjchy.gov.cn/msfw#ldjy\'>劳动就业</a></dd>");
document.writeln("                    	<dd><a href=\'http://www.bjchy.gov.cn/msfw#shbz\'>社会保障</a></dd>");
document.writeln("                    	<dd><a href=\'http://www.bjchy.gov.cn/msfw#ylws\'>医疗卫生</a></dd>");
document.writeln("                    	<dd><a href=\'http://www.bjchy.gov.cn/msfw#hysy\'>婚姻收养</a></dd>");
document.writeln("						<dd><a href=\'http://www.bjchy.gov.cn/msfw#fcwy\'>房产物业</a></dd>");
document.writeln("						<dd><a href=\'http://www.bjchy.gov.cn/msfw#ykz\'>一刻钟服务圈</a></dd>");
document.writeln("						<dd><a href=\'http://www.bjchy.gov.cn/msfw#dtfw\'>地图服务</a></dd>");
document.writeln("                	</dl>");
document.writeln("             	</div>");
document.writeln("            </li>");
document.writeln("			<li id=\'menu_06\'><a href=\'http://www.bjchy.gov.cn/chaoyang\'>走进朝阳</a>");
document.writeln("      		<div class=\'bbg\'>");
document.writeln("              	<dl>");
document.writeln("                  	<dd><a href=\'http://www.bjchy.gov.cn/chaoyang/cygk/gkxx\'>朝阳概况</a></dd>");
document.writeln("                    	<dd><a href=\'http://www.bjchy.gov.cn/chaoyang/tsjq\'>特色街区</a></dd>");
document.writeln("                    	<dd><a href=\'http://www.bjchy.gov.cn/chaoyang/tshd\'>特色活动</a></dd>");
document.writeln("                    	<dd><a href=\'http://www.bjchy.gov.cn/chaoyang/lshwh\'>历史文化</a></dd>");
//document.writeln("                    	<dd><a href=\'http://www.bjchy.gov.cn/chaoyang/xxdj\'>休闲度假</a></dd>");
document.writeln("						<dd><a href=\'http://www.bjchy.gov.cn/chaoyang/jygy\'>郊野公园</a></dd>");
document.writeln("						<dd><a href=\'http://www.bjchy.gov.cn/chaoyang/chychy\'>创意朝阳</a></dd>");
//document.writeln("						<dd><a href=\'http://www.bjchy.gov.cn/chaoyang/whysh\'>文化艺术</a></dd>");
document.writeln("                	</dl>");
document.writeln("             	</div>");
document.writeln("            </li>");
document.writeln("			<li id=\'menu_07\'><a href=\'http://www.bjchy.gov.cn/ztzl\'>专题专栏</a></li>");

document.writeln("			<div class=\'clear\'></div>");
document.writeln("        </ul>");
document.writeln("	");
document.writeln("    </div>");
document.writeln("");
document.writeln("</div>");
document.writeln("	<div class=\'skdkb1\' id=\'erjidaohang\'><div class=\'skdkb1_box\'></div></div>  ");


$(function(){
$(".sskmbs .sl1").click(function(){
    $(".sskmbs .sl2").slideToggle();

})
$(".sskmbs .sl2").click(function(){
    var text=$(this).text();
    var text1=$(".sskmbs .sl1").text();
    $(this).text(text1);
    $(".sskmbs .sl1").text(text);
    $(".sl2").hide();
   if($(this).text()=="一网通查"){
		$(".form1").hide();
		$(".form0").show();
		document.getElementById("sousuoform").value = "1";
   }
   if($(this).text()=="搜本网"){
		$(".form1").show();
		$(".form0").hide();
		document.getElementById("sousuoform").value = "2";
   }

})



})


function qiehuan(sousuo){
	//alert(sousuo);
	document.getElementById("sousuo").value = sousuo;
}
$(document).keyup(function(event){
	var sousuoform = document.getElementById("sousuoform").value;
	if(event.keyCode ==13){
		if(sousuoform=="1"){
			checkForm();
		}else{
			checkForm2();
		}
	}
});
function checkForm(){
	var temp = searchForm.temp.value;
	var str = Math.round(Math.random()*10000);
	var sousuo = document.getElementById("sousuo").value;
	if(sousuo=="1"){
		var url='http://www.bjchy.gov.cn/so/s?qt='+encodeURIComponent(temp);
		window.open(url);
	}else{
		var url='http://www.beijing.gov.cn/so/s?sourceCode=1101050069&qt='+encodeURIComponent(temp);
		window.open(url);
	}
	_vaq.push(['trackSiteSearch', query, 'tongcha', '1']);
}

function checkForm2(){
	var temp = searchForm2.qt.value;
	var str = Math.round(Math.random()*10000);
	var sousuo = document.getElementById("sousuo2").value;
	if(sousuo=="1"){
		var url='http://www.bjchy.gov.cn/so/s?siteCode=1101050069&qt='+encodeURIComponent(temp);
		window.open(url);
	}else{
		var url='http://www.beijing.gov.cn/so/s?sourceCode=1101050069&qt='+encodeURIComponent(temp);
		window.open(url);
	}
}

function setChange(num){ 
eval("tb"+num+".style.display=''");
alltab=document.all.tags("div");
for (i=0;i<alltab.length;i++){ 
id=alltab[i].id;
if ((id!="tb"+num) && (id.substr(0,2)=="tb"))
eval(id+".style.display='none'");
};
};



var lsearchStr=location.href
if(lsearchStr.indexOf("/")>-1)document.getElementById('menu_01').className="on";

if(lsearchStr.indexOf("/affair")>-1)document.getElementById('menu_02').className="on";
if(lsearchStr.indexOf("/")>-1)document.getElementById('menu_01').className="";

if(lsearchStr.indexOf("/hdpt")>-1)document.getElementById('menu_03').className="on";
if(lsearchStr.indexOf("/")>-1)document.getElementById('menu_01').className="";

if(lsearchStr.indexOf("/msfw")>-1)document.getElementById('menu_04').className="on";
if(lsearchStr.indexOf("/")>-1)document.getElementById('menu_01').className="";

if(lsearchStr.indexOf("/chaoyang")>-1)document.getElementById('menu_06').className="on";
if(lsearchStr.indexOf("/")>-1)document.getElementById('menu_01').className="";

if(lsearchStr.indexOf("/ztzl")>-1)document.getElementById('menu_07').className="on";
if(lsearchStr.indexOf("/")>-1)document.getElementById('menu_01').className="";

//判断二级导航条两侧的颜色
if(lsearchStr.indexOf("/gsxx_xzzf")>-1)
	document.getElementById('erjidaohang').setAttribute("style", "background: #fff;");
if(lsearchStr.indexOf("/dynamic/newspe/chyqlqd")>-1)
	document.getElementById('erjidaohang').setAttribute("style", "background: #fff;");
if(lsearchStr.indexOf("/affair/xzjcssj/index_ssjygk.html")>-1)
	document.getElementById('erjidaohang').setAttribute("style", "background: #fff;");
if(lsearchStr.indexOf("/gsxx.html")>-1)
	document.getElementById('erjidaohang').setAttribute("style", "background: #fff;");
if(lsearchStr.indexOf("/dynamic/newspe/fgfzl/")>-1)
	document.getElementById('erjidaohang').setAttribute("style", "background: #fff;");
if(lsearchStr.indexOf("/dynamic/newspe/yhys/")>-1)
	document.getElementById('erjidaohang').setAttribute("style", "background: #fff;");
if(lsearchStr.indexOf("/dynamic/newspe/zwgksjqd/")>-1)
	document.getElementById('erjidaohang').setAttribute("style", "background: #fff;");
if(lsearchStr.indexOf("/dynamic/newspe/shce/")>-1)
	document.getElementById('erjidaohang').setAttribute("style", "background: #fff;");
if(lsearchStr.indexOf("/dynamic/newspe/shjdjs/")>-1)
	document.getElementById('erjidaohang').setAttribute("style", "background: #fff;");
if(lsearchStr.indexOf("/sitemap/")>-1)
	document.getElementById('erjidaohang').setAttribute("style", "background: #fff;");
if(lsearchStr.indexOf("/zxftInfoManage.do")>-1)
	document.getElementById('erjidaohang').setAttribute("style", "background: #fff;");
if(lsearchStr.indexOf("/zfxxgk")>-1)
	document.getElementById('erjidaohang').setAttribute("style", "background: #fff;");
if(lsearchStr.indexOf("/dynamic/newspe/zhengcjd")>-1)
	document.getElementById('erjidaohang').setAttribute("style", "background: #fff;");
if(lsearchStr.indexOf("/robot")>-1)
	document.getElementById('erjidaohang').setAttribute("style", "background: #fff;");


