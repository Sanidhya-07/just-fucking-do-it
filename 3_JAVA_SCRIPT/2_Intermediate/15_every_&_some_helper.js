let products = [
  { name: "Checkers", category: "Toys" },
  { name: "Harry Potter", category: "Books" },
  { name: "iPhone", category: "Electronics" },
  { name: "Learn PHP", category: "Books" },
];

// do all products have a category of Books

const everyRes = products.every((product) => {
  return product.category == "Books";
});

console.log(everyRes);



const someRes = products.some((item) => {
  return item.category == "Books";
});

console.log(someRes);
