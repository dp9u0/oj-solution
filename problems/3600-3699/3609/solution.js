/*
 * @lc app=leetcode id=3609 lang=javascript
 *
 * [3609] Minimum Moves to Reach Target in Grid
 */

// @lc code=start
/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {number}
 */
var minMoves = function(sx, sy, tx, ty) {
  if (sx === 0 && sy === 0) {
    return (tx === 0 && ty === 0) ? 0 : -1;
  }

  let cx = tx, cy = ty;
  let moves = 0;

  while (cx > sx || cy > sy) {
    if (cx === cy) {
      // Previous was (0, cy) or (cx, 0)
      if (sx === 0 && sy <= cy) {
        cx = 0;
        moves++;
        continue;
      }
      if (sy === 0 && sx <= cx) {
        cy = 0;
        moves++;
        continue;
      }
      return -1;
    }

    if (cx > cy) {
      if (cy === 0) {
        // Must halve cx repeatedly
        if (cx % 2 !== 0) return -1;
        while (cx > sx) {
          if (cx % 2 !== 0) return -1;
          cx = cx / 2;
          moves++;
        }
        break;
      }

      if (cx >= 2 * cy) {
        if (cx % 2 !== 0) return -1;
        // Halving would give cx/2, check if it's valid
        const halfCx = cx / 2;
        if (halfCx < sx) return -1;
        if (halfCx < cy) return -1; // invalid: prev_x < cy but we assumed halving
        cx = halfCx;
        moves++;
      } else {
        // Subtract cy
        const prevX = cx - cy;
        if (prevX < 0 || prevX < sx) return -1;
        cx = prevX;
        moves++;
      }
    } else {
      // cy > cx, symmetric
      if (cx === 0) {
        if (cy % 2 !== 0) return -1;
        while (cy > sy) {
          if (cy % 2 !== 0) return -1;
          cy = cy / 2;
          moves++;
        }
        break;
      }

      if (cy >= 2 * cx) {
        if (cy % 2 !== 0) return -1;
        const halfCy = cy / 2;
        if (halfCy < sy) return -1;
        if (halfCy < cx) return -1;
        cy = halfCy;
        moves++;
      } else {
        const prevY = cy - cx;
        if (prevY < 0 || prevY < sy) return -1;
        cy = prevY;
        moves++;
      }
    }
  }

  return (cx === sx && cy === sy) ? moves : -1;
};
// @lc code=end

// TEST:
console.log(minMoves(1, 2, 5, 4) === 2);
console.log(minMoves(0, 1, 2, 3) === 3);
console.log(minMoves(1, 1, 2, 2) === -1);
console.log(minMoves(0, 0, 0, 0) === 0);
console.log(minMoves(1, 1, 3, 5) === 3);
console.log(minMoves(0, 0, 9, 6) === -1);
console.log(minMoves(0, 1, 16, 4) === 5);
console.log(minMoves(4, 1, 4, 6) === -1);
