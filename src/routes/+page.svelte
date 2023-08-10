<script lang="ts">
  import Typewriter from "$lib/components/Typewriter.svelte";

  let typewriter1: Typewriter;

  async function getGoing() {
    await typewriter1.start();
    console.log("finished");
  }
</script>

<Typewriter bind:this={typewriter1} text="Here is some thrilling content!" />

<button on:click={getGoing}>Start</button>
<button on:click={typewriter1.reset}>Reset</button>
