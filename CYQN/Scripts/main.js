$(document).ready(function(){
	// 导航
	$(".nav-list .lists").children("a:eq(0)").click(function(){
		
		$(".nav-list .tiao").children("img:eq(0)").css("display","block").siblings().css("display","none");
	})
	$(".nav-list .lists").children("a:eq(1)").click(function(){
		$(".nav-list .tiao").children("img:eq(1)").css("display","block").siblings().css("display","none");
	})
	$(".nav-list .lists").children("a:eq(2)").click(function(){
		$(".nav-list .tiao").children("img:eq(2)").css("display","block").siblings().css("display","none");
	})
	$(".nav-list .lists").children("a:eq(3)").click(function(){
		$(".nav-list .tiao").children("img:eq(3)").css("display","block").siblings().css("display","none");
	});
	// 返回顶部
	$(window).scroll(function(){
		if($("body").scrollTop()>=200 || document.documentElement.scrollTop>=200){
			$("#gotop").css({"display":"block"});
			}else{
				$("#gotop").css({"display":"none"});
				}
			})
		$("#gotop").click(function(){
				$("body,html").animate({"scrollTop":"0px"},1000);
			})
})