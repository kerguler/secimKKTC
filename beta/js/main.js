function addRemove(dict,keys) {
    keys.forEach(function(k) {
        if (!dict.hasOwnProperty(k)) { dict[k] = {}; }
        dict = dict[k];
    });
}

var focus_sehir = {};
bolgeler.forEach(function(sehir) {
    focus_sehir[sehir] = false;
})

var tercih_ozeti = {};
bolgeler.forEach(function(sehir) {
    tercih_ozeti[sehir] = {'tercih_toplami':0};
})

var partVue = new Vue({
    el: '#parti-container',
    data: {
        parti_listesi: partiler,
        sehir_listesi: bolgeler,
        aday_listesi: adaylar,
        karma_sehir: karma_bolge,
        karma_limit: yeterli_karma,
        oy_listesi: [],
        muhur: "",
        tercih_ozeti: tercih_ozeti,
        parti_ozeti: {},
        fcs_parti: 0,
        fcs_sehir: focus_sehir,
        not: "",
        gecerli_pusula: false,
        gecerli_aday: {},
        zoom: 1.0,
        zoom_timeout: false,
        width: 320
    },
    created() {
        window.addEventListener("resize", this.resize);
    },
    destroyed() {
        window.removeEventListener("resize", this.resize);
    },
    methods: {
        clearPage: function() {
            if (confirm("Sayfayı temizlemek istediğinizden emin misiniz?")) {
                this.emptyOylar();
            }
        },
        print: function() {
            if (this.gecerli_pusula == false) {
                alert("Oyunuz geçerli değil");
                return;
            }
            var opened = window.open("");
            var that = this;
            var html = "<ol style='list-style:none; font-family: monospace, sans-serif;'><li>Mühür --- "+this.hangiMuhur()+"</li>";
            var oylar = {};
            this.oy_listesi.forEach(function(oy) {
                addRemove(oylar,[oy['parti'],oy['sehir'],oy['aday']]);
            });
            this.parti_listesi.forEach(function(parti) {
                that.sehir_listesi.forEach(function(sehir) {
                    if (!that.aday_listesi[parti].hasOwnProperty(sehir)) { return; }
                    that.aday_listesi[parti][sehir].forEach(function(aday,index) {
                        if (oylar.hasOwnProperty(parti) &&
                            oylar[parti].hasOwnProperty(sehir) && 
                            oylar[parti][sehir].hasOwnProperty(aday) &&
                            that.gecerliAday(parti,sehir,aday)) {
                                html += "<li>Tercih --- "+parti+" --- "+sehir+" --- "+String(index+1)+". "+aday+"</li>";
                        }
                    })
                })
            })
            html += "</ol>";
            opened.document.write("<html><head><title>KKTC Seçimler</title></head><body>"+html+"</body></html>");
        },
        resize: function(e) {
            var that = this;
            if (this.zoom_timeout) { return; }
            this.zoom_timeout = setTimeout(function() { 
                that.zoom = Math.min(2.0, document.documentElement.clientWidth / that.width);
                clearTimeout(that.zoom_timeout);
                that.zoom_timeout = false;
            }, 100);
        },
        gecerliAday: function(parti,sehir,aday) {
            if (this.gecerli_pusula == false) {
                return false;
            }
            addRemove(this.gecerli_aday,[parti,sehir]);
            return this.gecerli_aday[parti][sehir].hasOwnProperty(aday) && this.gecerli_aday[parti][sehir][aday];
        },
        gecerliMuhur: function() {
            return this.gecerli_pusula;
        },
        hepsiGecerlisiz: function(gecerli,sehir="") {
            var j;
            for (j=0; j<this.oy_listesi.length; j++) {
                var oy = this.oy_listesi[j];
                if (sehir=="" || oy['sehir']==sehir) {
                    addRemove(this.gecerli_aday,[oy['parti'],oy['sehir']]);
                    this.gecerli_aday[oy['parti']][oy['sehir']][oy['aday']] = gecerli;
                }
            }
        },
        oyKontrol: function() {
            if (this.muhur=="" && this.oy_listesi.length==0) {
                /* Bos */
                this.gecerli_pusula = false;
                this.not = "Oy kullanmadınız";
            } else if (this.muhur!="" && this.oy_listesi.length==0) {
                /* Muhur */
                this.gecerli_pusula = true;
                this.not = "Oyunuz geçerlidir";
            } else if (this.muhur!="" && this.oy_listesi.length>0) {
                /* Muhur + Tercih */
                var p = Object.keys(this.parti_ozeti);
                if (p.length>1) {
                    this.gecerli_pusula = false;
                    this.not = "Mühür vurup birden fazla partiden tercih yaptınız";
                } else if (p[0]!=this.muhur) {
                    this.gecerli_pusula = false;
                    this.not = "Mühür vurup başka bir partiden tercih yaptınız";
                } else {
                    this.gecerli_aday = {};
                    var bazi = false;
                    var i;
                    for (i=0; i<this.sehir_listesi.length; i++) {
                        var sehir = this.sehir_listesi[i];
                        if (this.tercih_ozeti[sehir]['tercih_toplami']==0) { continue; }
                        var gecerli = this.tercih_ozeti[sehir]['tercih_toplami']==this.karma_sehir[sehir][0];
                        if (!gecerli) { bazi=true; }
                        this.hepsiGecerlisiz(gecerli,sehir);
                    }
                    this.gecerli_pusula = true;
                    if (bazi) {
                        this.not = "Bazı tercihleriniz geçersizdir";
                    } else {
                        this.not = "Oyunuz geçerlidir";
                    }
                }
            } else {
                /* Karma */
                if (this.oy_listesi.length < this.karma_limit[0]) {
                    this.gecerli_pusula = false;
                    this.not = "En az "+String(this.karma_limit[0])+" tercih yapmalısınız";
                } else if (this.oy_listesi.length > this.karma_limit[1]) {
                    this.gecerli_pusula = false;
                    this.not = "En fazla "+String(this.karma_limit[1])+" tercih yapabilirsiniz";
                } else {
                    gecersiz_sehir = [];
                    var i;
                    for (i=0; i<this.sehir_listesi.length; i++) {
                        var sehir = this.sehir_listesi[i];
                        if (this.tercih_ozeti[sehir]['tercih_toplami']==0) { continue; }
                        if (this.tercih_ozeti[sehir]['tercih_toplami'] < this.karma_sehir[sehir][0]) {
                            gecersiz_sehir.push([sehir,0]);
                        } else if (this.tercih_ozeti[sehir]['tercih_toplami'] > this.karma_sehir[sehir][1]) {
                            gecersiz_sehir.push([sehir,1]);
                        } else if (Object.keys(this.tercih_ozeti[sehir]).length == 2 && 
                                   (this.karma_sehir[sehir][0] > 1 || this.tercih_ozeti[sehir]['tercih_toplami'] > 1)) { // tercih_toplami + 1 parti + 1 tercih
                            gecersiz_sehir.push([sehir,2]);
                        }
                    }
                    if (gecersiz_sehir.length > 0) {
                        this.gecerli_pusula = false;
                        this.not = "";
                        var j;
                        for (j=0; j<gecersiz_sehir.length; j++) {
                            this.not += gecersiz_sehir[j][0]+" bölgesinde "+(["az","fazla","tek partili"][gecersiz_sehir[j][1]])+" tercih yaptınız<br/>";
                        }
                    } else {
                        this.hepsiGecerlisiz(true);
                        this.gecerli_pusula = true;
                        this.not = "Oyunuz geçerlidir";
                    }
                }
            }
        },
        focuSehir: function(sehir) {
            this.fcs_sehir[sehir] = !this.fcs_sehir[sehir];
        },
        focuParti: function(parti) {
            return this.parti_listesi.indexOf(parti)==this.fcs_parti;
        },
        previousParti: function(change) {
            if (change) {
                this.fcs_parti -= 1;
            } else {
                return this.fcs_parti;
            }
        },
        nextParti: function(change) {
            if (change) {
                this.fcs_parti += 1;
            } else {
                return this.fcs_parti < this.parti_listesi.length-1;
            }
        },
        emptyOylar: function() {
            var that = this;
            this.oy_listesi = [];
            this.muhur = "";
            this.sehir_listesi.forEach(function(sehir) {
                that.tercih_ozeti[sehir] = { 'tercih_toplami':0 };
            })
            this.fcs_parti = 0;
            this.sehir_listesi.forEach(function(sehir) {
                that.fcs_sehir[sehir] = false;
            })
            this.parti_ozeti = {};
            this.gecerli_aday = {};
            this.oyKontrol();
            this.resize();
        },
        oyAddRemove: function(parti,sehir,aday) {
            var i = this.indexOf(parti,sehir,aday);
            if (i!=-1) {
                this.oy_listesi.splice(i,1);
            } else {
                this.oy_listesi.push({
                    'parti': parti,
                    'sehir': sehir,
                    'aday': aday
                });
            }
            this.sayOzet();
        },
        indexOf: function(parti,sehir,aday) {
            var i;
            for (i=0; i<this.oy_listesi.length; i++) {
                if (this.oy_listesi[i]['parti']==parti && 
                    this.oy_listesi[i]['sehir']==sehir &&
                    this.oy_listesi[i]['aday']==aday) {
                        return i;
                    }
            }
            return -1;
        },
        partiMi: function(parti) {
            return parti!='Bağımsızlar';
        },
        secilmisMi: function(parti,sehir,aday) {
            return this.indexOf(parti,sehir,aday)!=-1;
        },
        muhurVarMi: function(parti) {
            return this.muhur == parti;
        },
        hangiMuhur: function() {
            return this.muhur == "" ? "Yok" : this.muhur;
        },
        muhurAddRemove: function(parti) {
            if (this.muhurVarMi(parti)) {
                this.muhur = "";
            } else if (this.partiMi(parti)) {
                this.muhur = parti;
            }
            this.oyKontrol();
        },
        sayOzet: function() {
            var that = this;
            this.parti_ozeti = {};
            this.sehir_listesi.forEach(function(sehir) {
                that.tercih_ozeti[sehir] = { 'tercih_toplami':0 };
            })
            this.oy_listesi.forEach(function(elm) {
                if (!that.tercih_ozeti.hasOwnProperty(elm['sehir'])) {
                    that.tercih_ozeti[elm['sehir']] = { 'tercih_toplami': 0 };
                }
                if (!that.tercih_ozeti[elm['sehir']].hasOwnProperty(elm['parti'])) {
                    that.tercih_ozeti[elm['sehir']][elm['parti']] = 0;
                }
                that.tercih_ozeti[elm['sehir']]['tercih_toplami'] += 1;
                that.tercih_ozeti[elm['sehir']][elm['parti']] += 1;
                //
                if (!that.parti_ozeti.hasOwnProperty(elm['parti'])) {
                    that.parti_ozeti[elm['parti']] = 0;
                }
                that.parti_ozeti[elm['parti']] += 1;
            });
            this.oyKontrol();
        },
        ozetteSehir: function(sehir) {
            return this.tercih_ozeti.hasOwnProperty(sehir);
        },
        ozetteParti: function(sehir,parti) {
            return this.ozetteSehir(sehir) && this.tercih_ozeti[sehir].hasOwnProperty(parti);
        },
        getOzetteParti: function(sehir,parti) {
            return this.ozetteParti(sehir,parti) ? this.tercih_ozeti[sehir][parti] : 0;
        }
    }
});

partVue.emptyOylar();
