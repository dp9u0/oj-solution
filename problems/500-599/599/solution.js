/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  let map = {};
  list1.forEach((element, index) => {
    map[element] = index;
  });
  let leastIndex = Infinity;
  let result = [];
  // console.log(map);
  list2.forEach((element, index) => {
    if (map[element] || map[element] === 0) {
      let indexSum = index + map[element];
      // console.log(indexSum);
      if (indexSum < leastIndex) {
        leastIndex = indexSum;
        result = [element];
      } else if (indexSum === leastIndex) {
        result.push(element);
      }
    }
  });
  return result;
};

/**
// TEST:
findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["KFC", "Burger King", "Tapioca Express", "Shogun"])
*/