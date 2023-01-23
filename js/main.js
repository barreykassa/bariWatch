
const arrayProducts = [
 
    { id: 1, name: "DATE-MASTER", price: 5000, discription: "rolex watch", img: ["../images/rolex/1  datejust  .webp", "../images/rolex/1  datejust  .webp"] },
    { id: 2, name: "GMT-MASTER", price: 10000, discription: "rolex watch", img: ["../images/rolex/2 GMT-MASTER II.webp", "../images/rolex/2 GMT-MASTER II.webp"] },
    { id: 3, name: "DATE-DAY", price: 15000, discription: "rolex watch", img: ["../images/rolex/3 DATE-DAY.webp", "../images/rolex/3 DATE-DAY.webp"] },
    { id: 4, name: "SUBMARINE", price: 20000, discription: "rolex watch", img: ["../images/rolex/4SUBMARINE.webp", "../images/rolex/4SUBMARINE.webp"] },
    { id: 5, name: "OYSTER PERPETULA", price: 25000, discription: "rolex watch", img:["../images/rolex/12 Milgauss.jpg", "../images/rolex/12 Milgauss.jpg"] },
    { id: 6, name: "COSMOGRAPH DYTON", price: 30000, discription: "rolex watch", img: ["../images/rolex/6Cosmograph Daytona.webp", "../images/rolex/6Cosmograph Daytona.webp"] },
    { id: 7, name: "YACHT MASTER", price: 35000, discription: "rolex watch", img: ["../images/rolex/7 Yacht-Master.webp", "../images/rolex/7 Yacht-Master.webp"] },
    { id: 8, name: "LADY DATEHUST", price: 40000, discription: "rolex watch", img: ["../images/rolex/8 Lady-Datejust.webp", "../images/rolex/8 Lady-Datejust.webp"] },
    { id: 9, name: "SEA DWELLER", price: 45000, discription: "rolex watch", img: ["../images/rolex/9 Sea-Dweller.webp", "../images/rolex/9 Sea-Dweller.webp"] },
    { id: 10, name: "EXPLORE", price: 50000, discription: "rolex watch", img: ["../images/rolex/10 Explorer.webp", "../images/rolex/10 Explorer.webp"] },
    { id: 11, name: "SKY DWELLER", price: 55000, discription: "rolex watch", img: ["../images/rolex/11 Sky-Dweller.webp", "../images/rolex/11 Sky-Dweller.webp"] },
    { id: 12, name: "MILGAUESS", price: 60000, discription: "rolex watch", img: ["../images/rolex/12 Milgauss.jpg", "../images/rolex/12 Milgauss.jpg"] },
    { id: 13, name: "CELLIN", price: 65000, discription: "rolex watch", img: ["../images/rolex/13 CELLINI.webp", "../images/rolex/13 CELLINI.webp"] },
    { id: 14, name: "PEARLMASTER", price: 70000, discription: "rolex watch", img: ["../images/rolex/14 Pearlmaster.webp", "../images/rolex/14 Pearlmaster.webp"] },
    { id: 15, name: "AIR KING", price: 75000, discription: "rolex watch", img: ["../images/rolex/15 Air-King.webp", "../images/rolex/15 Air-King.webp"] },
    { id: 16, name: "PEARLMASTER", price: 80000, discription: "rolex watch", img: ["../images/rolex/6Cosmograph Daytona.webp", "../images/rolex/6Cosmograph Daytona.webp"] },
    { id: 17, name: "CELLIN SKY", price: 85000, discription: "rolex watch", img: ["../images/rolex/7 Yacht-Master.webp", "../images/rolex/7 Yacht-Master.webp"] },
    { id: 18, name: "PEARLMASTER QUEEN", price: 90000, discription: "rolex watch", img: ["../images/rolex/8 Lady-Datejust.webp", "../images/rolex/8 Lady-Datejust.webp"] },
    { id: 19, name: "KING OF KINGS", price: 95000, discription: "rolex watch", img: ["../images/rolex/11 Sky-Dweller.webp", "../images/rolex/11 Sky-Dweller.webp"] },
    { id: 20, name: "GMT-QUENN", price: 100000, discription: "rolex watch", img: ["../images/rolex/14 Pearlmaster.webp", "../images/rolex/14 Pearlmaster.webp"] },
  
    
 
    { id: 21, name: "ALLENDER", price: 5000, discription: "PATEK PHILLIP", img: ["../images/patek_phillip 1/14 MINUTE REPEATER, TOURBILLON. 6879I.jpg", "../images/patek_phillip 1/14 MINUTE REPEATER, TOURBILLON. 6879I.jpg"] },
    { id: 22, name: "CALANDER", price: 10000, discription: "PATEK PHILLIP", img: ["../images/patek_phillip 1/2PERPETUAL CALENDAR 5327R.jpg", "../images/patek_phillip 1/2PERPETUAL CALENDAR 5327R.jpg"] },
    { id: 23, name: "LADIES FIRST", price: 15000, discription: "PATEK PHILLIP", img: ["../images/patek_phillip 1/3 PERPETUAL CALANDER 5327G.jpg", "../images/patek_phillip 1/3 PERPETUAL CALANDER 5327G.jpg"] },
    { id: 24, name: " LADIESPERPECTUAL", price: 20000, discription: "PATEK PHILLIP", img: ["../images/patek_phillip 1/4 PERPETUAL CALENDAR 5327G.jpg", "../images/patek_phillip 1/4 PERPETUAL CALENDAR 5327G.jpg"] },
    { id: 25, name: "OYSTER", price: 25000, discription: "PATEK PHILLIP", img: ["../images/patek_phillip 1/5 LADIES FIRST PERPETUAL CALENDAR 7140G.jpg", "../images/patek_phillip 1/5 LADIES FIRST PERPETUAL CALENDAR 7140G.jpg"] },
    { id: 26, name: "CHRONOGRAPH", price: 30000, discription: "PATEK PHILLIP", img: ["../images/patek_phillip 1/6 LADIES FIRST PERPETUAL CALENDAR. 7140G .jpg", "../images/patek_phillip 1/6 LADIES FIRST PERPETUAL CALENDAR. 7140G .jpg"] },
    { id: 27, name: "YACHT MASTER", price: 35000, discription: "PATEK PHILLIP", img: ["../images/patek_phillip 1/13 MINUTE REPEATER 5463K.jpg", "../images/patek_phillip 1/8 SPLIT_SECONDS MONOPUSHER CHRONOGRAPH, PERPETUAL CALENDAR 5370p.jpg"] },
    { id: 28, name: "MONOPUSHER", price: 40000, discription: "PATEK PHILLIP", img: ["../images/patek_phillip 1/9 CELESTIAL, MOON AGE. 6172G.jpg", "../images/patek_phillip 1/9 CELESTIAL, MOON AGE. 6172G.jpg"] },
    { id: 29, name: "SEA DWELLER", price: 45000, discription: "PATEK PHILLIP", img: ["../images/patek_phillip 1/10 CELESTIAL, MOON AGE 6170.jpg", "../images/patek_phillip 1/10 CELESTIAL, MOON AGE 6170.jpg"] },
    { id: 30, name: " MOON AGE", price: 50000, discription: "PATEK PHILLIP", img: ["../images/patek_phillip 1/11 ALARM TRAVEL TIME. 5371T.jpg", "../images/patek_phillip 1/11 ALARM TRAVEL TIME. 5371T.jpg"] },
    { id: 31, name: "ALARM TRAVEL", price: 55000, discription: "PATEK PHILLIP", img: ["../images/patek_phillip 1/12 MINUTE REPEATER 5870G.jpg", "../images/patek_phillip 1/12 MINUTE REPEATER 5870G.jpg"] },
    { id: 32, name: "MINUT REPEATER", price: 60000, discription: "PATEK PHILLIP", img: ["../images/patek_phillip 1/13 MINUTE REPEATER 5463K.jpg", "../images/patek_phillip 1/13 MINUTE REPEATER 5463K.jpg"] },
    { id: 33, name: " TOURBILLION", price: 65000, discription: "PATEK PHILLIP", img: ["../images/patek_phillip 1/14 MINUTE REPEATER, TOURBILLON. 6879I.jpg", "../images/patek_phillip 1/14 MINUTE REPEATER, TOURBILLON. 6879I.jpg"] },
    { id: 34, name: "PEARLMASTER", price: 70000, discription: "PATEK PHILLIP", img: ["../images/patek_phillip 1/15 MINUTE REPEATER, TOURBILLON 5678K.jpg", "../images/patek_phillip 1/15 MINUTE REPEATER, TOURBILLON 5678K.jpg"] },
    { id: 35, name: "AIR KING", price: 75000, discription: "PATEK PHILLIP", img: ["../images/patek_phillip 1/3 PERPETUAL CALANDER 5327G.jpg", "../images/patek_phillip 1/3 PERPETUAL CALANDER 5327G.jpg"] },
    { id: 36, name: "PEARLMASTER DWELLER", price: 80000, discription: "PATEK PHILLIP", img: ["../images/patek_phillip 1/1PERPECTUAL ALENDER 5327J.jpg", "../images/patek_phillip 1/1PERPECTUAL ALENDER 5327J.jpg"] },
    { id: 37, name: "CELLIN SKY", price: 85000, discription: "PATEK PHILLIP", img: ["../images/patek_phillip 1/9 CELESTIAL, MOON AGE. 6172G.jpg", "../images/patek_phillip 1/8 SPLIT_SECONDS MONOPUSHER CHRONOGRAPH"] },
    { id: 38, name: "PEARLMASTER QUEEN", price: 90000, discription: "PATEK PHILLIP", img: ["../images/patek_phillip 1/4 PERPETUAL CALENDAR 5327G.jpg", "../images/patek_phillip 1/4 PERPETUAL CALENDAR 5327G.jpg"] },
    { id: 39, name: "ROYALS", price: 95000, discription: "PATEK PHILLIP", img: ["../images/patek_phillip 1/1PERPECTUAL ALENDER 5327J.jpg", "../images/patek_phillip 1/1PERPECTUAL ALENDER 5327J.jpg"] },
    { id: 40, name: "TOURBILLIN", price: 100000, discription: "PATEK PHILLIP", img: ["../images/patek_phillip 1/6 LADIES FIRST PERPETUAL CALENDAR. 7140G .jpg", "../images/patek_phillip 1/6 LADIES FIRST PERPETUAL CALENDAR. 7140G .jpg"] },
  
 
    { id: 41, name: "PERPECTUAL", price: 5000, discription: "MAD-PARIS", img:["../images/MAD-PARIS/1 MAD-PARIS.jpg", "../images/MAD-PARIS/1 MAD-PARIS.jpg"]   },
    { id: 42, name: "ALANDER", price: 10000, discription: "MAD-PARIS", img: ["../images/MAD-PARIS/3 MAD-PARIS.jpg", "../images/MAD-PARIS/3 MAD-PARIS.jpg"] },
    { id: 43, name: " FIRST PERPECTUAL", price: 15000, discription: "MAD-PARIS", img: ["../images/MAD-PARIS/5 MAD-PARIS.jpg", "../images/MAD-PARIS/5 MAD-PARIS.jpg"]  },
    { id: 44, name: " LADIES ALLENDER", price: 20000, discription: "MAD-PARIS", img: ["../images/MAD-PARIS/7MAD-PARIS.jpg", "../images/MAD-PARIS/7MAD-PARIS.jpg"] },
    { id: 45, name: "PERPETULA", price: 25000, discription: "MAD-PARIS", img:["../images/MAD-PARIS/9 MAD-PARIS.jpg", "../images/MAD-PARIS/9 MAD-PARIS.jpg"]  },
    { id: 46, name: "CHRONOGRAPH", price: 30000, discription: "MAD-PARIS", img:["../images/MAD-PARIS/11 MAD-PARIS.jpg", "../images/MAD-PARIS/11 MAD-PARIS.jpg"]  },
    { id: 47, name: "YACHT", price: 35000, discription: "MAD-PARIS", img:["../images/MAD-PARIS/13 MAD-PARIS.jpg", "../images/MAD-PARIS/13 MAD-PARIS.jpg"]  },
    { id: 48, name: "SPLIT SECONDS", price: 40000, discription: "MAD-PARIS", img:["../images/MAD-PARIS/15 MAD-PARIS.jpg", "../images/MAD-PARIS/15 MAD-PARIS.jpg"]  },
    { id: 49, name: "YACHT DWELLER", price: 45000, discription: "MAD-PARIS", img: ["../images/MAD-PARIS/17 MAD-PARIS.jpg", "../images/MAD-PARIS/17 MAD-PARIS.jpg"] },
    { id: 50, name: "CALESTIAL MOON ", price: 50000, discription: "MAD-PARIS", img:["../images/MAD-PARIS/19 MAD-PARIS.jpg", "../images/MAD-PARIS/19 MAD-PARIS.jpg"] },
    { id: 51, name: "TRAVEL TIME", price: 55000, discription: "MAD-PARIS", img:["../images/MAD-PARIS/21 MAD-PARIS.jpg", "../images/MAD-PARIS/21 MAD-PARIS.jpg"]  },
    { id: 52, name: "MINUT ", price: 60000, discription: "MAD-PARIS", img:["../images/MAD-PARIS/23 MAD-PARIS.jpg", "../images/MAD-PARIS/23 MAD-PARIS.jpg"]  },
    { id: 53, name: "TOURBILLION", price: 65000, discription: "MAD-PARIS", img:["../images/MAD-PARIS/25 MAD-PARIS.jpg", "../images/MAD-PARIS/25 MAD-PARIS.jpg"]  },
    { id: 54, name: "PEARL MANER", price: 70000, discription: "MAD-PARIS", img:["../images/MAD-PARIS/28 MAD-PARIS.jpg", "../images/MAD-PARIS/28 MAD-PARIS.jpg"]  },
    { id: 55, name: "ROYALS", price: 75000, discription: "MAD-PARIS", img:["../images/MAD-PARIS/30 MAD-PARIS.jpg", "../images/MAD-PARIS/30 MAD-PARIS.jpg"] },
    { id: 56, name: "PEARL MEN", price: 80000, discription: "MAD-PARIS", img:["../images/MAD-PARIS/1 MAD-PARIS.jpg", "../images/MAD-PARIS/1 MAD-PARIS.jpg"]  },
    { id: 57, name: "CELLIN SKY", price: 85000, discription: "MAD-PARIS", img: ["../images/MAD-PARIS/3 MAD-PARIS.jpg", "../images/MAD-PARIS/3 MAD-PARIS.jpg"] },
    { id: 58, name: "MASTER QUEEN", price: 90000, discription: "MAD-PARIS", img:["../images/MAD-PARIS/5 MAD-PARIS.jpg", "../images/MAD-PARIS/5 MAD-PARIS.jpg"]  },
    { id: 59, name: "THE MASTER", price: 95000, discription: "MAD-PARIS", img: ["../images/MAD-PARIS/9 MAD-PARIS.jpg", "../images/MAD-PARIS/9 MAD-PARIS.jpg"] },
    { id: 60, name: "REPEAT MAD", price: 100000, discription: "MAD-PARIS", img:["../images/MAD-PARIS/13 MAD-PARIS.jpg", "../images/MAD-PARIS/13 MAD-PARIS.jpg"]  },
 
    { id: 61, name: "PERPEDER", price: 5000, discription: "LOUIS-MOINET", img: ["../images/Louis Moinet/3 Louis Moinet.jpg", "../images/Louis Moinet/3 Louis Moinet.jpg"]  },
    { id: 62, name: "CTUAL CALAN", price: 10000, discription: "LOUIS-MOINET", img: ["../images/Louis Moinet/11 Louis Moinet.jpg", "../images/Louis Moinet/4 Louis Moinet.jpg"] },
    { id: 63, name: "FIRST PETUAL", price: 15000, discription: "LOUIS-MOINET", img: ["../images/Louis Moinet/5 Louis Moinet.jpg", "../images/Louis Moinet/5 Louis Moinet.jpg"] },
    { id: 64, name: "TOURBILLIN", price: 20000, discription: "LOUIS-MOINET", img: ["../images/Louis Moinet/4 Louis Moinet.jpg", "../images/Louis Moinet/4 Louis Moinet.jpg"] },
    { id: 65, name: "SEA DWELLER", price: 25000, discription: "LOUIS-MOINET", img: ["../images/Louis Moinet/5 Louis Moinet.jpg", "../images/Louis Moinet/5 Louis Moinet.jpg"] },
    { id: 66, name: "PEARLMASTER", price: 30000, discription: "LOUIS-MOINET", img: ["../images/Louis Moinet/7 Louis Moinet.jpg", "../images/Louis Moinet/7 Louis Moinet.jpg"] },
    { id: 67, name: "CHRONOGRAPH", price: 35000, discription: "LOUIS-MOINET", img: ["../images/Louis Moinet/8 Louis Moinet.jpg", "../images/Louis Moinet/8 Louis Moinet.jpg"] },
    { id: 68, name: "CELLIN ", price: 40000, discription: "LOUIS-MOINET", img: ["../images/Louis Moinet/10 Louis Moinet.jpg", "../images/Louis Moinet/10 Louis Moinet.jpg"] },
    { id: 69, name: "MONOPUSHER", price: 45000, discription: "LOUIS-MOINET", img: ["../images/Louis Moinet/11 Louis Moinet.jpg", "../images/Louis Moinet/11 Louis Moinet.jpg"] },
    { id: 70, name: "GMT-QUENN", price: 50000, discription: "LOUIS-MOINET", img: ["../images/Louis Moinet/12 Louis Moinet.jpg", "../images/Louis Moinet/12 Louis Moinet.jpg"] },
    { id: 71, name: " MOON AGE", price: 55000, discription: "LOUIS-MOINET", img: ["../images/Louis Moinet/13 Louis Moinet.jpg", "../images/Louis Moinet/13 Louis Moinet.jpg"] },
    { id: 72, name: "TIME TRAVEL", price: 60000, discription: "LOUIS-MOINET", img: ["../images/Louis Moinet/14 Louis Moinet.jpg", "../images/Louis Moinet/14 Louis Moinet.jpg"] },
    { id: 73, name: "TOURBILLION", price: 65000, discription: "LOUIS-MOINET", img: ["../images/Louis Moinet/15 Louis Moinet.jpg", "../images/Louis Moinet/15 Louis Moinet.jpg"] },
    { id: 74, name: "PEARL AND GOLD", price: 70000, discription: "LOUIS-MOINET", img: ["../images/Louis Moinet/16 Louis Moinet.jpg", "../images/Louis Moinet/16 Louis Moinet.jpg"] },
    { id: 75, name: "AIR KING", price: 75000, discription: "LOUIS-MOINET", img: ["../images/Louis Moinet/4 Louis Moinet.jpg", "../images/Louis Moinet/31 Louis Moinet..png"] },
    { id: 76, name: " DWELLER", price: 80000, discription: "LOUIS-MOINET", img: ["../images/Louis Moinet/2 Louis Moinet..png", "../images/Louis Moinet/2 Louis Moinet..png"]},
    { id: 77, name: "CELLIN SKY", price: 85000, discription: "LOUIS-MOINET", img: ["../images/Louis Moinet/3 Louis Moinet.jpg", "../images/Louis Moinet/3 Louis Moinet.jpg"]},
    { id: 78, name: " QUEEN", price: 90000, discription: "LOUIS-MOINET", img: ["../images/Louis Moinet/8 Louis Moinet.jpg", "../images/Louis Moinet/8 Louis Moinet.jpg"]},
    { id: 79, name: "GOLD", price: 95000, discription: "LOUIS-MOINET", img: ["../images/Louis Moinet/12 Louis Moinet.jpg", "../images/Louis Moinet/12 Louis Moinet.jpg"]},
    { id: 80, name: "DATE MASTER", price: 100000, discription: "LOUIS-MOINET", img: ["../images/Louis Moinet/11 Louis Moinet.jpg", "../images/Louis Moinet/11 Louis Moinet.jpg"]},
  

]








//!!!!!!!!!!!!
// let menuToggle=document.getElementsByClassName("toggle")[0];
// let showcase=document.getElementsByClassName("showcase")[0];
// let menu=document.getElementsByClassName("menu")[0];
// menuToggle.onclick=function(){
//     menuToggle.classList.toggle('active');
//     showcase.classList.toggle('active');  
//     menu.style.visibility="visible"
// }



// let toggleactive=document.getElementsByTagName("toggle.active");

// if (menu.onclick){
//   menu.style.visibility="visible"
//     }  

// else{
//     toggleactive.onclick=function(){
//         style.visibility="hidden"
//     } 
// }




































































