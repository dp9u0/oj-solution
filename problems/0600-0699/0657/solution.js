/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let h = v = 0;
  [...moves].forEach(move => {
    switch (move) {
      case 'U':
        v++;
        break;
      case 'D':
        v--;
        break;
      case 'L':
        h++;
        break;
      case 'R':
        h--;
        break;
    }
  });
  return h === 0 && v === 0;
};