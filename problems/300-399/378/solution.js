/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let n = matrix.length;
    let left = matrix[0][0];
    let right = matrix[n - 1][n - 1];
    
    // Check how many numbers in the matrix are less than or equal to mid
    const countLessOrEqual = (mid) => {
        let count = 0;
        let row = n - 1;
        let col = 0;
        
        while (row >= 0 && col < n) {
            if (matrix[row][col] <= mid) {
                // If current element is <= mid, then all elements above it in this column are also <= mid
                count += row + 1;
                col++; // Move right
            } else {
                // Otherwise move up
                row--;
            }
        }
        return count;
    };
    
    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);
        
        if (countLessOrEqual(mid) < k) {
            left = mid + 1; // 1st to count elements are <= mid, so we need a larger value
        } else {
            right = mid; // We have enough elements, but mid might not be in the matrix. Shrink upper bound.
        }
    }
    
    return left;
};

module.exports = kthSmallest;

// TEST:
console.log(kthSmallest([[1,5,9],[10,11,13],[12,13,15]], 8)); // 13
console.log(kthSmallest([[-5]], 1)); // -5
