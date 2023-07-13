//nu2
let element_adjective = document.getElementById('adjective');
element_adjective.innerText = 'big';

//n3
let element_banana = document.getElementById('banana');
element_banana.style.color = '#ffff66';
element_banana.style.backgroundColor = '#ff0000';
let element_apple = document.getElementById('apple');
element_apple.style.color = '#33cc00';
element_apple.style.backgroundColor = '#3366ff';
let element_strawberry = document.getElementById('strawberry');
element_strawberry.style.color = '#ff0000';
element_strawberry.style.backgroundColor = '#ff99ff';

//n4
let element_list = document.getElementById('list');
let new_li = document.createElement('li');
new_li.innerText = 'banana';

element_list.appendChild(new_li);
let new_li2 = document.createElement('li');
new_li2.innerText = 'cat-fruit';

element_list.appendChild(new_li2);
let new_li3 = document.createElement('li');
new_li3.innerText = 'avocado';

element_list.appendChild(new_li3);

//n5
let element_list = document.getElementById('list');
let new_li = document.createElement('li');
let new_a = document.createElement('a');
new_a.setAttribute("href", 'https://bahador-home-town.netlify.app');
new_a.innerText = 'my -webepage';

new_li.appendChild(new_a);

element_list.appendChild(new_li);
let new_li2 = document.createElement('li');
let new_a2 = document.createElement('a');
new_a2.setAttribute("href", 'https://www.dr-mikes-math-games-for-kids.com/online-traffic-jam-game.html');
new_a2.innerText = 'game-linke';

new_li2.appendChild(new_a2);

element_list.appendChild(new_li2);
let new_li3 = document.createElement('li');
let new_a3 = document.createElement('a');
new_a3.setAttribute("href", 'https://www.youtube.com/live/MxrFZJcGo08?feature=share');
new_a3.innerText = 'github-youtube-community';

new_li3.appendChild(new_a3);

element_list.appendChild(new_li3);
//n6
document.getElementById('button').addEventListener('click', (event) => {
  let element_list = document.getElementById('list');
  let new_li = document.createElement('li');
  new_li.innerText = 'Apple';

  element_list.appendChild(new_li);

});

document.getElementById('new-').addEventListener('click', (event) => {
  let element_list2 = document.getElementById('list');
  element_list2.replaceChildren();

});

document.getElementById('add').addEventListener('click', (event) => {
  let element_add_items = document.getElementById('add_items');
  let new_li2 = document.createElement('li');
  new_li2.innerText = 'items added';

  element_add_items.appendChild(new_li2);

});

document.getElementById('remove').addEventListener('click', (event) => {
  let element_add_items2 = document.getElementById('add_items');
  element_add_items2.replaceChildren();

});
//n7
function convertToNumber(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return 0
  } else {
    return number_value
  }
}



document.getElementById('button').addEventListener('click', (event) => {
  window.speechSynthesis.speak(new SpeechSynthesisUtterance(document.getElementById('text').value));

});

document.getElementById('button').addEventListener('click', (event) => {
  window.speechSynthesis.speak(new SpeechSynthesisUtterance(document.getElementById('cat').value));

});
//8
function convertToNumber(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return 0
  } else {
    return number_value
  }
}



document.getElementById('button').addEventListener('click', (event) => {
  let element_list = document.getElementById('list');
  let new_li = document.createElement('li');
  new_li.innerText = document.getElementById('text').value;

  element_list.appendChild(new_li);

});

document.getElementById('new_button').addEventListener('click', (event) => {
  let element_step_list = document.getElementById('step_list');
  let new_li2 = document.createElement('li');
  new_li2.innerText = '';

  element_step_list.appendChild(new_li2);

});
document.getElementById('steps').value;

//n9
document.getElementById('day').addEventListener('click', (event) => {
  let element_cat = document.getElementById('cat');
  let new_li = document.createElement('li');
  new_li.innerText = 'Day mode" should be dark text on al light background';
  new_li.style.backgroundColor = '#ffffff';
  new_li.style.color = '#333333';

  element_cat.appendChild(new_li);

});

document.getElementById('night').addEventListener('click', (event) => {
  let element_cat2 = document.getElementById('cat');
  let new_li2 = document.createElement('li');
  new_li2.innerText = 'Night mode" should be light text on a dark bakground';
  new_li2.style.backgroundColor = '#666666';
  new_li2.style.color = '#ffff66';

  element_cat2.appendChild(new_li2);

});

document.getElementById('img').addEventListener('click', (event) => {
  event.target.setAttribute("src", 'data:image/jpeg;base64,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');

});

document.getElementById('colour-change').addEventListener('click', (event) => {
  event.target.style.backgroundColor = '#009900';

});

document.getElementById('morning').addEventListener('click', (event) => {
  event.target.style.backgroundColor = '#ffff66';

});

document.getElementById('book').addEventListener('click', (event) => {
  event.target.setAttribute("src", 'https://blob.sololearn.com/avatars/75aeefa4-d611-4799-b2a5-6ba8f06fac7e.jpg');

});
//n10
var click_count, count_click;


count_click = (typeof count_click === 'number' ? count_click : 0) + 0;


document.getElementById('count_click').addEventListener('click', (event) => {
  count_click = (typeof count_click === 'number' ? count_click : 0) + 1;
  event.target.innerText = count_click;

});
click_count = 0;


document.getElementById('click_count').addEventListener('click', (event) => {
  click_count = (typeof click_count === 'number' ? click_count : 0) + 1;
  event.target.innerText = click_count;

});

//11
var animal, coluor;

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}


animal = ['cat', 'sheep', 'dog'];
let element_animal = document.getElementById('animal');
element_animal.innerText = randomMember(animal);

coluor = ['white', 'yellow', 'blue'];
let element_line = document.getElementById('line');
element_line.innerText = randomMember(coluor);
