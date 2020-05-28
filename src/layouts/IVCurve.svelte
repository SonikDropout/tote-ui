<script>
  import Chart from 'chart.js';
  import zoom from 'chartjs-plugin-zoom';
  import Button from '../atoms/Button';
  import { onMount } from 'svelte';
  import { points } from '../stores';
  import config from './chart.config';
  import SaveButton from '../organisms/SaveButton'
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

  function clearChart() {

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
    <Button on:click={clearChart}>Сброс</Button>
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
