$(document).ready(function(){
    $(".btn-1").click(function(){
        $(".text-1").show();
        $(".text-2").hide();
        $(".text-3").hide();
        $(".text-4").hide();
        $(".welcome").hide();
    })

    $(".btn-2").click(function(){
        $(".text-1").hide();
        $(".text-2").show();
        $(".text-3").hide();
        $(".text-4").hide();
        $(".welcome").hide();
    })

    $(".btn-3").click(function(){
        $(".text-1").hide();
        $(".text-2").hide();
        $(".text-3").show();
        $(".text-4").hide();
        $(".welcome").hide();
    })

    $(".btn-4").click(function(){
        $(".text-1").hide();
        $(".text-2").hide();
        $(".text-3").hide();
        $(".text-4").show();
        $(".welcome").hide();
    })
})