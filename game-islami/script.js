// ============================================================
//  DATA SOAL LENGKAP (9 GAME × 3 LEVEL × 15 SOAL = 405 SOAL)
//  SEMUA ISLAMI — TIDAK ADA SOAL AGAMA LAIN
// ============================================================

const soalByLevel = {
    doa: {
        easy: [
            { kegunaan: "Doa sebelum makan", jawaban: "Bismillah", options: ["Bismillah", "Alhamdulillah", "Subhanallah", "Allahu Akbar"] },
            { kegunaan: "Doa setelah makan", jawaban: "Alhamdulillah", options: ["Alhamdulillah", "Bismillah", "Rabbana", "La ilaha illallah"] },
            { kegunaan: "Doa sebelum tidur", jawaban: "Bismikallahumma", options: ["Bismikallahumma", "Bismillah", "Alhamdulillah", "Allahu Akbar"] },
            { kegunaan: "Doa bangun tidur", jawaban: "Alhamdulillahilladzi", options: ["Alhamdulillahilladzi", "Bismillah", "Subhanallah", "Allahu Akbar"] },
            { kegunaan: "Doa masuk masjid", jawaban: "Allahummaftah li", options: ["Allahummaftah li", "Rabbana atina", "Bismillah", "Subhanallah"] },
            { kegunaan: "Doa keluar masjid", jawaban: "Allahumma inni as'aluka", options: ["Allahumma inni as'aluka", "Allahummaftah li", "Alhamdulillah", "Astaghfirullah"] },
            { kegunaan: "Doa masuk rumah", jawaban: "Bismillah walajna", options: ["Bismillah walajna", "Bismillah", "Alhamdulillah", "Allahu Akbar"] },
            { kegunaan: "Doa keluar rumah", jawaban: "Bismillahi tawakkaltu", options: ["Bismillahi tawakkaltu", "Bismillah", "Alhamdulillah", "Allahu Akbar"] },
            { kegunaan: "Doa naik kendaraan", jawaban: "Subhanalladzi sakhkhara", options: ["Subhanalladzi sakhkhara", "Bismillah", "Alhamdulillah", "Allahu Akbar"] },
            { kegunaan: "Doa sebelum belajar", jawaban: "Rabbi zidni ilma", options: ["Rabbi zidni ilma", "Rabbana atina", "Bismillah", "Subhanallah"] },
            { kegunaan: "Doa sesudah belajar", jawaban: "Allahumma inni astaudi'uka", options: ["Allahumma inni astaudi'uka", "Rabbana atina", "Alhamdulillah", "Astaghfirullah"] },
            { kegunaan: "Doa orang sakit", jawaban: "Allahumma rabban nas", options: ["Allahumma rabban nas", "Bismillah", "Alhamdulillah", "Allahu Akbar"] },
            { kegunaan: "Doa masuk kamar mandi", jawaban: "Allahumma inni a'udzu bika", options: ["Allahumma inni a'udzu bika", "Bismillah", "Alhamdulillah", "Subhanallah"] },
            { kegunaan: "Doa keluar kamar mandi", jawaban: "Ghufranaka", options: ["Ghufranaka", "Bismillah", "Alhamdulillah", "Subhanallah"] },
            { kegunaan: "Doa mau bersin", jawaban: "Alhamdulillah", options: ["Alhamdulillah", "Bismillah", "Subhanallah", "Allahu Akbar"] }
        ],
        medium: [
            { kegunaan: "Doa sebelum makan lengkap?", jawaban: "Allahumma barik lana fi ma razaqtana", options: ["Allahumma barik lana fi ma razaqtana", "Bismillah", "Alhamdulillah", "Subhanallah"] },
            { kegunaan: "Doa setelah makan lengkap?", jawaban: "Alhamdulillahilladzi ath'amana", options: ["Alhamdulillahilladzi ath'amana", "Alhamdulillah", "Bismillah", "Rabbana"] },
            { kegunaan: "Doa sebelum tidur lengkap?", jawaban: "Bismikallahumma ahya wa amut", options: ["Bismikallahumma ahya wa amut", "Bismillah", "Alhamdulillah", "Allahu Akbar"] },
            { kegunaan: "Doa bangun tidur lengkap?", jawaban: "Alhamdulillahilladzi ahyana ba'da ma amatana", options: ["Alhamdulillahilladzi ahyana ba'da ma amatana", "Bismillah", "Subhanallah", "Allahu Akbar"] },
            { kegunaan: "Doa masuk masjid lengkap?", jawaban: "Allahummaftah li abwaba rahmatika", options: ["Allahummaftah li abwaba rahmatika", "Rabbana atina", "Bismillah", "Subhanallah"] },
            { kegunaan: "Doa keluar masjid lengkap?", jawaban: "Allahumma inni as'aluka min fadhlik", options: ["Allahumma inni as'aluka min fadhlik", "Allahummaftah li", "Alhamdulillah", "Astaghfirullah"] },
            { kegunaan: "Doa masuk rumah lengkap?", jawaban: "Bismillah walajna wa bismillah kharajna", options: ["Bismillah walajna wa bismillah kharajna", "Bismillah", "Alhamdulillah", "Allahu Akbar"] },
            { kegunaan: "Doa keluar rumah lengkap?", jawaban: "Bismillahi tawakkaltu 'alallah", options: ["Bismillahi tawakkaltu 'alallah", "Bismillah", "Alhamdulillah", "Allahu Akbar"] },
            { kegunaan: "Doa naik kendaraan lengkap?", jawaban: "Subhanalladzi sakhkhara lana hadza", options: ["Subhanalladzi sakhkhara lana hadza", "Bismillah", "Alhamdulillah", "Allahu Akbar"] },
            { kegunaan: "Doa sebelum belajar lengkap?", jawaban: "Rabbi zidni ilma warzuqni fahma", options: ["Rabbi zidni ilma warzuqni fahma", "Rabbana atina", "Bismillah", "Subhanallah"] },
            { kegunaan: "Doa sesudah belajar lengkap?", jawaban: "Allahumma inni astaudi'uka ma 'allamtani", options: ["Allahumma inni astaudi'uka ma 'allamtani", "Rabbana atina", "Alhamdulillah", "Astaghfirullah"] },
            { kegunaan: "Doa orang sakit lengkap?", jawaban: "Allahumma rabban nas adzhibil ba'sa", options: ["Allahumma rabban nas adzhibil ba'sa", "Bismillah", "Alhamdulillah", "Allahu Akbar"] },
            { kegunaan: "Doa masuk kamar mandi lengkap?", jawaban: "Allahumma inni a'udzu bika minal khubsi wal khaba'is", options: ["Allahumma inni a'udzu bika minal khubsi wal khaba'is", "Bismillah", "Alhamdulillah", "Subhanallah"] },
            { kegunaan: "Doa keluar kamar mandi lengkap?", jawaban: "Ghufranaka wal hamdulillah", options: ["Ghufranaka wal hamdulillah", "Bismillah", "Alhamdulillah", "Subhanallah"] },
            { kegunaan: "Doa mau bersin lengkap?", jawaban: "Alhamdulillah 'ala kulli hal", options: ["Alhamdulillah 'ala kulli hal", "Alhamdulillah", "Bismillah", "Subhanallah"] }
        ],
        hard: [
            { kegunaan: "Bunyi doa sebelum makan yang benar (NU)?", jawaban: "Allahumma barik lana fi ma razaqtana wa qina adzaban nar", options: ["Allahumma barik lana fi ma razaqtana wa qina adzaban nar", "Bismillah", "Alhamdulillah", "Subhanallah"] },
            { kegunaan: "Bunyi doa setelah makan yang benar (NU)?", jawaban: "Alhamdulillahilladzi ath'amana wa saqana wa ja'alana muslimin", options: ["Alhamdulillahilladzi ath'amana wa saqana wa ja'alana muslimin", "Alhamdulillah", "Bismillah", "Rabbana"] },
            { kegunaan: "Bunyi doa sebelum tidur yang benar (NU)?", jawaban: "Bismikallahumma ahya wa bismika amut", options: ["Bismikallahumma ahya wa bismika amut", "Bismillah", "Alhamdulillah", "Allahu Akbar"] },
            { kegunaan: "Bunyi doa bangun tidur yang benar (NU)?", jawaban: "Alhamdulillahilladzi ahyana ba'da ma amatana wa ilaihi nusyur", options: ["Alhamdulillahilladzi ahyana ba'da ma amatana wa ilaihi nusyur", "Bismillah", "Subhanallah", "Allahu Akbar"] },
            { kegunaan: "Bunyi doa masuk masjid yang benar (NU)?", jawaban: "Allahummaftah li abwaba rahmatika wa fadhlika", options: ["Allahummaftah li abwaba rahmatika wa fadhlika", "Rabbana atina", "Bismillah", "Subhanallah"] },
            { kegunaan: "Bunyi doa keluar masjid yang benar (NU)?", jawaban: "Allahumma inni as'aluka min fadhlika wa rahmatika", options: ["Allahumma inni as'aluka min fadhlika wa rahmatika", "Allahummaftah li", "Alhamdulillah", "Astaghfirullah"] },
            { kegunaan: "Bunyi doa masuk rumah yang benar (NU)?", jawaban: "Bismillah walajna wa bismillah kharajna wa 'ala rabbina tawakkalna", options: ["Bismillah walajna wa bismillah kharajna wa 'ala rabbina tawakkalna", "Bismillah", "Alhamdulillah", "Allahu Akbar"] },
            { kegunaan: "Bunyi doa keluar rumah yang benar (NU)?", jawaban: "Bismillahi tawakkaltu 'alallah la haula wa la quwwata illa billah", options: ["Bismillahi tawakkaltu 'alallah la haula wa la quwwata illa billah", "Bismillah", "Alhamdulillah", "Allahu Akbar"] },
            { kegunaan: "Bunyi doa naik kendaraan yang benar (NU)?", jawaban: "Subhanalladzi sakhkhara lana hadza wa ma kunna lahu muqrinin", options: ["Subhanalladzi sakhkhara lana hadza wa ma kunna lahu muqrinin", "Bismillah", "Alhamdulillah", "Allahu Akbar"] },
            { kegunaan: "Bunyi doa sebelum belajar yang benar (NU)?", jawaban: "Rabbi zidni ilma warzuqni fahma waj'alni minash shalihin", options: ["Rabbi zidni ilma warzuqni fahma waj'alni minash shalihin", "Rabbana atina", "Bismillah", "Subhanallah"] },
            { kegunaan: "Bunyi doa sesudah belajar yang benar (NU)?", jawaban: "Allahumma inni astaudi'uka ma 'allamtani farudduhu 'inda hajati", options: ["Allahumma inni astaudi'uka ma 'allamtani farudduhu 'inda hajati", "Rabbana atina", "Alhamdulillah", "Astaghfirullah"] },
            { kegunaan: "Bunyi doa orang sakit yang benar (NU)?", jawaban: "Allahumma rabban nas adzhibil ba'sa isyfi antasy syafi", options: ["Allahumma rabban nas adzhibil ba'sa isyfi antasy syafi", "Bismillah", "Alhamdulillah", "Allahu Akbar"] },
            { kegunaan: "Bunyi doa masuk kamar mandi yang benar (NU)?", jawaban: "Allahumma inni a'udzu bika minal khubsi wal khaba'is wa najasatil a'rad", options: ["Allahumma inni a'udzu bika minal khubsi wal khaba'is wa najasatil a'rad", "Bismillah", "Alhamdulillah", "Subhanallah"] },
            { kegunaan: "Bunyi doa keluar kamar mandi yang benar (NU)?", jawaban: "Ghufranaka wal hamdulillahilladzi adzhaba 'annil adza", options: ["Ghufranaka wal hamdulillahilladzi adzhaba 'annil adza", "Bismillah", "Alhamdulillah", "Subhanallah"] },
            { kegunaan: "Bunyi doa mau bersin yang benar (NU)?", jawaban: "Alhamdulillah 'ala kulli hal wa na'udzu billahi min hallil khasar", options: ["Alhamdulillah 'ala kulli hal wa na'udzu billahi min hallil khasar", "Alhamdulillah", "Bismillah", "Subhanallah"] }
        ]
    },
    surat: {
        easy: [
            { kegunaan: "Surat pembuka Al-Quran", jawaban: "Al-Fatihah", options: ["Al-Fatihah", "Al-Baqarah", "An-Nas", "Al-Ikhlas"] },
            { kegunaan: "Surat yang artinya 'Sapi Betina'", jawaban: "Al-Baqarah", options: ["Al-Baqarah", "Ali Imran", "An-Nisa", "Al-Maidah"] },
            { kegunaan: "Surat yang artinya 'Keluarga Imran'", jawaban: "Ali Imran", options: ["Ali Imran", "Al-Baqarah", "An-Nisa", "Al-Maidah"] },
            { kegunaan: "Surat yang artinya 'Wanita'", jawaban: "An-Nisa", options: ["An-Nisa", "Ali Imran", "Al-Maidah", "Al-An'am"] },
            { kegunaan: "Surat yang artinya 'Hidangan'", jawaban: "Al-Maidah", options: ["Al-Maidah", "An-Nisa", "Al-An'am", "Al-A'raf"] },
            { kegunaan: "Surat yang artinya 'Binatang Ternak'", jawaban: "Al-An'am", options: ["Al-An'am", "Al-Maidah", "Al-A'raf", "Al-Anfal"] },
            { kegunaan: "Surat yang artinya 'Tempat Tertinggi'", jawaban: "Al-A'raf", options: ["Al-A'raf", "Al-An'am", "Al-Anfal", "At-Taubah"] },
            { kegunaan: "Surat yang artinya 'Rampasan Perang'", jawaban: "Al-Anfal", options: ["Al-Anfal", "Al-A'raf", "At-Taubah", "Yunus"] },
            { kegunaan: "Surat yang artinya 'Pengampunan'", jawaban: "At-Taubah", options: ["At-Taubah", "Al-Anfal", "Yunus", "Hud"] },
            { kegunaan: "Surat yang artinya 'Nabi Yunus'", jawaban: "Yunus", options: ["Yunus", "Hud", "Yusuf", "Ar-Ra'd"] },
            { kegunaan: "Surat yang artinya 'Nabi Hud'", jawaban: "Hud", options: ["Hud", "Yunus", "Yusuf", "Ar-Ra'd"] },
            { kegunaan: "Surat yang artinya 'Nabi Yusuf'", jawaban: "Yusuf", options: ["Yusuf", "Hud", "Yunus", "Ar-Ra'd"] },
            { kegunaan: "Surat yang artinya 'Guruh'", jawaban: "Ar-Ra'd", options: ["Ar-Ra'd", "Yusuf", "Hud", "Yunus"] },
            { kegunaan: "Surat yang artinya 'Nabi Ibrahim'", jawaban: "Ibrahim", options: ["Ibrahim", "Al-Hijr", "An-Nahl", "Al-Isra"] },
            { kegunaan: "Surat yang artinya 'Lebah'", jawaban: "An-Nahl", options: ["An-Nahl", "Al-Hijr", "Ibrahim", "Al-Isra"] }
        ],
        medium: [
            { kegunaan: "Surat yang artinya 'Perjalanan Malam'", jawaban: "Al-Isra", options: ["Al-Isra", "Al-Kahf", "Maryam", "Thaha"] },
            { kegunaan: "Surat yang artinya 'Gua'", jawaban: "Al-Kahf", options: ["Al-Kahf", "Al-Isra", "Maryam", "Thaha"] },
            { kegunaan: "Surat yang artinya 'Maryam'", jawaban: "Maryam", options: ["Maryam", "Al-Kahf", "Thaha", "Al-Anbiya"] },
            { kegunaan: "Surat yang artinya 'Thaha'", jawaban: "Thaha", options: ["Thaha", "Maryam", "Al-Anbiya", "Al-Hajj"] },
            { kegunaan: "Surat yang artinya 'Para Nabi'", jawaban: "Al-Anbiya", options: ["Al-Anbiya", "Thaha", "Al-Hajj", "Al-Mu'minun"] },
            { kegunaan: "Surat yang artinya 'Haji'", jawaban: "Al-Hajj", options: ["Al-Hajj", "Al-Anbiya", "Al-Mu'minun", "An-Nur"] },
            { kegunaan: "Surat yang artinya 'Orang-orang Mukmin'", jawaban: "Al-Mu'minun", options: ["Al-Mu'minun", "Al-Hajj", "An-Nur", "Al-Furqan"] },
            { kegunaan: "Surat yang artinya 'Cahaya'", jawaban: "An-Nur", options: ["An-Nur", "Al-Mu'minun", "Al-Furqan", "Asy-Syu'ara"] },
            { kegunaan: "Surat yang artinya 'Pembeda'", jawaban: "Al-Furqan", options: ["Al-Furqan", "An-Nur", "Asy-Syu'ara", "An-Naml"] },
            { kegunaan: "Surat yang artinya 'Para Penyair'", jawaban: "Asy-Syu'ara", options: ["Asy-Syu'ara", "Al-Furqan", "An-Naml", "Al-Qasas"] },
            { kegunaan: "Surat yang artinya 'Semut'", jawaban: "An-Naml", options: ["An-Naml", "Asy-Syu'ara", "Al-Qasas", "Al-Ankabut"] },
            { kegunaan: "Surat yang artinya 'Kisah-kisah'", jawaban: "Al-Qasas", options: ["Al-Qasas", "An-Naml", "Al-Ankabut", "Ar-Rum"] },
            { kegunaan: "Surat yang artinya 'Laba-laba'", jawaban: "Al-Ankabut", options: ["Al-Ankabut", "Al-Qasas", "Ar-Rum", "Luqman"] },
            { kegunaan: "Surat yang artinya 'Bangsa Romawi'", jawaban: "Ar-Rum", options: ["Ar-Rum", "Al-Ankabut", "Luqman", "As-Sajdah"] },
            { kegunaan: "Surat yang artinya 'Luqman'", jawaban: "Luqman", options: ["Luqman", "Ar-Rum", "As-Sajdah", "Al-Ahzab"] }
        ],
        hard: [
            { kegunaan: "Surat yang turun di Mekkah?", jawaban: "Al-Fatihah", options: ["Al-Fatihah", "Al-Baqarah", "Ali Imran", "An-Nisa"] },
            { kegunaan: "Surat yang turun di Madinah?", jawaban: "Al-Baqarah", options: ["Al-Baqarah", "Al-Fatihah", "An-Nas", "Al-Ikhlas"] },
            { kegunaan: "Surat yang paling panjang?", jawaban: "Al-Baqarah", options: ["Al-Baqarah", "Ali Imran", "An-Nisa", "Al-Maidah"] },
            { kegunaan: "Surat yang memiliki 286 ayat?", jawaban: "Al-Baqarah", options: ["Al-Baqarah", "Ali Imran", "An-Nisa", "Al-Maidah"] },
            { kegunaan: "Surat yang di dalamnya ada Ayat Kursi?", jawaban: "Al-Baqarah", options: ["Al-Baqarah", "Ali Imran", "An-Nisa", "Al-Maidah"] },
            { kegunaan: "Surat yang dibaca ketika Jumat?", jawaban: "Al-Kahf", options: ["Al-Kahf", "Al-Isra", "Maryam", "Thaha"] },
            { kegunaan: "Surat yang artinya 'Kemenangan'", jawaban: "Al-Fath", options: ["Al-Fath", "Al-Hujurat", "Qaf", "Adz-Dzariyat"] },
            { kegunaan: "Surat yang artinya 'Kamar-kamar'", jawaban: "Al-Hujurat", options: ["Al-Hujurat", "Al-Fath", "Qaf", "Adz-Dzariyat"] },
            { kegunaan: "Surat yang diawali dengan huruf 'Qaf'", jawaban: "Qaf", options: ["Qaf", "Al-Hujurat", "Adz-Dzariyat", "At-Tur"] },
            { kegunaan: "Surat yang artinya 'Angin yang Menerbangkan'", jawaban: "Adz-Dzariyat", options: ["Adz-Dzariyat", "Qaf", "At-Tur", "An-Najm"] },
            { kegunaan: "Surat yang artinya 'Bukit'", jawaban: "At-Tur", options: ["At-Tur", "Adz-Dzariyat", "An-Najm", "Al-Qamar"] },
            { kegunaan: "Surat yang artinya 'Bintang'", jawaban: "An-Najm", options: ["An-Najm", "At-Tur", "Al-Qamar", "Ar-Rahman"] },
            { kegunaan: "Surat yang artinya 'Bulan'", jawaban: "Al-Qamar", options: ["Al-Qamar", "An-Najm", "Ar-Rahman", "Al-Waqi'ah"] },
            { kegunaan: "Surat yang artinya 'Maha Pemurah'", jawaban: "Ar-Rahman", options: ["Ar-Rahman", "Al-Qamar", "Al-Waqi'ah", "Al-Hadid"] },
            { kegunaan: "Surat yang artinya 'Hari Kiamat'", jawaban: "Al-Waqi'ah", options: ["Al-Waqi'ah", "Ar-Rahman", "Al-Hadid", "Al-Mujadilah"] }
        ]
    },
    nabi: {
        easy: [
            { kegunaan: "Nabi yang membelah lautan", jawaban: "Musa", options: ["Musa", "Isa", "Muhammad", "Ibrahim"] },
            { kegunaan: "Nabi yang diberi Al-Quran", jawaban: "Muhammad", options: ["Muhammad", "Musa", "Isa", "Ibrahim"] },
            { kegunaan: "Nabi yang menghidupkan orang mati", jawaban: "Isa", options: ["Isa", "Musa", "Muhammad", "Ibrahim"] },
            { kegunaan: "Nabi yang dijuluki Khalilullah", jawaban: "Ibrahim", options: ["Ibrahim", "Musa", "Isa", "Muhammad"] },
            { kegunaan: "Nabi yang memiliki tongkat ular", jawaban: "Musa", options: ["Musa", "Harun", "Ibrahim", "Nuh"] },
            { kegunaan: "Nabi yang membangun Ka'bah", jawaban: "Ibrahim", options: ["Ibrahim", "Ismail", "Muhammad", "Musa"] },
            { kegunaan: "Nabi yang berlayar dengan kapal", jawaban: "Nuh", options: ["Nuh", "Ibrahim", "Musa", "Isa"] },
            { kegunaan: "Nabi yang sabar (penyakit)", jawaban: "Ayyub", options: ["Ayyub", "Yunus", "Musa", "Ibrahim"] },
            { kegunaan: "Nabi yang ditelan ikan paus", jawaban: "Yunus", options: ["Yunus", "Ayyub", "Musa", "Ibrahim"] },
            { kegunaan: "Nabi yang menjadi raja", jawaban: "Sulaiman", options: ["Sulaiman", "Daud", "Musa", "Ibrahim"] },
            { kegunaan: "Nabi yang diberi Zabur", jawaban: "Daud", options: ["Daud", "Sulaiman", "Musa", "Ibrahim"] },
            { kegunaan: "Nabi yang diangkat ke langit", jawaban: "Muhammad", options: ["Muhammad", "Isa", "Musa", "Ibrahim"] },
            { kegunaan: "Nabi yang lahir dari Hajar", jawaban: "Ismail", options: ["Ismail", "Ishaq", "Ibrahim", "Musa"] },
            { kegunaan: "Nabi yang lahir dari Sarah", jawaban: "Ishaq", options: ["Ishaq", "Ismail", "Ibrahim", "Musa"] },
            { kegunaan: "Nabi yang disebut Abu Al-Anbiya", jawaban: "Ibrahim", options: ["Ibrahim", "Nuh", "Musa", "Muhammad"] }
        ],
        medium: [
            { kegunaan: "Nabi yang diutus untuk Bani Israil", jawaban: "Musa", options: ["Musa", "Isa", "Muhammad", "Ibrahim"] },
            { kegunaan: "Nabi yang lahir di Madinah", jawaban: "Muhammad", options: ["Muhammad", "Musa", "Isa", "Ibrahim"] },
            { kegunaan: "Nabi yang diutus untuk bangsa Arab", jawaban: "Muhammad", options: ["Muhammad", "Musa", "Isa", "Ibrahim"] },
            { kegunaan: "Nabi yang memiliki 25 nabi keturunan", jawaban: "Ibrahim", options: ["Ibrahim", "Musa", "Isa", "Muhammad"] },
            { kegunaan: "Nabi yang disebut Ulul Azmi", jawaban: "Muhammad", options: ["Muhammad", "Musa", "Isa", "Ibrahim"] },
            { kegunaan: "Nabi yang diuji dengan penyakit kulit", jawaban: "Ayyub", options: ["Ayyub", "Yunus", "Musa", "Ibrahim"] },
            { kegunaan: "Nabi yang diutus ke kaum Tsamud", jawaban: "Saleh", options: ["Saleh", "Hud", "Syuaib", "Musa"] },
            { kegunaan: "Nabi yang diutus ke kaum 'Ad", jawaban: "Hud", options: ["Hud", "Saleh", "Syuaib", "Musa"] },
            { kegunaan: "Nabi yang diutus ke kaum Madyan", jawaban: "Syuaib", options: ["Syuaib", "Hud", "Saleh", "Musa"] },
            { kegunaan: "Nabi yang diutus ke kaum Luth", jawaban: "Luth", options: ["Luth", "Hud", "Saleh", "Syuaib"] },
            { kegunaan: "Nabi yang diutus ke kaum Nuh", jawaban: "Nuh", options: ["Nuh", "Hud", "Saleh", "Syuaib"] },
            { kegunaan: "Nabi yang diutus ke kaum Musa", jawaban: "Musa", options: ["Musa", "Harun", "Isa", "Muhammad"] },
            { kegunaan: "Nabi yang diutus ke kaum Isa", jawaban: "Isa", options: ["Isa", "Musa", "Harun", "Muhammad"] },
            { kegunaan: "Nabi yang diutus ke kaum Ibrahim", jawaban: "Ibrahim", options: ["Ibrahim", "Musa", "Isa", "Muhammad"] },
            { kegunaan: "Nabi yang diutus ke kaum Daud", jawaban: "Daud", options: ["Daud", "Sulaiman", "Musa", "Ibrahim"] }
        ],
        hard: [
            { kegunaan: "Nabi yang pertama kali menulis", jawaban: "Idris", options: ["Idris", "Ibrahim", "Musa", "Muhammad"] },
            { kegunaan: "Nabi yang pertama kali menjahit", jawaban: "Idris", options: ["Idris", "Ibrahim", "Musa", "Muhammad"] },
            { kegunaan: "Nabi yang tidak dimakan tanah jasadnya", jawaban: "Musa", options: ["Musa", "Isa", "Muhammad", "Ibrahim"] },
            { kegunaan: "Nabi yang masih hidup di langit", jawaban: "Isa", options: ["Isa", "Musa", "Muhammad", "Ibrahim"] },
            { kegunaan: "Nabi yang disebut Kalimullah", jawaban: "Musa", options: ["Musa", "Isa", "Muhammad", "Ibrahim"] },
            { kegunaan: "Nabi yang disebut Ruhullah", jawaban: "Isa", options: ["Isa", "Musa", "Muhammad", "Ibrahim"] },
            { kegunaan: "Nabi yang disebut Habibullah", jawaban: "Muhammad", options: ["Muhammad", "Isa", "Musa", "Ibrahim"] },
            { kegunaan: "Nabi yang disebut Khalilullah", jawaban: "Ibrahim", options: ["Ibrahim", "Musa", "Isa", "Muhammad"] },
            { kegunaan: "Nabi yang umurnya paling panjang", jawaban: "Nuh", options: ["Nuh", "Ibrahim", "Musa", "Muhammad"] },
            { kegunaan: "Nabi yang berdakwah 950 tahun", jawaban: "Nuh", options: ["Nuh", "Ibrahim", "Musa", "Muhammad"] },
            { kegunaan: "Nabi yang diangkat ke langit", jawaban: "Muhammad", options: ["Muhammad", "Isa", "Musa", "Ibrahim"] },
            { kegunaan: "Nabi yang diberi keistimewaan umatnya", jawaban: "Muhammad", options: ["Muhammad", "Isa", "Musa", "Ibrahim"] },
            { kegunaan: "Nabi yang diutus sebagai rahmat", jawaban: "Muhammad", options: ["Muhammad", "Isa", "Musa", "Ibrahim"] },
            { kegunaan: "Nabi yang akhir zaman", jawaban: "Muhammad", options: ["Muhammad", "Isa", "Musa", "Ibrahim"] },
            { kegunaan: "Nabi yang memiliki mukjizat terbesar", jawaban: "Muhammad", options: ["Muhammad", "Isa", "Musa", "Ibrahim"] }
        ]
    },
    asmaul: {
        easy: [
            { kegunaan: "Ar-Rahman artinya?", jawaban: "Maha Pengasih", options: ["Maha Pengasih", "Maha Penyayang", "Maha Kuasa", "Maha Bijaksana"] },
            { kegunaan: "Ar-Rahim artinya?", jawaban: "Maha Penyayang", options: ["Maha Penyayang", "Maha Pengasih", "Maha Kuasa", "Maha Bijaksana"] },
            { kegunaan: "Al-Malik artinya?", jawaban: "Maha Raja", options: ["Maha Raja", "Maha Suci", "Maha Kuasa", "Maha Bijaksana"] },
            { kegunaan: "Al-Quddus artinya?", jawaban: "Maha Suci", options: ["Maha Suci", "Maha Raja", "Maha Kuasa", "Maha Bijaksana"] },
            { kegunaan: "Al-Aziz artinya?", jawaban: "Maha Perkasa", options: ["Maha Perkasa", "Maha Kuasa", "Maha Bijaksana", "Maha Pengasih"] },
            { kegunaan: "Al-Hakim artinya?", jawaban: "Maha Bijaksana", options: ["Maha Bijaksana", "Maha Perkasa", "Maha Kuasa", "Maha Penyayang"] },
            { kegunaan: "Al-Khaliq artinya?", jawaban: "Maha Pencipta", options: ["Maha Pencipta", "Maha Pengasih", "Maha Penyayang", "Maha Kuasa"] },
            { kegunaan: "Al-Ghaffar artinya?", jawaban: "Maha Pengampun", options: ["Maha Pengampun", "Maha Pencipta", "Maha Perkasa", "Maha Bijaksana"] },
            { kegunaan: "Al-Wahhab artinya?", jawaban: "Maha Pemberi", options: ["Maha Pemberi", "Maha Pengampun", "Maha Pencipta", "Maha Perkasa"] },
            { kegunaan: "Ar-Razzaq artinya?", jawaban: "Maha Pemberi Rezeki", options: ["Maha Pemberi Rezeki", "Maha Pemberi", "Maha Pengampun", "Maha Pencipta"] },
            { kegunaan: "Al-Fattah artinya?", jawaban: "Maha Pembuka", options: ["Maha Pembuka", "Maha Pemberi", "Maha Pengampun", "Maha Pencipta"] },
            { kegunaan: "Al-Alim artinya?", jawaban: "Maha Mengetahui", options: ["Maha Mengetahui", "Maha Pembuka", "Maha Pemberi", "Maha Pengampun"] },
            { kegunaan: "Al-Qabid artinya?", jawaban: "Maha Menyempitkan", options: ["Maha Menyempitkan", "Maha Melapangkan", "Maha Mengetahui", "Maha Pembuka"] },
            { kegunaan: "Al-Basit artinya?", jawaban: "Maha Melapangkan", options: ["Maha Melapangkan", "Maha Menyempitkan", "Maha Mengetahui", "Maha Pembuka"] },
            { kegunaan: "Al-Hafidz artinya?", jawaban: "Maha Memelihara", options: ["Maha Memelihara", "Maha Melapangkan", "Maha Menyempitkan", "Maha Mengetahui"] }
        ],
        medium: [
            { kegunaan: "Al-Qahhar artinya?", jawaban: "Maha Perkasa", options: ["Maha Perkasa", "Maha Kuasa", "Maha Bijaksana", "Maha Pengasih"] },
            { kegunaan: "Al-Muhaymin artinya?", jawaban: "Maha Memelihara", options: ["Maha Memelihara", "Maha Melapangkan", "Maha Menyempitkan", "Maha Mengetahui"] },
            { kegunaan: "Al-Matin artinya?", jawaban: "Maha Kuat", options: ["Maha Kuat", "Maha Perkasa", "Maha Bijaksana", "Maha Pengasih"] },
            { kegunaan: "Al-Majid artinya?", jawaban: "Maha Mulia", options: ["Maha Mulia", "Maha Perkasa", "Maha Bijaksana", "Maha Pengasih"] },
            { kegunaan: "Al-Qadir artinya?", jawaban: "Maha Kuasa", options: ["Maha Kuasa", "Maha Perkasa", "Maha Bijaksana", "Maha Pengasih"] },
            { kegunaan: "Al-Muqtadir artinya?", jawaban: "Maha Berkuasa", options: ["Maha Berkuasa", "Maha Kuasa", "Maha Bijaksana", "Maha Pengasih"] },
            { kegunaan: "Al-Muqaddim artinya?", jawaban: "Maha Mendahulukan", options: ["Maha Mendahulukan", "Maha Kuasa", "Maha Bijaksana", "Maha Pengasih"] },
            { kegunaan: "Al-Mu'akhkhir artinya?", jawaban: "Maha Mengakhirkan", options: ["Maha Mengakhirkan", "Maha Kuasa", "Maha Bijaksana", "Maha Pengasih"] },
            { kegunaan: "Al-Awwal artinya?", jawaban: "Maha Awal", options: ["Maha Awal", "Maha Kuasa", "Maha Bijaksana", "Maha Pengasih"] },
            { kegunaan: "Al-Akhir artinya?", jawaban: "Maha Akhir", options: ["Maha Akhir", "Maha Kuasa", "Maha Bijaksana", "Maha Pengasih"] },
            { kegunaan: "Az-Zahir artinya?", jawaban: "Maha Nyata", options: ["Maha Nyata", "Maha Kuasa", "Maha Bijaksana", "Maha Pengasih"] },
            { kegunaan: "Al-Batin artinya?", jawaban: "Maha Ghaib", options: ["Maha Ghaib", "Maha Kuasa", "Maha Bijaksana", "Maha Pengasih"] },
            { kegunaan: "Al-Waliy artinya?", jawaban: "Maha Melindungi", options: ["Maha Melindungi", "Maha Kuasa", "Maha Bijaksana", "Maha Pengasih"] },
            { kegunaan: "Al-Muta'ali artinya?", jawaban: "Maha Tinggi", options: ["Maha Tinggi", "Maha Kuasa", "Maha Bijaksana", "Maha Pengasih"] },
            { kegunaan: "Al-Barr artinya?", jawaban: "Maha Dermawan", options: ["Maha Dermawan", "Maha Kuasa", "Maha Bijaksana", "Maha Pengasih"] }
        ],
        hard: [
            { kegunaan: "Ar-Rahman dan Ar-Rahim berasal dari kata?", jawaban: "Rahmat", options: ["Rahmat", "Rahman", "Rahim", "Rahmatan"] },
            { kegunaan: "Al-Malik dan Al-Malikul Mulk artinya?", jawaban: "Maha Raja dan Maha Pemilik", options: ["Maha Raja dan Maha Pemilik", "Maha Suci", "Maha Kuasa", "Maha Bijaksana"] },
            { kegunaan: "Al-Quddus artinya Maha Suci, ini termasuk?", jawaban: "Tanzih", options: ["Tanzih", "Tasybih", "Tawhid", "Tafwid"] },
            { kegunaan: "As-Salam artinya?", jawaban: "Maha Memberi Kesejahteraan", options: ["Maha Memberi Kesejahteraan", "Maha Suci", "Maha Kuasa", "Maha Bijaksana"] },
            { kegunaan: "Al-Mu'min artinya?", jawaban: "Maha Memberi Keamanan", options: ["Maha Memberi Keamanan", "Maha Suci", "Maha Kuasa", "Maha Bijaksana"] },
            { kegunaan: "Al-Muhaymin artinya?", jawaban: "Maha Memelihara", options: ["Maha Memelihara", "Maha Melapangkan", "Maha Menyempitkan", "Maha Mengetahui"] },
            { kegunaan: "Al-Aziz artinya Maha Perkasa, berasal dari?", jawaban: "Izzah", options: ["Izzah", "Aziz", "Azim", "Azhim"] },
            { kegunaan: "Al-Jabbar artinya?", jawaban: "Maha Memaksa", options: ["Maha Memaksa", "Maha Perkasa", "Maha Kuasa", "Maha Bijaksana"] },
            { kegunaan: "Al-Mutakabbir artinya?", jawaban: "Maha Megah", options: ["Maha Megah", "Maha Perkasa", "Maha Kuasa", "Maha Bijaksana"] },
            { kegunaan: "Al-Khaliq artinya Maha Pencipta, berasal dari?", jawaban: "Khalq", options: ["Khalq", "Khaliq", "Khalik", "Khalqan"] },
            { kegunaan: "Al-Bari' artinya?", jawaban: "Maha Membentuk", options: ["Maha Membentuk", "Maha Pencipta", "Maha Perkasa", "Maha Bijaksana"] },
            { kegunaan: "Al-Musawwir artinya?", jawaban: "Maha Menggambar", options: ["Maha Menggambar", "Maha Pencipta", "Maha Perkasa", "Maha Bijaksana"] },
            { kegunaan: "Al-Ghaffar artinya Maha Pengampun, berasal dari?", jawaban: "Ghafr", options: ["Ghafr", "Ghaffar", "Ghafir", "Ghafuran"] },
            { kegunaan: "Al-Qahhar artinya?", jawaban: "Maha Menundukkan", options: ["Maha Menundukkan", "Maha Perkasa", "Maha Kuasa", "Maha Bijaksana"] },
            { kegunaan: "Al-Wahhab artinya Maha Pemberi, berasal dari?", jawaban: "Wahb", options: ["Wahb", "Wahhab", "Wahib", "Wahban"] }
        ]
    },
    rukunIslam: {
        easy: [
            { kegunaan: "Rukun Islam yang pertama", jawaban: "Syadat", options: ["Syadat", "Shalat", "Zakat", "Puasa"] },
            { kegunaan: "Rukun Islam yang kedua", jawaban: "Shalat", options: ["Shalat", "Syadat", "Zakat", "Puasa"] },
            { kegunaan: "Rukun Islam yang ketiga", jawaban: "Zakat", options: ["Zakat", "Shalat", "Puasa", "Haji"] },
            { kegunaan: "Rukun Islam yang keempat", jawaban: "Puasa", options: ["Puasa", "Zakat", "Shalat", "Haji"] },
            { kegunaan: "Rukun Islam yang kelima", jawaban: "Haji", options: ["Haji", "Puasa", "Zakat", "Shalat"] },
            { kegunaan: "Shalat yang pertama kali diwajibkan?", jawaban: "Shalat 5 waktu", options: ["Shalat 5 waktu", "Shalat Jumat", "Shalat Id", "Shalat Dhuha"] },
            { kegunaan: "Zakat yang wajib dikeluarkan?", jawaban: "Zakat Mal", options: ["Zakat Mal", "Zakat Fitrah", "Zakat Penghasilan", "Zakat Perniagaan"] },
            { kegunaan: "Puasa yang wajib dilaksanakan?", jawaban: "Puasa Ramadhan", options: ["Puasa Ramadhan", "Puasa Sunah", "Puasa Syawal", "Puasa Arafah"] },
            { kegunaan: "Haji yang wajib dilaksanakan?", jawaban: "Haji Umrah", options: ["Haji Umrah", "Haji Wada", "Haji Tamattu", "Haji Ifrad"] },
            { kegunaan: "Shalat yang dilakukan berjamaah?", jawaban: "Shalat Jumat", options: ["Shalat Jumat", "Shalat 5 waktu", "Shalat Id", "Shalat Dhuha"] },
            { kegunaan: "Zakat yang dikeluarkan saat Idul Fitri?", jawaban: "Zakat Fitrah", options: ["Zakat Fitrah", "Zakat Mal", "Zakat Penghasilan", "Zakat Perniagaan"] },
            { kegunaan: "Puasa yang dilakukan pada bulan Ramadhan?", jawaban: "Puasa Wajib", options: ["Puasa Wajib", "Puasa Sunah", "Puasa Syawal", "Puasa Arafah"] },
            { kegunaan: "Haji yang dilakukan pada bulan Dzulhijjah?", jawaban: "Haji Wajib", options: ["Haji Wajib", "Haji Umrah", "Haji Tamattu", "Haji Ifrad"] },
            { kegunaan: "Shalat yang dilakukan pada hari Id?", jawaban: "Shalat Id", options: ["Shalat Id", "Shalat Jumat", "Shalat 5 waktu", "Shalat Dhuha"] },
            { kegunaan: "Zakat yang dikeluarkan dari harta?", jawaban: "Zakat Mal", options: ["Zakat Mal", "Zakat Fitrah", "Zakat Penghasilan", "Zakat Perniagaan"] }
        ],
        medium: [
            { kegunaan: "Rukun Islam yang pertama adalah?", jawaban: "Syadat", options: ["Syadat", "Shalat", "Zakat", "Puasa"] },
            { kegunaan: "Rukun Islam yang kedua adalah?", jawaban: "Shalat", options: ["Shalat", "Syadat", "Zakat", "Puasa"] },
            { kegunaan: "Rukun Islam yang ketiga adalah?", jawaban: "Zakat", options: ["Zakat", "Shalat", "Puasa", "Haji"] },
            { kegunaan: "Rukun Islam yang keempat adalah?", jawaban: "Puasa", options: ["Puasa", "Zakat", "Shalat", "Haji"] },
            { kegunaan: "Rukun Islam yang kelima adalah?", jawaban: "Haji", options: ["Haji", "Puasa", "Zakat", "Shalat"] },
            { kegunaan: "Shalat yang diwajibkan bagi setiap muslim?", jawaban: "Shalat 5 waktu", options: ["Shalat 5 waktu", "Shalat Jumat", "Shalat Id", "Shalat Dhuha"] },
            { kegunaan: "Zakat yang dikeluarkan dari harta yang mencapai nisab?", jawaban: "Zakat Mal", options: ["Zakat Mal", "Zakat Fitrah", "Zakat Penghasilan", "Zakat Perniagaan"] },
            { kegunaan: "Puasa yang diwajibkan bagi setiap muslim?", jawaban: "Puasa Ramadhan", options: ["Puasa Ramadhan", "Puasa Sunah", "Puasa Syawal", "Puasa Arafah"] },
            { kegunaan: "Haji yang diwajibkan bagi yang mampu?", jawaban: "Haji Umrah", options: ["Haji Umrah", "Haji Wada", "Haji Tamattu", "Haji Ifrad"] },
            { kegunaan: "Shalat yang dilakukan pada hari Jumat?", jawaban: "Shalat Jumat", options: ["Shalat Jumat", "Shalat 5 waktu", "Shalat Id", "Shalat Dhuha"] },
            { kegunaan: "Zakat yang dikeluarkan pada bulan Ramadhan?", jawaban: "Zakat Fitrah", options: ["Zakat Fitrah", "Zakat Mal", "Zakat Penghasilan", "Zakat Perniagaan"] },
            { kegunaan: "Puasa yang dilakukan pada bulan Ramadhan?", jawaban: "Puasa Wajib", options: ["Puasa Wajib", "Puasa Sunah", "Puasa Syawal", "Puasa Arafah"] },
            { kegunaan: "Haji yang dilakukan pada bulan Dzulhijjah?", jawaban: "Haji Wajib", options: ["Haji Wajib", "Haji Umrah", "Haji Tamattu", "Haji Ifrad"] },
            { kegunaan: "Shalat yang dilakukan pada hari Idul Fitri?", jawaban: "Shalat Id", options: ["Shalat Id", "Shalat Jumat", "Shalat 5 waktu", "Shalat Dhuha"] },
            { kegunaan: "Zakat yang dikeluarkan dari harta yang dimiliki?", jawaban: "Zakat Mal", options: ["Zakat Mal", "Zakat Fitrah", "Zakat Penghasilan", "Zakat Perniagaan"] }
        ],
        hard: [
            { kegunaan: "Rukun Islam yang pertama kali diucapkan?", jawaban: "Syadat", options: ["Syadat", "Shalat", "Zakat", "Puasa"] },
            { kegunaan: "Rukun Islam yang kedua kali dilaksanakan?", jawaban: "Shalat", options: ["Shalat", "Syadat", "Zakat", "Puasa"] },
            { kegunaan: "Rukun Islam yang ketiga kali dilaksanakan?", jawaban: "Zakat", options: ["Zakat", "Shalat", "Puasa", "Haji"] },
            { kegunaan: "Rukun Islam yang keempat kali dilaksanakan?", jawaban: "Puasa", options: ["Puasa", "Zakat", "Shalat", "Haji"] },
            { kegunaan: "Rukun Islam yang kelima kali dilaksanakan?", jawaban: "Haji", options: ["Haji", "Puasa", "Zakat", "Shalat"] },
            { kegunaan: "Shalat yang diwajibkan 5 kali dalam sehari?", jawaban: "Shalat 5 waktu", options: ["Shalat 5 waktu", "Shalat Jumat", "Shalat Id", "Shalat Dhuha"] },
            { kegunaan: "Zakat yang dikeluarkan dari harta yang dimiliki?", jawaban: "Zakat Mal", options: ["Zakat Mal", "Zakat Fitrah", "Zakat Penghasilan", "Zakat Perniagaan"] },
            { kegunaan: "Puasa yang diwajibkan 30 hari dalam sebulan?", jawaban: "Puasa Ramadhan", options: ["Puasa Ramadhan", "Puasa Sunah", "Puasa Syawal", "Puasa Arafah"] },
            { kegunaan: "Haji yang diwajibkan sekali seumur hidup?", jawaban: "Haji Umrah", options: ["Haji Umrah", "Haji Wada", "Haji Tamattu", "Haji Ifrad"] },
            { kegunaan: "Shalat yang dilakukan pada hari Jumat?", jawaban: "Shalat Jumat", options: ["Shalat Jumat", "Shalat 5 waktu", "Shalat Id", "Shalat Dhuha"] },
            { kegunaan: "Zakat yang dikeluarkan pada bulan Ramadhan?", jawaban: "Zakat Fitrah", options: ["Zakat Fitrah", "Zakat Mal", "Zakat Penghasilan", "Zakat Perniagaan"] },
            { kegunaan: "Puasa yang dilakukan pada bulan Ramadhan?", jawaban: "Puasa Wajib", options: ["Puasa Wajib", "Puasa Sunah", "Puasa Syawal", "Puasa Arafah"] },
            { kegunaan: "Haji yang dilakukan pada bulan Dzulhijjah?", jawaban: "Haji Wajib", options: ["Haji Wajib", "Haji Umrah", "Haji Tamattu", "Haji Ifrad"] },
            { kegunaan: "Shalat yang dilakukan pada hari Idul Fitri?", jawaban: "Shalat Id", options: ["Shalat Id", "Shalat Jumat", "Shalat 5 waktu", "Shalat Dhuha"] },
            { kegunaan: "Zakat yang dikeluarkan dari harta yang dimiliki?", jawaban: "Zakat Mal", options: ["Zakat Mal", "Zakat Fitrah", "Zakat Penghasilan", "Zakat Perniagaan"] }
        ]
    },
    rukunIman: {
        easy: [
            { kegunaan: "Rukun Iman yang pertama", jawaban: "Iman kepada Allah", options: ["Iman kepada Allah", "Iman kepada Malaikat", "Iman kepada Kitab", "Iman kepada Rasul"] },
            { kegunaan: "Rukun Iman yang kedua", jawaban: "Iman kepada Malaikat", options: ["Iman kepada Malaikat", "Iman kepada Allah", "Iman kepada Kitab", "Iman kepada Rasul"] },
            { kegunaan: "Rukun Iman yang ketiga", jawaban: "Iman kepada Kitab", options: ["Iman kepada Kitab", "Iman kepada Allah", "Iman kepada Malaikat", "Iman kepada Rasul"] },
            { kegunaan: "Rukun Iman yang keempat", jawaban: "Iman kepada Rasul", options: ["Iman kepada Rasul", "Iman kepada Kitab", "Iman kepada Allah", "Iman kepada Malaikat"] },
            { kegunaan: "Rukun Iman yang kelima", jawaban: "Iman kepada Hari Akhir", options: ["Iman kepada Hari Akhir", "Iman kepada Qadar", "Iman kepada Rasul", "Iman kepada Kitab"] },
            { kegunaan: "Rukun Iman yang keenam", jawaban: "Iman kepada Qadar", options: ["Iman kepada Qadar", "Iman kepada Hari Akhir", "Iman kepada Rasul", "Iman kepada Kitab"] },
            { kegunaan: "Iman kepada Allah artinya?", jawaban: "Percaya adanya Allah", options: ["Percaya adanya Allah", "Percaya malaikat", "Percaya kitab", "Percaya rasul"] },
            { kegunaan: "Iman kepada Malaikat artinya?", jawaban: "Percaya adanya malaikat", options: ["Percaya adanya malaikat", "Percaya Allah", "Percaya kitab", "Percaya rasul"] },
            { kegunaan: "Iman kepada Kitab artinya?", jawaban: "Percaya adanya kitab", options: ["Percaya adanya kitab", "Percaya Allah", "Percaya malaikat", "Percaya rasul"] },
            { kegunaan: "Iman kepada Rasul artinya?", jawaban: "Percaya adanya rasul", options: ["Percaya adanya rasul", "Percaya Allah", "Percaya malaikat", "Percaya kitab"] },
            { kegunaan: "Iman kepada Hari Akhir artinya?", jawaban: "Percaya adanya hari akhir", options: ["Percaya adanya hari akhir", "Percaya Allah", "Percaya malaikat", "Percaya rasul"] },
            { kegunaan: "Iman kepada Qadar artinya?", jawaban: "Percaya adanya takdir", options: ["Percaya adanya takdir", "Percaya Allah", "Percaya malaikat", "Percaya rasul"] },
            { kegunaan: "Rukun Iman yang pertama adalah?", jawaban: "Iman kepada Allah", options: ["Iman kepada Allah", "Iman kepada Malaikat", "Iman kepada Kitab", "Iman kepada Rasul"] },
            { kegunaan: "Rukun Iman yang kedua adalah?", jawaban: "Iman kepada Malaikat", options: ["Iman kepada Malaikat", "Iman kepada Allah", "Iman kepada Kitab", "Iman kepada Rasul"] },
            { kegunaan: "Rukun Iman yang ketiga adalah?", jawaban: "Iman kepada Kitab", options: ["Iman kepada Kitab", "Iman kepada Allah", "Iman kepada Malaikat", "Iman kepada Rasul"] }
        ],
        medium: [
            { kegunaan: "Rukun Iman yang pertama adalah iman kepada?", jawaban: "Allah", options: ["Allah", "Malaikat", "Kitab", "Rasul"] },
            { kegunaan: "Rukun Iman yang kedua adalah iman kepada?", jawaban: "Malaikat", options: ["Malaikat", "Allah", "Kitab", "Rasul"] },
            { kegunaan: "Rukun Iman yang ketiga adalah iman kepada?", jawaban: "Kitab", options: ["Kitab", "Allah", "Malaikat", "Rasul"] },
            { kegunaan: "Rukun Iman yang keempat adalah iman kepada?", jawaban: "Rasul", options: ["Rasul", "Kitab", "Allah", "Malaikat"] },
            { kegunaan: "Rukun Iman yang kelima adalah iman kepada?", jawaban: "Hari Akhir", options: ["Hari Akhir", "Qadar", "Rasul", "Kitab"] },
            { kegunaan: "Rukun Iman yang keenam adalah iman kepada?", jawaban: "Qadar", options: ["Qadar", "Hari Akhir", "Rasul", "Kitab"] },
            { kegunaan: "Iman kepada Allah termasuk rukun iman ke?", jawaban: "Pertama", options: ["Pertama", "Kedua", "Ketiga", "Keempat"] },
            { kegunaan: "Iman kepada Malaikat termasuk rukun iman ke?", jawaban: "Kedua", options: ["Kedua", "Pertama", "Ketiga", "Keempat"] },
            { kegunaan: "Iman kepada Kitab termasuk rukun iman ke?", jawaban: "Ketiga", options: ["Ketiga", "Pertama", "Kedua", "Keempat"] },
            { kegunaan: "Iman kepada Rasul termasuk rukun iman ke?", jawaban: "Keempat", options: ["Keempat", "Pertama", "Kedua", "Ketiga"] },
            { kegunaan: "Iman kepada Hari Akhir termasuk rukun iman ke?", jawaban: "Kelima", options: ["Kelima", "Pertama", "Kedua", "Ketiga"] },
            { kegunaan: "Iman kepada Qadar termasuk rukun iman ke?", jawaban: "Keenam", options: ["Keenam", "Pertama", "Kedua", "Ketiga"] },
            { kegunaan: "Rukun Iman yang pertama adalah iman kepada?", jawaban: "Allah", options: ["Allah", "Malaikat", "Kitab", "Rasul"] },
            { kegunaan: "Rukun Iman yang kedua adalah iman kepada?", jawaban: "Malaikat", options: ["Malaikat", "Allah", "Kitab", "Rasul"] },
            { kegunaan: "Rukun Iman yang ketiga adalah iman kepada?", jawaban: "Kitab", options: ["Kitab", "Allah", "Malaikat", "Rasul"] }
        ],
        hard: [
            { kegunaan: "Rukun Iman yang pertama adalah iman kepada?", jawaban: "Allah SWT", options: ["Allah SWT", "Malaikat", "Kitab", "Rasul"] },
            { kegunaan: "Rukun Iman yang kedua adalah iman kepada?", jawaban: "Malaikat Allah", options: ["Malaikat Allah", "Allah SWT", "Kitab", "Rasul"] },
            { kegunaan: "Rukun Iman yang ketiga adalah iman kepada?", jawaban: "Kitab Allah", options: ["Kitab Allah", "Allah SWT", "Malaikat", "Rasul"] },
            { kegunaan: "Rukun Iman yang keempat adalah iman kepada?", jawaban: "Rasul Allah", options: ["Rasul Allah", "Kitab", "Allah SWT", "Malaikat"] },
            { kegunaan: "Rukun Iman yang kelima adalah iman kepada?", jawaban: "Hari Akhir", options: ["Hari Akhir", "Qadar", "Rasul", "Kitab"] },
            { kegunaan: "Rukun Iman yang keenam adalah iman kepada?", jawaban: "Qadar", options: ["Qadar", "Hari Akhir", "Rasul", "Kitab"] },
            { kegunaan: "Iman kepada Allah termasuk rukun iman ke?", jawaban: "Pertama", options: ["Pertama", "Kedua", "Ketiga", "Keempat"] },
            { kegunaan: "Iman kepada Malaikat termasuk rukun iman ke?", jawaban: "Kedua", options: ["Kedua", "Pertama", "Ketiga", "Keempat"] },
            { kegunaan: "Iman kepada Kitab termasuk rukun iman ke?", jawaban: "Ketiga", options: ["Ketiga", "Pertama", "Kedua", "Keempat"] },
            { kegunaan: "Iman kepada Rasul termasuk rukun iman ke?", jawaban: "Keempat", options: ["Keempat", "Pertama", "Kedua", "Ketiga"] },
            { kegunaan: "Iman kepada Hari Akhir termasuk rukun iman ke?", jawaban: "Kelima", options: ["Kelima", "Pertama", "Kedua", "Ketiga"] },
            { kegunaan: "Iman kepada Qadar termasuk rukun iman ke?", jawaban: "Keenam", options: ["Keenam", "Pertama", "Kedua", "Ketiga"] },
            { kegunaan: "Rukun Iman yang pertama adalah iman kepada?", jawaban: "Allah SWT", options: ["Allah SWT", "Malaikat", "Kitab", "Rasul"] },
            { kegunaan: "Rukun Iman yang kedua adalah iman kepada?", jawaban: "Malaikat Allah", options: ["Malaikat Allah", "Allah SWT", "Kitab", "Rasul"] },
            { kegunaan: "Rukun Iman yang ketiga adalah iman kepada?", jawaban: "Kitab Allah", options: ["Kitab Allah", "Allah SWT", "Malaikat", "Rasul"] }
        ]
    },
    rukunShalat: {
        easy: [
            { kegunaan: "Rukun shalat yang pertama", jawaban: "Niat", options: ["Niat", "Takbiratul Ihram", "Berdiri", "Ruku"] },
            { kegunaan: "Rukun shalat yang kedua", jawaban: "Berdiri", options: ["Berdiri", "Niat", "Takbiratul Ihram", "Ruku"] },
            { kegunaan: "Rukun shalat yang ketiga", jawaban: "Takbiratul Ihram", options: ["Takbiratul Ihram", "Berdiri", "Niat", "Ruku"] },
            { kegunaan: "Rukun shalat yang keempat", jawaban: "Ruku", options: ["Ruku", "I'tidal", "Sujud", "Duduk"] },
            { kegunaan: "Rukun shalat yang kelima", jawaban: "I'tidal", options: ["I'tidal", "Ruku", "Sujud", "Duduk"] },
            { kegunaan: "Rukun shalat yang keenam", jawaban: "Sujud", options: ["Sujud", "I'tidal", "Ruku", "Duduk"] },
            { kegunaan: "Rukun shalat yang ketujuh", jawaban: "Duduk di antara dua sujud", options: ["Duduk di antara dua sujud", "Sujud", "I'tidal", "Ruku"] },
            { kegunaan: "Rukun shalat yang kedelapan", jawaban: "Tasyahud akhir", options: ["Tasyahud akhir", "Duduk di antara dua sujud", "Sujud", "I'tidal"] },
            { kegunaan: "Rukun shalat yang kesembilan", jawaban: "Salam", options: ["Salam", "Tasyahud akhir", "Duduk di antara dua sujud", "Sujud"] },
            { kegunaan: "Syarat wajib shalat yang pertama", jawaban: "Islam", options: ["Islam", "Baligh", "Berakal", "Suci dari hadas"] },
            { kegunaan: "Syarat wajib shalat yang kedua", jawaban: "Baligh", options: ["Baligh", "Islam", "Berakal", "Suci dari hadas"] },
            { kegunaan: "Syarat wajib shalat yang ketiga", jawaban: "Berakal", options: ["Berakal", "Baligh", "Islam", "Suci dari hadas"] },
            { kegunaan: "Syarat sah shalat yang pertama", jawaban: "Suci dari hadas", options: ["Suci dari hadas", "Suci dari najis", "Menutup aurat", "Menghadap kiblat"] },
            { kegunaan: "Syarat sah shalat yang kedua", jawaban: "Suci dari najis", options: ["Suci dari najis", "Suci dari hadas", "Menutup aurat", "Menghadap kiblat"] },
            { kegunaan: "Syarat sah shalat yang ketiga", jawaban: "Menutup aurat", options: ["Menutup aurat", "Suci dari najis", "Suci dari hadas", "Menghadap kiblat"] }
        ],
        medium: [
            { kegunaan: "Rukun shalat yang pertama adalah?", jawaban: "Niat", options: ["Niat", "Takbiratul Ihram", "Berdiri", "Ruku"] },
            { kegunaan: "Rukun shalat yang kedua adalah?", jawaban: "Berdiri", options: ["Berdiri", "Niat", "Takbiratul Ihram", "Ruku"] },
            { kegunaan: "Rukun shalat yang ketiga adalah?", jawaban: "Takbiratul Ihram", options: ["Takbiratul Ihram", "Berdiri", "Niat", "Ruku"] },
            { kegunaan: "Rukun shalat yang keempat adalah?", jawaban: "Ruku", options: ["Ruku", "I'tidal", "Sujud", "Duduk"] },
            { kegunaan: "Rukun shalat yang kelima adalah?", jawaban: "I'tidal", options: ["I'tidal", "Ruku", "Sujud", "Duduk"] },
            { kegunaan: "Rukun shalat yang keenam adalah?", jawaban: "Sujud", options: ["Sujud", "I'tidal", "Ruku", "Duduk"] },
            { kegunaan: "Rukun shalat yang ketujuh adalah?", jawaban: "Duduk di antara dua sujud", options: ["Duduk di antara dua sujud", "Sujud", "I'tidal", "Ruku"] },
            { kegunaan: "Rukun shalat yang kedelapan adalah?", jawaban: "Tasyahud akhir", options: ["Tasyahud akhir", "Duduk di antara dua sujud", "Sujud", "I'tidal"] },
            { kegunaan: "Rukun shalat yang kesembilan adalah?", jawaban: "Salam", options: ["Salam", "Tasyahud akhir", "Duduk di antara dua sujud", "Sujud"] },
            { kegunaan: "Syarat wajib shalat yang pertama adalah?", jawaban: "Islam", options: ["Islam", "Baligh", "Berakal", "Suci dari hadas"] },
            { kegunaan: "Syarat wajib shalat yang kedua adalah?", jawaban: "Baligh", options: ["Baligh", "Islam", "Berakal", "Suci dari hadas"] },
            { kegunaan: "Syarat wajib shalat yang ketiga adalah?", jawaban: "Berakal", options: ["Berakal", "Baligh", "Islam", "Suci dari hadas"] },
            { kegunaan: "Syarat sah shalat yang pertama adalah?", jawaban: "Suci dari hadas", options: ["Suci dari hadas", "Suci dari najis", "Menutup aurat", "Menghadap kiblat"] },
            { kegunaan: "Syarat sah shalat yang kedua adalah?", jawaban: "Suci dari najis", options: ["Suci dari najis", "Suci dari hadas", "Menutup aurat", "Menghadap kiblat"] },
            { kegunaan: "Syarat sah shalat yang ketiga adalah?", jawaban: "Menutup aurat", options: ["Menutup aurat", "Suci dari najis", "Suci dari hadas", "Menghadap kiblat"] }
        ],
        hard: [
            { kegunaan: "Rukun shalat yang pertama adalah niat, hukumnya?", jawaban: "Wajib", options: ["Wajib", "Sunah", "Mubah", "Haram"] },
            { kegunaan: "Rukun shalat yang kedua adalah berdiri, hukumnya?", jawaban: "Wajib", options: ["Wajib", "Sunah", "Mubah", "Haram"] },
            { kegunaan: "Rukun shalat yang ketiga adalah takbiratul ihram, hukumnya?", jawaban: "Wajib", options: ["Wajib", "Sunah", "Mubah", "Haram"] },
            { kegunaan: "Rukun shalat yang keempat adalah ruku, hukumnya?", jawaban: "Wajib", options: ["Wajib", "Sunah", "Mubah", "Haram"] },
            { kegunaan: "Rukun shalat yang kelima adalah i'tidal, hukumnya?", jawaban: "Wajib", options: ["Wajib", "Sunah", "Mubah", "Haram"] },
            { kegunaan: "Rukun shalat yang keenam adalah sujud, hukumnya?", jawaban: "Wajib", options: ["Wajib", "Sunah", "Mubah", "Haram"] },
            { kegunaan: "Rukun shalat yang ketujuh adalah duduk di antara dua sujud, hukumnya?", jawaban: "Wajib", options: ["Wajib", "Sunah", "Mubah", "Haram"] },
            { kegunaan: "Rukun shalat yang kedelapan adalah tasyahud akhir, hukumnya?", jawaban: "Wajib", options: ["Wajib", "Sunah", "Mubah", "Haram"] },
            { kegunaan: "Rukun shalat yang kesembilan adalah salam, hukumnya?", jawaban: "Wajib", options: ["Wajib", "Sunah", "Mubah", "Haram"] },
            { kegunaan: "Syarat wajib shalat yang pertama adalah Islam, hukumnya?", jawaban: "Wajib", options: ["Wajib", "Sunah", "Mubah", "Haram"] },
            { kegunaan: "Syarat wajib shalat yang kedua adalah baligh, hukumnya?", jawaban: "Wajib", options: ["Wajib", "Sunah", "Mubah", "Haram"] },
            { kegunaan: "Syarat wajib shalat yang ketiga adalah berakal, hukumnya?", jawaban: "Wajib", options: ["Wajib", "Sunah", "Mubah", "Haram"] },
            { kegunaan: "Syarat sah shalat yang pertama adalah suci dari hadas, hukumnya?", jawaban: "Wajib", options: ["Wajib", "Sunah", "Mubah", "Haram"] },
            { kegunaan: "Syarat sah shalat yang kedua adalah suci dari najis, hukumnya?", jawaban: "Wajib", options: ["Wajib", "Sunah", "Mubah", "Haram"] },
            { kegunaan: "Syarat sah shalat yang ketiga adalah menutup aurat, hukumnya?", jawaban: "Wajib", options: ["Wajib", "Sunah", "Mubah", "Haram"] }
        ]
    },
    doaPendek: {
        easy: [
            { kegunaan: "Doa sebelum makan (pendek)", jawaban: "Bismillah", options: ["Bismillah", "Alhamdulillah", "Subhanallah", "Allahu Akbar"] },
            { kegunaan: "Doa bangun tidur (pendek)", jawaban: "Alhamdulillahilladzi ahyana", options: ["Alhamdulillahilladzi ahyana", "Bismillah", "Subhanallah", "Allahu Akbar"] },
            { kegunaan: "Doa hendak tidur (pendek)", jawaban: "Bismikallahumma ahya wa amut", options: ["Bismikallahumma ahya wa amut", "Bismillah", "Alhamdulillah", "Allahu Akbar"] },
            { kegunaan: "Doa keluar rumah (pendek)", jawaban: "Bismillahi tawakkaltu 'alallah", options: ["Bismillahi tawakkaltu 'alallah", "Bismillah", "Alhamdulillah", "Allahu Akbar"] },
            { kegunaan: "Doa masuk rumah (pendek)", jawaban: "Bismillah walajna", options: ["Bismillah walajna", "Bismillah", "Alhamdulillah", "Allahu Akbar"] },
            { kegunaan: "Doa naik kendaraan (pendek)", jawaban: "Subhanalladzi sakhkhara", options: ["Subhanalladzi sakhkhara", "Bismillah", "Alhamdulillah", "Allahu Akbar"] },
            { kegunaan: "Doa mau makan (pendek)", jawaban: "Bismillah", options: ["Bismillah", "Alhamdulillah", "Subhanallah", "Allahu Akbar"] },
            { kegunaan: "Doa selesai makan (pendek)", jawaban: "Alhamdulillah", options: ["Alhamdulillah", "Bismillah", "Subhanallah", "Allahu Akbar"] },
            { kegunaan: "Doa masuk kamar mandi", jawaban: "Allahumma inni a'udzu bika", options: ["Allahumma inni a'udzu bika", "Bismillah", "Alhamdulillah", "Subhanallah"] },
            { kegunaan: "Doa keluar kamar mandi", jawaban: "Ghufranaka", options: ["Ghufranaka", "Bismillah", "Alhamdulillah", "Subhanallah"] },
            { kegunaan: "Doa mau bersin", jawaban: "Alhamdulillah", options: ["Alhamdulillah", "Bismillah", "Subhanallah", "Allahu Akbar"] },
            { kegunaan: "Jawaban orang bersin", jawaban: "Yarhamukallah", options: ["Yarhamukallah", "Alhamdulillah", "Bismillah", "Subhanallah"] },
            { kegunaan: "Doa mohon ilmu", jawaban: "Rabbi zidni ilma", options: ["Rabbi zidni ilma", "Rabbana atina", "Bismillah", "Subhanallah"] },
            { kegunaan: "Doa mohon kesehatan", jawaban: "Allahumma inni as'aluka al-afiyah", options: ["Allahumma inni as'aluka al-afiyah", "Rabbana atina", "Bismillah", "Subhanallah"] },
            { kegunaan: "Doa mohon rezeki", jawaban: "Allahumma inni as'aluka rizqan thayyiban", options: ["Allahumma inni as'aluka rizqan thayyiban", "Rabbana atina", "Bismillah", "Subhanallah"] }
        ],
        medium: [
            { kegunaan: "Doa sebelum makan (pendek) yang benar?", jawaban: "Bismillah", options: ["Bismillah", "Alhamdulillah", "Subhanallah", "Allahu Akbar"] },
            { kegunaan: "Doa bangun tidur (pendek) yang benar?", jawaban: "Alhamdulillahilladzi ahyana", options: ["Alhamdulillahilladzi ahyana", "Bismillah", "Subhanallah", "Allahu Akbar"] },
            { kegunaan: "Doa hendak tidur (pendek) yang benar?", jawaban: "Bismikallahumma ahya wa amut", options: ["Bismikallahumma ahya wa amut", "Bismillah", "Alhamdulillah", "Allahu Akbar"] },
            { kegunaan: "Doa keluar rumah (pendek) yang benar?", jawaban: "Bismillahi tawakkaltu 'alallah", options: ["Bismillahi tawakkaltu 'alallah", "Bismillah", "Alhamdulillah", "Allahu Akbar"] },
            { kegunaan: "Doa masuk rumah (pendek) yang benar?", jawaban: "Bismillah walajna", options: ["Bismillah walajna", "Bismillah", "Alhamdulillah", "Allahu Akbar"] },
            { kegunaan: "Doa naik kendaraan (pendek) yang benar?", jawaban: "Subhanalladzi sakhkhara", options: ["Subhanalladzi sakhkhara", "Bismillah", "Alhamdulillah", "Allahu Akbar"] },
            { kegunaan: "Doa mau makan (pendek) yang benar?", jawaban: "Bismillah", options: ["Bismillah", "Alhamdulillah", "Subhanallah", "Allahu Akbar"] },
            { kegunaan: "Doa selesai makan (pendek) yang benar?", jawaban: "Alhamdulillah", options: ["Alhamdulillah", "Bismillah", "Subhanallah", "Allahu Akbar"] },
            { kegunaan: "Doa masuk kamar mandi yang benar?", jawaban: "Allahumma inni a'udzu bika", options: ["Allahumma inni a'udzu bika", "Bismillah", "Alhamdulillah", "Subhanallah"] },
            { kegunaan: "Doa keluar kamar mandi yang benar?", jawaban: "Ghufranaka", options: ["Ghufranaka", "Bismillah", "Alhamdulillah", "Subhanallah"] },
            { kegunaan: "Doa mau bersin yang benar?", jawaban: "Alhamdulillah", options: ["Alhamdulillah", "Bismillah", "Subhanallah", "Allahu Akbar"] },
            { kegunaan: "Jawaban orang bersin yang benar?", jawaban: "Yarhamukallah", options: ["Yarhamukallah", "Alhamdulillah", "Bismillah", "Subhanallah"] },
            { kegunaan: "Doa mohon ilmu yang benar?", jawaban: "Rabbi zidni ilma", options: ["Rabbi zidni ilma", "Rabbana atina", "Bismillah", "Subhanallah"] },
            { kegunaan: "Doa mohon kesehatan yang benar?", jawaban: "Allahumma inni as'aluka al-afiyah", options: ["Allahumma inni as'aluka al-afiyah", "Rabbana atina", "Bismillah", "Subhanallah"] },
            { kegunaan: "Doa mohon rezeki yang benar?", jawaban: "Allahumma inni as'aluka rizqan thayyiban", options: ["Allahumma inni as'aluka rizqan thayyiban", "Rabbana atina", "Bismillah", "Subhanallah"] }
        ],
        hard: [
            { kegunaan: "Bunyi doa sebelum makan (pendek) yang benar?", jawaban: "Bismillah", options: ["Bismillah", "Alhamdulillah", "Subhanallah", "Allahu Akbar"] },
            { kegunaan: "Bunyi doa bangun tidur (pendek) yang benar?", jawaban: "Alhamdulillahilladzi ahyana", options: ["Alhamdulillahilladzi ahyana", "Bismillah", "Subhanallah", "Allahu Akbar"] },
            { kegunaan: "Bunyi doa hendak tidur (pendek) yang benar?", jawaban: "Bismikallahumma ahya wa amut", options: ["Bismikallahumma ahya wa amut", "Bismillah", "Alhamdulillah", "Allahu Akbar"] },
            { kegunaan: "Bunyi doa keluar rumah (pendek) yang benar?", jawaban: "Bismillahi tawakkaltu 'alallah", options: ["Bismillahi tawakkaltu 'alallah", "Bismillah", "Alhamdulillah", "Allahu Akbar"] },
            { kegunaan: "Bunyi doa masuk rumah (pendek) yang benar?", jawaban: "Bismillah walajna", options: ["Bismillah walajna", "Bismillah", "Alhamdulillah", "Allahu Akbar"] },
            { kegunaan: "Bunyi doa naik kendaraan (pendek) yang benar?", jawaban: "Subhanalladzi sakhkhara", options: ["Subhanalladzi sakhkhara", "Bismillah", "Alhamdulillah", "Allahu Akbar"] },
            { kegunaan: "Bunyi doa mau makan (pendek) yang benar?", jawaban: "Bismillah", options: ["Bismillah", "Alhamdulillah", "Subhanallah", "Allahu Akbar"] },
            { kegunaan: "Bunyi doa selesai makan (pendek) yang benar?", jawaban: "Alhamdulillah", options: ["Alhamdulillah", "Bismillah", "Subhanallah", "Allahu Akbar"] },
            { kegunaan: "Bunyi doa masuk kamar mandi yang benar?", jawaban: "Allahumma inni a'udzu bika", options: ["Allahumma inni a'udzu bika", "Bismillah", "Alhamdulillah", "Subhanallah"] },
            { kegunaan: "Bunyi doa keluar kamar mandi yang benar?", jawaban: "Ghufranaka", options: ["Ghufranaka", "Bismillah", "Alhamdulillah", "Subhanallah"] },
            { kegunaan: "Bunyi doa mau bersin yang benar?", jawaban: "Alhamdulillah", options: ["Alhamdulillah", "Bismillah", "Subhanallah", "Allahu Akbar"] },
            { kegunaan: "Bunyi jawaban orang bersin yang benar?", jawaban: "Yarhamukallah", options: ["Yarhamukallah", "Alhamdulillah", "Bismillah", "Subhanallah"] },
            { kegunaan: "Bunyi doa mohon ilmu yang benar?", jawaban: "Rabbi zidni ilma", options: ["Rabbi zidni ilma", "Rabbana atina", "Bismillah", "Subhanallah"] },
            { kegunaan: "Bunyi doa mohon kesehatan yang benar?", jawaban: "Allahumma inni as'aluka al-afiyah", options: ["Allahumma inni as'aluka al-afiyah", "Rabbana atina", "Bismillah", "Subhanallah"] },
            { kegunaan: "Bunyi doa mohon rezeki yang benar?", jawaban: "Allahumma inni as'aluka rizqan thayyiban", options: ["Allahumma inni as'aluka rizqan thayyiban", "Rabbana atina", "Bismillah", "Subhanallah"] }
        ]
    },
    fiqih: {
        easy: [
            { kegunaan: "Rukun shalat yang pertama", jawaban: "Niat", options: ["Niat", "Takbiratul Ihram", "Berdiri", "Ruku"] },
            { kegunaan: "Rukun shalat yang kedua", jawaban: "Berdiri", options: ["Berdiri", "Niat", "Takbiratul Ihram", "Ruku"] },
            { kegunaan: "Rukun shalat yang ketiga", jawaban: "Takbiratul Ihram", options: ["Takbiratul Ihram", "Berdiri", "Niat", "Ruku"] },
            { kegunaan: "Rukun shalat yang keempat", jawaban: "Ruku", options: ["Ruku", "I'tidal", "Sujud", "Duduk"] },
            { kegunaan: "Rukun shalat yang kelima", jawaban: "I'tidal", options: ["I'tidal", "Ruku", "Sujud", "Duduk"] },
            { kegunaan: "Rukun shalat yang keenam", jawaban: "Sujud", options: ["Sujud", "I'tidal", "Ruku", "Duduk"] },
            { kegunaan: "Rukun shalat yang ketujuh", jawaban: "Duduk di antara dua sujud", options: ["Duduk di antara dua sujud", "Sujud", "I'tidal", "Ruku"] },
            { kegunaan: "Rukun shalat yang kedelapan", jawaban: "Tasyahud akhir", options: ["Tasyahud akhir", "Duduk di antara dua sujud", "Sujud", "I'tidal"] },
            { kegunaan: "Rukun shalat yang kesembilan", jawaban: "Salam", options: ["Salam", "Tasyahud akhir", "Duduk di antara dua sujud", "Sujud"] },
            { kegunaan: "Syarat wajib shalat yang pertama", jawaban: "Islam", options: ["Islam", "Baligh", "Berakal", "Suci dari hadas"] },
            { kegunaan: "Syarat wajib shalat yang kedua", jawaban: "Baligh", options: ["Baligh", "Islam", "Berakal", "Suci dari hadas"] },
            { kegunaan: "Syarat wajib shalat yang ketiga", jawaban: "Berakal", options: ["Berakal", "Baligh", "Islam", "Suci dari hadas"] },
            { kegunaan: "Syarat sah shalat yang pertama", jawaban: "Suci dari hadas", options: ["Suci dari hadas", "Suci dari najis", "Menutup aurat", "Menghadap kiblat"] },
            { kegunaan: "Syarat sah shalat yang kedua", jawaban: "Suci dari najis", options: ["Suci dari najis", "Suci dari hadas", "Menutup aurat", "Menghadap kiblat"] },
            { kegunaan: "Syarat sah shalat yang ketiga", jawaban: "Menutup aurat", options: ["Menutup aurat", "Suci dari najis", "Suci dari hadas", "Menghadap kiblat"] }
        ],
        medium: [
            { kegunaan: "Rukun shalat yang pertama adalah?", jawaban: "Niat", options: ["Niat", "Takbiratul Ihram", "Berdiri", "Ruku"] },
            { kegunaan: "Rukun shalat yang kedua adalah?", jawaban: "Berdiri", options: ["Berdiri", "Niat", "Takbiratul Ihram", "Ruku"] },
            { kegunaan: "Rukun shalat yang ketiga adalah?", jawaban: "Takbiratul Ihram", options: ["Takbiratul Ihram", "Berdiri", "Niat", "Ruku"] },
            { kegunaan: "Rukun shalat yang keempat adalah?", jawaban: "Ruku", options: ["Ruku", "I'tidal", "Sujud", "Duduk"] },
            { kegunaan: "Rukun shalat yang kelima adalah?", jawaban: "I'tidal", options: ["I'tidal", "Ruku", "Sujud", "Duduk"] },
            { kegunaan: "Rukun shalat yang keenam adalah?", jawaban: "Sujud", options: ["Sujud", "I'tidal", "Ruku", "Duduk"] },
            { kegunaan: "Rukun shalat yang ketujuh adalah?", jawaban: "Duduk di antara dua sujud", options: ["Duduk di antara dua sujud", "Sujud", "I'tidal", "Ruku"] },
            { kegunaan: "Rukun shalat yang kedelapan adalah?", jawaban: "Tasyahud akhir", options: ["Tasyahud akhir", "Duduk di antara dua sujud", "Sujud", "I'tidal"] },
            { kegunaan: "Rukun shalat yang kesembilan adalah?", jawaban: "Salam", options: ["Salam", "Tasyahud akhir", "Duduk di antara dua sujud", "Sujud"] },
            { kegunaan: "Syarat wajib shalat yang pertama adalah?", jawaban: "Islam", options: ["Islam", "Baligh", "Berakal", "Suci dari hadas"] },
            { kegunaan: "Syarat wajib shalat yang kedua adalah?", jawaban: "Baligh", options: ["Baligh", "Islam", "Berakal", "Suci dari hadas"] },
            { kegunaan: "Syarat wajib shalat yang ketiga adalah?", jawaban: "Berakal", options: ["Berakal", "Baligh", "Islam", "Suci dari hadas"] },
            { kegunaan: "Syarat sah shalat yang pertama adalah?", jawaban: "Suci dari hadas", options: ["Suci dari hadas", "Suci dari najis", "Menutup aurat", "Menghadap kiblat"] },
            { kegunaan: "Syarat sah shalat yang kedua adalah?", jawaban: "Suci dari najis", options: ["Suci dari najis", "Suci dari hadas", "Menutup aurat", "Menghadap kiblat"] },
            { kegunaan: "Syarat sah shalat yang ketiga adalah?", jawaban: "Menutup aurat", options: ["Menutup aurat", "Suci dari najis", "Suci dari hadas", "Menghadap kiblat"] }
        ],
        hard: [
            { kegunaan: "Rukun shalat yang pertama adalah niat, hukumnya?", jawaban: "Wajib", options: ["Wajib", "Sunah", "Mubah", "Haram"] },
            { kegunaan: "Rukun shalat yang kedua adalah berdiri, hukumnya?", jawaban: "Wajib", options: ["Wajib", "Sunah", "Mubah", "Haram"] },
            { kegunaan: "Rukun shalat yang ketiga adalah takbiratul ihram, hukumnya?", jawaban: "Wajib", options: ["Wajib", "Sunah", "Mubah", "Haram"] },
            { kegunaan: "Rukun shalat yang keempat adalah ruku, hukumnya?", jawaban: "Wajib", options: ["Wajib", "Sunah", "Mubah", "Haram"] },
            { kegunaan: "Rukun shalat yang kelima adalah i'tidal, hukumnya?", jawaban: "Wajib", options: ["Wajib", "Sunah", "Mubah", "Haram"] },
            { kegunaan: "Rukun shalat yang keenam adalah sujud, hukumnya?", jawaban: "Wajib", options: ["Wajib", "Sunah", "Mubah", "Haram"] },
            { kegunaan: "Rukun shalat yang ketujuh adalah duduk di antara dua sujud, hukumnya?", jawaban: "Wajib", options: ["Wajib", "Sunah", "Mubah", "Haram"] },
            { kegunaan: "Rukun shalat yang kedelapan adalah tasyahud akhir, hukumnya?", jawaban: "Wajib", options: ["Wajib", "Sunah", "Mubah", "Haram"] },
            { kegunaan: "Rukun shalat yang kesembilan adalah salam, hukumnya?", jawaban: "Wajib", options: ["Wajib", "Sunah", "Mubah", "Haram"] },
            { kegunaan: "Syarat wajib shalat yang pertama adalah Islam, hukumnya?", jawaban: "Wajib", options: ["Wajib", "Sunah", "Mubah", "Haram"] },
            { kegunaan: "Syarat wajib shalat yang kedua adalah baligh, hukumnya?", jawaban: "Wajib", options: ["Wajib", "Sunah", "Mubah", "Haram"] },
            { kegunaan: "Syarat wajib shalat yang ketiga adalah berakal, hukumnya?", jawaban: "Wajib", options: ["Wajib", "Sunah", "Mubah", "Haram"] },
            { kegunaan: "Syarat sah shalat yang pertama adalah suci dari hadas, hukumnya?", jawaban: "Wajib", options: ["Wajib", "Sunah", "Mubah", "Haram"] },
            { kegunaan: "Syarat sah shalat yang kedua adalah suci dari najis, hukumnya?", jawaban: "Wajib", options: ["Wajib", "Sunah", "Mubah", "Haram"] },
            { kegunaan: "Syarat sah shalat yang ketiga adalah menutup aurat, hukumnya?", jawaban: "Wajib", options: ["Wajib", "Sunah", "Mubah", "Haram"] }
        ]
    }
};

