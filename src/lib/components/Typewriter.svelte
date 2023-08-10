<!-- a component for displaying text in a typed animation -->

<script lang="ts">
  import { onMount } from "svelte";

  export let text: string = "";
  export let minDelay: number = 30;
  export let maxDelay: number = 200;
  export let blinkDelay: number = 500;
  export let disableCursor: boolean = false;

  // states
  let isTyping = false;
  let isBlinking = true;
  let cursor = " ";
  let timeoutID: number;

  export const start = async () => {
    // reset then start typing
    reset();
    isBlinking = false;
    isTyping = true;

    // loop through each char to type
    let delay: number;
    for (let i = 0; i < text.length; i++) {
      // delay for a bit
      delay = randBetween(minDelay, maxDelay);
      if (text[i] == " ") delay *= 3; // extend delay if the char is a space
      await new Promise((res) => timeoutID = setTimeout(res, delay));

      // confirm we are still typing then add the char
      if (isTyping) displayedText += text[i];
      else return;
    }

    // finished typing
    isBlinking = true;
    return Promise.resolve()
  };

  export const reset = () => {
    clearTimeout(timeoutID);
    displayedText = "";
    isBlinking = true;
    isTyping = false;
  };

  function randBetween(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let displayedText: string = "";

  function updateCursor() {
    if (disableCursor) cursor = " ";
    else if (!isBlinking) cursor = "| ";
    else cursor = cursor == " " ? "| " : " ";
  }

  onMount(() => {
    setInterval(updateCursor, blinkDelay);
  });
</script>

<p>{displayedText}{cursor}</p>

<style>
  p {
    white-space: pre-wrap;
  }
</style>
