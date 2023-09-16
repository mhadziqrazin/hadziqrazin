<script lang="ts">
  import IconSocial from "./components/IconSocial.svelte"

  import BsGithub from "svelte-icons-pack/bs/BsGithub"
  import BsLinkedin from "svelte-icons-pack/bs/BsLinkedin"
  import BsInstagram from "svelte-icons-pack/bs/BsInstagram"
  import SiGmail from "svelte-icons-pack/si/SiGmail"

  import {onMount} from "svelte"
    import { fade, fly } from "svelte/transition"

  let animate = false
  onMount(() => {
    animate = true
  })
</script>

<div class="flex flex-col gap-6 items-center">
  {#if animate}
    <h1 in:fly={{y:-10, duration: 1000}} class="absolute -translate-y-[120%] text-5xl sm:text-[5rem] text-dark font-extrabold">
      Hi! <span class="text-primary">:D</span>
    </h1>
    <div class="flex flex-col gap-1">
      <h3 in:fly={{y:-10, duration: 1000, delay: 200}} class="text-lg sm:text-2xl text-center text-dark/80 font-normal">
        <span class="font-light">I am</span> Muhammad <span class="font-bold text-secondary">Hadziq</span> Razin
      </h3>
      <p in:fly={{y:-10, duration: 1000, delay: 400}} class="text-[0.65rem] sm:text-sm text-center text-dark/50 font-light">
        Other names: Hajik, Hajiq, Haziq, Hazik, Ojin, wait what.
      </p>
    </div>
    <div class="w-full flex gap-1 justify-around">
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
</div>