/*
 * @lc app=leetcode id=324 lang=javascript
 *
 * [324] Wiggle Sort II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    // 复制原数组
    const sorted = [...nums].sort((a, b) => a - b);
    const n = nums.length;
    
    // 找到中间点，分成前半部分和后半部分
    const mid = Math.floor((n + 1) / 2);
    
    // 前半部分（较小的一半）
    const smaller = sorted.slice(0, mid);
    // 后半部分（较大的一半）
    const larger = sorted.slice(mid);
    
    // 逆序放置元素，避免连续重复值
    let smallerIndex = smaller.length - 1;
    let largerIndex = larger.length - 1;
    
    // 交替放置，较大部分放在奇数位置，较小部分放在偶数位置
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            // 偶数位置放较小部分
            nums[i] = smaller[smallerIndex--];
        } else {
            // 奇数位置放较大部分
            nums[i] = larger[largerIndex--];
        }
    }
};

/**
 * 进阶解法 O(n)时间复杂度，但使用O(n)空间
 * 使用快速选择找到中位数，并进行三向切分
 */
var wiggleSortOptimal = function(nums) {
    const n = nums.length;
    
    // 1. 找到中位数
    const median = findKthLargest(nums, Math.floor((n + 1) / 2));
    
    // 2. 使用虚拟索引进行映射
    const mapIndex = (i) => {
        return (2 * i + 1) % (n | 1);
    };
    
    // 3. 三向切分 (荷兰国旗问题)
    let i = 0, j = 0, k = n - 1;
    while (j <= k) {
        if (nums[mapIndex(j)] > median) {
            // 大于中位数的元素放左边
            swap(nums, mapIndex(i), mapIndex(j));
            i++;
            j++;
        } else if (nums[mapIndex(j)] < median) {
            // 小于中位数的元素放右边
            swap(nums, mapIndex(j), mapIndex(k));
            k--;
        } else {
            // 等于中位数的元素放中间
            j++;
        }
    }
};

// 辅助函数: 交换数组中两个元素
function swap(nums, i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

// 辅助函数: 快速选择算法找到第k大的元素
function findKthLargest(nums, k) {
    const n = nums.length;
    let left = 0, right = n - 1;
    
    // 目标是找到第k小的元素
    k = n - k;
    
    while (left < right) {
        const pivotIndex = partition(nums, left, right);
        
        if (pivotIndex === k) {
            return nums[pivotIndex];
        } else if (pivotIndex < k) {
            left = pivotIndex + 1;
        } else {
            right = pivotIndex - 1;
        }
    }
    
    return nums[left];
}

// 辅助函数: 分区函数
function partition(nums, left, right) {
    // 选择随机pivot以避免最坏情况
    const randomIndex = Math.floor(Math.random() * (right - left + 1)) + left;
    swap(nums, randomIndex, right);
    
    const pivot = nums[right];
    let i = left;
    
    for (let j = left; j < right; j++) {
        if (nums[j] <= pivot) {
            swap(nums, i, j);
            i++;
        }
    }
    
    swap(nums, i, right);
    return i;
}

// @lc code=end

// TEST：
const test = [1, 5, 1, 1, 6, 4];
console.log(wiggleSort(test));
console.log(wiggleSortOptimal(test));
console.log(test);  
