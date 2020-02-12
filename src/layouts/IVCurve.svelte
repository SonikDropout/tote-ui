<script>
  import Chart from "../organisms/Chart/index";
  import Button from "../atoms/Button";
  export let switchPage;

  function startDrawing() {
    // pass
  }
</script>

<style>
  main {
    padding: 0 48px;
  }
  main :global(.chart) {
    width: 100%;
    height: 100%;
  }
</style>

<div class="layout">
  <header>Вольт-амперная характеристика</header>
  <main>
    <Chart xCaption="I, A" yCaption="U, B" />
  </main>
  <footer>
    <Button on:click={() => switchPage('dash')}>Назад</Button>
  </footer>
</div>
