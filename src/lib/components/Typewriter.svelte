<!-- a component for displaying text in a typed animation -->

<script lang="ts">
  import { onMount } from "svelte";

  export let text: string = "";
  export let pause: number = 2000;
  export let minDelay: number = 30;
  export let maxDelay: number = 300;
  export let blinkDelay: number = 500;

  let isBlinking: boolean = true;
  let displayedText: string = "";

  function randBetween(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let cursor = {
    text: "|",
    isVisible: true,
    isBlinking: true
  }

  function updateCursor() {
    if (!cursor.isVisible) cursor.text = "";
    else if (!cursor.isBlinking) cursor.text = "|";
    else (cursor.text = cursor.text == "" ? "|" : "");
    setTimeout(updateCursor, blinkDelay);
  }

  let index = 0;
  function typeNext() {
    if (index >= text.length) {
      cursor.isBlinking = true;
      cursor.isVisible = true;
      return;
    } else if (index == 0) {
        cursor.isBlinking = false;
        cursor.isVisible = true;
    } 

    let char = text[index];
    let delay = char == " " ? maxDelay : randBetween(minDelay, maxDelay);

    displayedText += char;
    index++;
    setTimeout(typeNext, delay);
  }

  onMount(() => {
    updateCursor();
    setTimeout(typeNext, pause);
  });
</script>

<p>{displayedText}{cursor.text}</p>

<style>
  p::before {
    width: 10px;
    height: 10px;
    background: green;
  }
</style>
