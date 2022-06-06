$(function(){

/* =================================================================
    slideList
================================================================== */
    var x = 0;
    setInterval(function(){
        if (x<5) {x++;}
        else {x=0;};
        var sp = x*(-16.6666)+"%"
        $(".slideList>li").animate({left:sp},500)
    },4000);


/* =================================================================
    .bcontainer-box .bbox
================================================================== */
   $(".bbox>h2").on("click",function(){
       $(this).addClass("no").siblings(".bbox>h2").removeClass("no");
   }); 


/* =================================================================
    .smart-btn
================================================================== */

   $(".smart-prev").on("click",function(){
       $(".smart-btn>ul").stop().animate({"margin-left":"0px"},400);
   });
   $(".smart-next").on("click",function(){
       $(".smart-btn>ul").stop().animate({"margin-left":"-146px"},400);
   });

   
}); //end