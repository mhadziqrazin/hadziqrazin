<script lang="ts">
  import { fly, fade } from "svelte/transition"
  import Socials from "$lib/components/Socials.svelte"
  import { onMount } from "svelte"

  let animate = false
  onMount(() => {
    animate = true
  })
</script>

<svelte:head>
  <title>Hadziq Razin</title>
  <meta property="og:title" content="Muhammad Hadziq Razin's Portfolio">
  <meta property="og:description" content="Have you smiled today?">
  <meta property="og:image" content="https://lh3.googleusercontent.com/a/ACg8ocL9KRniiuLrmUi2MBHNcN2LMr1kUvzBhpbt-Kkv2pdZdg=s288-c-no">
  <meta property="og:image:secure_url" content="https://lh3.googleusercontent.com/a/ACg8ocL9KRniiuLrmUi2MBHNcN2LMr1kUvzBhpbt-Kkv2pdZdg=s288-c-no">
  <meta name="description" content="Have you smiled today?">
  <meta name="keywords" content="muhammad hadziq razin, muhammad, hadziq, razin, hajik, ojin">
</svelte:head>

{#key animate}
  <section class={`${animate ? 'opacity-100' : 'opacity-0'} container relative mx-auto px-4 md:w-1/2 flex flex-col justify-center items-center gap-4 lg:gap-10`}>
    <h1 in:fly={{y:20, duration: 1000}} class="flex text-xl lg:text-4xl lg:leading-[3.5rem] text-dark/25 font-extrabold">
      Hi!&nbsp;<span>:D</span>
    </h1>
    
    <div class="flex flex-col gap-1 lg:gap-3">
      <!-- NAME -->
      <p in:fade={{duration: 1000, delay: 200}} class="text-lg lg:text-3xl font-medium text-dark/[0.85]">
        Mu&centerdot;ham&centerdot;mad <span class="font-bold text-dark">Ha&centerdot;dziq</span> Ra&centerdot;zin <span class="text-dark/40">/'h&#593;z&#618;k/</span>
      </p>
    
      <!-- OTHER NAMES -->
      <p in:fly={{y:-5, duration: 1000, delay: 400}} class="text-[0.65rem] lg:text-sm text-dark/60 font-light">
        Other names: Hajik, Hajiq, Haziq, Hazik, Ojin, wait what.
      </p>
    
      <!-- DESCRIPTION -->
      <p in:fade={{duration: 1000, delay: 200}} class="text-base/7 lg:text-2xl/9 font-medium text-dark/80">
    
        &bullet;a final year undergraduate
    
        <a href="https://cs.ui.ac.id" target="_blank" class="underline decoration-[1.5px] md:decoration-[2.2px]">
          Computer Science
        </a>
    
        student at the
    
        <a href="https://ui.ac.id" target="_blank" class="underline decoration-[1.5px] md:decoration-[2.2px]">
          University of Indonesia</a>,
    
        who's passionate about
        <span class="text-dark/90 font-semibold">software engineering</span>.<br/>
        &bullet;an
        <span class="text-dark/90 font-semibold">Ex-UX Engineer Intern</span>
        at

        <a href="https://blibli.com" target="_blank" class="underline decoration-[1.5px] md:decoration-[2.2px]">
          Blibli</a>.
      </p>

      <!-- PAGES -->
      <p in:fade={{duration: 1000, delay: 600}} class="text-dark/60 text-xs lg:text-lg">
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
