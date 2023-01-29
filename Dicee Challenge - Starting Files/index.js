var randomNumber1 =Math.floor((Math.random() * 6)+1);
var imgname = "dice" + randomNumber1+".png";
var randomimagessource = "images/" + imgname;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomimagessource)




var randomNumber2 =Math.floor((Math.random() * 6)+1);
var imgname2 = "dice" + randomNumber2+".png";
var randomimagessource2 = "images/" + imgname2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomimagessource2)


if(randomNumber1>randomNumber2){
    document.getElementById("winner").innerHTML = "Player 1 Won";
}

else if(randomNumber1<randomNumber2){
    document.getElementById("winner").innerHTML = "Player 2 Won";
}

else{
    document.getElementById("winner").innerHTML = "It is a tie";

}