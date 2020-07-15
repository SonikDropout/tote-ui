const { writable, derived } = require('svelte/store');
const { DATA } = require('./constants');
const { ipcRenderer } = require('electron');

const data = writable(ipcRenderer.sendSync('initialDataRequest'));

ipcRenderer.on('serialData', (e, d) => data.set(d));

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
