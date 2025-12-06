// Creating DOM Elements

const h1 = document.createElement("h1");
h1.textContent = "Good Bye";
h1.classList.add("greating");

console.log(h1);

// **************************************************************************************

// Append child (add at the end of the selected element)

const body = document.querySelector("body");
const ul = document.querySelector("ul");

// ul.appendChild(h1);
body.appendChild(h1);

// **************************************************************************************

//Insertbefore

const newLi = document.createElement("li");
newLi.textContent = "I am new li tag";

const ul_2 = document.querySelector(".new-list");
const firstLi = ul_2.children[0];

ul_2.insertBefore(newLi, firstLi);

// **************************************************************************************

// InsertAdjacentElement

const p = document.querySelector("p");

const i = document.createElement("i");
i.textContent = "I am italic tag";
i.style.color = "red";

// p.insertAdjacentElement("beforebegin",i)
// p.insertAdjacentElement("afterbegin",i)
// p.insertAdjacentElement("beforeend",i)
// p.insertAdjacentElement("afterend", i);

// **************************************************************************************

// removeChild(),remove()

const fourthLi = document.querySelector(".fourth");

ul_2.removeChild(fourthLi);
// ul_2.remove();

// **************************************************************************************
