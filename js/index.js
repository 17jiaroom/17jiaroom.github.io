$(function(){
	//百度跳转
	$(".baidubtn").click(function(){
		var txt=$("#search").val();
		window.open("https://www.baidu.com/s?wd="+txt);
		$("#search").val("");
	});
 	//banner效果
 	$(".banner").hover(function(){
 		$(".banner_box").fadeIn(200);
 	},function(){
 		$(".banner_box").fadeOut(200);
 	})
  	//搜索框焦点效果
  		$("#search").focus(function(){
  			$("#search").css({"background-color":"#fff"});
  		});
  		$("#search").blur(function(){
  			$("#search").css({"background-color":"rgba(255,255,255,0.8)"});
  		});

 	//轮播右边图片信息展示效果
	$(".maininfo_imgbox").hover(function(){
        $(this).find("img").animate({width:"105%",height:"105%"},500);
        $(this).find("span").animate({width:"100%",height:"40px"},200);
    },function(){
       $(this).find("img").animate({width:"100%",height:"100%"},500);
       $(this).find("span").animate({width:"100%",height:"30px"},200);
    })
  //section部分阅读全文效果
  var $article_h3=$(".article h3");
  $article_h3.hover(function(){
    $(this).animate({right:"20px"});
  },function(){
    $(this).animate({right:"0px"});
  });










});

