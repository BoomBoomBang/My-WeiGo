
/*---------------------------------------------------------/

                       ☀ 唐明明20151015 ☀

/---------------------------------------------------------*/



$(document).ready(function() {
    // 点击redbutton按钮时执行以下全部
    var str = ["获得100元钱红包大奖哦","俞彬彬裸照一张","步云龙裸照一张","获得iPhone 7 128g手机一部","纪俊超出嫁一次","小雪签名照一张","蓝哥原声大碟","BOSS平请吃饭","阿培大熊抱一个","大哥跳一支舞"]
    $('.redbutton').click(function(){
        // 在带有red样式的div中添加shake-chunk样式
        $('.red').addClass('shake-chunk');
        // 点击按钮2000毫秒后执行以下操作
        setTimeout(function(){
            // 在带有red样式的div中删除shake-chunk样式
            $('.red').removeClass('shake-chunk');
            // 将redbutton按钮隐藏
            $('.redbutton').css("display" , "none");
            // 修改red 下 span   背景图
            $('.red > span').css("background-image" , "url(img/red-y.png)");
            // 修改red-jg的css显示方式为块
            $('.red-jg').css("display" , "block");
        },2000);
          
          $("h5").html(str[Math.floor(Math.random()*10)])
           
		    
    });
    
});








