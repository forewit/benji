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
      {
        color: "lightgreen",
        x: 50,
        y: 40,
        initialX: 45,
        initialY: 100,
        size: 300,
      },
      { color: "red", x: 50, y: 40, initialX: 50, initialY: 100, delay: 0.25 },
      {
        color: "yellow",
        x: 50,
        y: 40,
        initialX: 55,
        initialY: 100,
        delay: 0.5,
        size: 400,
      }
    );
    await typewriter1.type();
    console.log("finished 🏁");
  }

  onMount(() => {});
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

  /* glowing neon effect */
  .neon {
    padding: 0.6em 2em;
    border: none;
    outline: none;
    color: rgb(255, 255, 255);
    position: relative;
    z-index: 0;
    border-radius: 10px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  .neon::before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    -webkit-filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing-neon 20s linear infinite;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  .neon::after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 10px;
    background:#234;
  }
  .neon:hover::after {
    background: #345;
  }
  .neon:active::after {
    background: #456;
  }

  @keyframes glowing-neon {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
</style>
