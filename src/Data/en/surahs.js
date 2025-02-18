const surahs =[
  {
    "number": 1,
    "name": "الفاتحة",
    "transliteration": "Al-Fatihah",
    "translation": "The Opener",
    "type": "meccan",
    "total_verses": 7
  },
  {
    "number": 2,
    "name": "البقرة",
    "transliteration": "Al-Baqarah",
    "translation": "The Cow",
    "type": "medinan",
    "total_verses": 286
  },
  {
    "number": 3,
    "name": "آل عمران",
    "transliteration": "Ali 'Imran",
    "translation": "Family of Imran",
    "type": "medinan",
    "total_verses": 200
  },
  {
    "number": 4,
    "name": "النساء",
    "transliteration": "An-Nisa",
    "translation": "The Women",
    "type": "medinan",
    "total_verses": 176
  },
  {
    "number": 5,
    "name": "المائدة",
    "transliteration": "Al-Ma'idah",
    "translation": "The Table Spread",
    "type": "medinan",
    "total_verses": 120
  },
  {
    "number": 6,
    "name": "الأنعام",
    "transliteration": "Al-An'am",
    "translation": "The Cattle",
    "type": "meccan",
    "total_verses": 165
  },
  {
    "number": 7,
    "name": "الأعراف",
    "transliteration": "Al-A'raf",
    "translation": "The Heights",
    "type": "meccan",
    "total_verses": 206
  },
  {
    "number": 8,
    "name": "الأنفال",
    "transliteration": "Al-Anfal",
    "translation": "The Spoils of War",
    "type": "medinan",
    "total_verses": 75
  },
  {
    "number": 9,
    "name": "التوبة",
    "transliteration": "At-Tawbah",
    "translation": "The Repentance",
    "type": "medinan",
    "total_verses": 129
  },
  {
    "number": 10,
    "name": "يونس",
    "transliteration": "Yunus",
    "translation": "Jonah",
    "type": "meccan",
    "total_verses": 109
  },
  {
    "number": 11,
    "name": "هود",
    "transliteration": "Hud",
    "translation": "Hud",
    "type": "meccan",
    "total_verses": 123
  },
  {
    "number": 12,
    "name": "يوسف",
    "transliteration": "Yusuf",
    "translation": "Joseph",
    "type": "meccan",
    "total_verses": 111
  },
  {
    "number": 13,
    "name": "الرعد",
    "transliteration": "Ar-Ra'd",
    "translation": "The Thunder",
    "type": "medinan",
    "total_verses": 43
  },
  {
    "number": 14,
    "name": "ابراهيم",
    "transliteration": "Ibrahim",
    "translation": "Abraham",
    "type": "meccan",
    "total_verses": 52
  },
  {
    "number": 15,
    "name": "الحجر",
    "transliteration": "Al-Hijr",
    "translation": "The Rocky Tract",
    "type": "meccan",
    "total_verses": 99
  },
  {
    "number": 16,
    "name": "النحل",
    "transliteration": "An-Nahl",
    "translation": "The Bee",
    "type": "meccan",
    "total_verses": 128
  },
  {
    "number": 17,
    "name": "الإسراء",
    "transliteration": "Al-Isra",
    "translation": "The Night Journey",
    "type": "meccan",
    "total_verses": 111
  },
  {
    "number": 18,
    "name": "الكهف",
    "transliteration": "Al-Kahf",
    "translation": "The Cave",
    "type": "meccan",
    "total_verses": 110
  },
  {
    "number": 19,
    "name": "مريم",
    "transliteration": "Maryam",
    "translation": "Mary",
    "type": "meccan",
    "total_verses": 98
  },
  {
    "number": 20,
    "name": "طه",
    "transliteration": "Taha",
    "translation": "Ta-Ha",
    "type": "meccan",
    "total_verses": 135
  },
  {
    "number": 21,
    "name": "الأنبياء",
    "transliteration": "Al-Anbya",
    "translation": "The Prophets",
    "type": "meccan",
    "total_verses": 112
  },
  {
    "number": 22,
    "name": "الحج",
    "transliteration": "Al-Hajj",
    "translation": "The Pilgrimage",
    "type": "medinan",
    "total_verses": 78
  },
  {
    "number": 23,
    "name": "المؤمنون",
    "transliteration": "Al-Mu'minun",
    "translation": "The Believers",
    "type": "meccan",
    "total_verses": 118
  },
  {
    "number": 24,
    "name": "النور",
    "transliteration": "An-Nur",
    "translation": "The Light",
    "type": "medinan",
    "total_verses": 64
  },
  {
    "number": 25,
    "name": "الفرقان",
    "transliteration": "Al-Furqan",
    "translation": "The Criterion",
    "type": "meccan",
    "total_verses": 77
  },
  {
    "number": 26,
    "name": "الشعراء",
    "transliteration": "Ash-Shu'ara",
    "translation": "The Poets",
    "type": "meccan",
    "total_verses": 227
  },
  {
    "number": 27,
    "name": "النمل",
    "transliteration": "An-Naml",
    "translation": "The Ant",
    "type": "meccan",
    "total_verses": 93
  },
  {
    "number": 28,
    "name": "القصص",
    "transliteration": "Al-Qasas",
    "translation": "The Stories",
    "type": "meccan",
    "total_verses": 88
  },
  {
    "number": 29,
    "name": "العنكبوت",
    "transliteration": "Al-'Ankabut",
    "translation": "The Spider",
    "type": "meccan",
    "total_verses": 69
  },
  {
    "number": 30,
    "name": "الروم",
    "transliteration": "Ar-Rum",
    "translation": "The Romans",
    "type": "meccan",
    "total_verses": 60
  },
  {
    "number": 31,
    "name": "لقمان",
    "transliteration": "Luqman",
    "translation": "Luqman",
    "type": "meccan",
    "total_verses": 34
  },
  {
    "number": 32,
    "name": "السجدة",
    "transliteration": "As-Sajdah",
    "translation": "The Prostration",
    "type": "meccan",
    "total_verses": 30
  },
  {
    "number": 33,
    "name": "الأحزاب",
    "transliteration": "Al-Ahzab",
    "translation": "The Combined Forces",
    "type": "medinan",
    "total_verses": 73
  },
  {
    "number": 34,
    "name": "سبإ",
    "transliteration": "Saba",
    "translation": "Sheba",
    "type": "meccan",
    "total_verses": 54
  },
  {
    "number": 35,
    "name": "فاطر",
    "transliteration": "Fatir",
    "translation": "Originator",
    "type": "meccan",
    "total_verses": 45
  },
  {
    "number": 36,
    "name": "يس",
    "transliteration": "Ya-Sin",
    "translation": "Ya Sin",
    "type": "meccan",
    "total_verses": 83
  },
  {
    "number": 37,
    "name": "الصافات",
    "transliteration": "As-Saffat",
    "translation": "Those who set the Ranks",
    "type": "meccan",
    "total_verses": 182
  },
  {
    "number": 38,
    "name": "ص",
    "transliteration": "Sad",
    "translation": "The Letter \"Saad\"",
    "type": "meccan",
    "total_verses": 88
  },
  {
    "number": 39,
    "name": "الزمر",
    "transliteration": "Az-Zumar",
    "translation": "The Troops",
    "type": "meccan",
    "total_verses": 75
  },
  {
    "number": 40,
    "name": "غافر",
    "transliteration": "Ghafir",
    "translation": "The Forgiver",
    "type": "meccan",
    "total_verses": 85
  },
  {
    "number": 41,
    "name": "فصلت",
    "transliteration": "Fussilat",
    "translation": "Explained in Detail",
    "type": "meccan",
    "total_verses": 54
  },
  {
    "number": 42,
    "name": "الشورى",
    "transliteration": "Ash-Shuraa",
    "translation": "The Consultation",
    "type": "meccan",
    "total_verses": 53
  },
  {
    "number": 43,
    "name": "الزخرف",
    "transliteration": "Az-Zukhruf",
    "translation": "The Ornaments of Gold",
    "type": "meccan",
    "total_verses": 89
  },
  {
    "number": 44,
    "name": "الدخان",
    "transliteration": "Ad-Dukhan",
    "translation": "The Smoke",
    "type": "meccan",
    "total_verses": 59
  },
  {
    "number": 45,
    "name": "الجاثية",
    "transliteration": "Al-Jathiyah",
    "translation": "The Crouching",
    "type": "meccan",
    "total_verses": 37
  },
  {
    "number": 46,
    "name": "الأحقاف",
    "transliteration": "Al-Ahqaf",
    "translation": "The Wind-Curved Sandhills",
    "type": "meccan",
    "total_verses": 35
  },
  {
    "number": 47,
    "name": "محمد",
    "transliteration": "Muhammad",
    "translation": "Muhammad",
    "type": "medinan",
    "total_verses": 38
  },
  {
    "number": 48,
    "name": "الفتح",
    "transliteration": "Al-Fath",
    "translation": "The Victory",
    "type": "medinan",
    "total_verses": 29
  },
  {
    "number": 49,
    "name": "الحجرات",
    "transliteration": "Al-Hujurat",
    "translation": "The Rooms",
    "type": "medinan",
    "total_verses": 18
  },
  {
    "number": 50,
    "name": "ق",
    "transliteration": "Qaf",
    "translation": "The Letter \"Qaf\"",
    "type": "meccan",
    "total_verses": 45
  },
  {
    "number": 51,
    "name": "الذاريات",
    "transliteration": "Adh-Dhariyat",
    "translation": "The Winnowing Winds",
    "type": "meccan",
    "total_verses": 60
  },
  {
    "number": 52,
    "name": "الطور",
    "transliteration": "At-Tur",
    "translation": "The Mount",
    "type": "meccan",
    "total_verses": 49
  },
  {
    "number": 53,
    "name": "النجم",
    "transliteration": "An-Najm",
    "translation": "The Star",
    "type": "meccan",
    "total_verses": 62
  },
  {
    "number": 54,
    "name": "القمر",
    "transliteration": "Al-Qamar",
    "translation": "The Moon",
    "type": "meccan",
    "total_verses": 55
  },
  {
    "number": 55,
    "name": "الرحمن",
    "transliteration": "Ar-Rahman",
    "translation": "The Beneficent",
    "type": "medinan",
    "total_verses": 78
  },
  {
    "number": 56,
    "name": "الواقعة",
    "transliteration": "Al-Waqi'ah",
    "translation": "The Inevitable",
    "type": "meccan",
    "total_verses": 96
  },
  {
    "number": 57,
    "name": "الحديد",
    "transliteration": "Al-Hadid",
    "translation": "The Iron",
    "type": "medinan",
    "total_verses": 29
  },
  {
    "number": 58,
    "name": "المجادلة",
    "transliteration": "Al-Mujadila",
    "translation": "The Pleading Woman",
    "type": "medinan",
    "total_verses": 22
  },
  {
    "number": 59,
    "name": "الحشر",
    "transliteration": "Al-Hashr",
    "translation": "The Exile",
    "type": "medinan",
    "total_verses": 24
  },
  {
    "number": 60,
    "name": "الممتحنة",
    "transliteration": "Al-Mumtahanah",
    "translation": "She that is to be examined",
    "type": "medinan",
    "total_verses": 13
  },
  {
    "number": 61,
    "name": "الصف",
    "transliteration": "As-Saf",
    "translation": "The Ranks",
    "type": "medinan",
    "total_verses": 14
  },
  {
    "number": 62,
    "name": "الجمعة",
    "transliteration": "Al-Jumu'ah",
    "translation": "The Congregation, Friday",
    "type": "medinan",
    "total_verses": 11
  },
  {
    "number": 63,
    "name": "المنافقون",
    "transliteration": "Al-Munafiqun",
    "translation": "The Hypocrites",
    "type": "medinan",
    "total_verses": 11
  },
  {
    "number": 64,
    "name": "التغابن",
    "transliteration": "At-Taghabun",
    "translation": "The Mutual Disillusion",
    "type": "medinan",
    "total_verses": 18
  },
  {
    "number": 65,
    "name": "الطلاق",
    "transliteration": "At-Talaq",
    "translation": "The Divorce",
    "type": "medinan",
    "total_verses": 12
  },
  {
    "number": 66,
    "name": "التحريم",
    "transliteration": "At-Tahrim",
    "translation": "The Prohibition",
    "type": "medinan",
    "total_verses": 12
  },
  {
    "number": 67,
    "name": "الملك",
    "transliteration": "Al-Mulk",
    "translation": "The Sovereignty",
    "type": "meccan",
    "total_verses": 30
  },
  {
    "number": 68,
    "name": "القلم",
    "transliteration": "Al-Qalam",
    "translation": "The Pen",
    "type": "meccan",
    "total_verses": 52
  },
  {
    "number": 69,
    "name": "الحاقة",
    "transliteration": "Al-Haqqah",
    "translation": "The Reality",
    "type": "meccan",
    "total_verses": 52
  },
  {
    "number": 70,
    "name": "المعارج",
    "transliteration": "Al-Ma'arij",
    "translation": "The Ascending Stairways",
    "type": "meccan",
    "total_verses": 44
  },
  {
    "number": 71,
    "name": "نوح",
    "transliteration": "Nuh",
    "translation": "Noah",
    "type": "meccan",
    "total_verses": 28
  },
  {
    "number": 72,
    "name": "الجن",
    "transliteration": "Al-Jinn",
    "translation": "The Jinn",
    "type": "meccan",
    "total_verses": 28
  },
  {
    "number": 73,
    "name": "المزمل",
    "transliteration": "Al-Muzzammil",
    "translation": "The Enshrouded One",
    "type": "meccan",
    "total_verses": 20
  },
  {
    "number": 74,
    "name": "المدثر",
    "transliteration": "Al-Muddaththir",
    "translation": "The Cloaked One",
    "type": "meccan",
    "total_verses": 56
  },
  {
    "number": 75,
    "name": "القيامة",
    "transliteration": "Al-Qiyamah",
    "translation": "The Resurrection",
    "type": "meccan",
    "total_verses": 40
  },
  {
    "number": 76,
    "name": "الانسان",
    "transliteration": "Al-Insan",
    "translation": "The Man",
    "type": "medinan",
    "total_verses": 31
  },
  {
    "number": 77,
    "name": "المرسلات",
    "transliteration": "Al-Mursalat",
    "translation": "The Emissaries",
    "type": "meccan",
    "total_verses": 50
  },
  {
    "number": 78,
    "name": "النبإ",
    "transliteration": "An-Naba",
    "translation": "The Tidings",
    "type": "meccan",
    "total_verses": 40
  },
  {
    "number": 79,
    "name": "النازعات",
    "transliteration": "An-Nazi'at",
    "translation": "Those who drag forth",
    "type": "meccan",
    "total_verses": 46
  },
  {
    "number": 80,
    "name": "عبس",
    "transliteration": "'Abasa",
    "translation": "He Frowned",
    "type": "meccan",
    "total_verses": 42
  },
  {
    "number": 81,
    "name": "التكوير",
    "transliteration": "At-Takwir",
    "translation": "The Overthrowing",
    "type": "meccan",
    "total_verses": 29
  },
  {
    "number": 82,
    "name": "الإنفطار",
    "transliteration": "Al-Infitar",
    "translation": "The Cleaving",
    "type": "meccan",
    "total_verses": 19
  },
  {
    "number": 83,
    "name": "المطففين",
    "transliteration": "Al-Mutaffifin",
    "translation": "The Defrauding",
    "type": "meccan",
    "total_verses": 36
  },
  {
    "number": 84,
    "name": "الإنشقاق",
    "transliteration": "Al-Inshiqaq",
    "translation": "The Sundering",
    "type": "meccan",
    "total_verses": 25
  },
  {
    "number": 85,
    "name": "البروج",
    "transliteration": "Al-Buruj",
    "translation": "The Mansions of the Stars",
    "type": "meccan",
    "total_verses": 22
  },
  {
    "number": 86,
    "name": "الطارق",
    "transliteration": "At-Tariq",
    "translation": "The Nightcommer",
    "type": "meccan",
    "total_verses": 17
  },
  {
    "number": 87,
    "name": "الأعلى",
    "transliteration": "Al-A'la",
    "translation": "The Most High",
    "type": "meccan",
    "total_verses": 19
  },
  {
    "number": 88,
    "name": "الغاشية",
    "transliteration": "Al-Ghashiyah",
    "translation": "The Overwhelming",
    "type": "meccan",
    "total_verses": 26
  },
  {
    "number": 89,
    "name": "الفجر",
    "transliteration": "Al-Fajr",
    "translation": "The Dawn",
    "type": "meccan",
    "total_verses": 30
  },
  {
    "number": 90,
    "name": "البلد",
    "transliteration": "Al-Balad",
    "translation": "The City",
    "type": "meccan",
    "total_verses": 20
  },
  {
    "number": 91,
    "name": "الشمس",
    "transliteration": "Ash-Shams",
    "translation": "The Sun",
    "type": "meccan",
    "total_verses": 15
  },
  {
    "number": 92,
    "name": "الليل",
    "transliteration": "Al-Layl",
    "translation": "The Night",
    "type": "meccan",
    "total_verses": 21
  },
  {
    "number": 93,
    "name": "الضحى",
    "transliteration": "Ad-Duhaa",
    "translation": "The Morning Hours",
    "type": "meccan",
    "total_verses": 11
  },
  {
    "number": 94,
    "name": "الشرح",
    "transliteration": "Ash-Sharh",
    "translation": "The Relief",
    "type": "meccan",
    "total_verses": 8
  },
  {
    "number": 95,
    "name": "التين",
    "transliteration": "At-Tin",
    "translation": "The Fig",
    "type": "meccan",
    "total_verses": 8
  },
  {
    "number": 96,
    "name": "العلق",
    "transliteration": "Al-'Alaq",
    "translation": "The Clot",
    "type": "meccan",
    "total_verses": 19
  },
  {
    "number": 97,
    "name": "القدر",
    "transliteration": "Al-Qadr",
    "translation": "The Power",
    "type": "meccan",
    "total_verses": 5
  },
  {
    "number": 98,
    "name": "البينة",
    "transliteration": "Al-Bayyinah",
    "translation": "The Clear Proof",
    "type": "medinan",
    "total_verses": 8
  },
  {
    "number": 99,
    "name": "الزلزلة",
    "transliteration": "Az-Zalzalah",
    "translation": "The Earthquake",
    "type": "medinan",
    "total_verses": 8
  },
  {
    "number": 100,
    "name": "العاديات",
    "transliteration": "Al-'Adiyat",
    "translation": "The Courser",
    "type": "meccan",
    "total_verses": 11
  },
  {
    "number": 101,
    "name": "القارعة",
    "transliteration": "Al-Qari'ah",
    "translation": "The Calamity",
    "type": "meccan",
    "total_verses": 11
  },
  {
    "number": 102,
    "name": "التكاثر",
    "transliteration": "At-Takathur",
    "translation": "The Rivalry in world increase",
    "type": "meccan",
    "total_verses": 8
  },
  {
    "number": 103,
    "name": "العصر",
    "transliteration": "Al-'Asr",
    "translation": "The Declining Day",
    "type": "meccan",
    "total_verses": 3
  },
  {
    "number": 104,
    "name": "الهمزة",
    "transliteration": "Al-Humazah",
    "translation": "The Traducer",
    "type": "meccan",
    "total_verses": 9
  },
  {
    "number": 105,
    "name": "الفيل",
    "transliteration": "Al-Fil",
    "translation": "The Elephant",
    "type": "meccan",
    "total_verses": 5
  },
  {
    "number": 106,
    "name": "قريش",
    "transliteration": "Quraysh",
    "translation": "Quraysh",
    "type": "meccan",
    "total_verses": 4
  },
  {
    "number": 107,
    "name": "الماعون",
    "transliteration": "Al-Ma'un",
    "translation": "The Small kindnesses",
    "type": "meccan",
    "total_verses": 7
  },
  {
    "number": 108,
    "name": "الكوثر",
    "transliteration": "Al-Kawthar",
    "translation": "The Abundance",
    "type": "meccan",
    "total_verses": 3
  },
  {
    "number": 109,
    "name": "الكافرون",
    "transliteration": "Al-Kafirun",
    "translation": "The Disbelievers",
    "type": "meccan",
    "total_verses": 6
  },
  {
    "number": 110,
    "name": "النصر",
    "transliteration": "An-Nasr",
    "translation": "The Divine Support",
    "type": "medinan",
    "total_verses": 3
  },
  {
    "number": 111,
    "name": "المسد",
    "transliteration": "Al-Masad",
    "translation": "The Palm Fiber",
    "type": "meccan",
    "total_verses": 5
  },
  {
    "number": 112,
    "name": "الإخلاص",
    "transliteration": "Al-Ikhlas",
    "translation": "The Sincerity",
    "type": "meccan",
    "total_verses": 4
  },
  {
    "number": 113,
    "name": "الفلق",
    "transliteration": "Al-Falaq",
    "translation": "The Daybreak",
    "type": "meccan",
    "total_verses": 5
  },
  {
    "number": 114,
    "name": "الناس",
    "transliteration": "An-Nas",
    "translation": "Mankind",
    "type": "meccan",
    "total_verses": 6
  }
]
export default surahs