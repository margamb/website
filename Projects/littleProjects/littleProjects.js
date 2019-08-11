//Add calculator

document.getElementById('sum').addEventListener('click', function() {
    var field1 = document.getElementById('num1').value;
    var field2 = document.getElementById('num2').value;

    var result = parseFloat(field1) + parseFloat(field2);

if(!isNaN(result)) {
    document.getElementById('answer').innerHTML = 'The answer is ' + result;
}
});


/* Section 7: Get ready for the future: ES6/ES2015 BoxUdemy*/ 

//const changeColor = document.querySelector('.clicked');
document.querySelector('.clicked').addEventListener('click', function() {

    //const boxesArr = Array.from(boxes);
    const boxes = document.querySelectorAll('.boxUdemy');
    Array.from(boxes).forEach(cur => cur.style.backgroundColor = '#B5D3E8');
    
    for ( const cur of boxes) {
        if(cur.className.includes('blue')) {
            continue;
        }
        cur.textContent = 'I changed to blue!';
    }
    
    });
    
    document.querySelector('.original').addEventListener('click', function() {
    
        document.querySelector('.green').style.backgroundColor = '#B3E4C7';
        document.querySelector('.green').textContent = 'I\'\m green!';  
    
        document.querySelector('.orange').style.backgroundColor = '#FCDBA9';
        document.querySelector('.orange').textContent = 'I\'\m orange!'; 
    
    });


    /*-----------
     ball 8 magic
    -------------*/

    var words = [
        'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'Yes definitely',
    'You may rely on it',
    'As I see it, yes',
    'Most likely'
        ];
    function getRandom(arr) {
      return arr[Math.floor(Math.random() * arr.length)]
    }
    console.log(getRandom(words));
    
    var ball = document.getElementById('ball8');
    ball.addEventListener("click", function(){
      var elem = document.getElementById('text');
      elem.innerHTML = getRandom(words);
      elem.style.opacity = 1;
    });
    
    ball.addEventListener("mouseout", function(){
      var elem = document.getElementById('text');
      elem.style.opacity = 0;
    });

     /*-----------
     active button
    -------------*/

var header = document.getElementById("groupButtons");
var btns = header.getElementsByClassName("btnAB");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("activeAB");
    current[0].className = current[0].className.replace(" activeAB", "");
    this.className += " activeAB";
    });
}

// Add active class to the current button (highlight it)
var header2 = document.getElementById("groupButtons2");
var btns2 = header2.getElementsByClassName("btnAB2");
for (var i = 0; i < btns2.length; i++) {
  btns2[i].addEventListener("click", function() {
  var current2 = document.getElementsByClassName("activeAB2");
  if (current2.length > 0) { 
    current2[0].className = current2[0].className.replace(" activeAB2", "");
  }
  this.className += " activeAB2";
  });
}


/*--------
coffeee
------------------ */

document.addEventListener('DOMContentLoaded', () => {
    const config = [
        {type: "latte", color:"#C3B299"},
        {type: "americano", color:"#685044"},
        {type: "macchiato", color:"#FC9E4F"},
        {type: "crema", color:"#F3D9B0"}
    ]

    config.forEach(coffee => {
        document.getElementById(coffee.type).addEventListener("click", () => { 
            document.getElementById("fluid").style.backgroundColor = coffee.color;
        });    
    })

    $("button").on("click", event => {
        $(event.currentTarget).addClass('active');
        $(event.currentTarget).siblings().removeClass('active')
        $(event.currentTarget).closest('.choices').children().removeClass('disabled')
    })

});

/*------
battery
----------------- */

$('.plus').on('click', function(){
    var length = $('.charge').width() + 40;
    $('.charge').animate({width: length});
});

$(".less").on("click", () => { 
    $('.charge').animate({ width: '6px',},1000);
});

/*------
END battery
----------------- */

// /*------
// card H&CF
// ----------------- */

// function flip() {
//     $('.card').toggleClass('flipped'); 
// } 

// /*------
// END card H&CF
// ----------------- */


/*------------
fundamentalLaws monkey
---------------*/


var laws = [ "Hanlon's Razor","The Pareto Principle","Dunning-Kruger Effect",
"Linus's Law","Postel's Law","Eagleson's Law","Peter Principle","Dilbert Principle",
"Hofstadter's Law", "The 90-90 Rule", "Parkinson's Law", "Sayre's Law", "Parkinson's Law of Triviality",
"Law of Argumentative Comprehension",];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
console.log (getRandom(laws));

var monkey = document.getElementById('lawsSoftwareDevelopment');
monkey.addEventListener("click", function(){
 var elem = document.getElementById("textLaws");
 elem.innerHTML = getRandom(laws);
});


/*------------
END fundamentalLaws monkey
---------------*/

/*------------
dice
---------------*/


(function() {

 var score = 0
 var diceDom = document.querySelector('.dice');
 var scoreDom = document.querySelector('.score');

document.querySelector('.roll').addEventListener('click', function() {
    var dice = Math.floor(Math.random() * 6) + 1;

    diceDom.style.display = 'block';
    diceDom.src = '../../images/' + 'dice-' + dice + '.png';
   
    score += dice;
    scoreDom.textContent = score;
});

document.querySelector('.start').addEventListener('click', function() {
    score = 0;
    diceDom.style.display = 'none';
    scoreDom.textContent = 0;
});

})()