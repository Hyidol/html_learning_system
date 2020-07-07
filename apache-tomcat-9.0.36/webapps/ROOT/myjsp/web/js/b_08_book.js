$(function(){
    $(".intro").css("color","#ff0000");
    $("#jdPrice>span").css({fontSize:"24px",color:"#ff0000",fontWeight:"bold"});
    $("#jdPrice>p>span").css({color:"#ccc",textDecoration:"line-through"});
    $("d1").css("color","#ff0000");
    $(".price>dl>dt").click(function () {
        $(".price>dl>dd").show().css("color","#ff0000");
    })
    $(".price>dl>dd span").css({"color":"white","background-color":"red"});
    $("#ticket span").css({"color":"white","background-color":"red"});
});

