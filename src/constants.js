const DIVIDERS = Buffer.alloc(4);
DIVIDERS.writeUInt16BE(7581);
DIVIDERS.writeUInt16BE(8887, 2);

const DATA = {
  cellVoltage: {
    label: 'Напряжение',
    units: 'В',
    symbol: 'U',
    pos: 0,
    bytes: 2,
  },
  cellCurrent: {
    label: 'Ток',
    units: 'А',
    symbol: 'I',
    pos: 2,
    bytes: 2,
  },
  fuelConsumption: {
    label: 'Расход',
    units: 'мл/мин',
    pos: 4,
    bytes: 2,
  },
  cellTemp: {
    label: 'Температура',
    units: '\u02daC',
    pos: 6,
    bytes: 2,
  },
  reformerTemp: {
    label: 'Температура',
    units: '\u02daC',
    pos: 8,
    bytes: 2,
  },
  burnerTemp: {
    label: 'Температура',
    units: '\u02daC',
    pos: 10,
    bytes: 2,
  },
  reformerAirFlow: {
    label: 'Поток воздуха',
    units: '%',
    pos: 12,
    bytes: 1,
  },
  burnerAirFlow: {
    label: 'Поток воздуха',
    units: '%',
    pos: 13,
    bytes: 1,
  },
  fuel: {
    label: 'Топливо',
    pos: 14,
    bytes: 1,
  },
};

const FUELS = [
  {
    label: 'Водород',
    value: 0,
  },
  {
    label: 'Бутан',
    value: 1,
  },
];

module.exports = {
  DIVIDERS,
  DATA,
  FUELS,
};
