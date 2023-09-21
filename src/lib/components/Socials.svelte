<script lang="ts">
  import IconSocial from "$lib/components/IconSocial.svelte"
  import BsGithub from "svelte-icons-pack/bs/BsGithub"
  import BsLinkedin from "svelte-icons-pack/bs/BsLinkedin"
  import BsInstagram from "svelte-icons-pack/bs/BsInstagram"
  import SiGmail from "svelte-icons-pack/si/SiGmail"
  import { fly } from "svelte/transition"

</script>

<div class="w-1/2 flex self-center justify-around">
  <div in:fly={{x:-10, duration: 1000, delay: 400}}>
    <IconSocial
      social={BsGithub}
      title={"Github"}
      link={"https://github.com/mhadziqrazin"}
    />
  </div>
  <div in:fly={{x:-10, duration: 1000, delay: 500}}>
    <IconSocial
      social={BsLinkedin}
      title={"Linkedin"}
      link={"https://www.linkedin.com/in/mhadziqrazin/"}
    />
  </div>
  <div in:fly={{x:-10, duration: 1000, delay: 600}}>
    <IconSocial
      social={BsInstagram}
      title={"Instagram"}
      link={"https://www.instagram.com/hadziqrazin/"}
    />
  </div>
  <div in:fly={{x:-10, duration: 1000, delay: 700}}>
    <IconSocial
      social={SiGmail}
      title={"Mail"}
      link={"mailto:mhadziqrazin@gmail.com"}
    />
  </div>
</div>