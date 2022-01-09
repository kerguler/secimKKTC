/* 2018 Seçimleri
var partiler = ['TDP','MDP','TKPYG','UBP','DP','YDP','HP','CTP','Bağımsızlar'];
var bolgeler = ['Lefkoşa','Gazimağusa','Girne','Güzelyurt','İskele','Lefke'];
var karma = [[8,16],[6,13],[5,10],[2,4],[2,5],[1,2]];
var adaylar = {"UBP": {"Gazimağusa": ["Sunat Atun", "Oğuzhan Hasipoğlu", "Resmiye Canaltay", "Dursun Oğuz", "Hakan Dinçyürek", "Ersan Saner", "Hasan Onalt", "Canan Zeki", "İ.Güneş Güneşoğlu", "Ahmet Kaşif", "Gürsel Uzun", "Durdane Abi Acı", "Eylem Dolmacı"], "Güzelyurt": ["Ali Pilli", "Kemal Dürüst", "Menteş Gündüz", "Hatice Özler Şahin"], "Lefke": ["Aytaç Çaluda", "Fırtına Karanfil"], "İskele": ["Nazım Çavuşoğlu", "Önder Sennaroğlu", "Ümit Özkıran", "Yasemi Öztürk", "Fatma Darben"], "Girne": ["Kutlu Evren", "Ünal Üstel", "Bulut Akacan", "Ahmet Arslan", "Özdemir Berova", "İzlem Gürçağ Altuğra", "Zalihe Damdelen", "Selim Gökbörü", "Hüseyin Kayım", "Deniz Serbest"], "Lefkoşa": ["Hüseyin Özgürgün", "Faiz Sucuoğlu", "Ersin Tatar", "Savaş Atakan", "Hasan Taçoy", "Zorlu Töre", "Aydın Soyer", "Olgun Amcaoğlu", "Tahsin Ertuğruloğlu", "Ahmet Savaşan", "Türel Özer Öksüzoğlu", "Saffet Nadiri", "Fisun Özsun", "Emete Gözügüzelli", "Nurcan Yardımcı", "Ömra Can"]}, "HP": {"Gazimağusa": ["Hasan Topal", "Ayşegül Baybars", "Ramazan Gündoğdu", "Süleyman Canatan", "İrem Uygun", "Kemal Bağzıbağlı", "Şevki Kıralp", "Özgür Vehit", "Özbir Akbaşak", "Hilmiye Sezer Kumbur", "Hasan Sapsızoğlu", "Ercan Elçin", "Fikret Deniz"], "Güzelyurt": ["Hasan Büyükoğlu", "Emsal Emirzadeoğluları", "Naim Pınar", "Ayşe Gökyiğit"], "Lefke": ["İsmail Kaşot", "Lütfiye Fedai"], "İskele": ["Mesut Genç", "Hicran B.Fırat", "Halil Sakallı", "Ercan Beşerler", "Ahmet Güneş"], "Girne": ["Erek Çağatay", "Ahmet Özyalçın", "Baki Aygün", "Jale Refik Rogers", "Bihter Beyazyüz", "Sadık Ülker", "Cenk Dökmen", "Kemal Batman", "Yusuf Avcıoğlu", "İhsan Tuncalı"], "Lefkoşa": ["Kudret Özersay", "Tolga Atakan", "Gülşah Sanver Manavoğlu", "Fatma Kınış", "Teksen Köroğlu", "Cemre Günsel Esengin", "Serkan Mesutoğlu", "Evin Unutmaz", "Eylem Deliceırmak Erbilen", "Nurettin Çırakoğlu", "Orkun Bozkurt", "Tuğberk Emirzade", "Mehmet Özbilgehan", "Aral Moral", "Nihal Salman", "Sonuç Koyuncu"]}, "DP": {"Gazimağusa": ["Fikri Ataoğlu", "Afet Özcafer", "Azmiye Yınal", "Banu Kuman", "Hamide Çelik", "Sultan Vural", "Kenan Akın", "Tuncay Seymen", "Şevket Şenbülbül", "Ertan Kaygan", "Ali Anıl Yüce", "Elif İlgün", "Erol Karakış"], "Güzelyurt": ["Çelebi Ilık", "Meral Kızılkanat", "İsmet Esenyel", "Türker Yiğitcan"], "Lefke": ["Ersin Doğaç", "Rahme Öğütveren"], "İskele": ["Şirin Zaimağaoğlu", "Turgut Ceyda", "Halil Talaykurt", "Hüseyin Çebi", "İsmail Özkurt"], "Girne": ["Hande Kayasal", "Koral Çağman", "Anıl Kaya", "Cem İbrahim Hocaoğlu", "Gülşen Çataloğlu Birinci", "Aslı Babayiğit Cansız", "Ender Çabuker", "Altan Karaçay", "Enver Hoca", "Murat Erdoğan"], "Lefkoşa": ["Serdar Denktaş", "Eda Çelik", "Mert Taşkın", "Tigin Kişmir", "Okyay Sadıkoğlu", "Nihal Sofu", "Sedat Hacımehmet", "Ali Tunçtaşlı", "İpek Kabidan", "Rauf Ataöv", "Abdullah Aktolgalı", "Mehmet Burçaklı", "Tankut Rıfkı", "Nevzat Nevzat", "Hüseyin Akcan", "Servet Dinççetin"]}, "TKPYG": {"Gazimağusa": ["Sonay Adem", "Mustafa Emiroğluları", "Tamer Karakaşlı", "Ahmet İşbeceren", "Ali Gulle", "Bakiye Lord", "Emir Gül", "Cafer Koçak", "Serpil Çağansel", "Bahadır Cevher", "İbrahim Korhan", "Hibeti Kadı Evginel", "Umut Kadı"], "Güzelyurt": ["Zühal Koreli", "Emin Taşker", "İpek Özsoy", "Ümral Volkan"], "Lefke": ["Ali Üncü", "Hasan İzzet Dinçoğlu"], "İskele": ["Mustafa Tarhan", "Ali Şammali", "Mehmet Taş", "Esma Kızıl", "Hüseyin Beyaz"], "Girne": ["Salih Sonüstün", "Seral Çetindal", "Sevda Melek Bulut", "Ertuğrul Bildağ", "Elif Gümüşmaden", "Ali Kutluer", "Meryem Karaaziz", "Yurdaer Garip", "Güller Karamalli", "Yasin Kurt"], "Lefkoşa": ["Mehmet Çakıcı", "İzzet İzcan", "Tözün Tunalı", "Fahri Onbaşı", "Seda Okgül", "Mehmet Davulcu", "Seval Oyaltan", "Reşat Soylukal", "Kemal Aykutlu", "Fatma Alçıcıoğlu", "Bahire Korel", "Hediye Yiğiter", "Ayşe Can", "Yusuf Akama", "Ahmet Avano", "Uğur Barani"]}, "CTP": {"Gazimağusa": ["Erkut Şahali", "Hamit Caner", "Mustafa Naimoğulları", "Teberrüken Uluçay", "Asım Akansoy", "Aybike Yektaoğlu", "Şifa Çolakoğlu", "Ahmet Billuroğlu", "Cemal Mert", "Ceyhun Ümiter", "Mine Adalıer", "Derviş Karaca", "Bedia Balses Çeliker"], "Güzelyurt": ["Armağan Candan", "Filiz Besim", "Mehmet Çağlar", "Hüseyin Erçal"], "Lefke": ["Salahi Şahiner", "Teoman Oktay"], "İskele": ["Biray Hamzaoğulları", "Mehmet Ceylanlı", "Fikret Civisilli", "Selda Şafak", "Sedat Kılıç"], "Girne": ["Fazilet Özdenefe", "Fikri Toros", "Salih Sarpten", "Mahmut Kanber", "Salih İzbul", "Mustafa Ergüven", "Arzu Cankoy", "Çelen Özkaynak", "Şehan Tomgüsehan", "Ziya Tüzel"], "Lefkoşa": ["Tufan Erhürman", "Özdil Nami", "Sıla Usar İncirli", "Birikim Özgür", "Ahmet Hüdaoğlu", "Doğuş Derya", "Günay Kiprit", "Ali Karavezirler", "Muhittin Tolga Özsağlam", "Fatma Miralay", "Feriha Tel", "Kadri Fellahoğlu", "Mutlu Azgın", "Hasan Ulaş Altıok", "Ülkü Taşseven", "Şerife Korucan"]}, "MDP": {"Gazimağusa": ["Alpaslan Diktaş", "Serhat Özanıl", "Seçkin Akalın", "Nuh Erk", "Umut Helvacıoğlu", "Ayşe Karakuzu"], "Güzelyurt": ["Rasim Can", "Banu Diktaş"], "Lefke": ["Tuncay Özkaraşahin"], "İskele": ["Kezban Ülsol", "Aziz Tanseloğlu", "Fahri Büyük"], "Girne": ["Erkan Canlıer", "Muhammed Kayın", "Hakan Ekinci", "Mehmet Bay", "İnci Sokollu", "Nur Çınar", "Aydan Ortaç", "Haşim Demir"], "Lefkoşa": ["Ufuk Üçay", "Hüseyin Mert Coşkun", "Hüseyin Andaç", "Soykan Türken", "Adem Türker", "İsmail Başarır", "Mehmet Altunçay", "Derya Karmaner", "Mehmet Sonap"]}, "TDP": {"Gazimağusa": ["Hüseyin Angolemli", "Yeşim Dede", "Mürüde Çelikağ", "Ece Balcı", "Ercan Hoşkara", "Barış Başel", "Yasemin Çobanoğlu", "Ahmet Denizer", "Taçam Gökbörü", "İlknur Işıl Türkmen", "Ümit Karagözlü", "Ümit Emin", "Seyit Ahmet Güler"], "Güzelyurt": ["Kamil Gilanlıoğulları", "Neşe Ertok", "Adnan İşbilir", "Metin Ertop"], "Lefke": ["Orhun Karagözlü", "Cem Kızılgök"], "İskele": ["Cemaliye Soğancı", "Salim Özbolat", "Erkut Yılmabaşar", "Yaşar Gündeğer", "Hasan Bilgehan"], "Girne": ["Zeki Çeler", "Ayşe Öztabay", "İlkşen Varoğlu Atik", "Zafer Hüray", "Meral Başkal", "Ziya Egemen Sencer", "Sibel Karaca", "Faize Sertel", "Hamide Dağkıranlar", "Elmas Tokay"], "Lefkoşa": ["Cemal Gürsel Özyiğit", "Asım İdris", "Suphi Hüdaoğlu", "Hıvsiye Özlem Gürkut", "Halil Hızal", "Boysan Boyra", "Çelen Çağansoy", "Evrim Hınçal", "Barış Erkmen", "Mine Atlı", "Mustafa Erk", "Tekin Birinci", "Adnan Eraslan", "Ediz Tunçel", "Bülent Kılıçoğlu", "Dağdoğan Sadrazam"]}, "YDP": {"Gazimağusa": ["Erhan Arıklı", "Mahmut Erden", "Fırat Yılmaz", "İlter Ömeroğlu", "Bülent Fevzioğlu", "Şeyda Luckinger", "Mahmut Hayta", "Mehmet Kelebek", "Rakkate Fatı", "Ayhan Demir", "Berna Çelik", "Bünyamin Öztürk", "Nurcan Çiftci"], "Güzelyurt": ["Abdullah Sebahattin Alıcı", "Gökhan Saraç", "Dilek İnik", "Ekrem Kara"], "Lefke": ["Nejla Gazi", "Emrullah Alşan"], "İskele": ["İsmet İlkhan", "Yakup İskender", "Ahmet Dinç", "Mustafa Demiryürek", "Ejder Aslanbaba"], "Girne": ["Fuat Tek", "Arzu Pürtül", "Mehmet Ünal Bay", "Sunalp Derviş Sencer", "Okan Erdemsiz", "Güldem Akdağ", "Canan Canbolat", "Derin Okçelen", "Yıldız Altuntaş", "Gültekin Ben"], "Lefkoşa": ["Bertan Zaroğlu", "Turan Büyükyılmaz", "Enver Öztürk", "H.İlker İpekdal", "Yusuf Çelik", "Sinem Tip", "Hale Alibaba Erden", "Mustafa Ulaş", "Hüseyin Azer Özkan", "Ali Yenen", "Emre Dalgıç", "Mete Topçu", "Musa Suiçmez", "Özen Güneralp", "Bayram Özel", "Feçriye Yönder"]}, "Bağımsızlar": {"Gazimağusa": ["Cuma Ülker", "Korhan Ekcan"], "Güzelyurt": ["Ayhan Korel"], "Girne": ["Gül Çataloğlu"], "Lefkoşa": ["Osman Zorba", "Cüneyt Hüseyin Küçük", "Çetin Sadeli", "Ashraf Faiq"], "İskele": ["Ali Sanatkar"]}}
*/
/* 2022 Seçimleri */
var partiler = ['CTP','HP','UBP','DP','TDP','BY','YDP','TKPYG','Bağımsızlar'];
var bolgeler = ['Lefkoşa','Gazimağusa','Girne','Güzelyurt','İskele','Lefke'];
var karma = [[8,16],[6,13],[5,11],[1,3],[2,5],[1,2]];
var karma_bolge = {
    'Lefkoşa': [8,16],
    'Gazimağusa': [6,13],
    'Girne': [5,11],
    'Güzelyurt': [1,3],
    'İskele': [2,5],
    'Lefke': [1,2]
};
var yeterli_karma = karma.reduce(function(a,b) { return [a[0]+b[0], a[1]+b[1]]; });
var adaylar = {
    "BY": {
        "Gazimağusa": ["Sabahat Aydıç", "Yusuf Bülent Yüksel", "Sevgül Uzkan", "Hüseyin Akçengel", "Melisa Koloz", "Ahmet Güvenler", "Serap Kedi", "Hilmi Buruk", "Umut Ersoy", "Hasan Çağın Tezbaşar", "Cenk Tuncay", "Arif Bayraktar", "Tağmaç Özberk"],
        "Güzelyurt": ["Nil Çukurovalı Özkızan", "Neriman Çukurovalı", "Meryem Nazlı"],
        "Lefke": ["Feray Yalçuk", "Hüseyin Tezbaşar"],
        "İskele": ["Zekiye Şentürkler", "Hakan Tanıttıran", "Nermin Sontaş", "Memet Kılıç", "Bülent Kurt"],
        "Girne": ["Zimzer Sertel", "İbrahim Bulut", "Ayla Aydoğan Gökay", "Yusuf Özgü Sertel", "Haydar Dolmacı", "Güngör Acar", "Enver Timur Gürzap", "Halil İbrahim Keleşzade", "Gülertan Aşık", "Salih Hayaloğlu", "Mustafa Batak"],
        "Lefkoşa": ["Cansu N.Nazlı", "Mustafa Erk", "Cemre İpçiler", "Münür Rahvancıoğlu", "Özlem Deligöz", "Ahmet Karakaşlı", "Nazen Şansal", "Gazi Gök", "Fatma Sezikli", "Tahsin Oygar", "Sunalp Asena", "Aziz Güven", "Behiç Anibal", "Mustafa Bülent Çakır", "Evren Cem", "Mustafa Keleşzade"]
    },
    "UBP": {
        "Gazimağusa": ["Sunat Atun", "Dursun Oğuz", "Oğuzhan Hasipoğlu", "Mehmet Başman", "Hakan Dinçyürek", "Resmiye Eroğlu Canaltay", "İrem Uygun Soyşen", "Hüseyin Çavuş", "Meryem Boyacı", "Gürsel Uzun", "Bora Akkuş", "Sultan Vural", "Elif Abiç"],
        "Güzelyurt": ["Ali Pilli", "Ziya Öztürkler", "Hasan Büyükoğlu"],
        "Lefke": ["Fırtına Karanfil", "Aytaç Çaluda"],
        "İskele": ["Nazım Çavuşoğlu", "Yasemi Öztürk", "Mesut Genç", "Emrah Yeşilırmak", "Osman Kırşan"],
        "Girne": ["Kutlu Evren", "Ünal Üstel", "İzlem Gürçağ Altuğra", "Özdemir Berova", "Ferhat Erişir", "Türel Özer Öksüzoğlu", "Hasan Küçük", "Selim Gökbörü", "Mehmet Ali Tunçbilek", "Zalihe Damdelen", "Münevver Çağın"],
        "Lefkoşa": ["Faiz Sucuoğlu", "Olgun Amcaoğlu", "Ahmet Savaşan", "Sadık Gardiyanoğlu", "Hasan Taçoy", "Bertan Zaroğlu", "Alişan Şan", "Mehmet Çelebioğlu", "Savaş Atakan", "Zorlu Töre", "Özgür Arıkan", "Havva Dağsever", "Fisun Özsun", "Nurcan Yardımcı", "Özlem Sefer", "Sevil Yönlüer"]
    },
    "HP": {
        "Gazimağusa": ["Ayşegül Baybars", "Berna Çelik Doğruyol", "Arda Kalfaoğlu", "Tolga Özçelik", "Ethem Akmercan", "Raif İlkman", "Hüseyin Tabur", "Oğuz Akançay", "Çiler Demirtay", "İlknur Çetinkaya", "N.Elçin Erbay", "Orhan Delikuş", "Recep Sayım"],
        "Güzelyurt": ["Ramadan Durmazer", "Mazlum Kortaş", "Salahiddin İskifoğlu"],
        "Lefke": ["Özdemir Şanlıdağ", "Safure Deniz"],
        "İskele": ["Ercan Beşerler", "Kani Buranay", "Emin Onuş", "Havva Elkovan", "Hanife Demir"],
        "Girne": ["Erek Çağatay", "Jale Refik Rogers", "Ahmet Tokatlıoğlu", "Yusuf Avcıoğlu", "Ledün Caymaz", "Hasret Balcıoğlu", "Aydın Erhuy", "Erhan Onuralp", "Muhammet Ercan", "Bahadır Ünlü", "Derya Hoca"],
        "Lefkoşa": ["Kudret Özersay", "Gülşah Sanver Manavoğlu", "Serhat Kotak", "Teksen Köroğlu", "Kürşat Köseoğlu", "Devran Vudalı", "Ersin Tünay", "Özgül Çırakoğlu", "Mustafa Kendir", "Ahmet Dağcın", "Batuhan Cantay", "Leman Nihan Pekgüleryüz", "Zühal Tunalı", "Volkan Bilal Emirkanı", "Ülkü Biranlı", "Yıldız Büyükçolpan Yılmaz"]
    },
    "DP": {
        "Gazimağusa": ["Fikri Ataoğlu", "Mücahit Kaya", "Şirin Zaimağaoğlu", "Mehmet Hasgüler", "Ahmet Demirel", "Ömer Gökel", "Fikret Deniz", "Nuray Uncu", "Benek Çağakanlı", "Ali Anıl Yüce", "Soyhan Bilgeer", "Alp Aslan Diktaş", "Leyla Avğın"],
        "Güzelyurt": ["Rahme Öğütveren", "Erkan Kaya", "Eliz Fellahoğlu"],
        "Lefke": ["Gürsel Bağlaş", "Hüseyin Turaç"],
        "İskele": ["Mine Emiroğlu", "Maşallah Cihangir", "Hür Alevkayalı", "Musa Nurçin", "Çağla Eroğlu"],
        "Girne": ["Sarhat Akpınar", "Hande Kayasal Çelikden", "Redif Nurel", "Harun Demir", "Cemre Seziner", "Orsel Neşe", "Enver Hoca", "Aslı Babayiğit Cansız", "Arif Uzunali", "Atilla Deva", "Nazim Arslan"],
        "Lefkoşa": ["Ali Tunçtaşlı", "Mert Taşkın", "Mehmet Çıldır", "Hasan Tosunoğlu", "Serhan Aktunç", "Özlem Dinçoğlu", "Sinem Tip", "Funda Özsakınç", "İnanç Babaliki", "Hüseyin Akcan", "Fatma Öztürk Çatal", "Ali Horoz", "Mehmet Ortak", "Emel Sayar", "Çetin Sadeli", "Mete Bayramoğlu"]
    },
    "TKPYG": {
        "Gazimağusa": ["Mustafa Emiroğluları", "Asiye Beyaz", "Emin Soyal", "Hüseyin Hakansoy", "Umut Kadı", "Zeynep Dönmez", "Ayhan Çakıcı Eş", "Mahir Demir", "Yasin Zateroğulları", "Ali Özaltın", "Emir Genç", "Üzeyir Köstü", "Azat Kızıl"],
        "Güzelyurt": ["Dilek Ötün Say", "Gönül Kargılı", "Şifa Ulutaş"],
        "Lefke": ["Tayfur Demirci", "Hurşit Öztemiz"],
        "İskele": ["Kemal Yıldız", "Hüsnü Arslanyürek", "Cennet Güneri", "İdris Koç", "Fatih Bulut"],
        "Girne": ["Yurdaer Garip", "Sevilay Dolmacı", "Seral Çetindal", "Salih Ataser", "Fatma Köroğlu", "Şefik Dereli", "Celil Akarpınar", "Muhammet Gözay", "Hülya Kasap", "Hüseyin Özdurak", "Gonca Çağlar Şar"],
        "Lefkoşa": ["Mehmet Çakıcı", "Ersen Sururi", "İlke Özgür Davulcu", "Zühal Koreli", "Ayşe Buran", "Sami Dayıoğlu", "İlker Balkır", "Ahmet Kablan", "Hakkı Demir", "Yalçın Ertugan", "Naile Acar", "Fezile Özataç", "Korhan Şakir", "Yeşim Uludağ Mertli", "Safiye Aydın", "Mehmet Eş"]
    },
    "CTP": {
        "Gazimağusa": ["Asım Akansoy", "Seran Aysal", "Teberrüken Uluçay", "Yasin Yeni", "Erkut Şahali", "Hamit Caner", "Şifa Çolakoğlu", "Behcet Öznacar", "Ceyhun Ümiter", "Gaye Astan Çoban", "Derviş Karaca", "Cihan Tunçeli", "Erkan Tekeli"],
        "Güzelyurt": ["Armağan Candan", "Mehmet Bozer", "Aslı Murat"],
        "Lefke": ["Salahi Şahiner", "Tuncay Sarıyer"],
        "İskele": ["Fide Kürşat", "Biray Hamzaoğulları", "Suphi Coşkun", "Fikret Civisilli", "Yalçın Kömürcügil"],
        "Girne": ["Ongun Talat", "Fikri Toros", "Ceyhun Birinci", "Fazilet Özdenefe Kürşat", "Salih Sarpten", "Pembe Ardıç", "Alpay Çelebi", "Mahmut Kanber", "Özge Tahiroğlu", "Niyal Öztürk", "Mustafa İlgen"],
        "Lefkoşa": ["Tufan Erhürman", "Ürün Solyalı", "Derviş Deniz", "Sıla Usar İncirli", "Muhittin Tolga Özsağlam", "Doğuş Derya", "Devrim Barçın", "Filiz Besim", "Ahmet Muratoğlu", "Ödül Muhtaroğlu", "Cenk Paşa", "Haffe Işısal", "Hasan Ecer", "Ayşe Alioğlu", "Derviş Bladanlı", "Hülya Batunlu"]
    },
    "TDP": {
        "Gazimağusa": ["Yeşim Dede", "Yasemin Çobanoğlu", "İlyas Yağlı", "Boysan Boyra", "Erkan Sarı", "Arzu Demirel", "Olgu Tansuğ", "Hüseyin Angolemli", "Ecevit Aspri", "Mustafa Tekman", "Celal Nefesoğlu", "Yüksel Altuner", "Ercan Yüzüak"],
        "Güzelyurt": ["Faik Arçay", "Kamil Gilanlıoğulları", "Çayan Volkan"],
        "Lefke": ["Turgut Reis Karabetça", "Hazan İzzet Dinçoğlu"],
        "İskele": ["Elif Özyiğit Cengiz", "Mürüde Çelikağ", "Mehmet Barut", "Tülay Alpler", "Metin İsmet Pekri"],
        "Girne": ["Evrim Benzetsel", "Zeki Çeler", "Şirin Telli", "Dilara Korkmaz", "Sibel Karaca", "Hamide Dağkıranlar", "Elmas Tokay", "Nuri Sılay", "Sibar Aybar", "Tolga Atamer", "Mustafa Abraş"],
        "Lefkoşa": ["Cemal Gürsel Özyiğit", "Halil Hızal", "Nalan Ersümer Aktan", "Safiye Özaltıner", "Filiz Uzun", "Mustafa Yenigüç", "Çelen Çağansoy", "Aytaç Ali Baklacı", "H.Doğa Yalçın", "Yeşim İlkan", "Mehmet Burhan", "Nevzat Özkunt", "Aktan Erdoğa", "Kamil Yayıcı", "Ömer Metbulut", "Tuğçe Özmert"]
    },
    "YDP": {
        "Gazimağusa": ["Erhan Arıklı", "Durdane Abi Acı", "İlter Ömeroğlu", "Habibe Çetin", "Kenan Akın", "Hatice Seçkin", "İbrahim Halil Akçabay", "Ali Yakar", "Mahmut Hayta", "Tamer Karakaşlı", "Kansu Aksu", "Arzu Pürtül", "Sema Kelebek"],
        "Güzelyurt": ["Elmas Süzgen", "Hakan Bozkurt", "Gökhan Saraç"],
        "Lefke": ["Nejla Gazi", "Lisani Yalçuk"],
        "İskele": ["Neslihan Vural", "Aykut Günel", "Arif Özbayrak", "Hakkı Kandemir", "Sefa Kurukafa"],
        "Girne": ["Ramazan Karal", "Reyhan Aydın", "Ercan Turhan", "Fatma Bahadır", "Mehmet Tunçtürk", "Şerif Yeşil", "Fatma Baysal", "Güller Karamalli", "Nurşah Çiftçi", "Süleyman Çakır", "Sami Güneş"],
        "Lefkoşa": ["Enver Öztürk", "Talip Atalay", "Eda Yenen", "Subhi Asiltürk", "Kadir Yel", "Yılmaz Kaldırım", "Erşah Sabit Yılmaz", "Özen Topçu", "Ali Yenen", "Özlem Ayşe Doğandemir", "Mustafa Yeşil", "Ömer Yayla", "Banu Bozlakoğlu", "Hüseyin Gürlek", "Metin Akar", "Zeynep Sinem Keser"]
    },
    "Bağımsızlar": {
        "Gazimağusa": ["İsmail Yıldız"],
        "Lefkoşa": ["Adem Yazıcı"],
        "İskele": ["Ali Sanatkar"]
    }
};