// ============================================================
//  CARD DATA (SUDAH DIPERBAIKI TYPO)
// ============================================================

const cardData = {
    doa: {
        id: 'doa',
        title: 'SANTRI DOA',
        icon: '📖',
        emoji: '🧑‍🦱',
        level: 'Lv. 1',
        desc: 'Hamba Allah yang Berdoa',
        stats: { hp: 1200, def: 800, atk: 600, sp: 900 },
        skill: { name: 'DOA MUSTAJAB', desc: 'Memulihkan HP semua teman sebesar 30% dan meningkatkan DEF selama 2 giliran.', type: 'active' },
        passive: { name: 'DZIKIR HATI', desc: 'Meningkatkan SP +20 setiap giliran jika berada di medan masjid.', type: 'passive' },
        quote: '"Berdoalah kepada-Ku, niscaya akan Kuperkenankan bagimu."',
        quran: '(QS. Ghafir: 60)',
        tag: 'ISLAMIC #001'
    },
    surat: {
        id: 'surat',
        title: 'PENGHAPAL QURAN',
        icon: '📜',
        emoji: '📖',
        level: 'Lv. 1',
        desc: 'Hafiz Al-Quran Cilik',
        stats: { hp: 1100, def: 700, atk: 800, sp: 1000 },
        skill: { name: 'AYAT SUCI', desc: 'Mengeluarkan cahaya Al-Quran yang memberikan kekuatan +50% ATK selama 3 giliran.', type: 'active' },
        passive: { name: 'TAJWID SEMPURNA', desc: 'Setiap membaca ayat, HP pulih 15% dan DEF meningkat 10%.', type: 'passive' },
        quote: '"Dan sesungguhnya telah Kami mudahkan Al-Quran untuk pelajaran."',
        quran: '(QS. Al-Qamar: 17)',
        tag: 'ISLAMIC #002'
    },
    nabi: {
        id: 'nabi',
        title: 'PENCINTA NABI',
        icon: '👳',
        emoji: '🕋',
        level: 'Lv. 1',
        desc: 'Pengikut Jejak Para Nabi',
        stats: { hp: 1300, def: 900, atk: 500, sp: 700 },
        skill: { name: 'TELADAN NABI', desc: 'Meniru akhlak Nabi, meningkatkan DEF +40% dan memulihkan HP 20% untuk semua.', type: 'active' },
        passive: { name: 'CINTA RASUL', desc: 'Setiap kali menyebut nama Nabi, SP +15 dan ATK +10%.', type: 'passive' },
        quote: '"Sesungguhnya telah ada pada diri Rasulullah itu suri teladan yang baik."',
        quran: '(QS. Al-Ahzab: 21)',
        tag: 'ISLAMIC #003'
    },
    asmaul: {
        id: 'asmaul',
        title: 'PENGHAPAL ASMAUL',
        icon: '🌟',
        emoji: '✨',
        level: 'Lv. 1',
        desc: 'Pencinta Nama-Nama Allah',
        stats: { hp: 1400, def: 600, atk: 700, sp: 1100 },
        skill: { name: 'DOA ASMAUL HUSNA', desc: 'Menyebut nama Allah, memulihkan SP +50 dan meningkatkan semua stat 20%.', type: 'active' },
        passive: { name: 'ZIKIR NAMA ALLAH', desc: 'Setiap menghafal satu nama Allah, HP +30 dan DEF +15.', type: 'passive' },
        quote: '"Dan Allah memiliki Asmaul Husna, maka bermohonlah kepada-Nya dengan menyebutnya."',
        quran: '(QS. Al-A\'raf: 180)',
        tag: 'ISLAMIC #004'
    },
    rukunIslam: {
        id: 'rukunIslam',
        title: 'PEJUANG RUKUN ISLAM',
        icon: '🕌',
        emoji: '🕋',
        level: 'Lv. 1',
        desc: 'Penjaga 5 Rukun Islam',
        stats: { hp: 1500, def: 1000, atk: 400, sp: 600 },
        skill: { name: 'RUKUN KOKOH', desc: 'Memperkuat iman dengan 5 rukun Islam, meningkatkan DEF +50%.', type: 'active' },
        passive: { name: 'ISLAM YANG KUAT', desc: 'Setiap rukun diingat, HP +25 dan SP +15.', type: 'passive' },
        quote: '"Islam dibangun di atas lima perkara..."',
        quran: '(HR. Bukhari & Muslim)',
        tag: 'ISLAMIC #005'
    },
    rukunIman: {
        id: 'rukunIman',
        title: 'PENJAGA IMAN',
        icon: '⭐',
        emoji: '🌟',
        level: 'Lv. 1',
        desc: 'Pengokoh 6 Rukun Iman',
        stats: { hp: 1400, def: 1100, atk: 450, sp: 650 },
        skill: { name: 'IMAN KOKOH', desc: 'Memperkuat iman dengan 6 rukun, meningkatkan semua stat 25%.', type: 'active' },
        passive: { name: 'HATI YANG IMAN', desc: 'Setiap rukun diingat, HP +20 dan DEF +10.', type: 'passive' },
        quote: '"Iman adalah keyakinan dalam hati..."',
        quran: '(HR. Muslim)',
        tag: 'ISLAMIC #006'
    },
    rukunShalat: {
        id: 'rukunShalat',
        title: 'RUKUN SHALAT',
        icon: '🕌',
        emoji: '🕌',
        level: 'Lv. 1',
        desc: 'Penjaga Rukun Shalat',
        stats: { hp: 1200, def: 800, atk: 600, sp: 900 },
        skill: { name: 'SHALAT KUAT', desc: 'Memperkuat rukun shalat, meningkatkan DEF +40% dan HP 20%.', type: 'active' },
        passive: { name: 'HATI KHUSYUK', desc: 'Setiap rukun shalat diingat, SP +15 dan ATK +10%.', type: 'passive' },
        quote: '"Dirikanlah shalat, sesungguhnya shalat mencegah perbuatan keji dan mungkar."',
        quran: '(QS. Al-Ankabut: 45)',
        tag: 'ISLAMIC #007'
    },
    doaPendek: {
        id: 'doaPendek',
        title: 'DOA CILIK',
        icon: '📿',
        emoji: '🧒',
        level: 'Lv. 1',
        desc: 'Anak Saleh yang Berdoa',
        stats: { hp: 1000, def: 600, atk: 400, sp: 1000 },
        skill: { name: 'DOA MUSTAJAB', desc: 'Memulihkan HP 40% dan meningkatkan SP 25%.', type: 'active' },
        passive: { name: 'HATI SUCI', desc: 'Setiap doa diucapkan, HP +10 dan SP +15.', type: 'passive' },
        quote: '"Dan berdoalah kepada-Ku dengan penuh harap..."',
        quran: '(QS. Al-Baqarah: 186)',
        tag: 'ISLAMIC #008'
    },
    fiqih: {
        id: 'fiqih',
        title: 'FAKIH CILIK',
        icon: '🏅',
        emoji: '📚',
        level: 'Lv. 1',
        desc: 'Pembelajar Fiqih Handal',
        stats: { hp: 1200, def: 850, atk: 550, sp: 700 },
        skill: { name: 'FIQIH MENDALAM', desc: 'Memahami fiqih, meningkatkan ATK 35% dan DEF 20%.', type: 'active' },
        passive: { name: 'BELAJAR FIQIH', desc: 'Setiap belajar fiqih, SP +15 dan HP +20.', type: 'passive' },
        quote: '"Maka bertanyalah kepada orang yang berilmu..."',
        quran: '(QS. An-Nahl: 43)',
        tag: 'ISLAMIC #009'
    }
};

