// JavaScript Document
window.onload=function(index){
   var oBox=document.getElementById('box');
   var aOli=oBox.getElementsByTagName('ol')[0].getElementsByTagName('li');
   var oUl=oBox.getElementsByTagName('ul')[0];
   var aLi=oUl.getElementsByTagName('li');
   var oDiv=document.getElementById('chy_con');
   var aDiv=oDiv.getElementsByTagName('p');
   var now=0,i=0;
   function gotoPic(index){
	  for(i=0;i<aOli.length;i++){
		  aOli[i].className="";
		  aDiv[i].style.display="none";
	  }
	  aOli[index].className='hover';
	  aDiv[index].style.display="block";
	  var iHeight=index*aLi[0].offsetHeight;
	  startMove(oUl,-iHeight);
	  now=index;
   }
   
   var autoPlayTimer=setInterval(function (){
	  gotoPic((now+1)%aLi.length);
   }, 7000);
   
   
   for(i=0;i<aOli.length;i++){
	  aOli[i].nowIndex=i;
	  aOli[i].onmouseover=function(){
		   gotoPic(this.nowIndex);
		   clearInterval(autoPlayTimer);
	  };
	  
	  aOli[i].onmouseout=function(){
		  gotoPic(this.nowIndex);
		  autoPlayTimer=setInterval(function (){
			  gotoPic((now+1)%aLi.length);
		  }, 7000);
	  };
   }
};
function startMove(obj,iTarget){
	if(obj.timer){
		clearInterval(obj.timer);
	}
	obj.timer=setInterval(function(){doMove(obj,iTarget);},30);
}
function doMove(obj,iTarget){
	var iSpeed=0;
	if(obj.offsetTop==iTarget){
		clearInterval(obj.timer);
		obj.timer=null;
		obj.style.top=iTarget+'px';
	}else{
		iSpeed=(iTarget-obj.offsetTop)/5;
		iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
		obj.style.top=obj.offsetTop+iSpeed+'px';
	}
}