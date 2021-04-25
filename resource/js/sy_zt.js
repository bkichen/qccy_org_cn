// JavaScript Document
//国务院信息
$(function(){
	$.ajax({
		url :'http://www.gov.cn/pushinfo/v150203/pushinfo.jsonp',
		dataType : "jsonp",
		scriptCharset:'UTF-8', 
		jsonp : "pushInfoJsonpCallBack",
		jsonpCallback:"pushInfoJsonpCallBack",
		success : function(datag) {
			$.each(datag,function(i,json){
				if (i >= 6){return false;}
				var gtitle = json.title;
				if(gtitle.length > 10){
					gtitle = gtitle.substring(0, 10) + "...";
				}
				$(".gwyxx").append("<li><span>["+json.pubDate+"]</span><a target='_blank' title='"+json.title+"' href='"+json.link+"'>"+gtitle+"</a></li>")
			});
			//yj();
		},
		 error:function(){
			//alert("错误");
		}
	});
});

document.writeln("<style type=\"text\/css\">");
document.writeln("#scroll-tabs { width: 1190px; border: 1px solid #B0BEC7; overflow: hidden; margin-top: 0px; margin-right: auto; margin-bottom: 0px; margin-left: auto; height:80px; }");
document.writeln("#s-tabs { width: 100%; height: 119px;  overflow: hidden; margin-top: 0; margin-right: auto; margin-bottom: 0; margin-left: auto; }");
document.writeln("#s-left img, #s-right img { float: left; width: 17px; height:33px; overflow: hidden; margin-top:20px;}");
document.writeln("#s-right { float: right; }");
document.writeln("#s-left a:link, #s-left a:visited, #s-left a:hover, #s-right a:link, #s-right a:visited, #s-right a:hover { font-size: 28px; line-height:80px; width: 23px; height: 80px; overflow: hidden; float: left; text-decoration: none; text-align: center; background-color: #fff; font-weight: bold; color: #F60; }");
document.writeln("#s-tabs-bd { position: relative; z-index: 2; float: left; width: 1130px; display: inline; height: 80px; overflow: hidden;  margin-top: 0; margin-right: 1px; margin-bottom: 0; margin-left: 1px;  margin-left: 5px;}");
document.writeln("#s-tabs-bd ul { position: absolute; z-index: 1; left: 0; top: 0; width: 1128px; height: 100px; overflow: hidden; }");
document.writeln("#s-tabs-bd li { float: left; width: 228px; font-family: Georgia, sans-serif; font-weight: bold; height: 119px; overflow: hidden;padding-right:1px; }");
document.writeln("<\/style>");

document.writeln("<div id=\"zt\">");
document.writeln("  <div id=\"s-tabs\" style=\"height:80px;\">");
document.writeln("    <div id=\"s-left\"><a href=\"#left\"><img src=\'\/resource\/images\/zt_left.jpg\' width=\"17px\" height=\"33px;\"><\/a><\/div>");
document.writeln("    <div id=\"s-tabs-bd\">");
document.writeln("      <ul id=\"scroller\">");

/*
   清明祭祀2021
*/
//document.writeln("        <li><a href=\"http://yinglie.chinamartyrs.gov.cn/21qm/#/home\" target=\"_blank\"><img src=\"\/resource\/images\/qingming2021.jpg\"><\/a><\/li>");

document.writeln("        <li><a href=\"\/dynamic/newspe/chyqmjyr/chyqmjyr2021.html\" target=\"_blank\"><img src=\"\/2019chy/resource2019\/images\/2021415.jpg\"><\/a><\/li>");


//2021我向总理说句话
document.writeln("        <li><a href=\"https://liuyan.www.gov.cn/2021wxzlsjh/bmdf.html?q=bj\" target=\"_blank\"><img src=\"\/resource\/images\/20201223.jpg\"><\/a><\/li>");

