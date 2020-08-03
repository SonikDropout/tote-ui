<script>
  import {formatTime} from '../utils/time';
  let elapsed = 0;
  setInterval(() => elapsed++, 1000);
</script>

<div>{formatTime(elapsed)}</div>

<style>
div {
  font-family: 'Digital-7 Mono', monospace;
  font-size: 8rem;
  text-align: center;
}
</style>