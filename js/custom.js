$(function(){

    $(".c-hero--about--iframe").backgroundVideo({
        mp4: "video/bg.mp4",
        settingID: "c-hero--about--iframe--video"
    });

    $(".readable-switcher").click(function(){
        $(this).toggleClass('active');
        $('body').toggleClass("body--readable");
    });

    $.get( "https://instagram.com/p/8fea698375e84b0ab6cf5e1675b8aed8/media/?size=t", function( data ) {
        console.log(data);
    });


});