<script>
  import Chart from 'chart.js';
  import zoom from 'chartjs-plugin-zoom';
  import Button from '../atoms/Button';
  import { onMount } from 'svelte';
  import { points } from '../stores';
  import config from './chart.config';
  export let switchPage, chart;

  onMount(() => {
    chart = new Chart(
      document.getElementById('chart').getContext('2d'),
      config
    );
    chart.options.onClick = chart.resetZoom();
    chart.data.datasets[0].data = $points;
  });

  function startDrawing() {
    // pass
  }
</script>

<div class="layout">
  <header>Вольт-амперная характеристика</header>
  <main>
    <canvas width="800" height="440" id="chart" />
  </main>
  <footer>
    <Button on:click={() => switchPage('dash')}>Назад</Button>
  </footer>
</div>

<style>
  main {
    padding: 0 48px;
  }
  #chart {
    margin: auto;
  }
</style>
