<script lang="ts">
  import Typewriter from "$lib/components/Typewriter.svelte";

  let typewriter1: Typewriter;

  let block1 = `Dear Benji (or whoever is reading 😊),

if you are seeing this, please shoot me (Marc) a text!

Talk to ya soon :)`;

  async function begin() {
    await typewriter1.start();
    console.log("finished");
  }

  function reset() {
    typewriter1.reset();
  }
</script>

<Typewriter bind:this={typewriter1} text={block1} />

<button on:click={begin}>Begin</button>
<button on:click={reset}>Reset</button>
