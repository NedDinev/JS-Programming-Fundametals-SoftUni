function cats(input) {
  class Cat {
    constructor(catName, catAge) {
      this.catName = catName;
      this.catAge = catAge;
    }

    meow() {
      console.log(`${this.catName}, age ${this.catAge} says Meow`);
    }
  }

  let cats = [];

  for (let i = 0; i < input.length; i++) {
    let catData = input[i].split(" ");
    let catName = catData[0];
    let catAge = catData[1];

    let currentCat = new Cat(catName, catAge);
    cats.push(currentCat);
  }

  for (let myCat of cats) {
    myCat.meow();
  }
}
cats(["Mellow 2", "Tom 5"]);
