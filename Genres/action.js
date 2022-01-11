var imageSources = [
    "/Genres/GenrePictures/RedDeadRedemption.JPG",
    "/Genres/GenrePictures/BatmanArkhamKnight.JPG",
    "/Genres/GenrePictures/Bloodborne.JPG",
    "/Genres/GenrePictures/GrandTheftAuto5.JPG",
    "/Genres/GenrePictures/DarkSouls2.JPG",
    "/Genres/GenrePictures/TheLastofUs.JPG"
  ];
var ContentText=[
      "Red Dead Redemption",
      "Batman Arkham Knight",
      "Bloodborne",
      "Grand Theft Auto 5",
      "Dark Souls 2",
      "The Last of Us"
    ];
var company=[
  "by Rockstar Games",
  "by Rocksteady Studios",
  "by From Software",
  "by Rockstar North",
  "by From Software",
  "by Naughty Dog"
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