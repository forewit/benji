<script lang="ts">
  import Fireworks from "$lib/components/Fireworks.svelte";
  import Typewriter from "$lib/components/Typewriter.svelte";

  let typewriter1: Typewriter;
  let fireworks1: Fireworks;

  let block1 = `Hey there 👋,

Send me a text so I know you saw this!

Talk to ya soon 🎉,

Marc`;

  async function runTypewriter() {
    fireworks1.launch(
      1,
      { x: 30, y: 30, offsetX: 20, offsetY: 80, size: 20 },
      { x: 70, y: 40, offsetX: -20, offsetY: 80, delay: -0.25, size: 20 },
      { x: 50, y: 20, offsetX: 0, offsetY: 100, delay: -0.4, size: 40 }
    );

    await typewriter1.type();
    console.log("finished 🏁");
  }
</script>

<Fireworks bind:this={fireworks1} />
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
