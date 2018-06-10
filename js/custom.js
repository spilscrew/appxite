$(function(){

    $(".c-hero--about--iframe").backgroundVideo({
        mp4: "https://spilscrew.github.io/appxite.com/video/bg.mp4",
        settingID: "c-hero--about--iframe--video",
        poster: ""
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