// ============================================================
//  VARIABEL GAME
// ============================================================

const cardKeys = ['doa', 'surat', 'nabi', 'asmaul', 'rukunIslam', 'rukunIman', 'rukunShalat', 'doaPendek', 'fiqih'];

let currentGameKey = null;
let currentLevel = 'easy';
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let correctCount = 0;
let wrongCount = 0;
let totalQuestions = 0;
let timer = null;
let timeLeft = 10;
let isAnswered = false;
let isWaitingForNext = false;
let highScore = parseInt(localStorage.getItem('islamicGameHighScore')) || 0;
let audioCtx = null;
let playerName = '';
let playerClass = 1;
let playerAge = '';
let playerSchool = '';
let playerPhoto = null;
let completedGames = JSON.parse(localStorage.getItem('completedGames')) || [];
let currentCardIndex = 0;
let riwayatJawaban = [];
let allCertificates = JSON.parse(localStorage.getItem('allCertificates')) || [];
let carouselCards = [];
let centerIndex = 0;

// ============================================================
//  ELEMEN HTML
// ============================================================

const formScreen = document.getElementById('formScreen');
const petunjukScreen = document.getElementById('petunjukScreen');
const menuScreen = document.getElementById('menuScreen');
const gameScreen = document.getElementById('gameScreen');
const certificateScreen = document.getElementById('certificateScreen');
const carouselTrack = document.getElementById('carouselTrack');
const carouselPrev = document.getElementById('carouselPrev');
const carouselNext = document.getElementById('carouselNext');

