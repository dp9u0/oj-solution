/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function (S) {
  return S
    .split(" ")
    .map(w => {
      if (w.match(/^[aeiouAEIOU]/g)) {
        return w + "ma";
      } else {
        return w.slice(1) + w.charAt(0) + "ma";
      }
    })
    .map((w, i) => {
      return w + "a".repeat(i + 1);
    }).join(" ");
};