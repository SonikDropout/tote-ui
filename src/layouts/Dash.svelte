<script>
  import RangeInput from '../molecules/RangeInput';
  import Button from '../atoms/Button';
  import RadioGroup from '../molecules/RadioGroup';
  export let switchPage;
  import { FUELS, DATA } from '../constants';
  import { data } from '../stores';
  const fuels = FUELS.reduce(
    (a, f) => {
      a.elements.push(f);
      return a;
    },
    { name: 'fuels', elements: [] }
  );

  function changeAirFlow(e) {
    // pass
  }

  function changeCellTemp(e) {
    // pass
  }
</script>

<div class="layout">
  <header>Параметры работы стенда</header>
  <main>

    <figure>
      <img src="../static/icons/fuel.svg" alt="" />
      <figcaption>Топливо</figcaption>
    </figure>
    <div class="params">
      <RadioGroup group={fuels} type="horizontal" />
      <span class="label">
        {DATA.fuelConsumption.label}, {DATA.fuelConsumption.units}
      </span>
      <strong>{$data[DATA.fuelConsumption.pos]}</strong>
    </div>

    <figure>
      <img src="../static/icons/reformer.svg" alt="" />
      <figcaption>Риформер</figcaption>
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
      <img src="../static/icons/burner.svg" alt="" />
      <figcaption>Дожигатель</figcaption>
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
  <footer></footer>
</div>

<style>
  main {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 24px;
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 24px;
    padding: 0 48px;
    font-size: 2.4rem;
    align-items: end;
  }
  figure {
    grid-column-start: 1;
    grid-column-end: span 3;
    margin: 0;
    text-align: center;
  }
  .params {
    grid-column-start: 4;
    grid-column-end: span 5;
  }
  .cell {
    grid-area: 1 / 9 / 4 / 13;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }
  figcaption {
    font-size: 2.4rem;
    font-family: 'Oswald', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-transform: uppercase;
  }
  img {
    max-width: 100px;
    max-height: 70px;
  }
</style>
