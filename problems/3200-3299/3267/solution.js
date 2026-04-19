/*
 * @lc app=leetcode id=3267 lang=javascript
 *
 * [3267] Count Almost Equal Pairs II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countPairs = function(nums) {
    const n = nums.length;

    const compute = (x) => {
        const s = String(x);
        const d = s.length;
        const digits = s.split('').map(c => c.charCodeAt(0) - 48);
        const s1 = new Set();
        const s12 = new Set();

        if (d >= 2) {
            const toNum = () => {
                let num = 0;
                for (let i = 0; i < d; i++) num = num * 10 + digits[i];
                return num;
            };

            for (let i = 0; i < d; i++) {
                for (let j = i + 1; j < d; j++) {
                    [digits[i], digits[j]] = [digits[j], digits[i]];
                    const v1 = toNum();
                    s1.add(v1);
                    s12.add(v1);
                    for (let k = 0; k < d; k++) {
                        for (let l = k + 1; l < d; l++) {
                            [digits[k], digits[l]] = [digits[l], digits[k]];
                            s12.add(toNum());
                            [digits[k], digits[l]] = [digits[l], digits[k]];
                        }
                    }
                    [digits[i], digits[j]] = [digits[j], digits[i]];
                }
            }
        }

        return { s1, s12 };
    };

    const info = nums.map(compute);

    // Bucket approach: process i=0..n-1, count j<i that are almost equal
    // Conditions: (1) x==y, (2) y∈s12(x), (3) x∈s12(y), (4) s1(x)∩s1(y)≠∅
    const numMap = new Map();   // value → [indices with that value]
    const reachMap = new Map(); // value → [indices j where value ∈ s12(nums[j])]
    const sw1Map = new Map();   // value → [indices j where value ∈ s1(nums[j])]

    let count = 0;
    const flag = new Uint8Array(n);
    const flagged = [];

    const addFlagged = (indices) => {
        if (!indices) return;
        for (let k = 0; k < indices.length; k++) {
            const j = indices[k];
            if (!flag[j]) { flag[j] = 1; flagged.push(j); }
        }
    };

    const addToList = (map, key, val) => {
        let list = map.get(key);
        if (!list) { list = []; map.set(key, list); }
        list.push(val);
    };

    for (let i = 0; i < n; i++) {
        const x = nums[i];

        // Condition 1: nums[j] == nums[i]
        addFlagged(numMap.get(x));

        // Condition 3: nums[i] ∈ s12(nums[j])
        if (flagged.length < i) addFlagged(reachMap.get(x));

        // Condition 2: nums[j] ∈ s12(nums[i])
        if (flagged.length < i) {
            for (const v of info[i].s12) {
                addFlagged(numMap.get(v));
            }
        }

        // Condition 4: s1(nums[i]) ∩ s1(nums[j]) ≠ ∅
        if (flagged.length < i) {
            for (const v of info[i].s1) {
                addFlagged(sw1Map.get(v));
            }
        }

        count += flagged.length;

        for (let k = 0; k < flagged.length; k++) flag[flagged[k]] = 0;
        flagged.length = 0;

        // Update maps
        addToList(numMap, x, i);
        for (const v of info[i].s12) addToList(reachMap, v, i);
        for (const v of info[i].s1) addToList(sw1Map, v, i);
    }

    return count;
};
// @lc code=end

// TEST:
console.log(countPairs([1023,2310,2130,213])); // 4
console.log(countPairs([1,10,100])); // 3
