

$(function(){
	
	$("#btn1").click(function(){
			window.location.href="xinxi.html";
		})
	
		
		$("#surebtn1").click(function(){
			var pwd=$("#txt1").val();
			//console.log($("#txt1"))
			console.log(pwd);
			localStorage.setItem("password",pwd);
			window.location.href="xinxi.html"
			
		})
		
	
	
	
	
})
