let products = [
  { name: "Checkers", category: "Toys" },
  { name: "Harry Potter", category: "Books" },
  { name: "iPhone", category: "Electronics" },
  { name: "Learn PHP", category: "Books" },
];

let match = products.find((product) => product.category == "Books");
console.log(match);
