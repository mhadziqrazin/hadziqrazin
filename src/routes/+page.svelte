<script lang="ts">
  import { onMount } from "svelte"
  import About from "$lib/components/sections/About.svelte"
  import Projects from "$lib/components/sections/Projects.svelte"
</script>

<svelte:head>
  <title>Hadziq Razin</title>
  <meta property="og:title" content="Muhammad Hadziq Razin's Portfolio | Home Page" />
  <meta property="og:description" content="Muhammad Hadziq Razin's Portfolio | Home Page" />
  <meta name="description" content="Muhammad Hadziq Razin's Portfolio | Home Page" />
  <meta name="keywords" content="muhammad hadziq razin, muhammad, hadziq, razin, hajik, ojin" />
</svelte:head>

<div class="relative flex flex-col items-center">
  <About />
  <Projects />

  <div class="absolute bottom-0 py-8">
    <p class="text-[0.5rem] lg:text-base font-light text-dark/80">
      Created by <span class="font-semibold">Muhammad Hadziq Razin</span> &copy; 2023. All Rights Reserved.
    </p>
  </div>
</div>
