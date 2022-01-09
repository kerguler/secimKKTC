var oylar = [];
var oyTuru;
var oySayisi;
var goySayisi;

var MUHUR_TERCIH = 0;
var KARMA = 1;

var tercih = MUHUR_TERCIH;

var muhur_gecersiz = false;
var tercih_gecersiz = false;

var mesajlar = {
    'OY_YOK' : [false, "Oy kullanmadınız"],
    'FAZLA_MUHUR': [false, "Birden fazla mühür vurduğunuz için oyunuz geçersizdir"],
    'KARISIK_TERCIH' : [false, "Mühür vurup başka bir partiden veya bağımsız adaylardan tercih yaptınız"],
    'TEK_PARTILI_TERCIH' : [false, "Karma oyunuzu farklı partilerden (veya bağımsızlardan) kullanmalısınız"],
    'YETERSIZ_TERCIH' : [false, "En az "+String(yeterli_karma[0])+", en fazla "+String(yeterli_karma[1])+" tercih yapmalısınız"],
    'YETERSIZ_KARMA' : [false, "Karma oyunuzu bir veya birden fazla bölgede ya yetersiz ya da fazla kullandınız"],
    'YETERSIZ_BOLGE' : [false, "Tercihinizi bir veya birden fazla bölgede ya yetersiz ya da fazla kullandınız"]
};

var flagA = true;
var flagB = true;

function getId(i) {
    return i.toString(16);
}

function getAdayId(i,j,k) {
    return getId(i)+getId(j)+getId(k);
}

function mesajTemizle() {
    $.each(mesajlar,function(key,value){ value[0] = false; });
    $('#messages').html('');
}

function mesajYaz() {
    var msg = $('#messages').append($('<ul></ul>'));
    $.each(mesajlar,function(key,value){
        if (value[0])
            msg.append($('<li>'+value[1]+'</li>'));
    });
}

function oyTopla() {
    oylar = $( ".oylar:checked" ).map(function(i,elm){
        return elm.value.toString();
    });
}

function toplamTercih() {
    return oylar.filter(function(i,d){return d.length == 3;}).length;
}

function tercihSayisi(p,b) {
    return adaylar[partiler[p]][bolgeler[b]].length == 1 ? 1 : Math.floor(0.5*adaylar[partiler[p]][bolgeler[b]].length);
}

function tercihlerAyniPartiden() {
    return oylar.length && $(oylar).filter(function(i,d){return d.charAt(0)==oylar[0].charAt(0);}).length == oylar.length;
}

function karmaSehirGecerli(b) {
    var parti = $(partiler).map(function(i,d){return 0;});
    var bolgetercihleri = $(oylar).filter(function(i,d){
        return d.length==3 && d.charAt(1)==b;
    });
    bolgetercihleri.each(function(i,d){
        parti[parseInt(d.charAt(0))] = 1;
    });
    var sum = 0;
    $.each(parti,function(i,d){sum+=d;});
    // return sum>1 || (bolgetercihleri.length==1 && b==bolgeler.indexOf('Lefke'));
    return sum>1 || (bolgetercihleri.length==1 && Math.floor(0.5*adaylar[partiler[0]][bolgeler[b]].length)==1);
}

function gecerliSehir(oy,tam=false) {
    var p = parseInt(oy.charAt(0));
    var b = parseInt(oy.charAt(1));
    var l = $(oylar).filter(function(i,d){
        return parseInt(d.charAt(1))==b;
    }).length;
    if (tam) {
        return l == tercihSayisi(p,b);
    } else {
        return karmaSehirGecerli(b) && l >= karma[b][0] && l<= karma[b][1];
    }
}

function muhurVar() {
    return ($(oylar).filter(function(i,d){return d.length == 1;}).length >= 1);
}

function muhurTekPartiye() {
    return ($(oylar).filter(function(i,d){return d.length == 1;}).length == 1);
}

function yeterliKarma(toplam) {
    return toplam>=yeterli_karma[0] && toplam<=yeterli_karma[1];
}

