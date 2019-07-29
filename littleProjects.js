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
        document.querySelector('.green').textContent = 'I\'\m green';  
    
        document.querySelector('.orange').style.backgroundColor = 'orangered';
        document.querySelector('.orange').textContent = 'I\'\m orange'; 
    
    });