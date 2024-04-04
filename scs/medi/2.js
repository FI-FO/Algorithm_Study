function sortByPriceAscending(jsonString) {
  const products = JSON.parse(jsonString);

  products.sort((a, b) => {
    if (a.price === b.price) {
      return a.name.localeCompare(b.name);
    } else {
      return a.price - b.price;
    }
  });

  return JSON.stringify(products);
}

console.log(sortByPriceAscending('[{"name":"eggs","price":1},{"name":"coffee","price":9.99},{"name":"rice","price":4.04}]'));