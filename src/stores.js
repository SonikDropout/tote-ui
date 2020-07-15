const { writable, derived } = require('svelte/store');
const { ipcRenderer } = require('electron');

const data = writable(ipcRenderer.sendSync('initialDataRequest'));

ipcRenderer.on('serialData', (e, d) => data.set(d));

module.exports = {
  data,
};
