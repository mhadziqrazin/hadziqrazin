<script lang="ts">
  import { fly, fade } from "svelte/transition"
  import Socials from "../Socials.svelte"
  import { onMount } from "svelte"

  let section: HTMLElement
  let y: number
  
  let animate = false
  onMount(() => {
    animate = true
  })

  function scrollDown() {
    window.scrollTo({top: section.offsetHeight, behavior: "smooth"})
  }
</script>

<svelte:window bind:scrollY={y} />

{#key animate}
  <section bind:this={section} class={`${animate ? 'opacity-100' : 'opacity-0'} container relative mx-auto px-4 md:w-1/2 flex flex-col justify-center items-center gap-4 lg:gap-10`}>
    <h1 in:fly={{y:20, duration: 1000}} class="flex text-4xl lg:text-[4rem] lg:leading-[4.5rem] text-dark font-extrabold">
      Hi!&nbsp;<span class="text-primary">:D</span>
    </h1>
    
    <div class="flex flex-col gap-1 lg:gap-3">
      <!-- NAME -->
      <p in:fade={{duration: 1000, delay: 200}} class="text-lg lg:text-3xl font-medium text-dark/90">
        Mu&centerdot;ham&centerdot;mad <span class="font-bold">Ha&centerdot;dziq</span> Ra&centerdot;zin <span class="text-dark/40">/'h&#593;z&#618;k/</span>
      </p>
    
      <!-- OTHER NAMES -->
      <p in:fly={{y:-5, duration: 1000, delay: 400}} class="text-[0.65rem] lg:text-sm text-dark/60 font-light">
        Other names: Hajik, Hajiq, Haziq, Hazik, Ojin, wait what.
      </p>
    
      <!-- DESCRIPTION -->
      <p in:fade={{duration: 1000, delay: 200}} class="text-base/7 lg:text-2xl/9 font-medium text-dark/80">
    
        &bullet;an undergraduate
    
        <a href="https://cs.ui.ac.id" target="_blank" class="underline decoration-[1.5px] md:decoration-[2.2px]">
          computer science
        </a>
    
        student at the
    
        <a href="https://ui.ac.id" target="_blank" class="underline decoration-[1.5px] md:decoration-[2.2px]">
          University of Indonesia</a>,
    
        who's passionate about
        <span class="text-dark font-semibold">software engineering</span>.
      </p>
    </div>
    
    <!-- SOCIAL LINKS -->
    <Socials />
  </section>
{/key}
