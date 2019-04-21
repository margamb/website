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
