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
