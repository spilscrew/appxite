$(function(){

    $(".c-hero--about--iframe").backgroundVideo({
        poster: false,
        settingID: "c-hero--about--iframe--video",
        mpeg: "https://spilscrew.github.io/appxite.com/video/bg.mpg",
        mp4: "https://spilscrew.github.io/appxite.com/video/bg.mp4",
        webm: "https://spilscrew.github.io/appxite.com/video/bg.webm",
        ogg: "https://spilscrew.github.io/appxite.com/video/bg.ogv",
        quicktime: "https://spilscrew.github.io/appxite.com/video/bg.mov",
        x_msvideo: false,
        m4v: false,
        rtf: false
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