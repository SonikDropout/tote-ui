<script>
  import Chart from 'chart.js';
  import zoom from 'chartjs-plugin-zoom';
  import Button from '../atoms/Button';
  import { onMount } from 'svelte';
  import { data } from '../stores';
  import config from './chart.config';
  import SaveButton from '../organisms/SaveButton';
  import Clock from '../organisms/Clock';
  import RangeInput from '../molecules/RangeInput';
  import { ipcRenderer } from 'electron';
  import { DATA, COMMANDS, CONSTRAINTS } from '../constants';
  export let chart;

  const displayedParams = [
      'cellVoltage',
      'cellCurrent',
      'cellTemp',
      'cellLoad',
      'fuelConsumption',
    ],
    initialState = $data;

  let points = [],
    isActive;

  onMount(() => {
    chart = new Chart(
      document.getElementById('chart').getContext('2d'),
      config
    );
    chart.options.onClick = chart.resetZoom;
    chart.data.datasets[0].data = points;
    monitorData();
  });

  function monitorData() {
    data.subscribe(data => {
      if (data.cellCurrent) {
        if (!isActive) startDrawing();
        addPoint({ x: data.cellVoltage, y: data.cellCurrent });
      } else if (isActive) isActive = false;
    });
  }

  function addPoint(p) {
    ipcRenderer.send('logRow', [p.x, p.y]);
    points.push(p);
    chart.update();
  }

  function startDrawing() {
    isActive = true;
    points = [];
    chart.data.datasets[0].data = points;
    ipcRenderer.send('startLog', ['U, B', 'I, A']);
  }

  function getIVC() {
    ipcRenderer.send('serialCommand', COMMANDS.getIV());
  }

  function changeCellTemp(temp) {
    ipcRenderer.send('serialCommand', COMMANDS.setCellTemp(temp));
  }
</script>

<div class="layout">
  <header>Характеристики работы стенда</header>
  <main>
    <div class="params">
      {#each displayedParams as key}
        <div class="param">
          <span class="label">{DATA[key].label}, {DATA[key].units}:</span>
          <strong class="value">{$data[key]}</strong>
        </div>
      {/each}
      <div class="param special">
        <div class="centered-label">Установка температуры:</div>
        <RangeInput
          style="margin:auto"
          defaultValue={initialState.cellTemp}
          step={10}
          range={CONSTRAINTS.cellTemp}
          onChange={changeCellTemp}
          value={$data.cellTemp} />
      </div>
      <div class="param special">
        <div class="centered-label">Время работы стенда:</div>
      <Clock />
      </div>
    </div>
    <div class="chart">
      <canvas id="chart" height="220" />
    </div>
  </main>
  <footer>
    <Button on:click={getIVC} style="margin-left: auto; margin-right: 1.6rem;">
      Снять ВАХ
    </Button>
    <SaveButton />
  </footer>
</div>

<style>
  main {
    padding: 0 24px;
    display: flex;
  }
  .label {
    display: inline-block;
    width: 70%;
    text-align: right;
    margin-right: 1rem;
    font-weight: 300;
  }
  .centered-label {
    width: 100%;
    text-align: center;
    font-weight: lighter;
    margin-bottom: 1.2rem;
  }
  .params {
    width: 36%;
  }
  .param {
    margin: 1.2rem 0;
    font: 2.5rem 'Oswald';
  }
  .param.special {
    margin-top: 6rem;
  }
  .value {
    font-weight: 400;
  }
  .chart {
    flex-grow: 1;
  }
  #chart {
    margin: auto;
  }
  footer {
    display: flex;
    align-items: center;
  }
</style>
