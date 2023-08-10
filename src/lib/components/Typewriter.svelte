<!-- a component for displaying text in a typed animation -->

<script lang="ts">
  import { onMount } from "svelte";

  export let text: string = "";
  export let startDelay: number = 1000;
  export let minDelay: number = 30;
  export let maxDelay: number = 200;
  export let blinkDelay: number = 500;
  export let disableCursor: boolean = false;

  let callback: () => any = () => {};
  let displayedText: string = "";
  let cursor = {
    text: "| ",
    isVisible: true,
    isBlinking: true,
  };

  export const start = (onComplete?: () => any) => {
    index = 0;
    displayedText = "";
    cursor.isBlinking = true;
    clearTimeout(timeoutID);
    timeoutID = setTimeout(typeNext, startDelay);
    if (onComplete) callback = onComplete;
  };

  function updateCursor() {
    if (disableCursor) cursor.text = " ";
    else if (!cursor.isBlinking) cursor.text = "| ";
    else cursor.text = cursor.text == " " ? "| " : " ";
    setTimeout(updateCursor, blinkDelay);
  }

  function randBetween(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let timeoutID: number;
  let index = 0;
  function typeNext() {
    if (index >= text.length) {
      cursor.isBlinking = true;
      callback();
      return;
    } else if (index == 0) {
      cursor.isBlinking = false;
    }

    let char = text[index];
    let delay = randBetween(minDelay, maxDelay);
    if (text[index + 1] == " ") delay *= 2;

    displayedText += char;
    index++;
    timeoutID = setTimeout(typeNext, delay);
  }

  onMount(() => {
    updateCursor();
  });
</script>

<p id="content">{displayedText}{cursor.text}</p>

<style>
  #content {
    white-space: pre-wrap;
  }
</style>
