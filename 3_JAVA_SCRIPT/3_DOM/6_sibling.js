const ul = document.querySelector("ul");
const li = document.querySelector("li");
console.log(ul);
console.log(li);

// Parent Element
console.log(li.parentElement);
console.log(ul.parentElement);

// Childrens
console.log(ul.children);
console.log(ul.children[2]);

// nextElementSibling
console.log(li.nextElementSibling);

// previousElementSibling
const fourth = document.querySelector(".fourth");
console.log(fourth.previousElementSibling);
