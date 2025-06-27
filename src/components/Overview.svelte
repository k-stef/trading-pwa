<script>
  import { onMount } from "svelte";
  import { navigate } from "svelte-routing";
  import Tile from "./Tile.svelte";

  export let tools = [
    { id: 1, name: "Return Calculator" },
    { id: 2, name: "RRR Calculator" },
    { id: 3, name: "Tool 3" },
  ];
</script>

<style>
  .container {
    padding: 16px;
  }
  .title {
    font-size: 2rem;
    margin-bottom: 16px;
  }
</style>

<div class="container">
  <h1 class="title">Trading Tools</h1>
  <div class="grid">
    {#each tools as tool}
      <div class="grid-item" on:click={() => navigate(`/tool/${tool.id}`)}>
        <Tile {tool} />
      </div>
    {/each}
  </div>
</div>