const playerNameInput = document.getElementById('playerName');
const playerClassInput = document.getElementById('playerClass');
const playerAgeInput = document.getElementById('playerAge');
const playerSchoolInput = document.getElementById('playerSchool');
const photoInput = document.getElementById('photoInput');
const photoPreview = document.getElementById('photoPreview');
const startBtn = document.getElementById('startGameBtn');
const mulaiGameBtn = document.getElementById('mulaiGameBtn');
const backToFormBtnPetunjuk = document.getElementById('backToFormBtnPetunjuk');

const menuPlayerName = document.getElementById('menuPlayerName');
const highScoreDisplay = document.getElementById('highScoreDisplay');
const resetBtn = document.getElementById('resetBtn');
const backToFormBtn = document.getElementById('backToFormBtn');

const gameTitle = document.getElementById('gameTitle');
const backBtn = document.getElementById('backBtn');
const questionText = document.getElementById('questionText');
const optionsBox = document.getElementById('optionsBox');
const feedback = document.getElementById('feedback');
const scoreDisplay = document.getElementById('scoreDisplay');
const timerDisplay = document.getElementById('timerDisplay');
const progressBar = document.getElementById('progressBar');
const effectGlow = document.getElementById('effectGlow');

const certName = document.getElementById('certName');
const certClass = document.getElementById('certClass');
const certSchool = document.getElementById('certSchool');
const certGame = document.getElementById('certGame');
const certLevel = document.getElementById('certLevel');
const certScore = document.getElementById('certScore');
const certCorrect = document.getElementById('certCorrect');
const certTotal = document.getElementById('certTotal');
const certPercent = document.getElementById('certPercent');
const certPredikat = document.getElementById('certPredikat');
const certDate = document.getElementById('certDate');
const certHomeBtn = document.getElementById('certHomeBtn');
const certDownloadBtn = document.getElementById('certDownloadBtn');
const certPhoto = document.getElementById('certPhoto');
const certRiwayat = document.getElementById('certRiwayat');
const backName = document.getElementById('backName');
const backPredikat = document.getElementById('backPredikat');
const backScore = document.getElementById('backScore');
const backCorrect = document.getElementById('backCorrect');
const backTotal = document.getElementById('backTotal');
const backDate = document.getElementById('backDate');

