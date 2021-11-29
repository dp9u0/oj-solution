/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  if (duration === 0) return 0;
  let prevTime = 0, totalTime = 0;
  timeSeries.forEach(time => {
    totalTime += prevTime > time ? (duration + time - prevTime) : duration;
    prevTime = time + duration;
  });
  return totalTime;
};


// TEST:
let timeSeries, duration, result;
timeSeries = [1, 4];
duration = 2;
result = findPoisonedDuration(timeSeries, duration);
console.log({ timeSeries, duration, result })

timeSeries = [1, 2];
duration = 2;
result = findPoisonedDuration(timeSeries, duration);
console.log({ timeSeries, duration, result })