
	var myscroll
	ajaxsp()
	loadscr()
	function ajaxsp(){
		$.ajax({
			type:"get",
			url:"http://datainfo.duapp.com/shopdata/getGoods.php",
			async:true,
			dataType:"jsonp",
			success:function(data){
				var str="";
				for(var i=0; i<data.length;i++){
					str+='<div class="more">'+
					'<a href="xiangqing.html"><img src="'+data[i].goodsListImg+'"/></a>'+
					'<p>'+data[i].goodsName+'</p>'+
					'<p><span>￥'+data[i].price+'</span><b>返利</b>￥10.00</p>'+
				'</div>'
				}
				$(".mylist").html(str);
			
//				$.each(data,function(i){
//							
//					var odiv=$("<div></div>")
//					var picdiv=$("<div>图片加载中。。。</div>")
//					var pic=$("<img src='"+data[i].goodsListImg+"' />")
//					var spname=$("<div>"+data[i].goodsName+"</div>")
//					odiv.append(picdiv)
//					odiv.append(spname)
//					pic.on("load",function(){
//						picdiv.html(pic)
//						myscroll.refresh()
//					})
//					$(".mylist").append(odiv)
//				})
			}
		});
	}
	$(".mylist").on("touchend",function(){
		console.log(myscroll.y)
		if(myscroll.y>40){
			console.log("执行刷新")
			myscroll.refresh()
		}else if(myscroll.y<myscroll.maxScrollY-50){
			ajaxsp()
		}
	})
	
	function loadscr(){
		myscroll=new IScroll(".mains")
	}