const certGrid = document.getElementById('certGrid');
const certificateCollection = document.getElementById('certificateCollection');
const confettiContainer = document.getElementById('confettiContainer');
const endingStamp = document.getElementById('endingStamp');
const endingStats = document.getElementById('endingStats');
const refreshBtn = document.getElementById('refreshBtn');
const printAllBtn = document.getElementById('printAllBtn');

// ============================================================
//  AUDIO
// ============================================================

function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioCtx;
}

function playSound(type) {
    try {
        const ctx = initAudio();
        if (ctx.state === 'suspended') ctx.resume();
        
        if (type === 'correct') {
            playMelodi(ctx, [523.25, 659.25, 783.99, 1046.5], [0.15, 0.15, 0.2, 0.3]);
            setTimeout(() => playMelodi(ctx, [783.99, 880, 1046.5], [0.15, 0.15, 0.25]), 350);
        } else if (type === 'wrong') {
            playMelodi(ctx, [523.25, 440, 349.23], [0.2, 0.2, 0.3]);
        } else if (type === 'timeout') {
            playMelodi(ctx, [440, 349.23, 293.66], [0.12, 0.12, 0.2]);
        } else if (type === 'gameover') {
            [523.25, 587.33, 659.25, 783.99, 880, 1046.5].forEach((freq, i) => {
                setTimeout(() => playNote(ctx, freq, 0.12, 0.15), i * 120);
            });
        } else if (type === 'click') {
            playNote(ctx, 800, 0.04, 0.06);
        } else if (type === 'tick') {
            playNote(ctx, 1200, 0.03, 0.05);
        } else if (type === 'swipe') {
            playWindSound(ctx);
        } else if (type === 'welcome') {
            playMelodi(ctx, [440, 523.25, 659.25, 783.99], [0.2, 0.2, 0.2, 0.3]);
            setTimeout(() => playMelodi(ctx, [523.25, 659.25, 783.99, 880], [0.15, 0.15, 0.15, 0.25]), 400);
        } else if (type === 'thunder') {
            playNote(ctx, 200, 0.3, 0.3);
            setTimeout(() => playNote(ctx, 150, 0.2, 0.25), 150);
            setTimeout(() => playNote(ctx, 100, 0.4, 0.2), 300);
        } else if (type === 'explosion') {
            playNote(ctx, 80, 0.5, 0.4);
            setTimeout(() => playNote(ctx, 120, 0.3, 0.3), 100);
            setTimeout(() => playNote(ctx, 60, 0.6, 0.35), 200);
        }
    } catch(e) { console.log('Audio error:', e); }
}

