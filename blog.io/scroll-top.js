jQuery(document).ready(function($) {
    if ($("meta[name=toTop]").attr("content") == "true") {
        var b = "<div id='toTop' title='回到页首'><img src='" + themeBaseUrl + "/images/scrolltop.png'/></div>";
        $(b).appendTo('body');
        $("#toTop").css({
            width: '32px',
            height: '32px',
            bottom: '25px',
            right: '25px',
            position: 'fixed',
            cursor: 'pointer',
            zIndex: '100',
        });
        if ($(this).scrollTop() == 0) {
            $("#toTop").hide()
        }
        $(window).scroll(function(a) {
            if ($(this).scrollTop() == 0) {
                $("#toTop").hide()
            }
            if ($(this).scrollTop() != 0) {
                $("#toTop").show()
            }
        });
        $("#toTop").click(function(a) {
            $("html,body").animate({
                scrollTop: "0px"
            }, 888)
        })
    }
});