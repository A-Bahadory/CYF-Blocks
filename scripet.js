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
