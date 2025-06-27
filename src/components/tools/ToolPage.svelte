<script>
  import { onMount } from "svelte";
  import { Link, useParams } from "svelte-routing";
  import ReturnCalc from "./return-calc/ReturnCalc.svelte";
  import RRRCalc from "./rrr-calc/RRRCalc.svelte";
  import { tools } from "../Overview.svelte";

  let toolId;
  let toolName;

  onMount(() => {
    const params = useParams();
    toolId = params.toolId;
    toolName = tools.find((tool) => tool.id.toString() === toolId)?.name || "Unknown Tool";
  });

  const renderToolContent = () => {
    switch (toolId) {
      case "1":
        return ReturnCalc; // Corrected here
      case "2":
        return RRRCalc; // Corrected here
      default:
        return "Tool not found";
    }
  };
</script>

<style>
  .container {
    padding: 16px;
  }
</style>

<div class="container">
  <h1>{toolName}</h1>
  <div>{renderToolContent()}</div>
  <Link to="/" class="back-button">Back to Tools</Link>
</div>
