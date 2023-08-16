<script lang="ts">
  import { onMount } from "svelte";

  let notchLeft = 0,
    notchRight = 0,
    notchTop = 0;

  function handleOrientation() {
    notchLeft = screen.orientation.type == "landscape-primary" ? 1 : 0;
    notchRight = screen.orientation.type == "landscape-secondary" ? 1 : 0;
    notchTop = screen.orientation.type == "portrait-primary" ? 1 : 0;
  }

  onMount(() => {
    screen.orientation.onchange = handleOrientation;
    handleOrientation();
  });
</script>

<svelte:head>
  <meta
    name="viewport"
    content="width=device-width, user-scalable=0, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover"
  />
</svelte:head>

<div
  id="container"
  style="--notch-left: {notchLeft}; --notch-right: {notchRight}; --notch-top: {notchTop};"
>
  <div id="content">

    <slot />
  </div>
</div>

<style>
  #container {
    /* make fullscreen */
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    /* add margin to account for notch */
    margin-left: calc(env(safe-area-inset-left) * var(--notch-left));
    margin-right: calc(env(safe-area-inset-right) * var(--notch-right));
    margin-top: calc(env(safe-area-inset-top) * var(--notch-top));
  }

  #content {
    /* fill container */
    position: absolute;
    width: 100%;
    height: 100%;

    /* temporary */
    background: #234;
  }

  /* import the monaco font */
  @font-face {
    font-family: "Poltawski Nowy";
    font-style: normal;
    font-weight: normal;
    src: url("/fonts/PoltawskiNowy.ttf") format("truetype");
  }

  :global(*) {
    font-family: "Poltawski Nowy";
    color: white;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  :global(html, body) {
    background: white;
  }

  /* glowing neon effect */
:global(.neon) {
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

:global(.neon:before) {
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

:global(.neon:after) {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: 10px;
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