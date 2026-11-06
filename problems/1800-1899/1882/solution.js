/*
 * @lc app=leetcode.cn id=1882 lang=javascript
 *
 * [1882] 使用服务器处理任务
 */

// @lc code=start
/**
 * @param {number[]} servers
 * @param {number[]} tasks
 * @return {number[]}
 */
var assignTasks = function(servers, tasks) {
  // free: 空闲服务器堆，元素 [weight, index]，权重小者优先，权重相同下标小者优先
  // busy: 忙碌服务器堆，元素 [freeTime, weight, index]，最早恢复空闲者优先
  const free = [];
  const busy = [];
  const ans = new Array(tasks.length);
  let t = 0;

  const freeCmp = (a, b) => a[0] - b[0] || a[1] - b[1];
  const busyCmp = (a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2];

  const heapPush = (heap, val, cmp) => {
    heap.push(val);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (cmp(heap[p], val) <= 0) break;
      heap[i] = heap[p];
      i = p;
    }
    heap[i] = val;
  };

  const heapPop = (heap, cmp) => {
    const top = heap[0];
    const last = heap.pop();
    const n = heap.length;
    if (n > 0) {
      let i = 0;
      while (true) {
        const l = 2 * i + 1;
        if (l >= n) break;
        const r = l + 1;
        let s = l;
        if (r < n && cmp(heap[r], heap[l]) < 0) s = r;
        if (cmp(last, heap[s]) <= 0) break;
        heap[i] = heap[s];
        i = s;
      }
      heap[i] = last;
    }
    return top;
  };

  for (let i = 0; i < servers.length; i++) {
    heapPush(free, [servers[i], i], freeCmp);
  }

  for (let j = 0; j < tasks.length; j++) {
    if (j > t) t = j; // 任务 j 最早第 j 秒到达
    // 释放所有在时刻 t 之前（含 t）空闲的服务器
    while (busy.length && busy[0][0] <= t) {
      const [, w, idx] = heapPop(busy, busyCmp);
      heapPush(free, [w, idx], freeCmp);
    }
    if (free.length > 0) {
      const [w, idx] = heapPop(free, freeCmp);
      ans[j] = idx;
      heapPush(busy, [t + tasks[j], w, idx], busyCmp);
    } else {
      // 无空闲服务器，推进到最早空闲时刻
      t = busy[0][0];
      while (busy.length && busy[0][0] === t) {
        const [, w, idx] = heapPop(busy, busyCmp);
        heapPush(free, [w, idx], freeCmp);
      }
      const [w, idx] = heapPop(free, freeCmp);
      ans[j] = idx;
      heapPush(busy, [t + tasks[j], w, idx], busyCmp);
    }
  }

  return ans;
};
// @lc code=end

// TEST:
const assert = (actual, expected, label) => {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? 'PASS' : 'FAIL'} [${label}] actual=${JSON.stringify(actual)} expected=${JSON.stringify(expected)}`);
};

assert(assignTasks([3, 3, 2], [1, 2, 3, 2, 1, 2]), [2, 2, 0, 2, 1, 2], 'example1');
assert(assignTasks([5, 1, 4, 3, 2], [2, 1, 2, 4, 5, 2, 1]), [1, 4, 1, 4, 1, 3, 2], 'example2');
assert(assignTasks([1], [5, 5, 5]), [0, 0, 0], 'single-server-queue');
assert(assignTasks([10], [1]), [0], 'single-task');
assert(assignTasks([2, 2], [1, 1, 1, 1, 1, 1]), [0, 0, 0, 0, 0, 0], 'equal-weight-pick-smallest-index');
assert(assignTasks([2, 2], [3, 3]), [0, 1], 'equal-weight-tie-break');
assert(assignTasks([1, 2], [2, 2, 2, 2]), [0, 1, 0, 1], 'wait-and-reuse');
assert(assignTasks([3, 3, 3], [9, 9]), [0, 1], 'few-servers-more-tasks-wait');
