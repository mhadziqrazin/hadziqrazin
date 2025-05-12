<script lang="ts">
  import '../app.css'
  import { page, navigating } from '$app/stores'
  import { fade, fly } from 'svelte/transition'
  import { SpinLine } from 'svelte-loading-spinners'

  $: path = $page.route.id

  let year = (new Date()).getFullYear()

  page.subscribe(($page) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-GFBFGTQRGQ', {
        page_path: $page.url.pathname,
      });
    }
  });
</script>

<div class="mx-auto overflow-x-clip height-screen flex flex-col justify-center">
  {#if !!$navigating}
    <div in:fly={{y:-20, duration: 1000}} class="absolute top-[85px] left-1/2 -translate-x-1/2 -translate-y-1/2">
      <SpinLine size={35} color={"#2B2E4AE0"} />
    </div>
  {/if}
  {#if path === '/projects' || path === '/works' || path === '/life'}
    <nav in:fade={{duration: 300}} class="py-10">
      <ul class="flex justify-center gap-4 text-dark">
        <a href="/" class="opacity-50 hover:opacity-100 transition-all duration-200">
          Home
        </a>
        <a href="/works" class="opacity-50 hover:opacity-100 transition-all duration-200" class:selected={path === '/works'}>
          Works
        </a>
        <a href="/projects" class="opacity-50 hover:opacity-100 transition-all duration-200" class:selected={path === '/projects'}>
          Projects
        </a>
        <a href="/life" class="opacity-50 hover:opacity-100 transition-all duration-200" class:selected={path === '/life'}>
          Life
        </a>
      </ul>
    </nav>
  {/if}
  <div class="flex flex-grow justify-center">
    <slot />
  </div>
  <div class="py-8 w-full flex flex-col items-center">
    <p class="text-[0.6rem] lg:text-base font-light text-dark/80">
      Created by <span class="font-semibold">Muhammad Hadziq Razin</span> &copy; {year}. All Rights Reserved.
    </p>
    <p class="text-[0.5rem] lg:text-sm font-light text-dark/80">
      Last updated: May 6, 2025
    </p>
  </div>
</div>

<style>
  .selected {
    color: #E84545;
    font-weight: 600;
    opacity: 1;
  }

  .height-screen {
    min-height: 100vh;
    min-height: 100svh;
  }
</style>
