// DOM Steps for inserting
// 1) create or select elements you want to work with
// 2) edit or give content to the elements
// 3) append new elements with content to existing elements



// create/select elements
const title = document.createElement('h1');
const subHeaderContainer = document.createElement('div');
const name = document.createElement('span');
const theRest = document.createElement('span');

const clear = document.getElementById('clear-button');

const messages = document.getElementsByClassName('messages');

const newMessages = document.createElement('h3');

const theme = document.getElementById('theme-drop-down');

let form = document.querySelector('form');





// edit/give content
title.textContent = 'javascript made this title!';
title.className = 'header';

name.textContent = 'John';
name.className = 'name';

theRest.textContent = 'wrote the js';

console.dir(messages);

clear.addEventListener('click', function() {
  for (let i = 0; i < messages.length; i++) {
    messages[i].innerHTML = '';
  }
  console.log(messages[0]);
})

let funMessage = [
  'hello good sir',
  'whatup bud',
  'good day now',
  'cheerio'
]

window.addEventListener('load', function() {
  for (let i = 0; i < messages[0].children.length; i++) {
    messages[0].children[i].innerText = funMessage[i];
  }
})

let leftMessages = document.getElementsByClassName('message left');
let rightMessages = document.getElementsByClassName('message right');



theme.addEventListener('change', function() {
  for (let i = 0; i < theme.length; i++) {
    if (theme[i].innerText === 'red/black') {
      for (let i = 0; i < leftMessages.length; i++) {
        leftMessages[i].style.backgroundColor = 'red';
        rightMessages[i].style.backgroundColor = 'black';
        rightMessages[i].style.color = 'white';
      }
    }
    else if (theme[i].innerText === 'blue/brown') {
      for (let i = 0; i < leftMessages.length; i++) {
        leftMessages[i].style.backgroundColor = 'burlywood';
        rightMessages[i].style.backgroundColor = 'lightblue';
        rightMessages[i].style.color = 'black'
      }
    }
  }
})


let submit = document.getElementById('submit');
let boxTent = document.getElementById('input');
let newMessage = document.createElement('div');



submit.addEventListener('click', function () {
  event.preventDefault();
  let content = input.value;
  let newDiv = document.createElement('div');
  newDiv.innerText = content;
  messages[0].nextElementChild = newDiv;
  if (messages[0].lastElementChild.className === 'message right'){
    newDiv.className = 'message left';
  } else if (!messages[0].lastElementChild) {
    messages[0].firstChild = newDiv;
  }
  else {
    newDiv.className = 'message right';
  }
  messages[0].appendChild(newDiv);
  form.reset();
})

//append the existing DOM element
subHeaderContainer.appendChild(name);
subHeaderContainer.appendChild(theRest);

const header = document.getElementById('header');


header.appendChild(title);
header.appendChild(subHeaderContainer)