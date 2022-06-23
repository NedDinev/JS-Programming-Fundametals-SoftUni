function sortByTwoCriteria(input) {
  let arrSort = input.sort((x, y) => {
    return (
      x.length - y.length || x.toLowerCase().localeCompare(y.toLowerCase())
    );
  });

  console.log(arrSort.join(`\n`));
}
sortByTwoCriteria([`test`, `Deny`, `omen`, `Default`]);
