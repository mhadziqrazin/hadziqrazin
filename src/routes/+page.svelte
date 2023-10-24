<script lang="ts">
  import About from "$lib/components/sections/About.svelte"
  import Showcase from "$lib/components/sections/Showcase.svelte"
</script>

<svelte:head>
  <title>Hadziq Razin</title>
  <meta property="og:title" content="Muhammad Hadziq Razin's Portfolio" />
  <meta property="og:description" content="Muhammad Hadziq Razin's Portfolio" />
  <meta name="description" content="Muhammad Hadziq Razin's Portfolio" />
  <meta name="keywords" content="muhammad hadziq razin, muhammad, hadziq, razin, hajik, ojin" />
</svelte:head>

<div class="relative flex flex-col items-center pt-[20vh] gap-[20vh]">
  <About />
  <div class="relative w-full h-full py-[calc(50vw*0.0524)] before:bg-dark before:w-full before:h-full before:absolute before:-z-50 before:-skew-y-3 -translate-y-[calc(100vw*0.0524)]">
    <Showcase />
  </div>

  <div class="absolute bottom-0 py-8">
    <p class="text-[0.5rem] lg:text-base font-light text-white/80">
      Created by <span class="font-semibold">Muhammad Hadziq Razin</span> &copy; 2023. All Rights Reserved.
    </p>
  </div>
</div>
