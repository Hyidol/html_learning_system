$(function () {
    $("#send").click(function () {
        var headImg = ["../img/head_01.jpg","../img/head_02.jpg","../img/head_03.jpg"];
        var userName = ["胡萍老师","刘海霞老师","鲍小忠老师"];
        var srandKey = Math.floor(Math.random() * 3);
        var s = "<section> <div><img src=' " + headImg[srandKey] + " ' ></div>" +
            userName[srandKey] + '<p>说：</p>' +
            "<div class='chatContent'>" + $(".chatText").val()+ "</div></section>\n";

        $(".chatBody").html($(".chatBody").html() + s);
    });
})

