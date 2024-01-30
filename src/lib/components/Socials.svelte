<script lang="ts">
  import IconSocial from "$lib/components/IconSocial.svelte"
  import BsGithub from "svelte-icons-pack/bs/BsGithub"
  import BsLinkedin from "svelte-icons-pack/bs/BsLinkedin"
  import BsInstagram from "svelte-icons-pack/bs/BsInstagram"
  import SiGmail from "svelte-icons-pack/si/SiGmail"
  import BsFileEarmarkPdf from "svelte-icons-pack/bs/BsFileEarmarkPdf"
  import { fly } from "svelte/transition"
</script>

<div class="w-1/2 flex self-center justify-between lg:justify-around">
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
  <button in:fly={{x:-10, duration: 1000, delay: 700}}>
    <IconSocial
      social={BsFileEarmarkPdf}
      title={"CV"}
      link={"https://drive.google.com/file/d/1vm9iwxlbu43dMWlZfR5PsPxJGDSJeoPY/view?usp=sharing"}
    />
  </button>
  <div in:fly={{x:-10, duration: 1000, delay: 800}}>
    <IconSocial
      social={SiGmail}
      title={"Mail"}
      link={"https://mail.google.com/mail/u/0/?fs=1&to=mhadziqrazin@gmail.com&su=Let's%20Get%20to%20Know&tf=cm"}
    />
  </div>
</div>
