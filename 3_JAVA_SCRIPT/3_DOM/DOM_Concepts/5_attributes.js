const a = document.querySelector("a");

console.log(a.href);

a.href = "https://www.youtube.com";
console.log(a.href);

const input = document.querySelector("input");

console.log(input.type);
input.type = "password";
console.log(input.type);
console.log(input.id);

// By using Methods
// setAttribute("attrName","value") and getAttribute("attrName")

console.log(a.getAttribute("href"));

input.setAttribute("type", "Email");
console.log(input.getAttribute("type"));

input.setAttribute("placeholder", "Give password");
console.log(input.getAttribute("placeholder"));
