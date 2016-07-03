$(function(){
			var timer=0; //定时器
			var index=0; //当前序列按钮
			var len;   //图片数量
			var slidebox=$(".slidebox"); //获取整个box
			var imglist=$(".imgbox a"); // 获取图片数量长度
			var numlist=$(".numbox li");//获取序列按钮集合
			var infobox=$(".infobox");  //获取信息盒子
			len=imglist.length; //图片数量
			(imglist.eq(0)).siblings().hide();  //隐藏除了第一张之外的图片
			infobox.find("p").text(imglist.find("img").eq(0).attr("title"));  //设置图片信息
			numlist.click(function(){			//给序列按钮绑定点击事件
				var i=$(this).index();   		// 获取当前序列
				index=i;						//将当前点击的序列传给全局序列index
				imglist.eq(i).fadeIn(1000).siblings().fadeOut(500);    //将序列按钮对应的图片淡入显示出来，其余的淡出
				infobox.find("p").text(imglist.find("img").eq(i).attr("title")); //更新图片信息
				numlist.eq(i).addClass("on").siblings().removeClass("on");       //当前序列按钮背景色改变,并将其他按钮复原
			});
			function Autoplay(){    //自动播放函数
				if(index>=len-1)	//检测当前序列是否超过图片数量长度
				{index=0;}				
				else
				{index++;}
			numlist.eq(index).trigger("click");	//！！！用trigger方法触发序列按钮的点击事件
			}
			timer=setInterval(Autoplay,5000);   //设置5s定时器                 
			//hover方法接受两个参数，一个负责移入一个负责移出。
			slidebox.hover(function(){clearInterval(timer)},function(){timer=setInterval(Autoplay,5000)});
		})