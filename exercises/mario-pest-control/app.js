let coin = document.getElementById('thecoin');

let goombaForm = document.goombaform;
let bobombForm = document.bobombform;
let cheepCheepForm = document.cheepcheepform;



coin.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('hi')
  let goombaVal = Number(document.getElementById('goombainput').value) * 5;
  let bobombVal = Number(document.getElementById('bobombinput').value) * 7;
  let cheepCheepVal = Number(document.getElementById('cheepcheepinput').value) * 11;
  let theTotal = goombaVal + bobombVal + cheepCheepVal;
  document.getElementById('fulltotal').innerText = theTotal;
});


goombaForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let goombaAmount = goombaForm.value;
  console.log(goombaAmount);
});

bobombForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let bobombAmount = bobombForm.value;
  console.log(bobombAmount);
});

const nums = [];


const total = document.getElementById('answertotal');
// total.textContent = something;


