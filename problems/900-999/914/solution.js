/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
  const gcd = (a, b) => b > 0 ? gcd(b, a % b) : a;
  let map = {};
  deck.forEach(el => {
    map[el] = (map[el] || 0) + 1;
  });
  let X = 0;
  let counts = Object.values(map);
  for (const count of counts) {
    X = gcd(count, X);
  }
  return X > 1;
};

/**
// TEST:
console.log(hasGroupsSizeX([]));
console.log(hasGroupsSizeX([1, 1, 2, 2, 3, 3, 4, 4]));
console.log(hasGroupsSizeX([1, 1, 2, 2, 2, 2]));
console.log(hasGroupsSizeX([1, 1, 1, 1, 2, 2, 2, 2, 2, 2]));
*/