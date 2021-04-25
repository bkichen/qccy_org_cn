$(document).ready(function(){
	$(".movie-list ul").children("li:eq(0)").children("span").addClass("red");
	$(".movie-list ul").children("li").click(function(){
		$(this).children("span").addClass("red").parent("li").siblings("li").children("span").removeClass();
	})
})