/*
 * @lc app=leetcode id=433 lang=javascript
 *
 * [433] Minimum Genetic Mutation
 */

// @lc code=start
/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
    let bankSet = new Set(bank);
    if (!bankSet.has(endGene)) return -1;
    let genes = ['A', 'C', 'G', 'T'];
    let visited = new Set();
    visited.add(startGene);
    let queue = [[startGene, 0]];
    while (queue.length) {
        let [gene, steps] = queue.shift();
        if (gene === endGene) return steps;
        for (let i = 0; i < 8; i++) {
            for (const g of genes) {
                if (g === gene[i]) continue;
                let next = gene.slice(0, i) + g + gene.slice(i + 1);
                if (bankSet.has(next) && !visited.has(next)) {
                    visited.add(next);
                    queue.push([next, steps + 1]);
                }
            }
        }
    }
    return -1;
};
// @lc code=end

// TEST:
console.log(minMutation("AACCGGTT", "AACCGGTA", ["AACCGGTA"])); // 1
console.log(minMutation("AACCGGTT", "AAACGGTA", ["AACCGGTA","AACCGCTA","AAACGGTA"])); // 2
console.log(minMutation("AACCGGTT", "AACCGGTA", [])); // -1
