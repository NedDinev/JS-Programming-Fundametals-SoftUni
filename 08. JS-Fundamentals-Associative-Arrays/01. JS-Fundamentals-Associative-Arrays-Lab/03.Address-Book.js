function addressBook(input) {
  let book = {};

  for (const data of input) {
    let [name, address] = data.split(":");

    book[name] = address;
  }
  let entries = Object.entries(book);
  let sortedBook = entries.sort((a, b) => {
    return a[0].localeCompare(b[0]);
  });

  for (let [name, adress] of sortedBook) {
    console.log(`${name} -> ${adress}`);
  }
}
addressBook([
  "Bob:Huxley Rd",
  "John:Milwaukee Crossing",
  "Peter:Fordem Ave",
  "Bob:Redwing Ave",
  "George:Mesta Crossing",
  "Ted:Gateway Way",
  "Bill:Gateway Way",
  "John:Grover Rd",
  "Peter:Huxley Rd",
  "Jeff:Gateway Way",
  "Jeff:Huxley Rd",
]);
