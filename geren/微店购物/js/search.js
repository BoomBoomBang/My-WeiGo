var text = document.getElementById("text")

text.onkeyup = function(){
//	console.log(text.value.length)
	if(text.value.length==0){
		$("#search").html("取消");
	}else if(text.value.length!=0){
		$("#search").html("搜索");
	}
	
}

text.onchange = function(){
	
	$("#box").html("");
	$.ajax({
		type:"get",
		url:"http://datainfo.duapp.com/shopdata/selectGoodes.php",
		async:true,
		dataType:"jsonp",
		data:{
			selectText:text.value
			
		},
		
		success:function(data){
			console.log(data)
			str=''
			for(var i in data){
				str+='<div class="pic">'
				str+='<img src="'+data[i].goodsListImg+'" />'
				str+='<p>'+data[i].goodsName+'</p>'
				str+='<p>价格￥'+data[i].price+'</p>'
				str+='<input type="button" value="加入购物车" class="btn" dataid="'+data[i].goodsID+'">'
				str+='</div>'
			}
			$("#search").click(function(){
				if($("#search").html()=="搜索"){
					$("#search").click(function(){
						$("#box").html(str)
					})
				}else if($("#search").html()=="取消"){
					window.location.href="index.html"
				}
			})
			
			
		}
		
		
	});

}

$(".btn").click(function(){
	window.location.href = "gouwuche.html"
})
	
