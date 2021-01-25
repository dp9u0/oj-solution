/**
 * @param {number} capacity
 */
class LFUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.kvMap = {};
    this.freqMap = {};
    this.minFreq = 0;
  }

  static updateOrInsert(freqMap, kv, minFreq) {
    let { freq, node } = kv;
    // REMOVE FROM EXIST DOUBLE LL
    if (freq !== 0) {
      const { pre, next } = node;
      let head = freqMap[freq];
      pre.next = next;
      next.pre = pre;
      if (head.next === head) {
        delete freqMap[freq];
        if (minFreq === freq) {
          minFreq++;
        }
      }
    } else {
      minFreq = 1;
    }
    // INSERT INTO DOUBLE LL
    kv.freq = freq = freq + 1;
    let head = freqMap[freq];
    if (!head) {
      head = freqMap[freq] = {};
      head.pre = head;
      head.next = head;
    }
    node.next = head.next;
    head.next = node;
    node.pre = head;
    node.next.pre = node;
    return minFreq;
  }

  static Remove(freqMap, freq) {
    // REMOVE
    let head = freqMap[freq];
    const node = head.pre;
    head.pre = node.pre;
    node.pre.next = head;
    node.pre = null;
    node.next = null;
    if (head.next === head) {
      delete freqMap[freq];
    }
    return node;
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    if (this.capacity === 0) return -1;
    const kv = this.kvMap[key];
    if (!kv) { return -1; }
    this.minFreq = LFUCache.updateOrInsert(this.freqMap, kv, this.minFreq);
    return kv.value;
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    if (this.capacity === 0) return;
    let kv = this.kvMap[key];
    if (!kv) {
      this.kvMap[key] = kv = { value, freq: 0, node: { key } };
      this.size++;
      if (this.size > this.capacity) {
        const node = LFUCache.Remove(this.freqMap, this.minFreq); // 移除最少使用的节点
        delete this.kvMap[node.key]; // 移除 key-value
        this.size--;
      }
    }
    this.minFreq = LFUCache.updateOrInsert(this.freqMap, kv, this.minFreq);
    kv.value = value;
  }
}

/** 
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

let result;
let lfuCache = new LFUCache(2);
result = lfuCache.put(1, 1);
lfuCache.put(2, 2);
result = lfuCache.get(1);      // 返回 1
console.log(result)
lfuCache.put(3, 3);            // 去除键 2
result = lfuCache.get(2);      // 返回 -1（未找到）
console.log(result)
result = lfuCache.get(3);      // 返回 3
console.log(result)
lfuCache.put(4, 4);            // 去除键 1
result = lfuCache.get(1);      // 返回 -1（未找到）
console.log(result)
result = lfuCache.get(3);      // 返回 3
console.log(result)
result = lfuCache.get(4);      // 返回 4
console.log(result)