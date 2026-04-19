/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = {};
  nums.forEach(n => {
    let v = map[n];
    if (!v) { v = map[n] = { n, c: 0 }; }
    v.c++;
  });
  const minHeap = new MinHeap((a, b) => a.c < b.c);
  Object.values(map).forEach(value => {
    if (minHeap.size() < k) {
      // 如果minHeap 中数量不足K 直接Push
      minHeap.push(value);
    } else if (minHeap.top().c < value.c) {
      // 如果minHeap 中已经达到K 并且最小(top) 数量小于 当前判断的数量
      // 可以用当前数字替换最小数量的数字
      // minHeap 数量保持为K
      minHeap.popandpush(value);
    }
  });
  return minHeap.values().map(v => v.n);
};

class MinHeap {
  constructor(needswap) {
    this._values = [];
    this._size = 0;
    this._needswap = needswap;
  }
  static _balanceUp(array, index, needswap) {
    let comparing = ~~((index - 1) / 2);
    while (index !== 0 && needswap(array[index], array[comparing])) {
      [array[index], array[comparing]] = [array[comparing], array[index]]
      index = comparing;
      comparing = ~~((index - 1) / 2);
    }
  }

  static _balanceDown(array, index, needswap) {
    let left = 2 * index + 1;
    let right = index * 2 + 2;
    while (array.length > left) {
      let comparing = left;
      if (array.length > right && needswap(array[right], array[left])) {
        comparing = right;
      }
      // 上下大小是否满足 minHeap 特性
      if (!needswap(array[comparing], array[index])) {
        break;
      }
      [array[index], array[comparing]] = [array[comparing], array[index]];
      index = comparing;
      left = 2 * index + 1;
      right = index * 2 + 2;
    }
  }

  push(v) {
    this._values.push(v);
    MinHeap._balanceUp(this._values, this._size, this._needswap);
    this._size++;
  }

  // POP 和 push 合二为一
  popandpush(v) {
    let value = this._values[0];
    this._values[0] = v;
    MinHeap._balanceDown(this._values, 0, this._needswap)
    return value;
  }

  size() {
    return this._size;
  }

  top() {
    return this._values[0];
  }

  values() {
    return this._values;
  }
}

// TEST:
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))
console.log(topKFrequent([1], 1))
console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2))