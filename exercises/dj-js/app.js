

const square = document.getElementById('square');


square.addEventListener('mouseover', function() {
  square.style.backgroundColor = 'blue';
});

square.addEventListener('mousedown', function() {
    square.style.backgroundColor = 'red';
});

square.addEventListener('mouseup', function() {
    square.style.backgroundColor = 'yellow';
})

square.addEventListener('dblclick', function() {
  square.style.backgroundColor = 'green';
})

window.onwheel = function() {
  square.style.backgroundColor = 'orange';
}

const colorArr = [
  'green',
  'blue',
  'yellow',
  'red',
  'pink',
  'cyan',
  'salmon',
  'orange'
]

document.addEventListener("keydown", function(e) {
  for (let i = 0; i < colorArr.length; i++) {
    if (e.key === colorArr[i][0]) {
      square.style.backgroundColor = colorArr[i];
    }
  }

})