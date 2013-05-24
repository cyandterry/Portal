$(document).ready(function(){
    $(".social_icon").hover(function() {
        $(this).stop().animate({ top: "-15" });
    },function () {
        $(this).stop().animate({ top: "0" });
    });

    $("#git").hover(function() {
        $(this).stop().animate({ top: "-10" });
    },function () {
        $(this).stop().animate({ top: "10" });
    });

});
