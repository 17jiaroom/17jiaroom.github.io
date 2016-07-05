$(function(){
	//百度跳转
	$(".baidubtn").click(function(){
		var txt=$("#search").val();
		window.location.href="https://www.baidu.com/s?wd="+txt;
		$("#search").val("");
	});

 	//banner效果
 	$(".banner").hover(function(){
 		$(".banner_box").fadeIn(200);
 	},function(){
 		$(".banner_box").fadeOut(200);
 	})
  	//搜索框焦点效果
 			var $search=$("#search");
			$search.focus(function(){
  			$search.css({"background-color":"#fff"});
  		});
  		$search.blur(function(){
  			$search.css({"background-color":"rgba(255,255,255,0.8)"});
  		});
			//搜索框回车事件
			$search.keydown(function(event){
				if(event.keyCode==13)
				{$(".baidubtn").trigger("click")};
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
    $(this).animate({right:"30px"});
  },function(){
    $(this).animate({right:"10px"});
  });
// 遮罩层
var mask=$("#mask");
function showmask(i){
	mask.css({width:$(document).width()+"px",height:$(document).height()+"px"});
	mask.fadeIn(1000);
	$(document).on("mousewheel DOMMouseScroll",function(event){
		event.preventDefault();
	});
	mask.click(function(){    //遮罩层点击后消失
		mask.fadeOut(1000);
		i.fadeOut(1000);
		$(document).off("mousewheel DOMMouseScroll");
	});
}
// 遮罩层注册
var $registerbox=$(".registerbox");
$("#register").click(function(){
	showmask($registerbox);
	$registerbox.css({"z-index":"110"});
	$registerbox.fadeIn(1000);
});
// 遮罩层登录
var $loginbox=$(".loginbox");
$("#login").click(function(){
	showmask($loginbox);
	$loginbox.css({"z-index":"110"});
	$loginbox.fadeIn(1000);
});

//标签cloud
var word_cloud = [
          {text: "一入基三深似海", weight:5},
          {text: "minecraft", weight: 4},
          {text: "jazz", weight: 3},
          {text: "ACG", weight: 2},
          {text: "哔哩哔哩", weight: 3},
					{text: "薛之谦", weight: 4},
					{text: "林俊杰", weight: 5},
					{text: "周杰伦", weight: 6},
					{text: "华语乐坛", weight: 5},
					{text: "七月新番", weight: 4},
					{text: "胖丁", weight: 3},
					{text: "轻音乐", weight: 2},
					{text: "刀剑神域", weight: 3},
					{text: "葛炮", weight: 4},
					{text: "鬼畜达人", weight: 5},
					{text: "浩气长存", weight: 6},
          // ...as many words as you want
      ];
$(".cloud").jQCloud(word_cloud);

//标签cloud hover效果
var $cloud=$(".cloud");
$cloud.on("mouseover","span",function(){
	$(this).animate({left:"+=30px"});
});
$cloud.on("mouseout","span",function(){
	$(this).animate({left:"-=30px"});
});



});
