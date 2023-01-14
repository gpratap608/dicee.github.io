var randomnumber1 = Math.floor(Math.random()*6)+1;

var randomDiceimage = "dice" + randomnumber1 + ".png" ;

var randomImagesource = "images/" + randomDiceimage ;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImagesource); 

var randomnumber2 = Math.floor(Math.random()*6)+1;

var randomDiceimage = "dice" + randomnumber2 + ".png" ;

var randomImagesource = "images/" + randomDiceimage ;

var image1 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImagesource); 

if (randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Won" ; 
}else{
    document.querySelector("h1").innerHTML = "Player 2 Won🚩" ; 
}

