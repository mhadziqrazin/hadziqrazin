<script lang="ts">
  import IconSocial from "../components/IconSocial.svelte"

  import BsGithub from "svelte-icons-pack/bs/BsGithub"
  import BsLinkedin from "svelte-icons-pack/bs/BsLinkedin"
  import BsInstagram from "svelte-icons-pack/bs/BsInstagram"
  import SiGmail from "svelte-icons-pack/si/SiGmail"

  import { onMount } from "svelte"
  import { fade, fly } from "svelte/transition"

  let animate = false
  onMount(() => {
    animate = true
  })
</script>

<section class="flex flex-col md:w-1/2 gap-4 lg:gap-10 items-center justify-center">
  {#if animate}
    <h1 in:fly={{y:20, duration: 1000}} class="text-4xl lg:text-[4rem] text-dark font-extrabold">
      Hi! <span class="text-primary">:D</span>
    </h1>

    <div class="flex flex-col gap-1 lg:gap-3">
      <!-- NAME -->
      <p in:fade={{duration: 1000, delay: 200}} class="text-lg lg:text-3xl font-medium text-dark/90">
        Mu&centerdot;ham&centerdot;mad <span class="font-bold">Ha&centerdot;dziq</span> Ra&centerdot;zin <span class="text-dark/40">/&apos;h&#593;z&#618;k/</span>
      </p>

      <!-- OTHER NAMES -->
      <p in:fly={{y:-5, duration: 1000, delay: 600}} class="text-[0.65rem] lg:text-sm text-dark/60 font-light">
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

        who&apos;s passionate about
        <span class="text-dark font-semibold">software engineering</span>.
      </p>
    </div>

    <div class="w-1/2 flex self-center justify-around">
      <div in:fly={{x:-10, duration: 1000, delay: 400}}>
        <IconSocial
          social={BsGithub}
          title={"Github"}
          link={"https://github.com/mhadziqrazin"}
        />
      </div>
      <div in:fly={{x:-10, duration: 1000, delay: 550}}>
        <IconSocial
          social={BsLinkedin}
          title={"Linkedin"}
          link={"https://www.linkedin.com/in/mhadziqrazin/"}
        />
      </div>
      <div in:fly={{x:-10, duration: 1000, delay: 700}}>
        <IconSocial
          social={BsInstagram}
          title={"Instagram"}
          link={"https://www.instagram.com/hadziqrazin/"}
        />
      </div>
      <div in:fly={{x:-10, duration: 1000, delay: 950}}>
        <IconSocial
          social={SiGmail}
          title={"Mail"}
          link={"mailto:mhadziqrazin@gmail.com"}
        />
      </div>
    </div>
  {/if}
</section>