
window.addEventListener('DOMContentLoaded', function(){
    var movies = document.getElementsByClassName("poster");
    for (i = 0 ; i < movies.length ; i++) {
        movies[i].style.display = 'none'
    }
});

var sciFiInput = document.getElementById("fiction");
var horrorInput = document.getElementById("horror");
var comedyInput = document.getElementById("comedy");
var loveInput = document.getElementById("love");
var actionInput = document.getElementById("action");
var mysteryInput = document.getElementById("mystery");

sciFiInput.addEventListener('click', selectSciFi)
horrorInput.addEventListener('click', selectHorror)
comedyInput.addEventListener('click', selectComedy)
loveInput.addEventListener('click', selectlove)
actionInput.addEventListener('click', selectaction)
mysteryInput.addEventListener('click', selectmystery)
//horrorInput.addEventListener('click', () => {selectGenre("horror")})


function selectSciFi() {
    var sciFiInput = document.getElementById("fiction");
    var sciFiMovies = document.getElementsByClassName('fiGenre');

    if(sciFiInput.checked === true){
        for (i = 0 ; i < sciFiMovies.length ; i++) {
            sciFiMovies[i].style.display = 'block';
        };
    }else{
        for (i = 0 ; i < sciFiMovies.length ; i++) {
            sciFiMovies[i].style.display = 'none';
        };
    }

};

function selectHorror() {
    var horrorInput = document.getElementById("horror");
    var horrorMovies = document.getElementsByClassName('horrorGenre');

    if(horrorInput.checked === true){
        for (i = 0 ; i < horrorMovies.length ; i++) {
            horrorMovies[i].style.display = 'block';
        };
    }else{
        for (i = 0 ; i < horrorMovies.length ; i++) {
            horrorMovies[i].style.display = 'none';
        };
    }

};

function selectComedy() {
    var comedyInput = document.getElementById("comedy");
    var comedyMovies = document.getElementsByClassName('comedyGenre');

    if(comedyInput.checked === true){
        for (i = 0 ; i < comedyMovies.length ; i++) {
            comedyMovies[i].style.display = 'block';
        };
    }else{
        for (i = 0 ; i < comedyMovies.length ; i++) {
            comedyMovies[i].style.display = 'none';
        };
    }

};

function selectlove() {
    var loveInput = document.getElementById("love");
    var loveMovies = document.getElementsByClassName('loveGenre');

    if(loveInput.checked === true){
        for (i = 0 ; i < loveMovies.length ; i++) {
            loveMovies[i].style.display = 'block';
        };
    }else{
        for (i = 0 ; i < loveMovies.length ; i++) {
            loveMovies[i].style.display = 'none';
        };
    }

};

function selectaction() {
    var actionInput = document.getElementById("action");
    var actionMovies = document.getElementsByClassName('actionGenre');

    if(actionInput.checked === true){
        for (i = 0 ; i < actionMovies.length ; i++) {
            actionMovies[i].style.display = 'block';
        };
    }else{
        for (i = 0 ; i < actionMovies.length ; i++) {
            actionMovies[i].style.display = 'none';
        };
    }

};

function selectmystery() {
    var mysteryInput = document.getElementById("mystery");
    var mysteryMovies = document.getElementsByClassName('mysteryGenre');

    if(mysteryInput.checked === true){
        for (i = 0 ; i < mysteryMovies.length ; i++) {
            mysteryMovies[i].style.display = 'block';
        };
    }else{
        for (i = 0 ; i < mysteryMovies.length ; i++) {
            mysteryMovies[i].style.display = 'none';
        };
    }

};

/*GENERAL
function selectGenre(genre) {
    var input = document.getElementById(genre);
    var movies = document.getElementsByClassName(genre + "Genre");

    if(input.checked === true){
        for (i = 0 ; i < movies.length ; i++) {
            movies[i].style.display = 'block';
        };
    }else{
        for (i = 0 ; i < movies.length ; i++) {
            movies[i].style.display = 'none';
        };
    }

};*/


var movies = [
    {title: "colossal", genre: "scienceFiction"},
    {title: "brideOfFrankenstein", genre: "love"},
    {title: "houseOfFrankenstein", genre:"horror"},
    {title: "brainDead", genre:"comedy"},
    {title: "vicePrincipal", genre:"comedy"},
    {title: "theGuest", genre:"action"},
    {title: "theHateful8", genre:"mystery"},
    {title: "theThing", genre:"sciFi",},
    {title: "hardTarget", genre:"popcorn"},
    {title: "slither", genre:"horror"},
    {title: "plan9FromOuterSpace", genre:"horror"},
  ];
  
  

//   var love = movies.filter(a => a.genre === "love");
//   console.log(love);
  
//   var sciFi = movies.filter(a => a.genre === "scienceFiction");
//   console.log(sciFi);
  
//   var horror = movies.filter(a => a.genre === "horror");
//   console.log(horror);
  
//   var comedy = movies.filter(a => a.genre === "comedy");
//   console.log(comedy);
  
//   var action = movies.filter(a => a.genre === "action");
//   console.log(action);
  
//   var mystery = movies.filter(a => a.genre === "mystery");
//   console.log(mystery); 