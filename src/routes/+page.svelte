<script lang="ts">
  import About from "$lib/components/sections/About.svelte"
  import Showcase from "$lib/components/sections/Showcase.svelte"
  import curve from '$lib/assets/backgrounds/layered-waves-haikei.svg'
</script>

<svelte:head>
  <title>Hadziq Razin</title>
  <meta property="og:title" content="Muhammad Hadziq Razin's Portfolio" />
  <meta property="og:description" content="Muhammad Hadziq Razin's Portfolio" />
  <meta name="description" content="Muhammad Hadziq Razin's Portfolio" />
  <meta name="keywords" content="muhammad hadziq razin, muhammad, hadziq, razin, hajik, ojin" />
</svelte:head>

<div class="relative flex flex-col items-center pt-[20vh]">
  <About />
  <div class="relative bg-dark w-full h-full mt-[20%]">
    <img src={curve} alt="curve section" class="absolute top-0 -translate-y-full w-full">
    <Showcase />
  </div>

  <div class="py-8 bg-dark w-full flex justify-center">
    <p class="text-[0.5rem] lg:text-base font-light text-light/80">
      Created by <span class="font-semibold">Muhammad Hadziq Razin</span> &copy; 2023. All Rights Reserved.
    </p>
  </div>
</div>
