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
    Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');
    
    for ( const cur of boxes) {
        if(cur.className.includes('blue')) {
            continue;
        }
        cur.textContent = 'I changed to blue!';
    }
    
    });
    
    document.querySelector('.original').addEventListener('click', function() {
    
        document.querySelector('.green').style.backgroundColor = 'green';
        document.querySelector('.green').textContent = 'I\'\m green!';  
    
        document.querySelector('.orange').style.backgroundColor = 'orangered';
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