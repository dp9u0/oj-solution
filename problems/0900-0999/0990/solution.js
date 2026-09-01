/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function (equations) {
  let map = {};
  equations.forEach(equation => {
    if (equation[1] === '=') {
      let set = map[equation[0]] || map[equation[3]] || new Set();
      set.add(equation[0])
      set.add(equation[3]);
      map[equation[0]] = map[equation[3]] = set;
    }
  });
  for (let i = 0; i < equations.length; i++) {
    const equation = equations[i];
    if (equation[1] === '!') {
      if ((map[equation[0]] && map[equation[0]].has(equation[3])) ||
        (map[equation[0]] && map[equation[0]].has(equation[3])) ||
        (equation[0] === equation[3])) {
        return false;
      }
    }
  }
  return true;
};