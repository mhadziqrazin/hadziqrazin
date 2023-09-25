<script lang="ts">
  import { fly, fade } from "svelte/transition"
  import Socials from "../Socials.svelte"
  import Icon from "svelte-icons-pack"
  import AiOutlineArrowDown from "svelte-icons-pack/ai/AiOutlineArrowDown"

  import image from "$lib/assets/Hadziq Razin.jpg"
    import { flip } from "svelte/animate"

  let section: HTMLElement
  let y: number
  
  $: animate = y < section?.offsetHeight

  function scrollDown() {
    window.scrollTo({top: section.offsetHeight, behavior: "smooth"})
  }

  let profile = false
  function toggle() {
    profile = !profile
  }
</script>

<svelte:window bind:scrollY={y} />

{#if profile}
<section class="min-h-screen flex flex-col justify-center">
  <button in:fly={{y: 20, duration: 500}} on:click={toggle} class="rounded-full border-dark border-4">
    <img
    src={image}
    alt="Muhammad Hadziq Razin"
    class="max-w-[60vw] md:max-w-[30vw] aspect-square rounded-full border-primary border-4"
    />
  </button>
</section>

{:else}

{#key animate}
  <section bind:this={section} class={`${animate ? 'opacity-100' : 'opacity-0'} container relative mx-auto px-4 min-h-screen md:w-1/2 flex flex-col justify-center items-center gap-4 lg:gap-10`}>
    <h1 in:fly={{y:20, duration: 1000}} class="text-4xl lg:text-[4rem] lg:leading-[4.5rem] text-dark font-extrabold">
      Hi! <button on:click={toggle} class="text-primary animate-pulse hover:-translate-y-1 transition-all duration-300">:D</button>
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
      <p in:fade={{duration: 1000, delay: 200}} class="text-base lg:text-2xl font-medium text-dark/80">
    
        &bullet;an undergraduate
    
        <a href="https://cs.ui.ac.id" target="_blank" class="underline decoration-2 md:decoration-[3px]">
          computer science
        </a>
    
        student at the
    
        <a href="https://ui.ac.id" target="_blank" class="underline decoration-2 md:decoration-[3px]">
          University of Indonesia</a>,
    
        who's passionate about
        <span class="text-dark font-semibold">software engineering</span>.
      </p>
    </div>
    
    <!-- SOCIAL LINKS -->
    <Socials />

    <button on:click={scrollDown} class="animate-bounce absolute bottom-5 md:bottom-20 opacity-70">
      <Icon src={AiOutlineArrowDown} size={20} />
    </button>
  </section>
{/key}
{/if}