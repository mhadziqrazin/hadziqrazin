<script lang="ts">
  import IconSocial from "$lib/components/IconSocial.svelte"

  import BsGithub from "svelte-icons-pack/bs/BsGithub"
  import BsLinkedin from "svelte-icons-pack/bs/BsLinkedin"
  import BsInstagram from "svelte-icons-pack/bs/BsInstagram"
  import SiGmail from "svelte-icons-pack/si/SiGmail"

  import { onMount } from "svelte"
  import { fade, fly } from "svelte/transition"
    import Socials from "$lib/components/Socials.svelte"

  let animate = false
  onMount(() => {
    animate = true
  })
</script>

<svelte:head>
  <title>Hadziq Razin</title>
  <meta property="og:title" content="Muhammad Hadziq Razin's Portfolio | Home Page">
  <meta property="og:description" content="Muhammad Hadziq Razin's Portfolio | Home Page">
  <meta name="description" content="Muhammad Hadziq Razin's Portfolio | Home Page">
  <meta name="keywords" content="muhammad hadziq razin, muhammad, hadziq, razin, hajik, ojin">
</svelte:head>

{#key animate}
  <section class={`${animate ? 'opacity-100' : 'opacity-0'} screen-height flex flex-col md:w-1/2 gap-4 lg:gap-10 items-center justify-center`}>
    <h1 in:fly={{y:20, duration: 1000}} class="text-4xl lg:text-[4rem] text-dark font-extrabold">
      Hi! <span class="text-primary">:D</span>
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

      <!-- PROJECTS -->
      <p in:fade={{duration: 1000, delay: 600}} class="text-dark/60 text-xs lg:text-base">
        See: <a href="/projects" class="w-full underline text-secondary/70 hover:text-secondary/90 transition-all duration-200">Projects</a>
      </p>
    </div>

    <!-- SOCIAL LINKS -->
    <Socials />
  </section>
{/key}