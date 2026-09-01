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
    // Just find min time.
    let time = Infinity;
    let visit = -1;
    unvisited.forEach((element, index) => {
      if (element.time < time) {
        visit = index;
        time = element.time;
      }
    });
    const node = unvisited.splice(visit, 1)[0];
    maxTime = node.time;
    node.next.forEach(([next, weight]) => {
      if ((node.time + weight) < next.time) {
        next.time = node.time + weight;
      }
    });
  } while (unvisited.length && maxTime !== Infinity);
  return maxTime === Infinity ? -1 : maxTime;
};


networkDelayTime([
  [2, 1, 1],
  [2, 3, 1],
  [3, 4, 1]
], 4, 2);