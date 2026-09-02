/*
 * @lc app=leetcode.cn id=LCR 125 lang=javascript
 *
 * [LCR 125] 图书整理 II
 */

// @lc code=start

var CQueue = function() {
    this.stackIn = [];
    this.stackOut = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.stackIn.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if (this.stackOut.length === 0) {
        while (this.stackIn.length) {
            this.stackOut.push(this.stackIn.pop());
        }
    }
    return this.stackOut.length ? this.stackOut.pop() : -1;
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
// @lc code=end

// TEST:
const eq = (a, b, msg) => {
  if (JSON.stringify(a) !== JSON.stringify(b)) {
    console.error('FAIL:', msg, 'got', a, 'expected', b);
  } else {
    console.log('PASS:', msg);
  }
};

// 示例 1: ["BookQueue","push","push","pop"], [[],[1],[2],[]] => [null,null,null,1]
(() => {
  const q = new CQueue();
  q.appendTail(1);
  q.appendTail(2);
  eq(q.deleteHead(), 1, '示例1 deleteHead -> 1');
  eq(q.deleteHead(), 2, '示例1 再 deleteHead -> 2');
})();

// 空队列 deleteHead 返回 -1
(() => {
  const q = new CQueue();
  eq(q.deleteHead(), -1, '空队 deleteHead -> -1');
})();

// 交错入出队:入队多,出队一次后继续入队,保证 FIFO 顺序
(() => {
  const q = new CQueue();
  q.appendTail(3);
  q.appendTail(5);
  eq(q.deleteHead(), 3, '交错 入3入5 -> 出3');
  q.appendTail(7);
  eq(q.deleteHead(), 5, '交错 继续出5');
  eq(q.deleteHead(), 7, '交错 继续出7');
  eq(q.deleteHead(), -1, '交错 出空 -> -1');
})();

// 入队若干后先部分出队,再触发 stackOut 清空后从 stackIn 转移
(() => {
  const q = new CQueue();
  for (let i = 1; i <= 10; i++) q.appendTail(i);
  for (let i = 1; i <= 10; i++) eq(q.deleteHead(), i, `顺序出队 ${i}`);
})();

// 出队到 stackOut 为空时,stackIn 已有新元素仍能正确转移
(() => {
  const q = new CQueue();
  q.appendTail(10);
  eq(q.deleteHead(), 10, '转移后出队10');
  q.appendTail(20);
  q.appendTail(30);
  eq(q.deleteHead(), 20, '清空后新入队转移出20');
  eq(q.deleteHead(), 30, '继续出30');
})();
