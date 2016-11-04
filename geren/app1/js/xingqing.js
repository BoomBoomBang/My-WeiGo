$(function(){
			
	//快递
	$("#xzkd").click(function(){
		$("#kd").show();
	
	})
	$("#kd h5").click(function(){
		$("#kd").hide();
	})
	$("#kd .box p").click(function(){
		$("#kd").hide();
		$(".kuaidi").show();
		$(".kuaidi").html(aa)
	})
	//快递滑动	
	$("#list li").click(function(){
		$(this).css("color","red").siblings().css("color","black")
		aa = $(this).html();
	})
	//抵押券
	$("#diya").click(function(){
		$("#dyj").show();
	})
	$("#dyj").click(function(){
		$(this).hide();
	})
	
	//下部按钮亮起来
	$("hgroup").click(function(){
		$(".add").css("backgroundColor","#9bd674");
		$(".buy").css("backgroundColor","#ff6161");
	})

})

//ajax
$(function(){
	
	$.ajax({
		url:"http://datainfo.duapp.com/shopdata/getCar.php",
		dataType:"jsonp",
		data:{
			userID:localStorage.getItem("name")
		},
		success:function(data){
			var str = "";
			var massage = "";
			var foot = "";
			var pic="";
			for(var i in data){
				str = '<img src="'+data[i].goodsListImg+'" alt="" title="" />';
				massage = '<section>'+
							'<h1>'+data[i].goodsName+'</h1>'+
							'<div>'+
								'<p><span id="nowp">'+data[i].price+'元</span>'+
								'<h2>香港</h2>'+
							'</div>'+
						  '</section>';
				foot =  '<p class="add" dataid="'+data[i].goodsID+'">'+
							'加入购物车'+
						'</p>'+
						'<div class="buy">'+
							'立即购买'+
						'</div>'+
						'<p id="fei" class="iconfont icon-gouwuche xfei"></p>'
				pic =   '<h3>商品详情</h3>'+
						'<img src="'+data[i].goodsListImg+'" alt="" title="" />'+
						'<img src="'+data[i].goodsListImg+'" alt="" title="" />'+
						'<div class="liubai"></div>'
			
			}
			console.log(data[i].goodsID)
			$("#pic").html(str);
			$("section").html(massage);
			$("footer").html(foot);
			$("#details").html(pic);
			//点击购物车
		$(".add").click(function(){
//		    $("#fei").show().addClass("xfei");
			$("#fei").show().animate({
				"top":"-43%",
				"opacity":0
			})
			
			var name = localStorage.getItem("name");
			var spid = $(".add").attr("dataid");
			$.ajax({
				url:"http://datainfo.duapp.com/shopdata/updatecar.php",
				data:{
					userID:name,
					goodsID:spid
				},
				success:function(data){
					console.log(data);
					if(data==1){				
							console.log("chenggoing")					
					}
				}
			})
			
			var oDi = $(".kuaidi").html();
			localStorage.setItem("dd",oDi)
			
			var ygs = localStorage.length + 1;
			var oSl = parseFloat($("#val").val())
			localStorage.setItem(spid,oSl)
		})
		
		//加减号
	zj();
	var num = 1;
	$("#jia").click(function(){
		num++;
		$("#val").val(num);
		zj();
	})
	$("#jian").click(function(){
		num--;
		if(num<=1){
			num=1;
		}
		$("#val").val(num);
		zj();
	})	
	//总价计算
	function zj(){
		var Now = parseFloat($("#nowp").html())
		$("#zp").html(parseFloat(Now*$("#val").val()).toFixed(2))
	}
		
		}
		
	})
	
		$(".che").click(function(){
			if($(".kuaidi").html("")){
				window.location.href="shopcar.html"
			}else{
				alert(24)
			}
		})
})
