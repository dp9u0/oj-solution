/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
    return command.replace(/\(al\)/g, "al").replace(/\(\)/g, "o")
};


// TEST:
console.log(interpret("G()()()()(al)"))
console.log(interpret("G()(al)"))
console.log(interpret("(al)G(al)()()G"))