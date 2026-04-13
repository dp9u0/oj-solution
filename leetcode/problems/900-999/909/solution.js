/*
 * @lc app=leetcode id=909 lang=javascript
 *
 * [909] Snakes and Ladders
 */

// @lc code=start
/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
    const n = board.length;
    const target = n * n;
    const getCoord = (label) => {
        const r = n - 1 - Math.floor((label - 1) / n);
        const c = (label - 1) % n;
        return [r, (n - 1 - r) % 2 === 0 ? c : n - 1 - c];
    };

    const visited = new Array(target + 1).fill(false);
    const queue = [1];
    visited[1] = true;
    let steps = 0;

    while (queue.length > 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const curr = queue.shift();
            if (curr === target) return steps;
            for (let dice = 1; dice <= 6; dice++) {
                let next = curr + dice;
                if (next > target) break;
                const [r, c] = getCoord(next);
                if (board[r][c] !== -1) next = board[r][c];
                if (!visited[next]) {
                    visited[next] = true;
                    queue.push(next);
                }
            }
        }
        steps++;
    }
    return -1;
};
// @lc code=end

// TEST:
console.log(snakesAndLadders([[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,35,-1,-1,13,-1],[-1,-1,-1,-1,-1,-1],[-1,15,-1,-1,-1,-1]])); // 4
console.log(snakesAndLadders([[-1,-1],[-1,3]])); // 1
