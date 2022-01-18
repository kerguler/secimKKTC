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

var partVue = new Vue({
    el: '#parti-container',
    data: {
        parti_listesi: partiler,
        sehir_listesi: bolgeler,
        aday_listesi: adaylar,
        karma_sehir: karma_bolge,
        karma_limit: yeterli_karma,
        muhur: "",
        oy_listesi: [],
        gecerli_pusula: false,
        gecerli_aday: {},
        fcs_parti: 0,
        fcs_sehir: focus_sehir,
        zoom: 1.0,
        zoom_timeout: false,
        width: 320,
        not: ""
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
            addRemove(this.gecerli_aday,[parti,sehir]);
            return this.gecerli_aday[parti][sehir].hasOwnProperty(aday) && this.gecerli_aday[parti][sehir][aday];
        },
        gecerliAdaySay: function() {
            var that = this;
            var gecerli = 0;
            Object.keys(this.gecerli_aday).forEach(function(parti){
                Object.keys(that.gecerli_aday[parti]).forEach(function(sehir){
                    Object.keys(that.gecerli_aday[parti][sehir]).forEach(function(aday){
                        gecerli += that.gecerliAday(parti,sehir,aday);
                    })
                })
            });
            return gecerli;
        },
        toplamTercih: function(parti,sehir) {
            var that = this;
            var toplam = 0;
            this.oy_listesi.forEach(function(oy) {
                if (sehir=="" && parti=="") { toplam += 1; }
                else if (sehir=="" && oy['parti']==parti) { toplam += 1; }
                else if (parti=="" && oy['sehir']==sehir) { toplam += 1; }
                else if (oy['parti']==parti && oy['sehir']==sehir) { toplam += 1; }
            });
            return toplam;
        },
        hangiParti: function(parti,sehir) {
            var that = this;
            var toplam = {};
            this.oy_listesi.forEach(function(oy) {
                if (sehir=="" && parti=="") { toplam[oy['parti']] = 1; }
                else if (sehir=="" && oy['parti']==parti) { toplam[oy['sehir']] = 1; }
                else if (parti=="" && oy['sehir']==sehir) { toplam[oy['parti']] = 1; }
                else if (oy['parti']==parti && oy['sehir']==sehir) { return 1; }
            });
            return Object.keys(toplam);
        },
        gecerliMuhur: function() {
            return this.muhur!="";
        },
        gecerliSehir: function(sehir,gecerli) {
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
            var that = this;
            if (!this.gecerliMuhur() && this.oy_listesi.length==0) {
                /* Bos */
                this.gecerli_pusula = false;
                this.gecerli_aday = {};
                this.not = "Oy kullanmadınız";
            } else if (this.gecerliMuhur() && this.oy_listesi.length==0) {
                /* Muhur */
                this.gecerli_pusula = true;
                this.gecerli_aday = {};
                this.not = "Oyunuz geçerlidir";
            } else if (this.gecerliMuhur() && this.oy_listesi.length>0) {
                /* Muhur + Tercih */
                var p = this.hangiParti("","");
                if (p.length>1 || p[0]!=this.muhur) {
                    this.gecerli_aday = {};
                    this.not = "Mühür vurup başka bir partiden tercih yaptınız";
                } else {
                    this.gecerli_pusula = true;
                    this.gecerli_aday = {};
                    this.not = ""
                    var bazi = false;
                    this.sehir_listesi.forEach(function(sehir) {
                        var s = that.toplamTercih("",sehir);
                        if (s == 0) { return; }
                        else if (s == that.karma_sehir[sehir][0]) {
                            that.gecerliSehir(sehir,true);
                        } else {
                            that.gecerliSehir(sehir,false);
                            that.not += sehir+" bölgesinde "+(["az","fazla"][+(s>that.karma_sehir[sehir][0])])+" tercih yaptınız<br/>";
                            bazi = true;
                        }
                    });
                    if (bazi) {
                        this.not += "Bazı tercihleriniz geçersizdir";
                    } else {
                        this.not += "Oyunuz geçerlidir";
                    }
                }
            } else {
                /* Karma */
                this.gecerli_aday = {};
                this.not = ""
                this.sehir_listesi.forEach(function(sehir) {
                    var s = that.toplamTercih("",sehir);
                    if (s == 0) { return; }
                    else if (s < that.karma_sehir[sehir][0]) {
                        that.gecerliSehir(sehir,false);
                        that.not += sehir+" bölgesinde az tercih yaptınız<br/>";
                    } else if (s > that.karma_sehir[sehir][1]) {
                        that.gecerliSehir(sehir,false);
                        that.not += sehir+" bölgesinde fazla tercih yaptınız<br/>";
                    } else {
                        var p = that.hangiParti("",sehir);
                        if (p.length==1 && s>1) {
                            that.gecerliSehir(sehir,false);
                            that.not += sehir+" bölgesinde tek partili tercih yaptınız<br/>";
                        } else {
                            that.gecerliSehir(sehir,true);
                        }
                    }
                });
                var gecerli = this.gecerliAdaySay();
                if (gecerli < this.karma_limit[0]) {
                    this.gecerli_pusula = false;
                    this.gecerliSehir("",false);
                    this.not += "En az "+String(this.karma_limit[0])+" geçerli tercih yapmalısınız";
                } else if (gecerli > this.karma_limit[1]) {
                    this.gecerli_pusula = false;
                    this.not += "En fazla "+String(this.karma_limit[1])+" geçerli tercih yapabilirsiniz";
                } else {
                    this.gecerli_pusula = true;
                    this.not += "Oyunuz geçerlidir";
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
            this.fcs_parti = 0;
            this.sehir_listesi.forEach(function(sehir) {
                that.fcs_sehir[sehir] = false;
            })
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
            this.oyKontrol();
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
        }
    }
});

partVue.emptyOylar();
