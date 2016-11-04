

$(function(){
	
	
	
	var mynicheng=localStorage.getItem("nicheng")
	//console.log(mynicheng)

	$("#mynicheng").html(mynicheng);
	$("#btn2").click(function(){
		window.location.href="xinxi.html";
	})
	
	
	
	$("#btn1").click(function(){
		$(this).html("已签到")
	})
})

