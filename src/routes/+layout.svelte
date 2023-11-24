<script lang="ts">
  import '../app.css'
  import { page } from '$app/stores'
  import { fade } from 'svelte/transition'

  $: path = $page.route.id

  let year = (new Date()).getFullYear()
</script>

<div class="mx-auto overflow-x-clip min-h-screen flex flex-col justify-center">
  {#if path === ('/projects' || '/aaa')}
    <nav in:fade={{duration: 300}} class="py-10">
      <ul class="flex justify-center gap-4 text-dark">
        <a href="/">Home</a>
        <a href="/projects" class:selected={path === '/projects'}>
          Projects
        </a>
        <a href="/works">
          Works
        </a>
      </ul>
    </nav>
  {/if}
  <div class="flex flex-grow justify-center">
    <slot />
  </div>
  <div class="py-8 w-full flex justify-center">
    <p class="text-[0.5rem] lg:text-base font-light text-dark/80">
      Created by <span class="font-semibold">Muhammad Hadziq Razin</span> &copy; {year}. All Rights Reserved.
    </p>
  </div>
</div>

<style>
  .selected {
    color: #E84545;
    font-weight: 600;
  }
</style>
