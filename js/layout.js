

//document.ready(noresize)
$(function(){
    // alert("123");
    //手機版主選單點擊
    $('.menu').click(
            function(){
              // alert("123");
                $('.gnav').toggleClass('active');
                $('.header').toggleClass('active');
            }  
    );


//結束
});

//判定IE8
// $(function(){
//      var WHAT = navigator.userAgent;
//      if(WHAT.match(/(MSIE 5.0|MSIE 6.0|MSIE 7.0|MSIE 8.0)/)){
//       // alert("123")
//      window.location="update.html";
//      }
// });


$(function() {
    $('a[href="#section1"]').click(
            function(){
               //alert("123");
                $("html,body").animate({
                 scrollTop:$("#section1").offset().top
               }, 300);
               return false;
            }  
    );
    $('a[href="#section2"]').click(
            function(){
               //alert("123");
                $("html,body").animate({
                 scrollTop:$("#section2").offset().top
               }, 300);
               return false;
            }  
    );
    $('a[href="#section3"]').click(
            function(){
               //alert("123");
                $("html,body").animate({
                 scrollTop:$("#section3").offset().top
               }, 300);
               return false;
            }  
    );


});    