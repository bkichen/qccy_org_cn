document.writeln("	<form name=\"frmSy\" action=\"http://www.bjchy.gov.cn/search/indexdep.jsp\" target=\"_blank\" method=\"post\" style=\"display:none;\">");
document.writeln("		<input type=\"hidden\" name=\"cid\" id=\"cid\" value=\"\" />");
document.writeln("		<input type=\"hidden\" name=\"dept\" id=\"dept\" value=\"\" />");
document.writeln("		");
document.writeln("	</form>");


function tijiaolanmuSY(depid, ncolumnid){
	//alert("1");
	var frmSy = document.frmSy;
	document.getElementById("cid").value = ncolumnid;
	document.getElementById("dept").value = depid;
	
	frmSy.submit();
}

//公共脚本文件 main.js
function addEvent(obj,evtType,func,cap){
    cap=cap||false;
	if(obj.addEventListener){
	    obj.addEventListener(evtType,func,cap);
		return true;
	}else if(obj.attachEvent){
        if(cap){
	        obj.setCapture();
	        return true;
	    }else{
		    return obj.attachEvent("on" + evtType,func);
		}
	}else{
		return false;
    }
}
function getPageScroll(){
    var xScroll,yScroll;
	if (self.pageXOffset) {
		xScroll = self.pageXOffset;
	} else if (document.documentElement && document.documentElement.scrollLeft){
		xScroll = document.documentElement.scrollLeft;
	} else if (document.body) {
		xScroll = document.body.scrollLeft;
	}
	if (self.pageYOffset) {
		yScroll = self.pageYOffset;
	} else if (document.documentElement && document.documentElement.scrollTop){
		yScroll = document.documentElement.scrollTop;
	} else if (document.body) {
		yScroll = document.body.scrollTop;
	}
	arrayPageScroll = new Array(xScroll,yScroll);
	return arrayPageScroll;
}
function GetPageSize(){
    var xScroll, yScroll;
    if (window.innerHeight && window.scrollMaxY) {	
        xScroll = document.body.scrollWidth;
        yScroll = window.innerHeight + window.scrollMaxY;
    } else if (document.body.scrollHeight > document.body.offsetHeight){
        xScroll = document.body.scrollWidth;
        yScroll = document.body.scrollHeight;
    } else {
        xScroll = document.body.offsetWidth;
        yScroll = document.body.offsetHeight;
    }
    var windowWidth, windowHeight;
    if (self.innerHeight) {
        windowWidth = self.innerWidth;
        windowHeight = self.innerHeight;
    } else if (document.documentElement && document.documentElement.clientHeight) {
        windowWidth = document.documentElement.clientWidth;
        windowHeight = document.documentElement.clientHeight;
    } else if (document.body) {
        windowWidth = document.body.clientWidth;
        windowHeight = document.body.clientHeight;
    }	
    if(yScroll < windowHeight){
        pageHeight = windowHeight;
    } else { 
        pageHeight = yScroll;
    }
    if(xScroll < windowWidth){	
        pageWidth = windowWidth;
    } else {
        pageWidth = xScroll;
    }
    arrayPageSize = new Array(pageWidth,pageHeight,windowWidth,windowHeight) 
    return arrayPageSize;
}
//广告脚本文件 AdMove.js
/*
////////////例子
////////////<div id="Div2">
////////////    ***** content ******
////////////</div>
////////////var ad=new AdMove("Div2");
////////////ad.Run();
*/
////////////////////////////////////////////////////////
var AdMoveConfig=new Object();
AdMoveConfig.IsInitialized=false;
AdMoveConfig.ScrollX=0;
AdMoveConfig.ScrollY=0;
AdMoveConfig.MoveWidth=0;
AdMoveConfig.MoveHeight=0;
AdMoveConfig.Resize=function(){
    var winsize=GetPageSize();
    AdMoveConfig.MoveWidth=winsize[2];
    AdMoveConfig.MoveHeight=winsize[3];
    AdMoveConfig.Scroll();
}
AdMoveConfig.Scroll=function(){
    var winscroll=getPageScroll();
    AdMoveConfig.ScrollX=winscroll[0];
    AdMoveConfig.ScrollY=winscroll[1];
}
addEvent(window,"resize",AdMoveConfig.Resize);
addEvent(window,"scroll",AdMoveConfig.Scroll);
function AdMove(id){
    if(!AdMoveConfig.IsInitialized){
        AdMoveConfig.Resize();
        AdMoveConfig.IsInitialized=true;
    }
    var obj=document.getElementById(id);
    obj.style.position="absolute";
    var W=AdMoveConfig.MoveWidth-obj.offsetWidth;
    var H=AdMoveConfig.MoveHeight-obj.offsetHeight;
    var x = W*Math.random(),y = H*Math.random();
    var rad=(Math.random()+1)*Math.PI/6;
    var kx=Math.sin(rad),ky=Math.cos(rad);
    var dirx = (Math.random()<0.5?1:-1), diry = (Math.random()<0.5?1:-1);
    var step = 1;
    var interval;
    this.SetLocation=function(vx,vy){x=vx;y=vy;}
    this.SetDirection=function(vx,vy){dirx=vx;diry=vy;}
    obj.CustomMethod=function(){
        obj.style.left = (x + AdMoveConfig.ScrollX) + "px";
        obj.style.top = (y + AdMoveConfig.ScrollY) + "px";
        rad=(Math.random()+1)*Math.PI/6;
        W=AdMoveConfig.MoveWidth-obj.offsetWidth;
        H=AdMoveConfig.MoveHeight-obj.offsetHeight;
        x = x + step*kx*dirx;
        if (x < 0){dirx = 1;x = 0;kx=Math.sin(rad);ky=Math.cos(rad);} 
        if (x > W){dirx = -1;x = W;kx=Math.sin(rad);ky=Math.cos(rad);}
        y = y + step*ky*diry;
        if (y < 0){diry = 1;y = 0;kx=Math.sin(rad);ky=Math.cos(rad);} 
        if (y > H){diry = -1;y = H;kx=Math.sin(rad);ky=Math.cos(rad);}
    }
    this.Run=function(){
        var delay = 10;
        interval=setInterval(obj.CustomMethod,delay);
        obj.onmouseover=function(){clearInterval(interval);}
        obj.onmouseout=function(){interval=setInterval(obj.CustomMethod, delay);}
    }
}
function close_left22(){
    document.getElementById("gg2").style.display='none';
}
//document.writeln("<div id='gg2' style='z-index: 9999; left:0; width:240px; height:148px;position: absolute;top:0;'>");
////document.writeln("<a href=\"/zxhd/zyhy/three\" target=\"_blank\"><img src=\"\/images\/20190103.jpg\" border=\"0\" usemap=\"#pf\"><\/a>");
//document.writeln("<a href=\"https://www.xuexi.cn\" target=\"_blank\"><img src=\"\/resource\/images\/2019315.jpg\" border=\"0\" usemap=\"#pf\"><\/a>");
//document.writeln("<a href=\"javascript:close_left22();\"\" title=\"关闭飘图\" style=\"display:block; background:#ccc;float:right; width: 12px; height:12px; line-height:12px;\">×<\/a>");
//document.writeln("<\/div>");


//var ad1=new AdMove("gg1");
//ad1.Run();
var ad1=new AdMove("gg2");
ad1.Run();
var ad1=new AdMove("gg2");


//ad1.Run();