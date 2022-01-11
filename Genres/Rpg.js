var imageSources = [
    "/Genres/GenrePictures/Skyrim.JPG",
    "/Genres/GenrePictures/WildHunt.JPG",
    "/Genres/GenrePictures/Cyberpunk2077.JPG",
    "/Genres/GenrePictures/MassEffect2.JPG",
    "/Genres/GenrePictures/DarkSouls.JPG",
    "/Genres/GenrePictures/Undertale.JPG"
  ];
var ContentText=[
      "The Elder Scrolls V: Skyrim",
      "The Witcher 3: Wild Hunt",
      "Cyberpunk 2077",
      "Mass Effect 2",
      "Dark Souls",
      "Undertale"
    ];
var company=[
  "by Bethesda Game Studios",
  "by CD Projekt Red",
  "by CD Projekt",
  "by BioWare",
  "by From Software",
  "by Toby Fox"
  ]
var Ranks = ["1","2","3","4","5","6"];
   
    var index = 0;
    setInterval (function(){
      if (index === imageSources.length) {
        index = 0;
      }

    var Company= document.getElementById("Company");
    var ranks =document.getElementById("ranks");
    var contentText = document.getElementById("contentText");
    var content = document.getElementById("image")
      content.style.backgroundImage="url"+"("+imageSources[index]+")";
      ranks.textContent= (Ranks[index]);
      contentText.textContent= (ContentText[index]);
      Company.textContent=(company[index]);
      index++;
      console.log(company[index])
    } ,2000 );