//关于向广大人民群众征求《北京市朝阳区2021年重要民生实事项目（征求意见稿）》意见的公开信-2020.12.31撤销
//document.writeln("        <li><a href=\"http://www.bjchy.gov.cn/ztzl/bmzl/8a24fe837696c4560176978b3a73007b.html\" target=\"_blank\"><img src=\"\/resource\/images\/20201225.jpg\"><\/a><\/li>");

//document.writeln("        <li><a href=\"http://www.bjchy.gov.cn/dynamic/newspe/yiqsy\" target=\"_blank\"><img src=\"\/resource\/images\/20200212.jpg\"><\/a><\/li>");
/*十四五规划*/
//document.writeln("        <li><a href=\"http://www.bjchy.gov.cn/survey/html/survey8a24fe8372b9ff4e0172bbed6ba70235.htm\" target=\"_blank\"><img src=\"\/resource\/images\/145guihua.png\"><\/a><\/li>");

/*八一专题*/
//document.writeln("        <li><a href=\"http://www.chinalink.tv/content/58210.html?fuid=0\" target=\"_blank\"><img src=\"\/resource\/images\/bayi.jpg\"><\/a><\/li>");
//document.writeln("        <li><a href=\"\/dynamic/newspe/chyqmjyr/chyqmjyr.html\" target=\"_blank\"><img src=\"\/2019chy\/resource2019\/images\/20200414.jpg\"><\/a><\/li>");
//document.writeln("        <li><a href=\"http://www.chinamartyrs.gov.cn/2020qm\" target=\"_blank\"><img src=\"\/resource\/images\/qingming.jpg\"><\/a><\/li>");
//document.writeln("        <li><a href=\"http://jtw.beijing.gov.cn//bmfw/tcjfcx\" target=\"_blank\"><img src=\"\/resource\/images\/2019tc.jpg\"><\/a><\/li>");
//document.writeln("        <li><a href=\"http://www.bjchy.gov.cn/affair/announcement/8a24fe83689ba08601689c73ec1c00f6.html\" target=\"_blank\"><img src=\"\/resource\/images\/20190130.jpg\"><\/a><\/li>");
//document.writeln("        <li><a href=\"http:\/\/zhengwu.beijing.gov.cn/zwzt/2019lh\" target=\"_blank\"><img src=\"\/resource\/images\/20190111.jpg\"><\/a><\/li>");
//document.writeln("        <li><a href=\"http:\/\/zhengwu.beijing.gov.cn\/zwzt\/dcjl\" target=\"_blank\"><img src=\"\/resource\/images\/dcjl.png\"><\/a><\/li>");
//document.writeln("        <li><a href=\"http://www.bjchy.gov.cn/dynamic/notice/8a24fe836dd16f99016dd2aed4fe0144.html\" target=\"_blank\"><img src=\"\/resource\/images\/2020minshengshixiang.png\"><\/a><\/li>");
/*拖欠民营企业*/
//document.writeln("        <li><a href=\'http://www.bjchy.gov.cn/dynamic/newspe/tqmyqy\' target=\"_blank\"><img src=\"http://www.bjchy.gov.cn\/resource\/images\/0221.jpg\"><\/a><\/li>");



/*十四五规划建言*/
//document.writeln("        <li><a href=\"http://www.bjchy.gov.cn/ztzl/bmzl/8a24fe8374d3905b0174d7c530260247.html\" target=\"_blank\"><img src=\"http://www.bjchy.gov.cn\/resource\/images\/十四五规划建言.png\"><\/a><\/li>");

/*朝阳区“十四五”规划和2035年远景目标*/
document.writeln("        <li><a href=\"http://www.bjchy.gov.cn/affair/file/zhcfb/8a24fe8377dd20e7017843fdc1e1469f.html\" target=\"_blank\"><img src=\"\/resource\/images\/十四五规划2023.jpg\"><\/a><\/li>");


/*2021征集公开信*/
//document.writeln("        <li><a href=\'\/affair/announcement/8a24fe83748ea202017491195d3f0288.html\' target=\"_blank\"><img src=\"http://www.bjchy.gov.cn\/resource\/images\/gkzjx2021.png\"><\/a><\/li>");

