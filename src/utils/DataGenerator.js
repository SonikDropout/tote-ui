const EventEmitter = require('events');
const { randInt } = require('./numagic');

const generator = new EventEmitter();
let data = Array(10)
  .fill(0)
  .map(() => randInt(800));

function updateData(d) {
  return d.map((v) => v + randInt(-5, 5));
}

setInterval(emitValues, 200);

function emitValues() {
  data = updateData(data);
  generator.emit('data', data);
}

module.exports = generator;