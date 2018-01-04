
//Author:Mustafa Kaan Demirkol, Timuçin Özmaya
//Sanal Sanatlar yazılım ekibi için geliştirilmiştir.
// Yardımcı Fonksiyonlar


//KREDİ KARTI İŞLEMLERİ

// KRedi KArtı 4 hane
 //advance2(this,&quot;txtKartNo2&quot;,4)

            function advance2(currentField, nextField, limit) {
                if (currentField.value.length == limit) {
                    document.getElementById(nextField).select();
                } else {
                    if (
    currentField.value.length == limit) {
                        currentField.maxLength = limit
                        document.getElementById(nextField).select()
                        document.getElementById(nextField).disabled = false
                        currentField.blur()
                        document.getElementById(nextField).style.backgroundColor = "#EFCCA4"
                    }
                }
            }


//Menu active olayı
           $(function(){

    var url = window.location.pathname, 
        urlRegExp = new RegExp(url.replace(/\/$/,'') + "$"); // create regexp to match current url pathname and remove trailing slash if present as it could collide with the link in navigation in case trailing slash wasn't present there
        // now grab every link from the navigation
        $('.menu a').each(function(){
            // and test its normalized href against the url pathname regexp
            if(urlRegExp.test(this.href.replace(/\/$/,''))){
                $(this).addClass('active');
            }
        });

});