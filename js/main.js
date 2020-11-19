$(".popup").slideDown(400);

$(function(){
    if($.cookie("oneday")=="none"){
        $("#popupWarp").hide();
    }
});

$("#popupWarp .btnOneday").on("click",function(){
    $.cookie("oneday","none",{expires:1, path:"/"});
    $("#popupWarp").hide(250);
});

$(".popup .btnClose").on("click",function(){
    $("#popupWarp").hide(250);
});

// popup

new fullpage("#main",{
    onLeave:function(section,destination){
        let idx = destination.index;
        if(idx===0){
            anim01.restart();
        }
        if(idx===2){
            anim03.restart();
        }
    }
})

// fullpage js

$("#gnb .gnbList > li").on("mouseenter",function(){    
    if(!$("body").hasClass("resize")){
        $(".depth02",this).stop().slideDown(150)
    } else if ($("body").hasClass("resize")){
        $("depth02").show();
    }
});
$("#gnb .gnbList > li").on("mouseleave",function(){    
    if(!$("body").hasClass("resize")){
        $(".depth02",this).stop().slideUp(150)
    } else if ($("body").hasClass("resize")){
        $("depth02").show();
    }
});

$(".resizeNavBtn").on("click",function(){
    $("#gnb").fadeToggle();
    $(this).toggleClass("on");
});

$(window).on("resize",function(){
    let w = $(window).width();
    //console.log(w);
    if(w <= 1250){
        if(!$("body").hasClass("resize")){;
            $("body").addClass("resize");  
            $("#gnb .gnbList > li .depth02").show();
            $("#gnb").hide();
        }
    } else if($("body").hasClass("resize")){
        $("body").removeClass("resize"); 
        $("#gnb .gnbList > li .depth02").hide();
        $("#gnb").show();
    }
});

// #header 

let section02 = new Swiper("#section02 .mask",{
    loop:true,
    autoplay:{
        delay:4000,
    },
    navigation:{
        nextEl:"#section02 .btnNext",
        prevEl:"#section02 .btnPrev",
    },
    pagination: {
        el:"#section02 .pagination",
        clickable:true,
    }
});

// #section01

let anim01 = gsap.timeline();
anim01.from("#section01 .infoBox",{
    duration:0.5,
    y:-150,
    opacity:0,
    ease:"power4.in"
});

let anim03 = gsap.timeline();
anim03.from("#section03 .storeShop .imgBox img",{
    duration:0.5,
    y:50,
    opacity:0,
    ease:"back.in"
});

// greensock animation

