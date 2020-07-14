const { writable, derived } = require('svelte/store');
const { DATA } = require('./constants');

const data = writable([]);

pointsArr = [];

const points = derived(
  data,
  ($data, set) => {
    pointsArr.push({
      x: $data.cellVoltage,
      y: $data.cellCurrent,
    });
    set(pointsArr.sort((p1, p2) => p1.x - p2.x));
  },
  []
);

module.exports = {
  data,
  points,
};
