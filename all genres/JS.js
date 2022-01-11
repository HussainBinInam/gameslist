var imageSources = [
    "/pictures/Ocariaoftime.JPG",
    "/pictures/superMarioworld.JPG",
    "/pictures/ALinktothePast.JPG",
    "/pictures/Portal2.JPG",
    "/pictures/SuperMetroid.JPG",
    "/pictures/Breathofthewild.JPG"];
    var ContentText=[
      "Legend of zelda: Ocarina of Time",
      "Super Mario World",
      "Legend of zelda:A link to the past",
      "Portal 2",
      "Super Metroid",
      "Legend of zelda: Breath of the Wild"
    ];
    var company=[
        "By: Nintendo",
        "By: Nintendo",
        "By: Nintendo",
        "By: Value",
        "By: Nintendo",
        "By: Nintendo"
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