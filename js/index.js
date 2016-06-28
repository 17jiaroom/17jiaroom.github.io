$(function(){
	$(".baidubtn").click(function(){
		var txt=$("#search").val();
		window.open("https://www.baidu.com/s?wd="+txt);
		$("#search").val("");
	});
})