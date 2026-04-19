/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
    let gMap = {};
    let a = 0;
    let b = 0;
    for (let i = 0; i < secret.length; i++) {
        const s = secret[i];
        const g = guess[i];
        if (s === g) {
            a++;
        } else {
            gMap[g] = (gMap[g] || 0) + 1
        }
    }
    // 判断错误位置的数量(如果 secret 中有两个1,guess 中有两个1 不在位置上 则b 新增 2)
    for (let i = 0; i < secret.length; i++) {
        const s = secret[i];
        const g = guess[i];
        if (gMap[s] && s !== g) {
            b++;
            gMap[s]--;
        }
    }
    return a + "A" + b + "B";
};

/**
// TEST:
console.log(getHint('1807', '7810'));
console.log(getHint('1123', '0111'));
console.log(getHint('1122', '2211'));

*/