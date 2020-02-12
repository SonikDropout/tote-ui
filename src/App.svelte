<script>
  import IVCurve from "./layouts/IVCurve";
  import Dash from "./layouts/Dash";
  let page;
  function switchPage(p) {
    page = p;
  }
</script>

<style>
  div {
    transition: 0.3s ease-in-out;
    display: flex;
    width: 200vw;
  }
  .IVC {
    transform: translateX(100vh);
  }
</style>

<div class={page}>
  <Dash {switchPage} />
  <IVCurve {switchPage}/>
</div>
