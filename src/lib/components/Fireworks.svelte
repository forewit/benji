<script lang="ts">
  const DEFAULT_SIZE = 200;
  const DEFAULT_DELAY = 0;

  interface Firework {
    color: string;
    x: number; // .firework { left % }
    y: number; // .firework { top % }
    initialX: number; // .firework { --x vmin }
    initialY: number; // .firework { --initialY vmin }
    size?: number; // .firework { --finalSize vmin }
    delay?: number; // .firework { --delay s }
  }

  let activeFireworks: Firework[] = [];
  let iterations = "infinite";

  export function launch(repeat: number, ...fireworks: Firework[]) {
    iterations = repeat < 0 ? "infinite" : repeat.toString();
    activeFireworks = fireworks;
  }
</script>

{#key activeFireworks}
  {#each activeFireworks as firework}
    <div
      class="firework"
      style="
        --color:{firework.color};
        --x:{firework.x}%;
        --y:{firework.y}%;
        --initialX:{firework.initialX}%;
        --initialY:{firework.initialY}%;
        --size:{firework.size || DEFAULT_SIZE}px;
        --delay:{firework.delay || DEFAULT_DELAY}s;
        --iterations:{iterations}"
    />
  {/each}
{/key}

<style>
  /* https://alvaromontoro.com/blog/68002/creating-a-firework-effect-with-css */
  @keyframes firework {
    0% {
      left: var(--initialX);
      top: var(--initialY);
      width: 0.5vmin;
      opacity: 1;
    }
    50% {
      width: 0.5vmin;
      opacity: 1;
    }
    100% {
      width: var(--size);
      opacity: 0;
    }
  }

  .firework {
    --color: yellow;
    --x: 50%; /*explosion position*/
    --y: 50%;
    --initialX: 50%; /*launch offset*/
    --initialY: 50%;
    --size: 200px;
    --delay: 0s;
    --iterations: infinite;
  }

  .firework,
  .firework::before,
  .firework::after {
    content: "";
    position: absolute;
    left: var(--x);
    top: var(--y);
    transform: translate(-50%, -50%);
    width: 0.5vmin;
    aspect-ratio: 1;
    opacity: 0;
    background: radial-gradient(circle, var(--color) 0.2vmin, #0000 0) 50% 00%,
      radial-gradient(circle, var(--color) 0.3vmin, #0000 0) 00% 50%,
      radial-gradient(circle, var(--color) 0.5vmin, #0000 0) 50% 99%,
      radial-gradient(circle, var(--color) 0.2vmin, #0000 0) 99% 50%,
      radial-gradient(circle, var(--color) 0.3vmin, #0000 0) 80% 90%,
      radial-gradient(circle, var(--color) 0.5vmin, #0000 0) 95% 90%,
      radial-gradient(circle, var(--color) 0.5vmin, #0000 0) 10% 60%,
      radial-gradient(circle, var(--color) 0.2vmin, #0000 0) 31% 80%,
      radial-gradient(circle, var(--color) 0.3vmin, #0000 0) 80% 10%,
      radial-gradient(circle, var(--color) 0.2vmin, #0000 0) 90% 23%,
      radial-gradient(circle, var(--color) 0.3vmin, #0000 0) 45% 20%,
      radial-gradient(circle, var(--color) 0.5vmin, #0000 0) 13% 24%;
    background-size: 0.5vmin 0.5vmin; /*locks background size even as element gets bigger*/
    background-repeat: no-repeat;
    animation: firework 2s var(--iterations);
    animation-delay: var(--delay);
  }

  .firework::before {
    transform: translate(-50%, -50%) rotate(25deg) !important;
  }

  .firework::after {
    transform: translate(-50%, -50%) rotate(-37deg) !important;
  }
</style>
