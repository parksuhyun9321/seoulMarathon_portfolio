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

