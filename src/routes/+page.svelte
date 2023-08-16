<script lang="ts">
  import Fireworks from "$lib/components/Fireworks.svelte";
  import Typewriter from "$lib/components/Typewriter.svelte";
  import { onMount } from "svelte";

  let typewriter1: Typewriter;
  let fireworks1: Fireworks;

  let block1 = `Hey there 👋,

Send me a text so I know you saw this!

Talk to you soon 🎉,

Marc`;

  async function runTypewriter() {
    fireworks1.launch(
      -1,
      {
        color: "lightgreen",
        left: 50,
        top: 50,
        initialX: 45,
        initialY: 100,
        size: 30,
      },
      {
        color: "red",
        left: 50,
        top: 50,
        initialX: 50,
        initialY: 100,
        delay: 0.25,
      },
      {
        color: "yellow",
        left: 50,
        top: 40,
        initialX: 55,
        initialY: 100,
        delay: 0.5,
        size: 60,
      }
    );
    await typewriter1.type();
    console.log("finished 🏁");
  }

  onMount(() => {});
</script>

<Fireworks bind:this={fireworks1} />

<div id="text-container">
  <Typewriter bind:this={typewriter1} text={block1} />
</div>

<div id="button-container">
  <button on:click={runTypewriter}>Go</button>
</div>

<style>
  #text-container {
    position: absolute;
    top: 30%;
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
  }
  #button-container {
    position: absolute;
    bottom: 30%;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  button {
    background: #234;
    padding: 10px;
  }
</style>
