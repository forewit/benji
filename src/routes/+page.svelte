<script lang="ts">
  import Typewriter from "$lib/components/Typewriter.svelte";

  let typer: Typewriter;

  function getGoing () {
    typer.start(()=>{
        console.log("Finished!");
    })
  }
</script>

<h1>Hey Benji</h1>
<Typewriter bind:this={typer} text="Here is some thrilling content!"  />
<button on:click={getGoing}>Start!</button>