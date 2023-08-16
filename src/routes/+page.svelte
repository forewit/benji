<script lang="ts">
  import Fireworks from "$lib/components/Fireworks.svelte";
  import Typewriter from "$lib/components/Typewriter.svelte";
  import { onMount } from "svelte";

  let typewriter1: Typewriter;
  let fireworks1: Fireworks;

  let block1 = `Hey there 👋,

Send me a text so I know you saw this!

Talk to ya soon 🎉,

Marc`;

  async function runTypewriter() {
    fireworks1.launch(
      -1,
      { color: "lightgreen", x: 50, y: 40, initialX: 45, initialY: 100, size: 300 },
      { color: "red", x: 50, y: 40, initialX: 50, initialY: 100, delay: 0.25 },
      { color: "yellow", x: 50, y: 40, initialX: 55, initialY: 100, delay: 0.5, size: 400 },
    );
    await typewriter1.type();
    console.log("finished 🏁");
  }

  onMount(()=>{
    
  })
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