function gecerliOy(oy) {
    if (oy.length==1) // Muhur
        return !muhur_gecersiz;
    // Tercih
    if (tercih_gecersiz)
        return false;
    var gecerli;
    if (tercih == KARMA) { // Karma
        gecerli = gecerliSehir(oy,false);
        if (!gecerli)
            mesajlar['YETERSIZ_KARMA'][0] = true;
        return gecerli;
    }
    // Muhur + tercih
    gecerli = gecerliSehir(oy,true)
    if (!gecerli)
        mesajlar['YETERSIZ_BOLGE'][0] = true;
    return gecerli;
}

function tercihSay(e) {
    oyTopla();
    var tmp = toplamTercih();
    oySayisi.html(tmp?tmp:'Yok');
}

function oyKontrol() {
    oyTopla();
    $('.parti-container-list').css("background-color","transparent");
    $('.aday').css("background-color","transparent");
    //
    muhur_gecersiz = false;
    tercih_gecersiz = false;
    var tmp = toplamTercih();
    if (oylar.length == 0) {
        mesajlar['OY_YOK'][0] = true;
        oyTuru.html('Boş');
        oySayisi.html('Yok');
    } else if (muhurVar()) { // Muhur
        tercih = MUHUR_TERCIH;
        if (!muhurTekPartiye()) {
            muhur_gecersiz = true;
            mesajlar['FAZLA_MUHUR'][0] = true;
            oyTuru.html('Geçersiz');
            oySayisi.html(tmp?tmp:'Yok');
        } else if (!tercihlerAyniPartiden()) {
            tercih_gecersiz = true;
            mesajlar['KARISIK_TERCIH'][0] = true;
            oyTuru.html('Mühür');
            oySayisi.html(tmp?tmp:'Yok');
        } else {
            oyTuru.html('Mühür'+(tmp?'+Tercih':''));
            oySayisi.html(tmp?tmp:'Yok');
        }
    } else {
        tercih = KARMA;
        oySayisi.html(tmp?tmp:'Yok');
    }
    //
    var gecerlitercih = 0;
    $(oylar).each(function(i,oy){
        var t = gecerliOy(oy);
        if (t && oy.length==3)
            gecerlitercih += 1;
    });
    if (tercih == KARMA) {
        if (!yeterliKarma(gecerlitercih)) {
            tercih_gecersiz = true;
            gecerlitercih = 0;
            mesajlar['YETERSIZ_TERCIH'][0] = true;
            oyTuru.html('Geçersiz');
        } else {
            oyTuru.html('Karma');
        }
    }
    if (tercih==MUHUR_TERCIH)
        oyTuru.html('Mühür'+(gecerlitercih?'+Tercih':''));
    goySayisi.html(gecerlitercih?gecerlitercih:'Yok');
    //
    $(oylar).each(function(i,oy){
        $('#box-'+oy).css("background-color",gecerliOy(oy)?'#66c2a5':'#fc8d62');
    });
}

function layOutTable() {
    var table;
    var row;
    var roww = 250;
    table = $('<table width="'+(roww*partiler.length)+'px"><body></body></table>');
    row = $('<tr></tr>');
    $(partiler).each(function(i,p){
        if (!(p in adaylar))
            return;
        var id = getId(i);
        var parti_container = $('<td width="'+roww+'px" class="parti-container-list" id="box-'+id+'"></td>');
        if (p=='Bağımsızlar')
            parti_container.append($('<span>'+p+'</span>'));
        else {
            var tmp = $('<input class="oylar" type="checkbox" id="oy-'+id+'" name="oy-'+id+'" value="'+id+'"> '+p+'</input>');
            parti_container.append(tmp);
        }
        row.append(parti_container);
    });
    table.append(row);
    $(bolgeler).each(function(j,b){
        row = $('<tr></tr>');
        $(partiler).each(function(i,p){
            if (!(b in adaylar[p])) {
                row.append($('<td width="'+roww+'px"></td>'));
                return;
            }
            var bolge_container = $('<td width="'+roww+'px" class="bolge-container-list">'+b+'</td>');
            var bolge = $('<ol class="bolge"></ol>');
            $(adaylar[p][b]).each(function(k,a){
                var id = getAdayId(i,j,k);
                var aday = $('<li class="aday" id="box-'+id+'"></li>');
                var tmp = $('<input class="oylar" type="checkbox" id="oy-'+id+'" name="oy-'+id+'" value="'+id+'"> '+(k+1)+' '+a+'</input>');
                tmp.click(tercihSay);
                aday.append(tmp);
                bolge.append(aday);
            });
            bolge_container.append(bolge);
            row.append(bolge_container);
        });
        table.append(row);
    });
    $("#container").append(table);
}

