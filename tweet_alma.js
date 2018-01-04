$(document).ready(function () {
    var url = "https://api.twitter.com/1/statuses/user_timeline/sanalsanatlar.json?count=1&include_rts=1&callback=?";
    var urldon = function (metin) {
        var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/g
        var result = metin.replace(regexp, function (url) {
            return '<a target="_blank" href=' + url + '>' + url + '</a>';
        });
        return result;
    }
    $.getJSON(url, function (data) {
        $.each(data, function (i, results) {
            $("#tweet_result").html(urldon(results.text));
        });
    });
});
//$.getJSON("https://api.twitter.com/1/statuses/user_timeline/sanalsanatlar.json?count=1&include_rts=1&callback=?", function(data) {
//    $("#tweet_result").html(data[0].text);
//});