function playMelodi(ctx, notes, durations) {
    notes.forEach((freq, i) => {
        setTimeout(() => playNote(ctx, freq, durations[i] || 0.15, 0.12), i * 100);
    });
}

function playNote(ctx, frequency, duration, volume) {
    try {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.value = frequency;
        osc.type = 'sine';
        gain.gain.setValueAtTime(volume || 0.12, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + (duration || 0.2));
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + (duration || 0.2));
    } catch(e) {}
}

function playWindSound(ctx) {
    try {
        const bufferSize = ctx.sampleRate * 0.3;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * Math.exp(-i / bufferSize * 3);
        }
        const source = ctx.createBufferSource();
        source.buffer = buffer;
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 800;
        const gain = ctx.createGain();
        gain.gain.value = 0.15;
        source.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);
        source.start(ctx.currentTime);
        source.stop(ctx.currentTime + 0.3);
    } catch(e) {}
}

// Aktivasi audio
document.addEventListener('click', function() {
    try { const ctx = initAudio(); if (ctx.state === 'suspended') ctx.resume(); } catch(e) {}
}, { once: true });

// ============================================================
//  FUNGSI UTAMA
// ============================================================

function shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

function getLevelFromClass(kelas) {
    if (kelas <= 2) return 'easy';
    else if (kelas <= 4) return 'medium';
    else return 'hard';
}

function getQuestions(gameKey, level) {
    return soalByLevel[gameKey] && soalByLevel[gameKey][level] ? soalByLevel[gameKey][level] : [];
}

function isGameCompleted(key) {
    return completedGames.includes(key);
}

function markGameCompleted(key) {
    if (!completedGames.includes(key)) {
        completedGames.push(key);
        localStorage.setItem('completedGames', JSON.stringify(completedGames));
    }
}

function isAllGamesCompleted() {
    return cardKeys.every(k => completedGames.includes(k));
}

function resetAllGames() {
    completedGames = [];
    allCertificates = [];
    localStorage.setItem('completedGames', JSON.stringify(completedGames));
    localStorage.setItem('allCertificates', JSON.stringify(allCertificates));
    centerIndex = 0;
    riwayatJawaban = [];
    certificateCollection.style.display = 'none';
    endingStamp.style.display = 'none';
    resetBtn.style.display = 'none';
    renderCarousel();
    playSound('click');
}

// ============================================================
//  KONFETI
// ============================================================

function createConfetti(count = 100) {
    const colors = ['#ffd700', '#ff6b6b', '#4caf7a', '#5ab0ff', '#ff9f43', '#a29bfe', '#fd79a8', '#00cec9'];
    confettiContainer.innerHTML = '';
    for (let i = 0; i < count; i++) {
        const el = document.createElement('div');
        el.className = 'confetti';
        el.style.left = Math.random() * 100 + '%';
        el.style.background = colors[Math.floor(Math.random() * colors.length)];
        el.style.width = (Math.random() * 8 + 4) + 'px';
        el.style.height = (Math.random() * 8 + 4) + 'px';
        el.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        el.style.animationDuration = (Math.random() * 2 + 1.5) + 's';
        el.style.animationDelay = (Math.random() * 1.5) + 's';
        confettiContainer.appendChild(el);
    }
    setTimeout(() => {
        confettiContainer.innerHTML = '';
    }, 5000);
}

// ============================================================
//  RENDER CAROUSEL 3D
// ============================================================

function getFilteredCardKeys() {
    const notDone = cardKeys.filter(k => !isGameCompleted(k));
    const done = cardKeys.filter(k => isGameCompleted(k));
    return [...notDone, ...done];
}

