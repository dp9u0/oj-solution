/*
 * @lc app=leetcode id=726 lang=javascript
 *
 * [726] Number of Atoms
 */

// @lc code=start
/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function(formula) {
  const n = formula.length;
  const stack = [new Map()];
  let i = 0;
  while (i < n) {
    const ch = formula[i];
    if (ch === '(') {
      stack.push(new Map());
      i++;
    } else if (ch === ')') {
      i++;
      let num = 0;
      let hasNum = false;
      while (i < n && formula[i] >= '0' && formula[i] <= '9') {
        num = num * 10 + (formula.charCodeAt(i) - 48);
        i++;
        hasNum = true;
      }
      if (!hasNum) num = 1;
      const top = stack.pop();
      const cur = stack[stack.length - 1];
      for (const [k, v] of top) {
        cur.set(k, (cur.get(k) || 0) + v * num);
      }
    } else {
      let j = i + 1;
      while (j < n && formula[j] >= 'a' && formula[j] <= 'z') j++;
      const name = formula.slice(i, j);
      let num = 0;
      let hasNum = false;
      while (j < n && formula[j] >= '0' && formula[j] <= '9') {
        num = num * 10 + (formula.charCodeAt(j) - 48);
        j++;
        hasNum = true;
      }
      if (!hasNum) num = 1;
      const cur = stack[stack.length - 1];
      cur.set(name, (cur.get(name) || 0) + num);
      i = j;
    }
  }
  const result = stack[0];
  return [...result.entries()]
    .sort((a, b) => (a[0] < b[0] ? -1 : 1))
    .map(([k, v]) => (v > 1 ? k + v : k))
    .join('');
};
// @lc code=end

// TEST:
console.log(countOfAtoms('H2O') === 'H2O');
console.log(countOfAtoms('Mg(OH)2') === 'H2MgO2');
console.log(countOfAtoms('K4(ON(SO3)2)2') === 'K4N2O14S4');
console.log(countOfAtoms('Be32') === 'Be32');
console.log(countOfAtoms('(H)') === 'H');
console.log(countOfAtoms('((N7)16)') === 'N112');
console.log(countOfAtoms('H11He49NO35B7N11Li93') === 'B7H11He49Li93N12O35');
