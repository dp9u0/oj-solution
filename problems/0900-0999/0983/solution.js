/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
  let length = days.length;
  let f = new Array(length);
  for (let i = 0; i < length; i++) {
    f[i]=[];    
  }
  for (let l = 0; l < length; l++) {
    for (let end = l; end < length; end++) {
      let start = end - l;
      let cost = Infinity;
      for (let k = start; k < end; k++) {
        cost = Math.min(cost, f[start][k] + f[k + 1][end]);
      }
      if (days[end] - days[start] < 1) {
        cost = Math.min(cost, costs[0]);
      } else if (days[end] - days[start] < 7) {
        cost = Math.min(cost, costs[1]);
      } else if (days[end] - days[start] < 30) {
        cost = Math.min(cost, costs[2]);
      }
      f[start][end] = cost;
    }
  }
  return f[0][length - 1];
};

/**
// TEST:
let days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31],
  costs = [2, 7, 15]
mincostTickets(days, costs)
*/