function renderCarousel() {
    const filteredKeys = getFilteredCardKeys();
    const total = filteredKeys.length;
    
    if (total === 0) {
        carouselTrack.innerHTML = `
            <div style="text-align:center;color:#8fb3a0;padding:40px;font-size:18px;">
                🎉 Semua game selesai!
                <br><span style="font-size:14px;">Klik Reset jika ingin main lagi</span>
            </div>
        `;
        return;
    }
    
    if (centerIndex >= total) centerIndex = total - 1;
    if (centerIndex < 0) centerIndex = 0;
    
    let html = '';
    filteredKeys.forEach((key, index) => {
        const game = cardData[key];
        const isDone = isGameCompleted(key);
        const isLocked = index > 0 ? !isGameCompleted(filteredKeys[index - 1]) : false;
        const isCenter = index === centerIndex;
        
        let statusText, statusClass;
        if (isDone) {
            statusText = '✅ Selesai';
            statusClass = 'done';
        } else if (isLocked || index > 0) {
            statusText = '🔒 Terkunci';
            statusClass = 'locked';
        } else {
            statusText = '🎯 Siap Main';
            statusClass = 'ready';
        }
        
        let positionClass = 'hidden';
        const diff = index - centerIndex;
        if (diff === 0) positionClass = 'center';
        else if (diff === -1) positionClass = 'left';
        else if (diff === 1) positionClass = 'right';
        else if (diff === -2) positionClass = 'far-left';
        else if (diff === 2) positionClass = 'far-right';
        
        const levelName = getLevelFromClass(playerClass);
        const levelDisplay = levelName === 'easy' ? '🟢 Mudah' : levelName === 'medium' ? '🟡 Sedang' : '🔴 Sulit';
        
        const isClickable = (positionClass === 'center' && !isDone && !isLocked);
        
        html += `
            <div class="carousel-card ${positionClass}" data-key="${key}" data-index="${index}" style="${positionClass === 'center' ? 'cursor:pointer;' : 'cursor:default;'}">
                <div class="card-header">
                    <span class="game-icon">${game.icon}</span>
                    <span class="game-level-badge">${game.level} | ${levelDisplay}</span>
                </div>
                <div class="card-avatar">
                    <span class="avatar-emoji">${game.emoji}</span>
                    <div class="avatar-title">${game.desc}</div>
                </div>
                <div class="card-stats">
                    <div class="stat-item"><div class="stat-icon">❤️</div><div class="stat-value">${game.stats.hp}</div><div class="stat-label">HP</div></div>
                    <div class="stat-item"><div class="stat-icon">🛡️</div><div class="stat-value">${game.stats.def}</div><div class="stat-label">DEF</div></div>
                    <div class="stat-item"><div class="stat-icon">⚔️</div><div class="stat-value">${game.stats.atk}</div><div class="stat-label">ATK</div></div>
                    <div class="stat-item"><div class="stat-icon">✨</div><div class="stat-value">${game.stats.sp}</div><div class="stat-label">SP</div></div>
                </div>
                <div class="card-skill">
                    <div class="skill-title">🌟 ${game.skill.name}</div>
                    <div class="skill-desc">${game.skill.desc}</div>
                </div>
                <div class="card-skill passive">
                    <div class="skill-title">📖 ${game.passive.name}</div>
                    <div class="skill-desc">${game.passive.desc}</div>
                </div>
                <div class="card-quote">
                    ${game.quote}
                    <span class="quran-ref">${game.quran}</span>
                </div>
                <div class="card-footer-id">🏷️ ${game.tag}</div>
                <div class="card-status-overlay ${statusClass}">${statusText}</div>
            </div>
        `;
    });
    
    carouselTrack.innerHTML = html;
    
    const centerCard = document.querySelector('.carousel-card.center');
    if (centerCard) {
        const key = centerCard.dataset.key;
        const filteredKeysNow = getFilteredCardKeys();
        const idx = filteredKeysNow.indexOf(key);
        const isLocked = idx > 0 ? !isGameCompleted(filteredKeysNow[idx - 1]) : false;
        
        if (!isGameCompleted(key) && !isLocked) {
            centerCard.onclick = () => {
                playSound('click');
                startGameFromCard(key);
            };
        }
    }
    
    carouselPrev.disabled = (centerIndex <= 0);
    carouselNext.disabled = (centerIndex >= filteredKeys.length - 1);
}

function moveCarousel(direction) {
    const filteredKeys = getFilteredCardKeys();
    const total = filteredKeys.length;
    if (total === 0) return;
    
    let newIndex = centerIndex + direction;
    if (newIndex < 0) newIndex = 0;
    if (newIndex >= total) newIndex = total - 1;
    
    if (newIndex !== centerIndex) {
        centerIndex = newIndex;
        playSound('swipe');
        renderCarousel();
    }
}

// Event listeners carousel
carouselPrev.addEventListener('click', () => moveCarousel(-1));
carouselNext.addEventListener('click', () => moveCarousel(1));

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (menuScreen.style.display === 'block') {
        if (e.key === 'ArrowLeft') moveCarousel(-1);
        if (e.key === 'ArrowRight') moveCarousel(1);
        if (e.key === 'Enter') {
            const centerCard = document.querySelector('.carousel-card.center');
            if (centerCard) {
                const key = centerCard.dataset.key;
                const filteredKeysNow = getFilteredCardKeys();
                const idx = filteredKeysNow.indexOf(key);
                const isLocked = idx > 0 ? !isGameCompleted(filteredKeysNow[idx - 1]) : false;
                if (!isGameCompleted(key) && !isLocked) {
                    playSound('click');
                    startGameFromCard(key);
                }
            }
        }
    }
});

// Touch/Swipe support
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    if (menuScreen.style.display === 'block') {
        touchStartX = e.changedTouches[0].screenX;
    }
});

document.addEventListener('touchend', (e) => {
    if (menuScreen.style.display === 'block') {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 40) {
            if (diff > 0) moveCarousel(1);
            else moveCarousel(-1);
        }
    }
});

// ============================================================
//  MULAI GAME
// ============================================================

function startGameFromCard(key) {
    const game = cardData[key];
    if (!game) return;
    
    const level = getLevelFromClass(playerClass);
    const questions = getQuestions(key, level);
    
    if (!questions || questions.length === 0) {
        alert('Maaf, belum ada soal untuk level ini.');
        return;
    }
    
    currentGameKey = key;
    currentLevel = level;
    currentQuestions = shuffleArray([...questions]);
    currentIndex = 0;
    score = 0;
    correctCount = 0;
    wrongCount = 0;
    totalQuestions = currentQuestions.length;
    isAnswered = false;
    isWaitingForNext = false;
    riwayatJawaban = [];
    
    const levelName = level === 'easy' ? 'Mudah' : level === 'medium' ? 'Sedang' : 'Sulit';
    gameTitle.textContent = game.icon + ' ' + game.title + ' (' + levelName + ')';
    scoreDisplay.textContent = '0';
    
    menuScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    certificateScreen.style.display = 'none';
    
    playSound('welcome');
    loadQuestion();
}

// ============================================================
//  GAME LOGIC
// ============================================================

function loadQuestion() {
    if (currentIndex >= totalQuestions) {
        showCertificate();
        return;
    }
    
    const data = currentQuestions[currentIndex];
    questionText.textContent = "📖 " + data.kegunaan + " ? (" + (currentIndex + 1) + "/" + totalQuestions + ")";
    
    const shuffled = shuffleArray([...data.options]);
    optionsBox.innerHTML = "";
    shuffled.forEach(option => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.textContent = option;
        btn.dataset.answer = option;
        btn.addEventListener("click", () => handleAnswer(btn, option));
        optionsBox.appendChild(btn);
    });
    
    feedback.innerHTML = "";
    feedback.className = "";
    isAnswered = false;
    isWaitingForNext = false;
    
    const progress = ((currentIndex) / totalQuestions) * 100;
    progressBar.style.width = progress + '%';
    
    startTimer();
}

function startTimer() {
    clearInterval(timer);
    timeLeft = 10;
    timerDisplay.textContent = '⏱️ ' + timeLeft + 's';
    timerDisplay.className = '';
    
    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = '⏱️ ' + timeLeft + 's';
        if (timeLeft <= 3) {
            timerDisplay.className = 'timer-warning';
            playSound('tick');
        }
        if (timeLeft <= 0) {
            clearInterval(timer);
            timerDisplay.textContent = '⏱️ 0s';
            playSound('timeout');
            if (!isAnswered && !isWaitingForNext) {
                isAnswered = true;
                isWaitingForNext = true;
                const allBtns = document.querySelectorAll('.option-btn');
                allBtns.forEach(b => b.disabled = true);
                const correctAnswer = currentQuestions[currentIndex].jawaban;
                feedback.innerHTML = "⏰ Waktu habis! Jawaban: <strong>" + correctAnswer + "</strong>";
                feedback.className = "timeout";
                wrongCount++;
                riwayatJawaban.push({ soal: currentQuestions[currentIndex].kegunaan, jawaban: correctAnswer, status: '⏰ Timeout' });
                showCorrectAnswer(correctAnswer);
                setTimeout(() => { currentIndex++; loadQuestion(); }, 1500);
            }
        }
    }, 1000);
}

function showCorrectAnswer(correctAnswer) {
    const allBtns = document.querySelectorAll('.option-btn');
    allBtns.forEach(b => { if (b.textContent === correctAnswer) b.classList.add('correct'); });
}

function handleAnswer(btn, selected) {
    if (isAnswered || isWaitingForNext) return;
    isAnswered = true;
    isWaitingForNext = true;
    clearInterval(timer);
    
    const correctAnswer = currentQuestions[currentIndex].jawaban;
    const allBtns = document.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.disabled = true);
    
    if (selected === correctAnswer) {
        btn.classList.add('correct');
        feedback.innerHTML = "✅ MasyaAllah! +10 poin 🎉";
        feedback.className = "benar";
        score += 10;
        correctCount++;
        scoreDisplay.textContent = score;
        playSound('correct');
        effectGlow.className = 'active';
        setTimeout(() => effectGlow.className = '', 600);
        riwayatJawaban.push({ soal: currentQuestions[currentIndex].kegunaan, jawaban: correctAnswer, status: '✅ Benar' });
    } else {
        btn.classList.add('wrong');
        feedback.innerHTML = "❌ Coba lagi ya! Jawaban: <strong>" + correctAnswer + "</strong>";
        feedback.className = "salah";
        wrongCount++;
        playSound('wrong');
        showCorrectAnswer(correctAnswer);
        riwayatJawaban.push({ soal: currentQuestions[currentIndex].kegunaan, jawaban: correctAnswer, status: '❌ Salah' });
    }
    
    if (score > highScore) {
        highScore = score;
        localStorage.setItem('islamicGameHighScore', highScore);
        highScoreDisplay.textContent = highScore;
    }
    
    setTimeout(() => { currentIndex++; loadQuestion(); }, 1500);
}

// ============================================================
//  SERTIFIKAT
// ============================================================

function showCertificate() {
    clearInterval(timer);
    timerDisplay.textContent = '⏱️ Selesai!';
    progressBar.style.width = '100%';
    
    markGameCompleted(currentGameKey);
    
    const persentase = Math.round((correctCount / totalQuestions) * 100);
    let predikat = '', emoji = '';
    
    if (persentase === 100) { predikat = '🏆 SEMPURNA!'; emoji = '🌟'; playSound('gameover'); }
    else if (persentase >= 80) { predikat = '⭐ SANGAT BAGUS!'; emoji = '👏'; }
    else if (persentase >= 60) { predikat = '👍 CUKUP BAIK!'; emoji = '💪'; }
    else if (persentase >= 40) { predikat = '📖 TERUS BELAJAR!'; emoji = '📚'; }
    else { predikat = '💪 SEMANGAT!'; emoji = '🔥'; }
    
    const game = cardData[currentGameKey];
    const levelName = currentLevel === 'easy' ? '🟢 Mudah' : currentLevel === 'medium' ? '🟡 Sedang' : '🔴 Sulit';
    
    certName.textContent = playerName || 'Pemain Hebat';
    certClass.textContent = 'Kelas ' + playerClass;
    certSchool.textContent = playerSchool || 'Sekolah';
    certGame.textContent = game.title;
    certLevel.textContent = levelName;
    certScore.textContent = score;
    certCorrect.textContent = correctCount;
    certTotal.textContent = totalQuestions;
    certPercent.textContent = persentase + '%';
    certPredikat.textContent = emoji + ' ' + predikat;
    
    if (playerPhoto) {
        certPhoto.innerHTML = '<img src="' + playerPhoto + '" alt="Foto">';
    } else {
        const initial = (playerName || 'P').charAt(0).toUpperCase();
        certPhoto.textContent = initial;
        certPhoto.style.background = 'linear-gradient(135deg, #2a5a3e, #4caf7a)';
        certPhoto.style.fontSize = '36px';
        certPhoto.style.color = '#fff';
    }
    certPhoto.style.display = 'flex';
    certPhoto.style.alignItems = 'center';
    certPhoto.style.justifyContent = 'center';
    
    const now = new Date();
    const tanggal = now.getDate() + ' ' + ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'][now.getMonth()] + ' ' + now.getFullYear();
    certDate.textContent = '📅 ' + tanggal;
    
    backName.textContent = playerName || 'Pemain Hebat';
    backPredikat.textContent = emoji + ' ' + predikat;
    backScore.textContent = score;
    backCorrect.textContent = correctCount;
    backTotal.textContent = totalQuestions;
    backDate.textContent = now.getDate() + '-' + (now.getMonth()+1) + '-' + now.getFullYear();
    
    let riwayatHTML = '';
    if (riwayatJawaban.length > 0) {
        riwayatJawaban.forEach(r => {
            const statusIcon = r.status === '✅ Benar' ? '✅' : r.status === '❌ Salah' ? '❌' : '⏰';
            riwayatHTML += `<div style="padding:2px 0;border-bottom:1px solid #1a3528;font-size:10px;">${statusIcon} ${r.soal.substring(0, 30)}${r.soal.length > 30 ? '...' : ''} = ${r.jawaban}</div>`;
        });
    } else {
        riwayatHTML = '<div style="text-align:center;color:#5a7a6a;font-size:10px;">Tidak ada riwayat</div>';
    }
    certRiwayat.innerHTML = riwayatHTML;
    certRiwayat.style.display = 'block';
    
    const certData = {
        gameId: currentGameKey,
        gameTitle: game.title,
        icon: game.icon,
        emoji: game.emoji,
        name: playerName || 'Pemain Hebat',
        class: playerClass,
        photo: playerPhoto,
        score: score,
        correct: correctCount,
        total: totalQuestions,
        percent: persentase,
        predikat: predikat,
        date: tanggal,
        riwayat: riwayatJawaban
    };
    allCertificates.push(certData);
    localStorage.setItem('allCertificates', JSON.stringify(allCertificates));
    
    gameScreen.style.display = 'none';
    certificateScreen.style.display = 'block';
    document.querySelector('.card-container').classList.remove('flipped');
    
    setTimeout(() => {
        renderCarousel();
    }, 500);
    
    playSound('click');
}

// ============================================================
//  UPDATE KOLEKSI SERTIFIKAT
// ============================================================

function updateCertificateGrid() {
    const grid = document.getElementById('certGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    allCertificates.forEach((cert, index) => {
        const div = document.createElement('div');
        div.className = 'mini-cert pop-in shine';
        div.style.animationDelay = (index * 0.3) + 's';
        div.style.opacity = '0';
        
        const photoHTML = cert.photo ? `<img src="${cert.photo}" alt="Foto">` : cert.emoji || '👤';
        
        div.innerHTML = `
            <div class="mini-photo">${photoHTML}</div>
            <div class="mini-name">${cert.name}</div>
            <div class="mini-game">${cert.icon} ${cert.gameTitle}</div>
            <div class="mini-score">⭐ ${cert.score}</div>
            <div class="mini-status ${cert.percent >= 60 ? 'pass' : 'fail'}">${cert.percent >= 60 ? '✅ Lulus' : '❌ Ulang'}</div>
        `;
        grid.appendChild(div);
    });
}

// ============================================================
//  SHOW ENDING STAMP
// ============================================================

function showEndingStamp() {
    const stamp = document.getElementById('endingStamp');
    if (!stamp) return;
    
    certificateCollection.style.display = 'block';
    updateCertificateGrid();
    
    stamp.style.display = 'block';
    
    const totalGames = allCertificates.length;
    const totalScore = allCertificates.reduce((sum, c) => sum + c.score, 0);
    const avgPercent = Math.round(allCertificates.reduce((sum, c) => sum + c.percent, 0) / totalGames);
    const passed = allCertificates.filter(c => c.percent >= 60).length;
    const failed = totalGames - passed;
    
    if (endingStats) {
        endingStats.innerHTML = `
            📊 Rata-rata: ${avgPercent}% &nbsp;|&nbsp; 
            ✅ Lulus: ${passed} game &nbsp;|&nbsp; 
            ❌ Perlu Perbaikan: ${failed} game &nbsp;|&nbsp; 
            🏆 Total Skor: ${totalScore}
        `;
    }
    
    createConfetti(200);
    playSound('explosion');
    playSound('gameover');
    
    if (refreshBtn) refreshBtn.style.display = 'inline-block';
    if (printAllBtn) printAllBtn.style.display = 'inline-block';
    
    if (certificateScreen) certificateScreen.style.display = 'none';
    if (menuScreen) menuScreen.style.display = 'none';
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================================
//  DOWNLOAD PNG
// ============================================================

function downloadPNG() {
    const nama = playerName || 'Pemain Hebat';
    const kelas = playerClass || 1;
    const sekolah = playerSchool || 'Sekolah';
    const gameName = certGame.textContent || '-';
    const skor = score || 0;
    const benar = correctCount || 0;
    const total = totalQuestions || 0;
    const persentase = Math.round((correctCount / totalQuestions) * 100) + '%';
    const predikat = certPredikat.textContent || 'CUKUP BAIK!';
    const tanggal = certDate.textContent || new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    const foto = playerPhoto || null;

    const canvas = document.createElement('canvas');
    canvas.width = 500;
    canvas.height = 700;
    const ctx = canvas.getContext('2d');

    const grad = ctx.createLinearGradient(0, 0, 500, 700);
    grad.addColorStop(0, '#0d1f17');
    grad.addColorStop(1, '#1a2a22');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 500, 700);

    ctx.strokeStyle = '#ffd700';
    ctx.lineWidth = 6;
    ctx.strokeRect(15, 15, 470, 670);

    const photoX = 250;
    const photoY = 100;
    const photoRadius = 45;

    function renderAll() {
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.fillStyle = '#ffd700';
        ctx.font = 'bold 28px Courier New';
        ctx.fillText('🌟 SERTIFIKAT 🌟', 250, 170);

        ctx.beginPath();
        ctx.moveTo(80, 210);
        ctx.lineTo(420, 210);
        ctx.strokeStyle = '#ffd700';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.textBaseline = 'top';
        ctx.fillStyle = '#4caf7a';
        ctx.font = 'bold 22px Courier New';
        ctx.fillText('Nama: ' + nama, 250, 230);

        ctx.fillStyle = '#b7e4c7';
        ctx.font = '18px Courier New';
        ctx.fillText('Kelas: ' + kelas + ' | ' + sekolah, 250, 270);

        ctx.fillStyle = '#e0f2e9';
        ctx.font = '20px Courier New';
        ctx.fillText('🏷️ Game: ' + gameName, 250, 315);

        ctx.fillStyle = '#ffd700';
        ctx.font = 'bold 22px Courier New';
        ctx.fillText('⭐ Skor: ' + skor, 250, 360);

        ctx.fillStyle = '#b7e4c7';
        ctx.font = '16px Courier New';
        ctx.fillText('✅ Benar: ' + benar + '/' + total + '   📈 Persentase: ' + persentase, 250, 405);

        let predikatColor = '#ffb347';
        if (persentase === '100%') predikatColor = '#ffd700';
        else if (parseInt(persentase) >= 80) predikatColor = '#7ae0a0';
        
        ctx.fillStyle = predikatColor;
        ctx.font = 'bold 26px Courier New';
        ctx.fillText('🏆 ' + predikat, 250, 455);

        ctx.fillStyle = '#8fb3a0';
        ctx.font = '14px Courier New';
        ctx.fillText('📅 ' + tanggal, 250, 510);

        ctx.fillStyle = '#3a5a4a';
        ctx.font = '12px Courier New';
        ctx.fillText('Islamic Game Zone', 250, 670);

        ctx.strokeStyle = '#ffd70033';
        ctx.lineWidth = 1;
        ctx.strokeRect(30, 30, 440, 640);

        const link = document.createElement('a');
        link.download = 'sertifikat-' + gameName.replace(/\s/g, '-') + '.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
        playSound('click');
    }

    if (foto) {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = function() {
            ctx.save();
            ctx.beginPath();
            ctx.arc(photoX, photoY, photoRadius, 0, Math.PI * 2);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img, photoX - photoRadius, photoY - photoRadius, photoRadius * 2, photoRadius * 2);
            ctx.restore();
            ctx.beginPath();
            ctx.arc(photoX, photoY, photoRadius, 0, Math.PI * 2);
            ctx.strokeStyle = '#ffd700';
            ctx.lineWidth = 4;
            ctx.stroke();
            renderAll();
        };
        img.onerror = function() {
            renderAll();
        };
        img.src = foto;
    } else {
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#2a5a3e';
        ctx.beginPath();
        ctx.arc(photoX, photoY, photoRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#ffd700';
        ctx.font = 'bold 40px Courier New';
        ctx.fillText(nama.charAt(0).toUpperCase(), photoX, photoY + 2);
        renderAll();
    }
}

