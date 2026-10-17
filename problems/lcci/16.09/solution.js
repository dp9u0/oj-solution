/*
 * @lc app=leetcode.cn id=面试题 16.09 lang=javascript
 *
 * [面试题 16.09] 运算
 */

// @lc code=start

var Operations = function() {

};

// 取负：步长自倍增（仅加法），越零即结算重置，O(log|x|)
const negate = n => {
    let ans = 0;
    let step = n > 0 ? -1 : 1;
    while (n !== 0) {
        // 倍增步长直至再加一步会越过零（恰抵零仍可加倍）
        for (;;) {
            const next = n + step + step;
            if (next === 0 || (next > 0) === (n > 0)) {
                step += step;
            } else {
                break;
            }
        }
        ans += step;
        n += step;
        step = n > 0 ? -1 : 1;
    }
    return ans;
};

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
Operations.prototype.minus = function(a, b) {
    return a + negate(b);
};

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
Operations.prototype.multiply = function(a, b) {
    let neg = false;
    if (a < 0) {
        a = negate(a);
        neg = !neg;
    }
    if (b < 0) {
        b = negate(b);
        neg = !neg;
    }
    let ans = 0;
    while (b !== 0) {
        // 除数与计数器同步倍增，取不越过 b 的最大块
        let add = a;
        let cnt = 1;
        while (cnt + cnt <= b) {
            add += add;
            cnt += cnt;
        }
        ans += add;
        b += negate(cnt);
    }
    return neg ? negate(ans) : ans;
};

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
Operations.prototype.divide = function(a, b) {
    let neg = false;
    if (a < 0) {
        a = negate(a);
        neg = !neg;
    }
    if (b < 0) {
        b = negate(b);
        neg = !neg;
    }
    let ans = 0;
    while (a >= b) {
        let sub = b;
        let cnt = 1;
        while (a >= sub + sub) {
            sub += sub;
            cnt += cnt;
        }
        a += negate(sub);
        ans += cnt;
    }
    // 向零截断：此处按绝对值相除天然向零
    return neg ? negate(ans) : ans;
};

/** 
 * Your Operations object will be instantiated and called as such:
 * var obj = new Operations()
 * var param_1 = obj.minus(a,b)
 * var param_2 = obj.multiply(a,b)
 * var param_3 = obj.divide(a,b)
 */
// @lc code=end

// TEST:
const op = new Operations();
console.log(op.minus(1, 2) === -1);
console.log(op.minus(0, -2147483647) === 2147483647);
console.log(op.minus(-1, 2147483647) === -2147483648);
console.log(op.multiply(3, 4) === 12);
console.log(op.multiply(-1, -2147483647) === 2147483647);
console.log(op.multiply(-100, 21474836) === -2147483600);
console.log(op.multiply(0, 12345) === 0);
console.log(op.divide(5, -2) === -2);
console.log(op.divide(2147483647, -1) === -2147483647);
console.log(op.divide(-2147483648, 1) === -2147483648);
console.log(op.divide(-100, 3) === -33); // 向零截断
console.log(op.divide(7, 7) === 1);
