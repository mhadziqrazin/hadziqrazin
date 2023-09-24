<script lang="ts">
  import { onMount } from "svelte"
  import About from "$lib/components/sections/About.svelte"
  import Projects from "$lib/components/sections/Projects.svelte"

  let animate = false
  onMount(() => {
    animate = true
  })
</script>

<svelte:head>
  <title>Hadziq Razin</title>
  <meta property="og:title" content="Muhammad Hadziq Razin's Portfolio | Home Page" />
  <meta property="og:description" content="Muhammad Hadziq Razin's Portfolio | Home Page" />
  <meta name="description" content="Muhammad Hadziq Razin's Portfolio | Home Page" />
  <meta name="keywords" content="muhammad hadziq razin, muhammad, hadziq, razin, hajik, ojin" />
</svelte:head>

{#key animate}
  <div class={`${animate ? 'opacity-100' : 'opacity-0'} relative flex flex-col items-center`}>
    <About />
    <Projects />
  </div>
{/key}
