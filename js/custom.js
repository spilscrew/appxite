$(function(){

    $(".c-hero--about--iframe").backgroundVideo({
        mp4: "video/bg.mp4",
        settingID: "c-hero--about--iframe--video"
    });

    $(".readable-switcher").click(function(){
        $(this).toggleClass('active');
        $('body').toggleClass("body--readable");
    });


    $('.instagram').spectragram('getUserFeed',{
        complete : null,
        max: 20,
        size: "medium",
        wrapEachWith: "<li></li>"
    });
});