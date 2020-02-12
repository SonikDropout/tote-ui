<script>
  import Chart from "../organisms/Chart/index";
  import RangeInput from "../molecules/RangeInput";
  import Button from "../atoms/Button";
  import RadioGroup from "../molecules/RadioGroup";
  export let switchPage;
  import { FUELS, DATA } from "../constants";
  import { data } from "../stores";
  const fuels = FUELS.reduce(
    (a, f) => {
      a.elements.push(f);
      return a;
    },
    { name: "fuels", elements: [] }
  );

  function changeAirFlow(e) {
    // pass
  }

  function changeCellTemp(e) {
    // pass
  }
</script>

<style>
  main {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 24px;
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 24px;
    padding: 0 48px;
  }
  figure {
    grid-column-start: 1;
    grid-column-end: span 3;
  }
  .params {
    grid-column-start: 4;
    grid-column-end: span 5;
  }
  .cell {
    grid-area: 1 / 9 / 4 / 13;
  }
  figcaption {
    font-size: 2.4rem;
    font-family: 'Oswald', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-transform: uppercase;
  }
  img {
    max-width: 100%;
    height: 50%;
  }
</style>

<div class="layout">
  <header>Параметры работы стенда</header>
  <main>

    <figure>
      <figcaption>Топливо</figcaption>
      <img src="../static/icons/fuel.svg" alt="" />
    </figure>
    <div class="params">
      <RadioGroup group={fuels} type="horizontal" />
    </div>

    <figure>
      <figcaption>Риформер</figcaption>
      <img src="../static/icons/reformer.svg" alt="" />
    </figure>
    <div class="params">
      <div class="param">
        <span class="label">
          {DATA.reformerTemp.label}, {DATA.reformerTemp.units}
        </span>
        <strong>{$data[DATA.reformerTemp.pos]}</strong>
      </div>
      <div class="param">
        <span class="label">
          {DATA.reformerAirFlow.label}, {DATA.reformerAirFlow.units}
        </span>
        <RangeInput
          on:change={changeAirFlow}
          value={$data[DATA.reformerAirFlow.pos]} />
      </div>
    </div>

    <figure>
      <figcaption>Дожигатель</figcaption>
      <img src="../static/icons/burner.svg" alt="" />
    </figure>
    <div class="params">
      <div class="param">
        <span class="label">
          {DATA.reformerTemp.label}, {DATA.reformerTemp.units}
        </span>
        <strong>{$data[DATA.reformerTemp.pos]}</strong>
      </div>
      <div class="param">
        <span class="label">
          {DATA.burnerAirFlow.label}, {DATA.burnerAirFlow.units}
        </span>
        <RangeInput
          on:change={changeAirFlow}
          value={$data[DATA.burnerAirFlow.pos]} />
      </div>
    </div>

    <div class="cell">
      <h3>Измерительная ячейка</h3>
      <div id="cellVoltage">
        <span class="label">
          {DATA.cellVoltage.label}, {DATA.cellVoltage.units}
        </span>
        <strong>{$data[DATA.cellVoltage.pos]}</strong>
      </div>
      <div id="cellTemp">
        <span class="label">{DATA.cellTemp.label}, {DATA.cellTemp.units}</span>
        <RangeInput
          on:change={changeCellTemp}
          value={$data[DATA.cellTemp.pos]} />
      </div>
      <Button on:click={() => switchPage('IVC')}>Строить ВАХ</Button>
    </div>
  </main>
</div>
