$(function(){
    //下拉菜单
   $("#sinput>input").focus(function(){
       $("#sinput>ul").css("display","block");
   });
   $("#sinput>input").blur(function(){
    $("#sinput>ul").css("display","none");
   });
   //VIP显示
   $("#sicon>div:first-child").mouseover(function(){
    $(".listdown").css("display","block");
   });
   $("#sicon>div:first-child").mouseout(function(){
    $(".listdown").css("display","none");
   });
   //切换图片0.3秒一张
   var i = 0;
   setInterval(() => {
       i++;
       if (i == 10){
           i = 0;
       }
       lunbo(i);
   }, 3000);
   //选中文字，显示图片
   $(".items li").mouseover(function(){
       i=$(".items li").index($(this));
       lunbo(i);
   });
   //当滚动条滚动达到100px，导航栏和轮播文字消失
   $(window).scroll(function(){
       var top=$(document).scrollTop();
    //    alert(top);显示滚动条高度
       if(top>=100){
           $("#head").hide();
           $(".items").hide();
       }else{
        $("#head").show();
        $(".items").show();
       }
   })
});

function lunbo(i){
    //切换图片
    $(".simg img").hide();
    $(".simg img").eq(i).show();

    $(".items li").removeClass("xuan");
    $(".items li").eq(i).addClass("xuan");
}