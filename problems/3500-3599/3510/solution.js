/*
 * @lc app=leetcode id=3510 lang=javascript
 *
 * [3510] Minimum Pair Removal to Sort Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = function(nums) {
    let n = nums.length;
    if (n <= 1) return 0;
    let nodes = [];
    for (let i = 0; i < n; i++) nodes.push({ val: nums[i], prev: i - 1, next: i + 1, alive: true, gen: 0 });
    nodes[n - 1].next = -1;
    let descents = 0;
    for (let i = 0; i < n - 1; i++) if (nums[i] > nums[i + 1]) descents++;
    if (descents === 0) return 0;
    let heap = [];
    let cmp = (a, b) => a[0] < b[0] || (a[0] === b[0] && a[1] < b[1]);
    let push = (sum, l, r) => {
      let e = [sum, l, r, nodes[l].gen, nodes[r].gen];
      heap.push(e);
      let i = heap.length - 1;
      while (i > 0) {
        let p = (i - 1) >> 1;
        if (cmp(e, heap[p])) { heap[i] = heap[p]; i = p; } else break;
      }
      heap[i] = e;
    };
    let pop = () => {
      let top = heap[0]; heap[0] = heap[heap.length - 1]; heap.pop();
      let i = 0, sz = heap.length;
      while (true) {
        let s = i, l = 2*i+1, r = 2*i+2;
        if (l < sz && cmp(heap[l], heap[s])) s = l;
        if (r < sz && cmp(heap[r], heap[s])) s = r;
        if (s !== i) { [heap[i], heap[s]] = [heap[s], heap[i]]; i = s; } else break;
      }
      return top;
    };
    for (let i = 0; i < n - 1; i++) push(nums[i] + nums[i + 1], i, i + 1, 0);
    let ops = 0;
    while (descents > 0) {
      let [sum, li, ri, gl, gr] = pop();
      if (!nodes[li].alive || !nodes[ri].alive || nodes[li].next !== ri || nodes[li].gen !== gl || nodes[ri].gen !== gr) continue;
      let prev = nodes[li].prev, next = nodes[ri].next;
      let before = 0;
      if (prev !== -1 && nodes[prev].val > nodes[li].val) before++;
      if (nodes[li].val > nodes[ri].val) before++;
      if (next !== -1 && nodes[ri].val > nodes[next].val) before++;
      let merged = nodes[li].val + nodes[ri].val;
      nodes[li].val = merged;
      nodes[li].gen++;
      nodes[li].next = next;
      nodes[ri].alive = false;
      if (next !== -1) nodes[next].prev = li;
      let after = 0;
      if (prev !== -1 && nodes[prev].val > merged) after++;
      if (next !== -1 && merged > nodes[next].val) after++;
      descents += after - before;
      ops++;
      if (prev !== -1) push(nodes[prev].val + merged, prev, li);
      if (next !== -1) push(merged + nodes[next].val, li, next);
    }
    return ops;
};
// @lc code=end

// TEST:
console.log(minimumPairRemoval([5,2,3,1]));
console.log(minimumPairRemoval([1,2,2]));
console.log(minimumPairRemoval([1,2,3,4,5]));
