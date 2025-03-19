import * as Constants from '../Helper/Constants';
const itemLinks = [


    {
        "id": 1,
        "title": "Quran",
        "titleAr": "القرآن",
        "children": [{title:"" ,titleAr:"",path:"/surahs"}],
        "isHomeList": true,
        "isMenu": false
    },
    {
        "id": 2,
        "title": "Quran English",
        "titleAr": "القرآن الإنجليزي",
        "children":[ {title:"" ,titleAr:"",path:"/en/surahs"}],
        "isHomeList": true,
        "isMenu": false
    },
    {
        "id": 3,
        "title": "Entire Quran Search",
        "titleAr": "البحث في القرآن بالكامل",
        "children": [{title:"" ,titleAr:"" ,path:"/QuranSearch"}],
        "isHomeList": true,
        "isMenu": false
    },
    {
        "id": 4,
        "title": "Quran English Pdf",
        "titleAr": "القرآن الإنجليزي Pdf",
        "children": [{title:"" ,titleAr:"" ,path:"en/quranviewer/pdf"}],
        "isHomeList": true,
        "isMenu": false
    },
   
    {
        "id": 5,
        "title": "Qiraat Motoon",
        "titleAr": "متون القراءات",
        "children":[ 
            {title:"Shatibya" ,titleAr:"الشاطبية",path:Constants.shatibyahRoute},
            {title:"Dorrah" ,titleAr:"الدرة",path:Constants.dorrahRoute},
            {title:"Tybah" ,titleAr:"الطيبة",path:Constants.tybahRoute}
        ],
        "isHomeList": true,
        "isMenu": false
    },

]


export default itemLinks;