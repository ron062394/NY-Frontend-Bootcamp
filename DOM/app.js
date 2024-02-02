//ID
const heading = document.getElementById('heading');
console.log(heading);

//Class
const heading1 = document.getElementsByClassName('heading1');
console.log(heading1);
console.log(typeof heading1[0]);

//Tag Name
const heading2 = document.getElementsByTagName('h1');
console.log(heading2[0]);

//
const listItems = document.querySelectorAll('#list li');
console.log(listItems);


//Modifying Elements
//Contents using html
heading1[0].innerHTML = '<em>Learning DOM Manipulation<em>';


//content using textContent
heading1[0].textContent = 'All about DOM Manipulataion';

//modify attribute
heading2[0].setAttribute('class', 'highlight')

