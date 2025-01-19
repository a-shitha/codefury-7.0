
var randomvariable1=Math.floor(Math.random()*6)+1;
var randomdiceimage="dice"+randomvariable1+".png";
var randomimagesource="images/"+randomdiceimage
document.querySelectorAll("img")[0];
img1.setAttribute("src",randomimagesource);
var randomvariable2=Math.floor(Math.random()*6)+1;
var randomdiceimage="dice"+randomvariable2+".png";
var randomimagesource="images/"+randomdiceimage
document.querySelectorAll("img")[0];
img1.setAttribute("src",randomimagesource);
if(randomvariable1>randomvariable2){
    document.querySelector("h1").innerHTML="player1 wins";
}

else if(randomvariable2>randomvariable1){
    document.querySelector("h1").innerHTML="player2 wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}