/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var networkDelayTime = function (times, N, K) {
  const nodes = {};
  const unvisited = [];
  for (let val = 1; val <= N; val++) {
    nodes[val] = {
      val,
      next: [],
      time: Infinity
    };
    unvisited.push(nodes[val]);
  }
  times.forEach(([u, v, w]) => {
    nodes[u].next.push([nodes[v], w]);
  });
  nodes[K].time = 0;
  let maxTime = 0;
  do {
    unvisited.sort((a, b) => a.time - b.time);
    const node = unvisited.shift();
    maxTime = node.time;
    node.next.forEach(([next, weight]) => {
      if ((node.time + weight) < next.time) {
        next.time = node.time + weight;
      }
    });
  } while (unvisited.length);
  // if the max time is Infinity it means that node wasn't visited at all from the source
  return maxTime === Infinity ? -1 : maxTime;
};