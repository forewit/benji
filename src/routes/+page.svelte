<script lang="ts">
  import { onMount } from "svelte";
import Article  from "$lib/components/Article.svelte"

  
  const words = ["awesome", "cool", "sweet", "fun", "🎉"];
  let wordIndex = 0;

  onMount(() => {
    setInterval(() => {
      wordIndex = (wordIndex + 1) % words.length;
    }, 500);
  });
</script>

<svelte:head>
  <title>Benji is {words[wordIndex]}</title>
</svelte:head>

<Article markdownURL="/markdown/letter.md"/>