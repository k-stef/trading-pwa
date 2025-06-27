<script>
  export let tool;
  export let onClick;
</script>

<style>
  .tile {
    aspect-ratio: 1/1;
    padding: 16px;
    text-align: center;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--secondary-main);
    color: var(--text-primary);
  }
  .tile:hover {
    background-color: #444;
  }
</style>

<div class="tile" on:click={onClick}>
  <h2>{tool.name}</h2>
</div>
