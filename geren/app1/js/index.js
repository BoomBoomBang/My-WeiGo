var search = document.getElementById("search");
search.onfocus = function(){
	window.location.href="search.html"
}

	$.ajax({
		type:"get",
		url:"http://datainfo.duapp.com/shopdata/getGoods.php",
		async:true,
		dataType:"jsonp",
		success:function(data){
			console.log(data)
			var str="";
			for(var i=0; i<data.length;i++){
				str+='<dl><dt><a href="#" dataid="'+data[i].goodsID+'">'+
				'<img src="'+data[i].goodsListImg+'"/>'+'</a></dt><dd><h3><a href="#" dataid="'+data[i].goodsID+'">'+data[i].goodsName+'</a></h3>'+
				'<p>￥'+data[i].price+'<del>￥568.0</del></p>'+'</dd></dl>'
			}
			$(".main").html(str);
		}
	});
	$(".main").on("click","dl",function(){
		var spid = $(this).find("a").attr("dataid")
		var name = localStorage.getItem("name");
		
		$.ajax({
			url:"http://datainfo.duapp.com/shopdata/updatecar.php",
			data:{
				userID:name,
				goodsID:spid
			},
			success:function(data){
				console.log(data)
				if(data=1){
					window.location.href="xingqing.html";	
				}else{
					alert(1)
				}
			}
		});
		
	})
