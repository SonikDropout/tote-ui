const PORT = {
  name: process.platform === 'linux' && process.arch === 'arm' ? '/dev/ttyS0' : 'COM5',
  baudRate: 230400,
};

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
    label: 'Расход топлива',
    units: 'мл/мин',
    pos: 4,
    bytes: 2,
  },
  cellTemp: {
    label: 'Температура ячейки',
    units: '\u02daC',
    pos: 6,
    bytes: 2,
  },
  riformerTemp: {
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
  riformerAirFlow: {
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
  cellLoad: {
    label: 'Загрузка нагревателя ячейки',
    units: '%',
    pos: 15,
    bytes: 1,
  },
  riformerLoad: {
    label: 'Загрузка нагревателя риформера',
    units: '%',
    pos: 16,
    bytes: 1,
  },
  burnerLoad: {
    label: 'Загрузка нагревателя дожигателя',
    units: '%',
    pos: 17,
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

const COMMANDS = {
  setFuelType: (v) => [4, v],
  setRiformerFlow: (v) => [8, v],
  setBurnerFlow: (v) => [12, v],
  getIV: () => [16, 0],
  setCellTemp: (v) => [20, (v * 10) | 0],
};

const CONSTRAINTS = {
  cellTemp: [0, 100],
};

module.exports = {
  PORT,
  DIVIDERS,
  DATA,
  FUELS,
  COMMANDS,
  CONSTRAINTS,
};
