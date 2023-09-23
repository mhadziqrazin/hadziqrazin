<script lang="ts">
  import { onMount } from "svelte"
  import About from "$lib/components/sections/About.svelte"

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
  <section class={`${animate ? 'opacity-100' : 'opacity-0'} screen-height flex flex-col md:w-1/2 gap-4 lg:gap-10 items-center justify-center`}>
    <About />
  </section>
{/key}
