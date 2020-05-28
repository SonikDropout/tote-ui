const DATA = {
  fuel: {
    label: 'Топливо',
    pos: 0,
  },
  fuelConsumption: {
    label: 'Расход',
    units: 'мл/мин',
    pos: 1,
  },
  reformerTemp: {
    label: 'Температура',
    units: '\u02daC',
    pos: 1,
  },
  reformerAirFlow: {
    label: 'Поток воздуха',
    units: '%',
    pos: 1,
  },
  burnerTemp: {
    label: 'Температура',
    units: '\u02daC',
    pos: 1,
  },
  burnerAirFlow: {
    label: 'Поток воздуха',
    units: '%',
    pos: 1,
  },
  cellVoltage: {
    label: 'Напряжение',
    units: 'В',
    symbol: 'U',
    pos: 1,
  },
  cellCurrent: {
    label: 'Ток',
    units: 'А',
    symbol: 'I',
    pos: 1,
  },
  cellTemp: {
    label: 'Температура',
    units: '\u02daC',
    pos: 1,
  },
};

const FUELS = [
  {
    label: 'Водород',
    value: 0,
  },
  {
    label: 'Пропан-бутан',
    value: 1,
  },
];

module.exports = {
  DATA, 
  FUELS,
}
