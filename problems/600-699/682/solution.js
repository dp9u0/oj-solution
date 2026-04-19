/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  let scores = [];
  ops.forEach(op => {
    switch (op) {
      case '+':
        scores.push(scores[scores.length - 1] + scores[scores.length - 2]);
        break;
      case 'D':
        scores.push(scores[scores.length - 1] * 2);
        break;
      case 'C':
        scores.pop();
        break;
      default:
        scores.push(Number(op));
        break;
    }
  });
  return scores.reduce((pre, cur) => pre + cur, 0);
};