const { DIVIDERS, DATA } = require('../constants');

module.exports = function parser(buf) {
  if (!buf.includes(DIVIDERS, 0)) throw new Error('Recieved data is invalid');
  buf = buf.slice(4);
  parsedData = {};
  let i = 0;
  for (let key in DATA) {
    parsedData[key] = buf[`readUInt${DATA[key].bytes > 1 ? '16BE' : 8}`](i);
    i += DATA[key].bytes;
  }
  return parsedData;
};
