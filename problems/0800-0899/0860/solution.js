/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let count5 = 0,
    count10 = 0;
  for (const bill of bills) {
    if (bill === 5) {
      count5++;
    } else if (bill === 10) {
      if (count5 > 0) {
        count5--;
        count10++;
      } else {
        return false;
      }
    } else {
      if (count5 > 0 && count10 > 0) {
        count5--;
        count10--;
      } else if (count5 > 2) {
        count5 -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
};

/**
// TEST:
console.log(lemonadeChange([10, 10]));
*/