/*信用朝阳*/
document.writeln("        <li><a href=\'\/xychy\' target=\"_blank\"><img src=\"http://www.bjchy.gov.cn\/resource\/images\/20191225.png\"><\/a><\/li>");


/*优化营商环境进行时*/
document.writeln("        <li><a href=\"https://liuyan.www.gov.cn/yhyshjjxs/index.htm\" target=\"_blank\"><img src=\"http://www.bjchy.gov.cn\/resource\/images\/20201022.jpg\"><\/a><\/li>");

/*政府网站年度工作报表*/
document.writeln("        <li><a href=\"http://www.bjchy.gov.cn/ztzl/bmzl/ndbgnew\" target=\"_blank\"><img src=\"http://www.bjchy.gov.cn\/resource\/images\/2020120.jpg\"><\/a><\/li>");

/*国务院互联网+督察 
  http://www.gov.cn/hudong/ducha/2020-06/01/content_5516473.htm（2021-01-17修改链接）
  */
document.writeln("        <li><a href=\"http://www.gov.cn/hudong/ducha/2021-01/26/content_5582430.htm\" target=\"_blank\"><img src=\"\/resource\/images\/wwwducha2.jpg\"><\/a><\/li>");


/*精准支持重点行业中小微企业*/
document.writeln("        <li><a href=\'\/dynamic/newspe/jzzcxwqy/\' target=\"_blank\"><img src=\"http://www.bjchy.gov.cn\/resource/images/sy_zt_jzwxqy.jpg\"><\/a><\/li>");

/*督察督办在北京*/
document.writeln("        <li><a href=\"http://www.bjchy.gov.cn/ztzl/bmzl/hbducha\" target=\"_blank\"><img src=\"http://www.bjchy.gov.cn\/resource\/images\/ducha.jpg\"><\/a><\/li>");


/*房屋拆迁*/
document.writeln("        <li><a href=\"/affair/zhengshou\" target=\"_blank\"><img src=\"\/resource\/images\/fangwuchaiqian.jpg\"><\/a><\/li>");

/*民政的专题*/
//document.writeln("        <li><a href=\"http://www.bjchy.gov.cn/ztzl/bmzl/chycsy\" target=\"_blank\"><img src=\"\/resource\/images\/2020931.jpg\"><\/a><\/li>");


/*新冠的链接*/
//document.writeln("        <li><a href=\"https://manage.securecity.360.cn/cy/hs/\" target=\"_blank\"><img src=\"\/resource\/images\/hesuan.jpg\"><\/a><\/li>");
document.writeln("        <li><a href=\"\/2020hsjc\/hssearch.html\" target=\"_blank\"><img src=\"\/resource\/images\/hesuan.jpg\"><\/a><\/li>");



/*7普专题*/
document.writeln("        <li><a href=\'\/ztzl/bmzl/pcdqc\' target=\"_blank\"><img src=\"\/resource/images/20200701.jpg\"><\/a><\/li>");

/*5.12全国防灾减灾日*/
document.writeln("        <li><a href=\"\/512chyfzjz/index.html\" target=\"_blank\"><img src=\"\/2019chy\/resource2019\/images\/2020511.jpg\"><\/a><\/li>");


//document.writeln("        <li><a href=\"https://liuyan.www.gov.cn/2020wxzlsjh/bmdf.html?q=bj\" target=\"_blank\"><img src=\"\/resource\/images\/20191210.jpg\"><\/a><\/li>");

/*朝阳创卫，20210222注释*/
//document.writeln("        <li><a href=\'http:\/\/cycw.bjchy.gov.cn\/cycw-module-gateway\' target=\"_blank\"><img src=\"\/resource\/images\/chycw.jpg\"><\/a><\/li>");

