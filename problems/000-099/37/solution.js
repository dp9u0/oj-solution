/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    solveSudokuInner(board, new position());
};

const BOARD_SIZE = 81;
const BOARD_LENGTH = 9;
const BOARD_AREA_LENGTH = 3;
const BOARD_AREA_SIZE = 9;

function position() {
    this.index = 0;
    this.indexX = 0;
    this.indexY = 0;
    this.hasEmptyPoisition = true;
    this.hasSuggestChars = true;
    this.suggestChars = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
};

/**
 * @param {character[][]} board board to solve
 * @param {position} prePosition previcos position filled in
 * @return {boolean} solve success or not
 */
var solveSudokuInner = function(board, prePosition) {
    let emptyPisition = findNextEmptyPisition(board, prePosition);
    if (!emptyPisition.hasEmptyPoisition) {
        return true;
    }
    if (!emptyPisition.hasSuggestChars) {
        return false;
    }
    for (var toFill in emptyPisition.suggestChars) {
        if (emptyPisition.suggestChars[toFill]) {
            // DEBUG:
            board[emptyPisition.indexX][emptyPisition.indexY] = toFill;
            // board[emptyPisition.indexX] = replaceCharAt(board[emptyPisition.indexX], emptyPisition.indexY, emptyPisition.suggestChars[toFill]);
            if (solveSudokuInner(board, emptyPisition)) {
                return true;
            }
        }
    }
    board[emptyPisition.indexX][emptyPisition.indexY] = '.';
    // DEBUG:
    // board[emptyPisition.indexX] = replaceCharAt(board[emptyPisition.indexX], emptyPisition.indexY, '.');
    return false;
};


/**
 * @param {character[][]} board
 * @param {position} prePosition previcos position filled in
 * @return {position} enpty position
 */
var findNextEmptyPisition = function(board, prePosition) {
    let emptyPisition = new position();
    for (var index = prePosition.index; index < BOARD_SIZE; index++) {
        let indexX = ~~(index / BOARD_LENGTH);
        let indexY = ~~(index % BOARD_LENGTH);
        if (board[indexX][indexY] === '.') {
            emptyPisition.index = index;
            emptyPisition.indexX = indexX;
            emptyPisition.indexY = indexY;
            setSuggestChars(board, emptyPisition);
            return emptyPisition;
        }
    }
    emptyPisition.hasEmptyPoisition = false;
    return emptyPisition;
};

/**
 * @param {character[][]} board
 * @param {position} position
 */
var setSuggestChars = function(board, position) {
    let indexX = position.indexX;
    let indexY = position.indexY;
    for (var index = 0; index < BOARD_LENGTH; index++) {
        if (board[index][indexY] !== '.') {
            position.suggestChars[board[index][indexY]] = '';
        }
        if (board[indexX][index] !== '.') {
            position.suggestChars[board[indexX][index]] = '';
        }
        let areaX = ~~(indexX / BOARD_AREA_LENGTH);
        let areaY = ~~(indexY / BOARD_AREA_LENGTH);
        let posX = areaX * 3 + ~~(index / BOARD_AREA_LENGTH);
        let posY = areaY * 3 + ~~(index % BOARD_AREA_LENGTH);
        if (board[posX][posY] !== '.') {
            position.suggestChars[board[posX][posY]] = '';
        }
    }
};

// TEST:

var replaceCharAt = function(s, n, c) {
    return s.substr(0, n) + c + s.substr(n + 1, s.length - 1 - n);
};

// board = ["..9748...", "7........", ".2.1.9...", "..7...24.", ".64.1.59.", ".98...3..", "...8.3.2.", "........6", "...2759.."];
// solveSudoku(board);
// console.log(board);

board = [".....7..9", ".4..812..", "...9...1.", "..53...72", "293....5.", ".....53..", "8...23...", "7...5..4.", "531.7...."];
solveSudoku(board);
console.log(board);