document.getElementById("gun").innerHTML = gun();
function dijitalSaat() {
    var dt = new Date();// DATE() ile yeni bir tarih nesnesi oluşturuldu.
    var saat = dt.getHours();
    var dakika = dt.getMinutes();
    var saniye = dt.getSeconds();
    var gun = dt.getDay();


    dakika = Tik(dakika);
    saniye = Tik(saniye);

    document.getElementById('dt').innerHTML = saat + ":" + dakika;
    document.getElementById('dt_saniye').innerHTML = saniye;

    if (gun == 0 || gun == 6) {
        document.getElementById("yasli").style.backgroundColor = "red";
        document.getElementById("cocuk").style.backgroundColor = "red";
        document.getElementById("yetiskin").style.backgroundColor = "red";
        document.getElementById("yasli").innerHTML = "<b>ÇIKAMAZSINIZ</b>";
        document.getElementById("cocuk").innerHTML = "<b>ÇIKAMAZSINIZ</b>";
        document.getElementById("yetiskin").innerHTML = "<b>ÇIKAMAZSINIZ</b>";
    }
    else {
        if ((saat > 21) || (saat < 5)) {
            document.getElementById("yasli").style.backgroundColor = "red";
            document.getElementById("cocuk").style.backgroundColor = "red";
            document.getElementById("yetiskin").style.backgroundColor = "red";
            document.getElementById("yasli").innerHTML = "<b>ÇIKAMAZSINIZ</b>";
            document.getElementById("cocuk").innerHTML = "<b>ÇIKAMAZSINIZ</b>";
            document.getElementById("yetiskin").innerHTML = "<b>ÇIKAMAZSINIZ</b>";
        }

        else if (saat >= 11 && saat < 13) {
            document.getElementById("yasli").style.backgroundColor = "green";
            document.getElementById("cocuk").style.backgroundColor = "red";
            document.getElementById("yetiskin").style.backgroundColor = "green";
            document.getElementById("yasli").innerHTML = "<b>ÇIKABİLİRSİNİZ</b>";
            document.getElementById("cocuk").innerHTML = "<b>ÇIKAMAZSINIZ</b>";
            document.getElementById("yetiskin").innerHTML = "<b>ÇIKABİLİRSİNİZ</b>";
        }

        else if (saat >= 13 && saat <= 16) {

            document.getElementById("cocuk").style.backgroundColor = "green";
            document.getElementById("yasli").style.backgroundColor = "red";
            document.getElementById("yetiskin").style.backgroundColor = "green";
            document.getElementById("yasli").innerHTML = "<b>ÇIKAMAZSINIZ</b>";
            document.getElementById("cocuk").innerHTML = "<b>ÇIKABİLİRSİNİZ</b>";
            document.getElementById("yetiskin").innerHTML = "<b>ÇIKABİLİRSİNİZ</b>";
        }
        else {

            document.getElementById("yetiskin").style.backgroundColor = "green";
            document.getElementById("yasli").style.backgroundColor = "red";
            document.getElementById("cocuk").style.backgroundColor = "red";
        }
    }

    // her 1 saniyede bir yenileme yapılıyor.
    var time
    time = setInterval('dijitalSaat()', 1000);
}

function gun() {
    var dt = new Date();
    var gun = dt.getDay();
    var gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    return (gunler[dt.getDay()]);
}

function Tik(tikDegeri) {
    if (tikDegeri < 10) {
        tikDegeri = "0" + tikDegeri;
    }
    return tikDegeri;
}

