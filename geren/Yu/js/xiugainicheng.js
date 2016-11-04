$(function(){
	
	
	
	$("#txt3").blur(function(){
		var email=/^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;
		var  emailmes=$(this).val();
		if(email.test(emailmes)){
			localStorage.setItem("email",emailmes);
		}else{
			alert("邮箱格式不正确")
		}
	})
	
	
	
	
	$("#surebtn1").click(function(){
	
	var myname=$("#txt1").val();
	if(myname!=""){
		localStorage.setItem("nicheng",myname);
	window.location.href="myweigo.html";
		
	}
	else{
		alert("昵称不能为空")
	}

})
	
	$("#btn1").click(function(){
		window.location.href="xinxi.html"
	})
	
	

	/*var reg = {

 		trim: /^s+|s+$/g,
 		//去掉字符串前后的空白字符

 		qq: /^[1-9]d{4,11}$/,
 		//网上看到腾讯QQ号是从10000开始的，然后先预留到12位的qq号

 		email: /^[a-zd](.?[w-]+)+[a-zd]@[a-zd]+(-*[a-zd])*(.[a-z]{2,6})+$/ig,
 	}
	*/
	
	



	
})


