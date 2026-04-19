/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
    if (coordinates.length === 2) return true;
    const calcK = (p1, p2) => {
        if (p1[0] === p2[0]) return null;
        return (p1[1] - p2[1]) / (p1[0] - p2[0]);
    }
    let first = coordinates[0];
    let k = (calcK(coordinates[1], first));
    for (let index = 2; index < coordinates.length; index++) {
        const point = coordinates[index];
        if (k !== calcK(point, first)) { return false; }
    }
    return true;
};


// TEST:
console.log(checkStraightLine([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]]))
console.log(checkStraightLine([[1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7]]))
console.log(checkStraightLine([[0, 0], [0, 1], [0, -1]]))
console.log(checkStraightLine([[0, 0], [0, 5], [5, 0], [1337, 0], [0, 1337]]))