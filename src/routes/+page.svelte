<script lang="ts">
  import Fireworks from "$lib/components/Fireworks.svelte";
  import Typewriter from "$lib/components/Typewriter.svelte";

  let typewriter1: Typewriter;

  let block1 = `Hey there 👋,

Send me a text so I know you saw this!

Talk to ya soon 🎉,

Marc`;

  async function runTypewriter() {
    await typewriter1.type();
    console.log("finished 🏁");
  }
</script>
<Fireworks/>
<Typewriter bind:this={typewriter1} text={block1} />

<div id="button-container">
  <button class="neon" on:click={runTypewriter}>Go</button>
</div>

<style>
  #button-container {
    position: absolute;
    bottom: 20%;
    width: 100%;
    display: flex;
    justify-content: center;
  }
</style>