function oyTemizle() {
    $('.parti-container-list').css("background-color","transparent");
    $(oylar).each(function(i,oy){
        $('#box-'+oy).css("background-color","transparent");
    });
    oyTuru.html('');
    oySayisi.html('');
    goySayisi.html('');
    tercihSay();
}

function isParti(p) {
    var i;
    for (i=0; i<oylar.length; i++) {
        if (oylar[i].charAt(0)==p) return true;
    }
    return false;
}

function isSehir(b) {
    var i;
    for (i=0; i<oylar.length; i++) {
        if (oylar[i].charAt(1)==b) return true;
    }
    return false;
}

function isPartiSehir(p,b) {
    var i;
    for (i=0; i<oylar.length; i++) {
        if (oylar[i].charAt(0)==p && oylar[i].charAt(1)==b) return true;
    }
    return false;
}

function isAday(oy) {
    return $.inArray(oy,oylar)!=-1;
}

function layOutList() {
    console.dir(oylar);
    var parti_container = $('<ol></ol>');
    $(partiler).each(function(i,p){
        console.log(p);
        var id_p = getId(i);
        if (!(p in adaylar) || !isParti(id_p))
            return;
        var parti = $('<li></li>');
        parti.append($('<span>'+($.inArray(id_p,oylar)!=-1?'[+]&nbsp;':'')+p+'</span>'));
        $(bolgeler).each(function(j,b){
            console.log(b);
            var id_b = getId(j);
            if (!(b in adaylar[p]) || !isPartiSehir(id_p,id_b))
                return;
            var bolge_container = $('<ol><li>'+b+'</li></ol>');
            var bolge = $('<ol></ol>');
            $(adaylar[p][b]).each(function(k,a){
                console.log(a);
                var id = getAdayId(i,j,k);
                if (!isAday(id))
                    return;
                var aday = $('<li></li>');
                var tmp = $('<span> [+]&nbsp;'+(k+1)+' '+a+'</span>');
                aday.append(tmp);
                bolge.append(aday);
            });
            bolge_container.append(bolge);
            parti.append(bolge_container);
        });
        parti_container.append(parti);
    });
    $("#printout").html(parti_container);
}

$(document).ready(function() {
    oyTuru = $('#oyTuru');
    oySayisi = $('#tercih');
    goySayisi = $('#gecerlitercih');
    var buton1 = $('#yazdir');
    var buton2 = $('#kontrol');
    buton1.click(function(e){
        flagB = !flagB;
        $("#messages").html("");
        if (flagB) {
            buton1.css("display","inherit");
            $("#messages").css("display","inherit");
            $("#container").css("display","inherit");
            $("#printout").css("display","none");
            return;
        }
        buton1.css("display","none");
        $("#messages").css("display","none");
        $("#container").css("display","none");
        $("#printout").css("display","inherit");
        oyTopla();
        layOutList();
    });
    buton2.click(function(e){
        flagA = !flagA;
        buton2.prop("value",(flagA?'Oyum geçerli mi?':'Yeniden başla'));
        mesajTemizle();
        $("#messages").css("display","inherit");
        $("#container").css("display","inherit");
        $("#printout").css("display","none");
        if (flagA) {
            oyTemizle();
            $( ".oylar" ).removeClass('disabled');
            buton1.css("display","none");
            flagB = false;
        } else {
            $( ".oylar" ).addClass('disabled');
            buton1.css("display","inherit");
            flagB = true;
            oyKontrol();
            mesajYaz();
        }
    });
    $("#disclaimer").html('<p>Bu site, 2022 KKTC Cumhuriyet Meclisi seçimlerinde seçmene yardımcı olmak amacıyla hazırlanmıştır. Hiçbir şekilde veri saklamamakta ve paylaşmamaktadır. Ayrıca, hiçbir şekilde resmi değer taşımamaktadır. Elde edilen sonuçların ilgili kanun/tüzük maddeleriyle uyuşmaması veya seçmeni yanlış yönlendirmesi halinde bu sitenin yapımcısı hiçbir şekilde bundan sorumlu tutulamaz.</p>');
    layOutTable();
    oyTemizle();
});

