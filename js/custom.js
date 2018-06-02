$(function(){

    $(".c-hero--about--iframe").backgroundVideo({
        mp4: "video/bg.mp4",
        settingID: "c-hero--about--iframe--video"
    });

    $(".readable-switcher").click(function(){
        $(this).toggleClass('active');
        $('body').toggleClass("body--readable");
    });

    $.get( "https://instagram.com/p/appxite/media/?size=t", function( data ) {
        console.log(data);
    });


});