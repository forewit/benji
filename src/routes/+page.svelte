<script lang="ts">
  import Typewriter from "$lib/components/Typewriter.svelte";

  let typewriter1: Typewriter;

  async function begin() {
    await typewriter1.start();
    console.log("finished");
  }

  function reset() {
    typewriter1.reset();
  }
</script>

<Typewriter bind:this={typewriter1} text="Here is some thrilling content!" />

<button on:click={begin}>Begin</button>
<button on:click={reset}>Reset</button>
