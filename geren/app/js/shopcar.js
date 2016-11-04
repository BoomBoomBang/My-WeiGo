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
					  '<h6>共<span id="dsl"></span>件</h6>'
				
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
						'<p class="postage">邮费(<em class="kd">中通</em>)：<b>￥</b><span class="yf">10.00</span></p>'+
						'<h4>小计:<span class="xj"></span>元</h4>'+
						'</section>'
				foot =
						'<p>合计<span id="hj">0.00</span></p>'+
						'<a id="jiesuan" href="dingdan.html">结算</a>'
						
			}
			$("hgroup").html(ghr);
			$("#shangpin").html(str);
			$("footer").html(foot);
			var kuaidi = localStorage.getItem("dd");
			if(kuaidi==""){
				$(".kd").html("中通")
			}else{
				$(".kd").html(localStorage.getItem("dd"))
			}
			
			
			//跨页面商品数量
			var ee = $(".left").attr("dataid")
			var qq = localStorage.getItem("spid")
			if(qq==ee){
				$(".sl").html(localStorage.getItem("bb"))
			}
			console.log(localStorage.getItem("spid"))
			console.log(localStorage.getItem("bb"))

			//结算变色
			$("#jiesuan").click(function(){
				$(this).css("backgroundColor","orange")
			})
			var num = 0;
			var g = 0;
			var f = 0;
			$(".left").click(function(){
			//价钱计算
				if($(this).attr("checked")){
					//商品数量
					g += parseFloat($(this).parent().find(".sl").html());
					$("#dsl").html(g);
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
					//总价
					f += parseInt($(this).parent().find(".xj").html());					
					$("#hj").html(f)
				}else{
					$(this).parent().find("h4").hide();
					g -= parseFloat($(this).parent().find(".sl").html());
					$("#dsl").html(g);
					f -= parseInt($(this).parent().find(".xj").html());					
					$("#hj").html(f)
				}
				var that = this;				
				num++;
				if(num%2==1){
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
				}				
		})
		}
	});
	
})
