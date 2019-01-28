/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  if (image[sr][sc] === newColor) return image;
  fill(image, sr, sc, image[sr][sc], newColor);
  return image;
};

function fill(image, sr, sc, color, newColor) {
  if (sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length || image[sr][sc] !== color) return;
  image[sr][sc] = newColor;
  fill(image, sr + 1, sc, color, newColor);
  fill(image, sr - 1, sc, color, newColor);
  fill(image, sr, sc + 1, color, newColor);
  fill(image, sr, sc - 1, color, newColor);
}