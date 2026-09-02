/*
 * @lc app=leetcode.cn id=LCP 78 lang=javascript
 *
 * [LCP 78] 城墙防线
 */

// @lc code=start
/**
 * @param {number[][]} rampart
 * @return {number}
 */
var rampartDefensiveLine = function(rampart) {
  const n = rampart.length;
  // free space between wall i and wall i+1
  const gap = new Array(n - 1);
  let sumGap = 0;
  for (let i = 0; i < n - 1; i++) {
    gap[i] = rampart[i + 1][0] - rampart[i][1];
    sumGap += gap[i];
  }

  // can every middle wall absorb exactly `len` total expansion
  // without overlapping? (end walls expand outward infinitely)
  const can = (len) => {
    let leftSpace = 0; // how much of the current (i-1)-th gap is already used
    for (let i = 1; i < n - 1; i++) {
      const need = len;
      // take as much as possible from the left gap
      const takeLeft = Math.min(need, Math.max(0, gap[i - 1] - leftSpace));
      let rest = need - takeLeft;
      if (rest > 0) {
        // push the rest into the right gap
        if (rest > gap[i]) return false;
        leftSpace = rest; // consume the i-th gap from its left side
      } else {
        leftSpace = 0; // the i-th gap stays fully available for next wall
      }
    }
    return true;
  };

  let lo = 0;
  let hi = sumGap; // upper bound of possible L
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    if (can(mid)) {
      lo = mid;
    } else {
      hi = mid - 1;
    }
  }
  return lo;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(rampartDefensiveLine([[0, 3], [4, 5], [7, 9]]), 3);
assert.strictEqual(rampartDefensiveLine([[1, 2], [5, 8], [11, 15], [18, 25]]), 4);
// 3 walls: single middle wall absorbs both gaps fully
assert.strictEqual(rampartDefensiveLine([[0, 1], [2, 3], [100, 101]]), 98);
assert.strictEqual(rampartDefensiveLine([[0, 100], [101, 102], [103, 104]]), 2);
// 5 walls sharing tight unit gaps -> each middle wall limited
assert.strictEqual(rampartDefensiveLine([[0, 1], [2, 3], [4, 5], [6, 7], [8, 9]]), 1);
// asymmetric 3 walls
assert.strictEqual(rampartDefensiveLine([[0, 10], [11, 12], [20, 30]]), 9);
// 4 walls competing for a narrow shared gap
assert.strictEqual(rampartDefensiveLine([[0, 1], [2, 4], [5, 6], [7, 9]]), 1);
// larger: middle walls consume symmetric gaps
assert.strictEqual(rampartDefensiveLine([[0, 2], [4, 6], [8, 10], [12, 14]]), 3);

console.log('All tests passed!');
console.log('rampartDefensiveLine([[0,3],[4,5],[7,9]]) =', rampartDefensiveLine([[0, 3], [4, 5], [7, 9]]));
