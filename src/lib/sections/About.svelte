<script lang="ts">
  import { fly, fade } from "svelte/transition"
  import Socials from "$lib/components/Socials.svelte"
  import { onMount } from "svelte";

  let animate = false
  onMount(() => {
    animate = true
  })
</script>

{#key animate}
  <section class={`${animate ? 'opacity-100' : 'opacity-0'} height-screen container relative mx-auto px-4 max-w-[700px] md:max-w-[800px] flex flex-col justify-center items-center gap-6 sm:gap-10`}>
    <h1 in:fly={{y:20, duration: 1000}} class="flex text-xl sm:text-3xl sm:leading-[3.5rem] text-dark/25 font-extrabold">
      Hi!&nbsp;<span>:D</span>
    </h1>

    <div class="flex flex-col gap-3">
      <div>
        <!-- NAME -->
        <p in:fade={{duration: 1000, delay: 200}} class="text-lg sm:text-4xl font-medium text-dark/[0.85]">
          Mu&centerdot;ham&centerdot;mad <span class="font-bold text-dark">Ha&centerdot;dziq</span> Ra&centerdot;zin <span class="text-dark/40">/'h&#593;z&#618;k/</span>
        </p>
  
        <!-- OTHER NAMES -->
        <p in:fly={{y:-5, duration: 1000, delay: 400}} class="text-[0.65rem] sm:text-lg text-dark/60 font-light">
          Other names: Hajik, Hajiq, Haziq, Hazik, Ojin, wait what.
        </p>
      </div>

      <!-- DESCRIPTION -->
      <div in:fade={{duration: 1000, delay: 200}} class="text-xl/7 sm:text-3xl/10 font-medium text-dark/80 flex flex-col gap-2 sm:gap-4">
        <div class="flex">
          <p>&bullet;</p>
          <p>
            an undergraduate
        
            <a href="https://cs.ui.ac.id" target="_blank" class="underline decoration-[1.5px] sm:decoration-[3px]">
              computer science
            </a>
        
            student at
        
            <a href="https://ui.ac.id" target="_blank" class="underline decoration-[1.5px] sm:decoration-[3px]">
              Universitas Indonesia</a>,
        
            who's passionate about
            <span class="text-dark/90 font-semibold">software engineering</span>.<br/>
          </p>
        </div>
        <div class="flex">
          <p>&bullet;</p>
          <p>
            currently work as a
  
            <span class="text-dark/90 font-semibold">UX Engineer Intern</span>
  
            at
  
            <a href="https://blibli.com" target="_blank" class="underline decoration-[1.5px] sm:decoration-[3px]">
              Blibli</a>.
          </p>
        </div>
      </div>

      <!-- PAGES -->
      <p in:fade={{duration: 1000, delay: 600}} class="text-dark/60 text-sm sm:text-lg">
        See:
        <a href="/works" class="w-full underline text-secondary">
          Works
        </a>
      <span class="font-semibold">&centerdot;</span>
        <a href="/projects" class="w-full underline text-secondary">
          Projects
        </a>
        <span class="font-semibold">&centerdot;</span>
        <a href="/life" class="w-full underline text-secondary">
          Life
        </a>
      </p>
    </div>
    
    <!-- SOCIAL LINKS -->
    <Socials />
  </section>
{/key}

<style>
  .height-screen {
    min-height: 90vh;
    min-height: 90svh;
  }
</style>
