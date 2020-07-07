$(function () {
    $("tr:first").addClass("tableHeader");
    $("tr:even:not(:first)").addClass("evenStyle");
    $("tr:not(:first)").mouseover(function () {
        $(this).addClass("over");
    });
    $("tr:not(:first)").mouseout(function () {
        $(this).removeClass("over");
    })

    $("#sufbtn").click(function () {
        var name = document.getElementById("sufname").value;
        var names = document.getElementsByClassName("name");
        var lines = document.getElementsByClassName("line");
        for (var i = 0; i < names.length; i++) {
            //alert(names[i].innerHTML);
            $(lines[i]).removeClass("over");
            if (names[i].innerHTML === name) {
                $(lines[i]).addClass("over");
                document.getElementById("sufbtn").disabled;
            }
        }
    });

})