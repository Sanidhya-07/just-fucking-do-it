function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  this.getInfo = function () {
    return `BOOK Title:${this.title}\nBOOK Author:${this.author}\nBOOK Year:${this.year}\n`;
  };
}

const book1 = new Book("Sane Guruji", "Sanidhya Naik", 2025);
const book2 = new Book("Rajnikant", "prem bhatt", 2005);

console.log(book1.getInfo());
console.log(book2.getInfo());
