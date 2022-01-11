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
var Ranks = ["1","2","3","4","5","6"];

var index = 0;
setInterval (function(){
  if (index === imageSources.length) {
    index = 0;
  }
  var content= document.getElementById("image");
  var ranks =document.getElementById("ranks");
  var contentText = document.getElementById("contentText");
  content.style.backgroundImage="url"+"("+imageSources[index]+")";
  ranks.textContent= (Ranks[index]);
  contentText.textContent= (ContentText[index]);
  index++;
  console.log(imageSources[index])
} ,2000 );
