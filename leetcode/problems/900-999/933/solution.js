var RecentCounter = function () {
  this.pings = [];
  this.effets = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.pings.push(t);
  this.effets.push(t + 3000);
  while (this.effets[0] < t) {
    this.effets.shift();
    this.pings.shift();
  }
  return this.pings.length || null;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = Object.create(RecentCounter).createNew()
 * var param_1 = obj.ping(t)
 */