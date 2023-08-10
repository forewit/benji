<!-- a component for displaying text in a typed animation -->

<script lang="ts">
  import { onMount } from "svelte";

  export let text: string = "";
  export let pause: number = 200;
  export let minDelay: number = 30;
  export let maxDelay: number = 200;

  let displayedText: string = "";

  let index = 0;
  function type() {
    if (index >= text.length) return;
    displayedText += text[index];
    index++;
    setTimeout(
      type,
      Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay
    );
  }

  onMount(() => {
    setTimeout(type, pause);
  });
</script>

<p>{displayedText}</p>
