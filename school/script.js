function s1(){
    $("html, body").animate({scrollTop: $("#s1").offset().top},500,"swing");
}
function s2(){
    $("html, body").animate({scrollTop: $("#s2").offset().top},500,"swing");
}
function s3(){
    $("html, body").animate({scrollTop: $("#s3").offset().top},500,"swing");
}
function gotop(){
    $('body,html').animate({scrollTop: 0}, 800, "easeInCubic");
}