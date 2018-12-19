/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for (var index = 0; index < 9; index++) {
        if (!validNineChar(
                board[index][0], board[index][1], board[index][2],
                board[index][3], board[index][4], board[index][5],
                board[index][6], board[index][7], board[index][8])) {
            // console.log(`Row ${index}`);
            return false;
        }
        if (!validNineChar(
                board[0][index], board[1][index], board[2][index],
                board[3][index], board[4][index], board[5][index],
                board[6][index], board[7][index], board[8][index])) {
            // console.log(`Column ${index}`);
            return false;
        }

        let areaX = ~~(index / 3);
        let areaY = ~~(index % 3);

        if (!validNineChar(
                board[0 + areaX * 3][0 + areaY * 3], board[0 + areaX * 3][1 + areaY * 3], board[0 + areaX * 3][2 + areaY * 3],
                board[1 + areaX * 3][0 + areaY * 3], board[1 + areaX * 3][1 + areaY * 3], board[1 + areaX * 3][2 + areaY * 3],
                board[2 + areaX * 3][0 + areaY * 3], board[2 + areaX * 3][1 + areaY * 3], board[2 + areaX * 3][2 + areaY * 3])) {
            // console.log(`Area ${areaX} ${areaY}`);
            return false;
        }
    }

    return true;
};

var validNineChar = function() {
    let map = {};
    for (var index = 0; index < arguments.length; index++) {
        var element = arguments[index];
        if (element !== '.' && map[element]) {
            // console.log(arguments);
            // console.log(element);
            return false;
        }
        map[element] = true;
    }
    return true;
};

// TEST:
// console.log(isValidSudoku([".87654321", "2........", "3........", "4........", "5........", "6........", "7........", "8........", "9........"]));
// console.log(isValidSudoku([".........", "......3..", "...18....", "...7.....", "....1.97.", ".........", "...36.1..", ".........", ".......2."]));
// console.log(isValidSudoku(["887654321", "2........", "3........", "4........", "5........", "6........", "7........", "8........", "9........"]));
// console.log(isValidSudoku([".87654321", "2.......1", "3........", "4........", "5........", "6........", "7........", "8........", "9........"]));
// console.log(isValidSudoku([".826543.1", "2........", "3........", "4........", "5........", "6........", "7........", "8........", "9........"]));