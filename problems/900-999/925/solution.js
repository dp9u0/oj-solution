/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  let nameIndex = typedIndex = 0;
  while (nameIndex < name.length) {
    let nameCount = typedCount = 0;
    let letter = name[nameIndex];
    nameCount = 1;
    nameIndex++;
    while (name[nameIndex] === letter) {
      nameCount++;
      nameIndex++;
    }
    typedCount = 0;
    while (typedIndex < typed.length && typed[typedIndex] === letter) {
      typedCount++;
      typedIndex++;
    }
    if (nameCount > typedCount) {
      return false;
    }
  }
  return nameIndex === name.length && typedIndex === typed.length;
};