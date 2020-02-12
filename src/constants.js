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
    label: 'H<sub>2</sup>',
  },
  {
    label: 'C<sub>4</sub>H<sub>10</sub> + С<sub>3</sub>H<sub>8</sub>',
  },
];

module.exports = {
  DATA, 
  FUELS
}
