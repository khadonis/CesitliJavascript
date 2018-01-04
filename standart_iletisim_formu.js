$(function () {
    $('.error').hide();
    $(".submit").click(function () {
        // validate çalışır

        $('.error').hide();
        var name = $("input#name").val();
        if (name == "") {
            $('#name_error').show('fast');
            $("input#name").focus();
            return false;
        }
        var konu = $("input#konu").val();
        if (konu == "") {
            $("#konu_error").show('fast');
            $("input#konu").focus();
            return false;
        }
        var email = $("input#email").val();
        if (email == "") {
            $('#email_error').show('fast');
            $("input#email").focus();
            return false;
        }
        if (IsEmail(email) == false) {
            $('#invalid_email').show('fast');
            return false;
        }
        function IsEmail(email) {
            var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!regex.test(email)) {
                return false;
            } else {
                return true;
            }
        }
        var mesaj = $('#mesaj').val();
        var dataString = 'ad=' + name + '&eposta=' + email + '&konu=' + konu + '&mesaj=' + mesaj;
        $('#mail_gitmedi').hide();
        $('#mail_onay').hide();
        $('#mail_gif').html('<img src="images/cb-loading.gif" />');
        $('#mail_gif').show('fast');
        //$.get('e-posta.aspx?' + dataString, function (data) {

        //    if (data == "1") {
        //        $('#mail_gif').hide();
        //        $('#mail_onay').show("slow");
        //    } else {
        //        $('#mail_gif').hide();
        //        $('#mail_gitmedi').show("fast");
        //    }
        //});
        $.ajax({
            type: "get",
            url: "e-posta.aspx?",
            data: dataString,
            error: function () {
                $('#mail_gif').hide();
                $('#mail_gitmedi').show("fast");
            },
            success: function () {
                $('#mail_gif').hide();
                $('#mail_onay').show("slow");
            }
        });
        $('#mesaj, input#konu, input#name, input#email').focus(function () {
            $(this).val('');
        });
        return false;
    });
});