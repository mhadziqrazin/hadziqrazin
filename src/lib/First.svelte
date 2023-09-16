<script lang="ts">
  import IconSocial from "./components/IconSocial.svelte"

  import BsGithub from "svelte-icons-pack/bs/BsGithub"
  import BsLinkedin from "svelte-icons-pack/bs/BsLinkedin"
  import BsInstagram from "svelte-icons-pack/bs/BsInstagram"
  import SiGmail from "svelte-icons-pack/si/SiGmail"
</script>

<div class="flex flex-col gap-6 items-center">
  <h1 class="absolute -translate-y-[120%] text-5xl sm:text-[5rem] text-dark font-extrabold">
    Hi! <span class="text-primary">:D</span>
  </h1>
  <div class="flex flex-col gap-1">
    <h3 class="text-lg sm:text-2xl text-center text-dark/80 font-normal">
      <span class="font-light">I am</span> Muhammad <span class="font-bold text-secondary">Hadziq</span> Razin
    </h3>
    <p class="text-[0.65rem] sm:text-sm text-center text-dark/50 font-light">
      Other names: Hajik, Hajiq, Haziq, Hazik, Ojin, wait what.
    </p>
  </div>
  <div class="w-full flex gap-1 justify-around">
    <IconSocial
      social={BsGithub}
      title={"Github"}
      link={"https://github.com/mhadziqrazin"}
    />
    <IconSocial
      social={BsLinkedin}
      title={"Linkedin"}
      link={"https://www.linkedin.com/in/mhadziqrazin/"}
    />
    <IconSocial
      social={BsInstagram}
      title={"Instagram"}
      link={"https://www.instagram.com/hadziqrazin/"}
    />
    <IconSocial
      social={SiGmail}
      title={"Mail"}
      link={"mailto:mhadziqrazin@gmail.com"}
    />
  </div>
</div>