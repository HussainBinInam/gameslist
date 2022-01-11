var imageSources = [
    "/Genres/GenrePictures/Minecraft.JPG",
    "/Genres/GenrePictures/ShadowoftheColossus.JPG",
    "/Genres/GenrePictures/GrimFandango.JPG",
    "/Genres/GenrePictures/LifeIsStrange.JPG",
    "/Genres/GenrePictures/DarkSouls2.JPG",
    "/Genres/GenrePictures/MajoraMask.JPG"
  ];
var ContentText=[
      "Minecraft",
      "Shadow of the Colossus",
      "Grim Fandango",
      "Life Is Strange",
      "Dark Souls 2",
      "The Legend of Zelda: Majora's Mask "
    ];
var company=[
  "by Mojang Studios",
  "by Japan Studio and Team Ico",
  "by LucasArts",
  "by Square Enix's",
  "by From Software",
  "by Nintendo"
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