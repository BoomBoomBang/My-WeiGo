$(function(){
		$("nav ul li").click(function(){
//			$("").eq($(this).index())
			$(this).css("background","#f3efee")
//				   .css("opacity","0.4")
				   .siblings()
				   .css("background","")
//				   .css("opacity","")
				   
			if($(this).index()==2){
				$(".goods").show()
//					var a = $(".confirm").length
//					for(var i=0,i<a,i++){
//						var index = $(this)
				$(".confirm").click(function(){
					$("footer").show()
				})
				$(".sure").click(function(){
					$(".goods").hide()
					$(".show").show()
					setTimeout(function () {
					    $(".show").hide()
						$(".goods").show()
				    }, 2000);
				})
				$(".yes").click(function(){
					$(".goods").remove()
					$("footer").hide()
					$("section").html("暂无待收货的商品哦~~~")
								.css("font-size","0.8rem")
								.css("padding","3%")
				})
				$(".no").click(function(){
					$("footer").hide()
				})
					
			}else{
				$(".goods").hide()
			}
		})
		
		$.ajax({
			url:"http://datainfo.duapp.com/shopdata/getCar.php",
			dataType:"jsonp",
			data:{
				userID:localStorage.getItem("name")
			},
			success:function(data){
				console.log(data)
				var str = "";
				var arr = "";
				for(var i in data){
					str += "<div class='goods'><span id='store'>这是一个神奇的店铺&emsp;&emsp;></span>"+
							"<div class='info'><dl><dt>"+
							'<img src="'+data[i].goodsListImg+'" alt="" title="" />'+
							"</dt><dd><a href='###'>"+data[i].goodsName+"</a><br/>"+
							"<b>实付款：￥"+11.50+"</b><br/>"+
							"<i>共<span></span>件</i>"+
							"<p>卖家已发货</p>"+
							"<input type='button' value='确认收货' class='confirm'>&emsp;<input type='button' value='查看物流' class='sure'/></dd></dl></div></div> "
				}
				$("section").html(str);
			}
		});
		
		
		
	})