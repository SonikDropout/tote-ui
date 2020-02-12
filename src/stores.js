const { writable } = require('svelte/store');

const data = writable([]);

module.exports = {
  data,
};
