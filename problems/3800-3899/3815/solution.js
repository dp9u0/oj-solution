/*
 * @lc app=leetcode id=3815 lang=javascript
 *
 * [3815] Design Auction System
 */

// @lc code=start

var AuctionSystem = function() {
  this.bids = new Map(); // itemId -> Map<userId, bidAmount>
  this.heaps = new Map(); // itemId -> max-heap of [amount, userId]
};

const heapPush = (heap, val) => {
  heap.push(val);
  let i = heap.length - 1;
  while (i > 0) {
    const p = (i - 1) >> 1;
    if (heap[p][0] < heap[i][0] || (heap[p][0] === heap[i][0] && heap[p][1] < heap[i][1])) {
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    } else break;
  }
};

const heapPop = (heap) => {
  const top = heap[0];
  heap[0] = heap[heap.length - 1];
  heap.pop();
  let i = 0;
  while (true) {
    let largest = i;
    const l = 2 * i + 1, r = 2 * i + 2;
    if (l < heap.length && (heap[l][0] > heap[largest][0] || (heap[l][0] === heap[largest][0] && heap[l][1] > heap[largest][1]))) largest = l;
    if (r < heap.length && (heap[r][0] > heap[largest][0] || (heap[r][0] === heap[largest][0] && heap[r][1] > heap[largest][1]))) largest = r;
    if (largest !== i) { [heap[i], heap[largest]] = [heap[largest], heap[i]]; i = largest; }
    else break;
  }
  return top;
};

/**
 * @param {number} userId
 * @param {number} itemId
 * @param {number} bidAmount
 * @return {void}
 */
AuctionSystem.prototype.addBid = function(userId, itemId, bidAmount) {
  if (!this.bids.has(itemId)) {
    this.bids.set(itemId, new Map());
    this.heaps.set(itemId, []);
  }
  this.bids.get(itemId).set(userId, bidAmount);
  heapPush(this.heaps.get(itemId), [bidAmount, userId]);
};

/**
 * @param {number} userId
 * @param {number} itemId
 * @param {number} newAmount
 * @return {void}
 */
AuctionSystem.prototype.updateBid = function(userId, itemId, newAmount) {
  this.bids.get(itemId).set(userId, newAmount);
  heapPush(this.heaps.get(itemId), [newAmount, userId]);
};

/**
 * @param {number} userId
 * @param {number} itemId
 * @return {void}
 */
AuctionSystem.prototype.removeBid = function(userId, itemId) {
  const itemBids = this.bids.get(itemId);
  itemBids.delete(userId);
  if (itemBids.size === 0) {
    this.bids.delete(itemId);
    this.heaps.delete(itemId);
  }
};

/**
 * @param {number} itemId
 * @return {number}
 */
AuctionSystem.prototype.getHighestBidder = function(itemId) {
  const itemBids = this.bids.get(itemId);
  if (!itemBids || itemBids.size === 0) return -1;
  const heap = this.heaps.get(itemId);
  while (heap.length > 0) {
    const [amount, userId] = heap[0];
    if (itemBids.has(userId) && itemBids.get(userId) === amount) return userId;
    heapPop(heap);
  }
  return -1;
};

/**
 * Your AuctionSystem object will be instantiated and called as such:
 * var obj = new AuctionSystem()
 * obj.addBid(userId,itemId,bidAmount)
 * obj.updateBid(userId,itemId,newAmount)
 * obj.removeBid(userId,itemId)
 * var param_4 = obj.getHighestBidder(itemId)
 */
// @lc code=end

// TEST:
const obj = new AuctionSystem();
obj.addBid(1, 7, 5);
obj.addBid(2, 7, 6);
console.log(obj.getHighestBidder(7)); // 2
obj.updateBid(1, 7, 8);
console.log(obj.getHighestBidder(7)); // 1
obj.removeBid(2, 7);
console.log(obj.getHighestBidder(7)); // 1
console.log(obj.getHighestBidder(3)); // -1

const obj2 = new AuctionSystem();
obj2.addBid(1, 1, 10);
obj2.addBid(2, 1, 10);
obj2.addBid(3, 1, 5);
console.log(obj2.getHighestBidder(1)); // 2

const obj3 = new AuctionSystem();
obj3.addBid(1, 1, 100);
obj3.removeBid(1, 1);
console.log(obj3.getHighestBidder(1)); // -1

obj3.addBid(5, 2, 50);
obj3.addBid(3, 2, 50);
obj3.addBid(7, 2, 30);
console.log(obj3.getHighestBidder(2)); // 5
