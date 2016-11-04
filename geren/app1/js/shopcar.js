$(function(){
	
	$.ajax({
		url:"http://datainfo.duapp.com/shopdata/getCar.php",
		dataType:"jsonp",
		data:{
			userID:localStorage.getItem("name")
		},
		success:function(data){
			console.log(data)
			var str = "";
			var foot = "";
			var ghr = "";
			for(var i in data){
				ghr = '<p>品类：<span>'+data[i].className+'</span></p>'+
					  '<h5 class="iconfont icon-shanchu"></h5>'+
					  '<h6>共<span id="dsl">12</span>件</h6>'
				
				str += '<section class="sc">'+
						'<input type="checkbox" class="left" dataid="'+data[i].goodsID+'" value="√"/>'+
						'<div class="center">'+
							'<img src="'+data[i].goodsListImg+'" alt="" title="" />'+
							'<div class="txt">'+
								'<h2>'+data[i].goodsName+'</h2>'+
								'<h3>默认</h3>'+
								'<h5>￥<span class="dj">'+data[i].price+'</span><i>×</i><em class="sl">1</em></h5>'+
							'</div>'+
						'</div>'+
						'<p class="postage">邮费(<em class="kd"></em>)：<b>￥</b><span class="yf">10.00</span></p>'+
						'<h4>小计:<span class="xj"></span>元</h4>'+
						'</section>'
				foot =
						'<p>合计<span id="hj">0.00</span></p>'+
						'<a id="jiesuan" href="dingdan.html">结算</a>'
						
			}
			$("hgroup").html(ghr);
			$("#shangpin").html(str);
			$("footer").html(foot);
			$("#kd").html(localStorage.getItem("dd"))
			
			$(".sl").html(localStorage.getItem("spid"))
			
			//数量
			
			
		
			//结算变色
			$("#jiesuan").click(function(){
				$(this).css("backgroundColor","orange")
			})
			var num = 0;
			
			
			$(".left").click(function(){
				
//				var y = 0;
//				$(".sc").each(function(){
//					if(){
//						
//					}
//					y = parseInt($(this).find(".sl").html())
//					
//				})
				var g = 0;
				g += parseFloat($(this).parent().find(".sl").html());
				alert(g)
				$("#dsl").html(g);
				
				//价钱计算
				if($(this).attr("checked")){
					var a;
					var b;
					var e;	
					var c = 0;
					a = parseInt($(this).parent().find(".sl").html());
					b = parseInt($(this).parent().find(".dj").html());
					e = parseInt($(this).parent().find(".yf").html());
					c = a*b+e;
					$(this).parent().find("h4").show();
					$(this).parent().find(".xj").html(c)
					var f = 0;
					$(".xj").each(function(){
						f += parseInt($(this).html());
					})
					$("#hj").html(f)
				}else{
					$(this).parent().find("h4").hide();
					
				}
					
				
			
			var that = this;
				
				num++;
				if(num%2==1){
					$(this).css("backgroundColor","orange")
//					var a;
//					var b;
//					var e;	
//					var c = 0;
//					var d = 0;
//					$("section").each(function(){				
//						a = parseInt($(this).find("em").html());
//						b = parseInt($(this).find("#dj").html());
//						e = parseInt($(this).find("#yf").html());
//						c = a*b+e;
//						d += c;	
//					})
//					$("#hj").html(d);
//					var a = parseInt($(this).parent().find("#dj").html());
//					var b = parseInt($(this).parent().find("#yf").html());
//					var e = parseInt($(this).parent().find("em").html());
//					c = a*e+b;
//					d += c;
//					$("#hj").html(d)
					
					$(".icon-shanchu").click(function(that){
						$(that).parent().remove();
						window.location.reload();
						var spid = $(".left").attr("dataid");
						$.ajax({
							url:"http://datainfo.duapp.com/shopdata/updatecar.php",
							data:{
								userID:localStorage.getItem("name"),
								goodsID:spid,
								number:0
							}
						})
					})
				}else if(num%2==0){
					$(this).css("backgroundColor","")					
				}				
			})
			
			
//			if($("section").html("")){
//				$("#hj").html(0)
//			}else{
				var a = 0;
				$("section").each(function(){
					a += parseInt($(this).find("#sl").html());
				})
				$("#dsl").html(a);
				
			//总价
				
		}
	});
	
})
