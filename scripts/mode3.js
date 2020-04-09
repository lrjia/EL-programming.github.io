function is_valid(){

    //输入姓名为空
    var user_name = document.forms["user_comment"]["user-name"].value;
    if (user_name === ""){
        alert("Please enter your name.");
        return false;
    }
    //输入评论为空
    var user_comment = document.forms["user_comment"]["comment-text"].value;
    if (user_comment === ""){
        alert("Please enter your comment.");
        return false;
    }
    //成功弹出提示框并退出窗口
    var html_success = "<div class=\"alert alert-success alert-dismissible fade show\">\n" +
        "  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" id='close_button_in_alert'>&times;</button>\n" +
        "  <strong>Success</strong>\n" +
        "</div>";
    var close_button = document.getElementById("close_button");
    if(user_name !== "" && user_comment !== ""){
        close_button.click();
        $("body").append(html_success);
        var close_button_in_alert = document.getElementById("close_button_in_alert");
        setInterval(function () {
            close_button_in_alert.click();
        },3000);
        return true;
    }
}

//进度条（伪）
$("#wrapper").ready(function() {
    var value = 0;
    setInterval(function (e) {
        if (value < 100) {
            value = parseInt(value) + 7;
            if(value > 100){
                value = 100;
            }
            $("#prog").css("width", value + "%").text(value + "%");
            if (value >= 0 && value <= 30) {
                $("#prog").addClass("progress-bar-danger");
            } else if (value >= 30 && value <= 100) {
                $("#prog").removeClass("progress-bar-danger");
                $("#prog").addClass("progress-bar-danger");
            }
        }
        else if(value === 100){
            $("#wrapper").remove();
        }
    }, 10);

}
);





