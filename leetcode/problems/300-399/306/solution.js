/*
 * @lc app=leetcode id=306 lang=javascript
 *
 * [306] Additive Number
 */

// @lc code=start
/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
    const n = num.length;
    
    // 检查数字是否有效（不能有前导零，除非数字本身就是0）
    const isValid = (str) => {
        if (str.length > 1 && str[0] === '0') return false;
        return true;
    };
    
    // 将字符串转换为BigInt以处理大数
    const getNum = (str) => BigInt(str);
    
    // 尝试不同的第一个和第二个数字的组合
    for (let i = 1; i <= Math.floor(n/2); i++) {
        for (let j = 1; Math.max(i, j) <= n-i-j; j++) {
            // 获取第一个数和第二个数
            const first = num.slice(0, i);
            const second = num.slice(i, i+j);
            
            // 检查数字是否有效
            if (!isValid(first) || !isValid(second)) continue;
            
            let num1 = getNum(first);
            let num2 = getNum(second);
            let start = i + j;
            
            // 验证剩余的序列
            while (start < n) {
                // 计算下一个数
                let sum = num1 + num2;
                let sumStr = sum.toString();
                
                // 检查剩余的字符串是否以这个和开头
                if (!num.startsWith(sumStr, start)) break;
                
                // 移动到下一组数字
                start += sumStr.length;
                num1 = num2;
                num2 = sum;
                
                // 如果已经到达字符串末尾，说明找到了有效序列
                if (start === n) return true;
            }
        }
    }
    
    return false;
};
// @lc code=end
// TEST:
// TEST:
console.log(isAdditiveNumber("112358")); // true
console.log(isAdditiveNumber("199100199")); // true
console.log(isAdditiveNumber("123")); // true
console.log(isAdditiveNumber("1023")); // false
console.log(isAdditiveNumber("101")); // false
console.log(isAdditiveNumber("1203")); // false
console.log(isAdditiveNumber("000")); // true
console.log(isAdditiveNumber("011235")); // false
console.log(isAdditiveNumber("123581321")); // true
console.log(isAdditiveNumber("198019823962")); // true

