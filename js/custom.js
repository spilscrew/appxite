$(function(){

    $(".c-hero--about--iframe").backgroundVideo({
        autoplay: false,
        buffered: false,
        poster: "",
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

    document.querySelector('#c-hero--about--iframe--video').play();

    $(".readable-switcher").click(function(){
        $(this).toggleClass('active');
        $('body').toggleClass("body--readable");
    });

    var Spectra = {
        instaToken: '2136707.12e2743.9576ae17af4e4ad4aebf6b72433c01fd',
        // instaToken: '7915424155.5e00515.79645427142949e39191910efe13b264',
        instaID: '5e00515adef64fae9943e392b327daba',

        init: function () {
            $.fn.spectragram.accessData = {
                accessToken: this.instaToken,
                clientID: this.instaID
            };

            $('.instagram-feed').spectragram('getUserFeed',{
                max: 6,
                wrapEachWith: '<div class="instagram-photo">'
            });
        }

    };

    Spectra.init();

});