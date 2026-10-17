/*
 * @lc app=leetcode.cn id=面试题 03.06 lang=javascript
 *
 * [面试题 03.06] 动物收容所
 */

// @lc code=start

var AnimalShelf = function() {
    // 猫狗各自 FIFO；头下标代替 shift，全局 seq 记到达先后
    this.cats = [];
    this.dogs = [];
    this.catHead = 0;
    this.dogHead = 0;
    this.seq = 0;
};

/**
 * @param {number[]} animal
 * @return {void}
 */
AnimalShelf.prototype.enqueue = function(animal) {
    const item = [animal[0], animal[1], this.seq++];
    if (animal[1] === 0) this.cats.push(item);
    else this.dogs.push(item);
};

/**
 * @return {number[]}
 */
AnimalShelf.prototype.dequeueAny = function() {
    const c = this.cats[this.catHead];
    const d = this.dogs[this.dogHead];
    if (c === undefined && d === undefined) return [-1, -1];
    if (d === undefined || (c !== undefined && c[2] < d[2])) return this.dequeueCat();
    return this.dequeueDog();
};

/**
 * @return {number[]}
 */
AnimalShelf.prototype.dequeueDog = function() {
    if (this.dogHead >= this.dogs.length) return [-1, -1];
    const [num, species] = this.dogs[this.dogHead];
    this.dogHead++;
    return [num, species];
};

/**
 * @return {number[]}
 */
AnimalShelf.prototype.dequeueCat = function() {
    if (this.catHead >= this.cats.length) return [-1, -1];
    const [num, species] = this.cats[this.catHead];
    this.catHead++;
    return [num, species];
};

/** 
 * Your AnimalShelf object will be instantiated and called as such:
 * var obj = new AnimalShelf()
 * obj.enqueue(animal)
 * var param_2 = obj.dequeueAny()
 * var param_3 = obj.dequeueDog()
 * var param_4 = obj.dequeueCat()
 */
// @lc code=end

// TEST:
const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const s1 = new AnimalShelf();
s1.enqueue([0, 0]);
s1.enqueue([1, 0]);
console.log(eq(s1.dequeueCat(), [0, 0]));
console.log(eq(s1.dequeueDog(), [-1, -1]));
console.log(eq(s1.dequeueAny(), [1, 0]));
const s2 = new AnimalShelf();
s2.enqueue([0, 0]);
s2.enqueue([1, 0]);
s2.enqueue([2, 1]);
console.log(eq(s2.dequeueDog(), [2, 1]));
console.log(eq(s2.dequeueCat(), [0, 0]));
console.log(eq(s2.dequeueAny(), [1, 0]));
const s3 = new AnimalShelf();
console.log(eq(s3.dequeueAny(), [-1, -1]) && eq(s3.dequeueDog(), [-1, -1]));
const s4 = new AnimalShelf();
// 交错入队：dequeueAny 应严格按到达序
for (const a of [[10, 1], [11, 0], [12, 1], [13, 0]]) s4.enqueue(a);
console.log(eq(s4.dequeueAny(), [10, 1]));
console.log(eq(s4.dequeueAny(), [11, 0]));
console.log(eq(s4.dequeueCat(), [13, 0]));
console.log(eq(s4.dequeueDog(), [12, 1]));
console.log(eq(s4.dequeueAny(), [-1, -1]));
