<script>
  export let group;
  export let value = group.elements[0].value;
</script>

<div class="radio-group">
  {#each group.elements as element}
    <label>
      <input
        class="hidden"
        type="radio"
        name={group.name}
        on:change
        bind:group={value}
        value={element.value}
        disabled={element.disabled} />
      <span class="label">
        {@html element.label}
      </span>
    </label>
  {/each}
</div>

<style>
  .radio-group {
    position: relative;
  }
  input:checked + .label::after {
    background-color: var(--corporate-blue);
  }
  .label {
    position: relative;
    display: block;
    height: 3.2rem;
    line-height: 3.2rem;
    font-weight: 500;
    white-space: nowrap;
    border-radius: 1.6rem;
  }
  .label::before,
  .label::after {
    content: '';
    display: inline-block;
    width: 2.4rem;
    height: 2.4rem;
    box-sizing: border-box;
    border-radius: 50%;
    margin-right: 1rem;
  }
  .label::after {
    position: absolute;
    left: 0.4rem;
    top: 0.4rem;
    width: 1.6rem;
    height: 1.6rem;
  }
  .label::before {
    border: .2rem solid var(--corporate-grey);
  }
</style>