//document.writeln("        <li><a href=\"https://www.xuexi.cn\" target=\"_blank\"><img src=\"\/resource\/images\/2019315.jpg\"><\/a><\/li>");
/*
 //十九大
document.writeln("        <li><a href=\'\/dynamic\/newspe\/shjdjs\' target=\"_blank\"><img src=\"\/resource\/images\/sjd0522.jpg\"><\/a><\/li>");
*/
//扫黑除恶
document.writeln("        <li><a href=\'\/dynamic\/newspe\/shce\' target=\"_blank\"><img src=\"\/resource\/images\/shce.jpg\"><\/a><\/li>");
document.writeln("        <li><a href=\'\/dynamic\/newspe\/fgfzl\' target=\"_blank\"><img src=\"\/resource\/images\/zt\/fgf.jpg\"><\/a><\/li>");
//document.writeln("        <li><a href=\"/ztzl/bmzl/xcxf\" target=\"_blank\"><img src=\"\/resource\/images\/181205.jpg\"><\/a><\/li>");
document.writeln("        <li><a href=\"\/dynamic\/newspe\/yhys\" target=\"_blank\"><img src=\"\/resource\/images\/yhys.jpg\"><\/a><\/li>");
//document.writeln("        <li><a href=\"\/dynamic\/newspe\/ndbb\" target=\"_blank\"><img src=\"\/resource\/images\/2018bb.jpg\"><\/a><\/li>");
document.writeln("        <li><a href=\'https://tousu.www.gov.cn/dc/index.htm\' target=\"_blank\"><img src=\"\/resource\/images\/190422.jpg\"><\/a><\/li>");
document.writeln("        <li><a href=\'\/ztzl\/bmzl\/pcdscd\' target=\"_blank\"><img src=\"\/resource\/images\/20180907.jpg\"><\/a><\/li>");



//document.writeln("        <li><a href=\'\/dynamic\/newspe\/zwgksjqd\' target=\"_blank\"><img src=\"\/resource\/images\/zt\/1230.jpg\"><\/a><\/li>");
//document.writeln("        <li><a href=\"\/dynamic\/newspe\/hbdch\" target=\"_blank\"><img src=\"\/resource\/images\/2017hbzt.jpg\"><\/a><\/li>");
document.writeln("        <li><a href=\"\/dynamic\/newspe\/zfbzqxgs\/bzfsgs\" target=\"_blank\"><img src=\"\/resource\/images\/zt\/banner_zfbz.gif\"><\/a><\/li>");
//document.writeln("   <li><a href=\"http://www.bjchy.gov.cn/affair/announcement/8a24fe83666837b901667a8cc51c0095.html\" target=\"_blank\"><img src=\"\/resource\/images\/20181016.jpg\"><\/a><\/li>");
//document.writeln("        <li><a href=\'http:\/\/bj.news.163.com\/special\/chaoyang\' target=\"_blank\"><img src=\"\/resource\/images\/20180912.jpg\"><\/a><\/li>");
//document.writeln("        <li><a href=\"http:\/\/www.chystats.gov.cn\/cytjj\/dscnypc\/sy81\/index.html\" target=\"_blank\"><img src=\"\/resource\/images\/nypc.jpg\"><\/a><\/li>");
//document.writeln("        <li><a href=\'http:\/\/tjj.bjchy.gov.cn\/cytjj\/cyqdscqgjjpc5\/sy27\/index.html\' target=\"_blank\"><img src=\"\/resource\/images\/20180907.jpg\"><\/a><\/li>");
//document.writeln("        <li><a href=\"\/dynamic\/newspe\/ybly\" target=\"_blank\"><img src=\"\/resource\/images\/2018lh.jpg\"><\/a><\/li>");
//document.writeln("        <li><a href=\"\/dynamic\/newspe\/8a24fe835c0f1847015c4278a2e20535.html\" target=\"_blank\"><img src=\"\/resource\/images\/jx.jpg\"><\/a><\/li>");

document.writeln("      <\/ul>");
document.writeln("    <\/div>");
document.writeln("    <div id=\"s-right\"><a href=\"#right\"><img src=\'\/resource\/images\/zt_right.jpg\' width=\"17px\" height=\"33px;\"><\/a><\/div>");
document.writeln("  <\/div>");

document.writeln("<div class=\"clear\"><\/div>");
document.writeln("<\/div>");

