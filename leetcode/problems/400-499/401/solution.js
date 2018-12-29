/**
 * @param [number] num
 * @return [string[]]
 */
const hour = [
  ["0"],
  ["1", "2", "4", "8"],
  ["3", "5", "6", "9", "10"],
  ["7", "11"]
];
const minute = [
  ["00"],
  ["01", "02", "04", "08", "16", "32"],
  ["03", "05", "06", "09", "10", "12", "17", "18", "20", "24", "33", "34", "36", "40", "48"],
  ["07", "11", "13", "14", "19", "21", "22", "25", "26", "28", "35", "37", "38", "41", "42", "44", "49", "50", "52", "56"],
  ["15", "23", "27", "29", "30", "39", "43", "45", "46", "51", "53", "54", "57", "58"],
  ["31", "47", "55", "59"]
];
var readBinaryWatch = function (num) {
  let ret = [];
  for (let i = 0; i <= 3 && i <= num; i++) {
    if (num - i <= 5) {
      for (let str1 of hour[i]) {
        for (let str2 of minute[num - i]) {
          ret.push(str1 + ":" + str2);
        }
      }
    }
  }
  return ret;
}