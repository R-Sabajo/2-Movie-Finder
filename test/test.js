const childElement = document.createElement('li');

childElement.classList.add('children-class');

const ChildList = document.querySelector('ul');

let parent = document.getElementById('child-list');

let child = parent.getElementsByTagName('li')[0];

console.log(parent);
console.log(child);

console.log(childElement);

childElement.innerHTML = 'child 4';
ChildList.appendChild(childElement);

// let childRemoved = parent.removeChild(child);