// ============================================================
//  KAMERA
// ============================================================

function ambilFotoDariKamera() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert('⚠️ Browser kamu tidak support kamera. Silakan upload foto dari galeri!');
        return;
    }

    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user', width: { ideal: 400 }, height: { ideal: 400 } }, audio: false })
    .then(function(stream) {
        const video = document.createElement('video');
        video.srcObject = stream;
        video.autoplay = true;
        video.style.width = '100%';
        video.style.maxWidth = '400px';
        video.style.borderRadius = '12px';
        video.style.border = '2px solid #4caf7a';

        const captureBtn = document.createElement('button');
        captureBtn.textContent = '📸 Ambil Foto';
        captureBtn.style.cssText = `background:#4caf7a;border:none;padding:10px 20px;border-radius:30px;color:#fff;font-size:16px;font-family:'Courier New',monospace;cursor:pointer;margin-top:10px;`;

        const cancelBtn = document.createElement('button');
        cancelBtn.textContent = '❌ Batal';
        cancelBtn.style.cssText = `background:#6b2e2e;border:none;padding:10px 20px;border-radius:30px;color:#fff;font-size:16px;font-family:'Courier New',monospace;cursor:pointer;margin-top:10px;margin-left:10px;`;

        const container = document.createElement('div');
        container.id = 'cameraContainer';
        container.style.cssText = `position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#0a1410;padding:20px;border-radius:20px;border:3px solid #4caf7a;box-shadow:0 0 60px rgba(0,0,0,0.9);z-index:9999;max-width:90%;max-height:90%;text-align:center;`;
        container.appendChild(video);
        const btnContainer = document.createElement('div');
        btnContainer.appendChild(captureBtn);
        btnContainer.appendChild(cancelBtn);
        container.appendChild(btnContainer);
        document.body.appendChild(container);

        captureBtn.onclick = function() {
            const canvas = document.createElement('canvas');
            canvas.width = video.videoWidth || 400;
            canvas.height = video.videoHeight || 400;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            const fotoData = canvas.toDataURL('image/png');
            playerPhoto = fotoData;
            photoPreview.innerHTML = '<img src="' + fotoData + '" alt="Foto">';
            stream.getTracks().forEach(track => track.stop());
            container.remove();
            playSound('click');
        };

        cancelBtn.onclick = function() {
            stream.getTracks().forEach(track => track.stop());
            container.remove();
            playSound('click');
        };

        container.onclick = function(e) {
            if (e.target === container) {
                stream.getTracks().forEach(track => track.stop());
                container.remove();
                playSound('click');
            }
        };
        playSound('click');
    })
    .catch(function(err) {
        alert('⚠️ Gagal mengakses kamera. Pastikan kamu sudah mengizinkan akses kamera.\n\nError: ' + err.message);
    });
}

// ============================================================
//  EVENT LISTENERS
// ============================================================

document.getElementById('btnAmbilFoto').addEventListener('click', function(e) {
    e.stopPropagation();
    ambilFotoDariKamera();
});

document.getElementById('btnGaleri').addEventListener('click', function(e) {
    e.stopPropagation();
    document.getElementById('photoInput').click();
});

photoInput.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            playerPhoto = event.target.result;
            photoPreview.innerHTML = '<img src="' + playerPhoto + '" alt="Foto">';
            playSound('click');
        };
        reader.readAsDataURL(file);
    }
});

startBtn.addEventListener('click', function() {
    playerName = playerNameInput.value.trim() || 'Pemain Hebat';
    playerClass = parseInt(playerClassInput.value) || 1;
    playerAge = playerAgeInput.value.trim() || '7';
    playerSchool = playerSchoolInput.value.trim() || 'Sekolah';
    
    formScreen.style.display = 'none';
    petunjukScreen.style.display = 'block';
    playSound('click');
});

mulaiGameBtn.addEventListener('click', function() {
    petunjukScreen.style.display = 'none';
    menuScreen.style.display = 'block';
    
    menuPlayerName.textContent = '👤 ' + playerName;
    highScoreDisplay.textContent = highScore;
    
    allCertificates = JSON.parse(localStorage.getItem('allCertificates')) || [];
    
    centerIndex = 0;
    renderCarousel();
    playSound('click');
});

backToFormBtnPetunjuk.addEventListener('click', function() {
    petunjukScreen.style.display = 'none';
    formScreen.style.display = 'block';
    playSound('click');
});

backBtn.addEventListener('click', function() {
    clearInterval(timer);
    gameScreen.style.display = 'none';
    menuScreen.style.display = 'block';
    certificateScreen.style.display = 'none';
    renderCarousel();
    playSound('click');
});

certHomeBtn.addEventListener('click', function() {
    certificateScreen.style.display = 'none';
    menuScreen.style.display = 'block';
    renderCarousel();
    playSound('click');
});

certDownloadBtn.addEventListener('click', function() {
    downloadPNG();
});

resetBtn.addEventListener('click', function() {
    if (confirm('Reset semua game? Kamu akan kehilangan semua progress!')) {
        resetAllGames();
    }
});

backToFormBtn.addEventListener('click', function() {
    if (confirm('Kembali ke form data diri?')) {
        menuScreen.style.display = 'none';
        formScreen.style.display = 'block';
        playSound('click');
    }
});

refreshBtn.addEventListener('click', function() {
    if (confirm('Refresh untuk menyempurnakan nilai? Kamu akan memulai ulang game yang nilainya di bawah 60%.')) {
        const toReset = allCertificates.filter(c => c.percent < 60).map(c => c.gameId);
        toReset.forEach(id => {
            const idx = completedGames.indexOf(id);
            if (idx > -1) completedGames.splice(idx, 1);
        });
        localStorage.setItem('completedGames', JSON.stringify(completedGames));
        allCertificates = allCertificates.filter(c => c.percent >= 60);
        localStorage.setItem('allCertificates', JSON.stringify(allCertificates));
        certificateCollection.style.display = 'none';
        endingStamp.style.display = 'none';
        resetBtn.style.display = 'none';
        centerIndex = 0;
        renderCarousel();
        playSound('click');
    }
});

printAllBtn.addEventListener('click', function() {
    window.print();
    playSound('click');
});

// ============================================================
//  CEK PARAMETER URL UNTUK LINK SPESIFIK
// ============================================================

const urlParams = new URLSearchParams(window.location.search);
const selectedGame = urlParams.get('game');
window.isSpecificGame = selectedGame && cardKeys.includes(selectedGame);

if (window.isSpecificGame) {
    console.log('🔗 Mode Link Spesifik: ' + selectedGame);
    
    const prevCard = document.getElementById('carouselPrev');
    const nextCard = document.getElementById('carouselNext');
    const infoCenter = document.querySelector('.carousel-info .info-center');
    if (prevCard) prevCard.style.display = 'none';
    if (nextCard) nextCard.style.display = 'none';
    if (infoCenter) infoCenter.textContent = '🎯 Klik kartu untuk main';
    
    window.specificGame = selectedGame;
    
    const mulaiBtn = document.getElementById('mulaiGameBtn');
    mulaiBtn.onclick = function() {
        petunjukScreen.style.display = 'none';
        menuScreen.style.display = 'block';
        menuPlayerName.textContent = '👤 ' + playerName;
        highScoreDisplay.textContent = highScore;
        startGameFromCard(selectedGame);
        playSound('click');
    };
}

// ============================================================
//  SPLASH SCREEN LOGIC
// ============================================================

const splashScreen = document.getElementById('splashScreen');
const app = document.getElementById('app');
const loadingBar = document.getElementById('loadingBar');
const loadingText = document.getElementById('loadingText');
const splashEnterBtn = document.getElementById('splashEnterBtn');

document.getElementById('splashBg').style.cssText = `
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background-image: url('assets/splash-bg.png');
    background-size: cover; background-position: center; background-repeat: no-repeat;
    opacity: 0.85;
`;

const bgMusic = new Audio('assets/bg-music.mp3');
bgMusic.loop = true;
bgMusic.volume = 0.4;

let loadingProgress = 0;

function simulateLoading() {
    if (loadingProgress < 100) {
        loadingProgress += Math.random() * 4 + 1;
        if (loadingProgress > 100) loadingProgress = 100;
        loadingBar.style.width = loadingProgress + '%';
        loadingText.textContent = 'Memuat ' + Math.round(loadingProgress) + '%';
        setTimeout(simulateLoading, 120);
    } else {
        loadingText.textContent = '✅ Siap!';
        splashEnterBtn.style.display = 'inline-block';
        splashEnterBtn.textContent = '🚀 Mulai Game';
        bgMusic.play().catch(e => console.log('Musik auto-play ditolak'));
    }
}

splashEnterBtn.addEventListener('click', function() {
    splashScreen.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    splashScreen.style.opacity = '0';
    splashScreen.style.transform = 'scale(1.05)';
    
    setTimeout(() => {
        splashScreen.style.display = 'none';
        app.style.display = 'block';
        app.style.opacity = '0';
        app.style.transition = 'opacity 0.6s ease';
        setTimeout(() => {
            app.style.opacity = '1';
        }, 100);
        bgMusic.play().catch(e => console.log('Musik gagal diputar'));
        try { if (window.playSound) window.playSound('click'); } catch(e) {}
    }, 900);
});

window.addEventListener('load', function() {
    setTimeout(simulateLoading, 300);
});

// ============================================================
//  ADMOB
// ============================================================

const TEST_REWARD_AD_UNIT_ID = 'ca-app-pub-3940256099942544/5224354917';
let rewardAd = null;
let isAdReady = false;
let pendingDownload = false;

function loadRewardedAd() {
    console.log('🔄 Memuat iklan reward...');
    if (typeof admob === 'undefined') {
        console.log('⚠️ AdMob SDK belum terpasang. Download langsung.');
        if (typeof downloadPNG === 'function') downloadPNG();
        return;
    }
    try {
        rewardAd = new admob.RewardedAd();
        rewardAd.loadWithAdUnitId(TEST_REWARD_AD_UNIT_ID);
        rewardAd.on('loaded', function() {
            console.log('✅ Iklan reward siap ditampilkan');
            isAdReady = true;
            if (pendingDownload) showAd();
        });
        rewardAd.on('failed', function(error) {
            console.log('❌ Gagal muat iklan:', error);
            isAdReady = false;
            if (typeof downloadPNG === 'function') downloadPNG();
            pendingDownload = false;
        });
        rewardAd.on('closed', function() {
            console.log('📴 Iklan ditutup tanpa reward');
            pendingDownload = false;
        });
        rewardAd.on('rewarded', function() {
            console.log('🎉 User dapet reward! Download sertifikat...');
            pendingDownload = false;
            if (typeof downloadPNG === 'function') downloadPNG();
        });
    } catch(e) {
        console.log('Error AdMob:', e);
        if (typeof downloadPNG === 'function') downloadPNG();
    }
}

function showAd() {
    if (rewardAd && isAdReady) {
        try { rewardAd.show(); } catch(e) { console.log('Error show ad:', e); if (typeof downloadPNG === 'function') downloadPNG(); }
    } else {
        console.log('⏳ Iklan belum ready, loading ulang...');
        loadRewardedAd();
    }
}

function handleDownloadWithAd() {
    console.log('📥 Tombol download diklik');
    if (typeof admob === 'undefined') {
        console.log('⚠️ AdMob SDK tidak tersedia, download langsung');
        if (typeof downloadPNG === 'function') downloadPNG();
        return;
    }
    pendingDownload = true;
    if (isAdReady && rewardAd) {
        showAd();
    } else {
        loadRewardedAd();
        alert('⏳ Memuat iklan... Tunggu sebentar ya!');
        setTimeout(() => {
            if (pendingDownload) {
                console.log('⏰ Timeout, download langsung');
                pendingDownload = false;
                if (typeof downloadPNG === 'function') downloadPNG();
            }
        }, 5000);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('certDownloadBtn');
    if (downloadBtn) {
        downloadBtn.onclick = function(e) {
            e.stopPropagation();
            handleDownloadWithAd();
        };
        console.log('✅ Tombol download siap dengan iklan!');
    }
});

// ============================================================
//  INIT
// ============================================================

highScoreDisplay.textContent = highScore;
resetBtn.style.display = 'none';

allCertificates = JSON.parse(localStorage.getItem('allCertificates')) || [];

console.log('🕌 Islamic Game Zone siap!');
console.log('📸 Klik "Ambil Foto" untuk foto langsung dari kamera!');
console.log('🔗 Gunakan ?game=doa untuk link spesifik');
console.log('📚 Level otomatis berdasarkan kelas!');
console.log('✅ 405 soal islami siap dimainkan!');
console.log('📥 Download sertifikat dalam format PNG!');
console.log('🎯 3D Carousel aktif! Geser kiri/kanan untuk navigasi!');

if (window.isSpecificGame) {
    console.log('🎯 Game spesifik: ' + selectedGame + ' — navigasi kartu disembunyikan.');
}

// ===== FITUR AUTO PROMPT INSTALL PWA =====
let deferredPrompt;

// Buat elemen banner install secara otomatis
const installBanner = document.createElement('div');
installBanner.id = 'pwaInstallBanner';
installBanner.style.cssText = `
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #13261e, #1a3d2f);
  border: 2px solid #4caf7a;
  border-radius: 16px;
  padding: 12px 20px;
  display: none;
  align-items: center;
  gap: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.5);
  z-index: 99999;
  width: 90%;
  max-width: 400px;
`;

installBanner.innerHTML = `
  <div style="font-size:28px;">🕌</div>
  <div style="flex:1;color:#fff;font-family:sans-serif;">
    <div style="font-weight:bold;font-size:14px;">Install Aplikasi</div>
    <div style="font-size:11px;color:#8fb3a0;">Mainkan lebih cepat & ringan!</div>
  </div>
  <button id="btnPwaInstall" style="background:#4caf7a;color:#fff;border:none;padding:8px 14px;border-radius:20px;font-weight:bold;font-size:12px;cursor:pointer;">Install</button>
  <button id="btnPwaClose" style="background:transparent;color:#8fb3a0;border:none;font-size:16px;cursor:pointer;padding:0 4px;">✕</button>
`;

document.body.appendChild(installBanner);

// Cek apakah aplikasi dibuka sebagai PWA (sudah ter-install)
const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;

if (!isStandalone) {
  // Tangkap event install dari browser
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    // Tampilkan banner jika belum di-install
    installBanner.style.display = 'flex';
  });
}

// Handler Tombol Install
document.addEventListener('click', (e) => {
  if (e.target && e.target.id === 'btnPwaInstall') {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User menerima install PWA');
        }
        deferredPrompt = null;
        installBanner.style.display = 'none';
      });
    }
  }
  
  if (e.target && e.target.id === 'btnPwaClose') {
    installBanner.style.display = 'none';
  }
});
