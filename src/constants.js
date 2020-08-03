const PORT = {
  name:
    process.platform === 'linux' && process.arch === 'arm'
      ? '/dev/ttyS0'
      : 'COM5',
  baudRate: 230400,
};

const DIVIDERS = Buffer.alloc(4);
DIVIDERS.writeUInt16BE(7581);
DIVIDERS.writeUInt16BE(8887, 2);

const DATA = {
  cellVoltage: {
    label: 'Напряжение',
    units: 'мВ',
    symbol: 'U',

    bytes: 2,
  },
  cellCurrent: {
    label: 'Ток',
    units: 'мА',
    symbol: 'I',

    bytes: 2,
  },
  fuelConsumption: {
    label: 'Расход топлива',
    units: 'мл/мин',

    bytes: 2,
  },
  cellTemp: {
    label: 'Температура ячейки',
    units: '\u02daC',

    bytes: 2,
  },
  riformerTemp: {
    label: 'Температура',
    units: '\u02daC',

    bytes: 2,
  },
  burnerTemp: {
    label: 'Температура',
    units: '\u02daC',

    bytes: 2,
  },
  setCellTemp: {
    label: 'Установка температуры ячейки',
    units: '\u02daC',
    bytes: 2,
  },
  setRiformerTemp: {
    label: 'Установка температуры риформера',
    units: '\u02daC',
    bytes: 2,
  },
  setBurnerTemp: {
    label: 'Установка температуры дожигателя',
    units: '\u02daC',
    bytes: 2,
  },
  riformerAirFlow: {
    label: 'Поток воздуха',
    units: '%',

    bytes: 1,
  },
  burnerAirFlow: {
    label: 'Поток воздуха',
    units: '%',

    bytes: 1,
  },
  fuel: {
    label: 'Топливо',

    bytes: 1,
  },
  cellLoad: {
    label: 'Мощность нагревателя ячейки',
    units: '%',

    bytes: 1,
  },
  riformerLoad: {
    label: 'Мощность нагревателя риформера',
    units: '%',

    bytes: 1,
  },
  burnerLoad: {
    label: 'Мощность нагревателя дожигателя',
    units: '%',

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
  setCellTemp: (v) => [20, (v / 10) | 0],
};

const CONSTRAINTS = {
  cellTemp: [0, 800],
};

module.exports = {
  PORT,
  DIVIDERS,
  DATA,
  FUELS,
  COMMANDS,
  CONSTRAINTS,
};
