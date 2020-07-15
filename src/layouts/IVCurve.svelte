<script>
  import Chart from 'chart.js';
  import zoom from 'chartjs-plugin-zoom';
  import Button from '../atoms/Button';
  import { onMount } from 'svelte';
  import { data } from '../stores';
  import config from './chart.config';
  import SaveButton from '../organisms/SaveButton';
  import { ipcRenderer } from 'electron';
  export let switchPage, chart;

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
</script>

<div class="layout">
  <header>Вольт-амперная характеристика</header>
  <main>
    <canvas height="130" id="chart" />
  </main>
  <footer>
    <Button on:click={() => switchPage('dash')}>Назад</Button>
    <SaveButton style="margin-left: auto; margin-right: 1.6rem;" />
  </footer>
</div>

<style>
  main {
    padding: 0 48px;
  }
  #chart {
    margin: auto;
  }
  footer {
    display: flex;
    align-items: center;
  }
</style>
