<script lang="ts">
  import { fade } from "svelte/transition"
  import typeScript from "$lib/constants/techs/typeScript";
  
</script>

<svelte:head>
  <title>Projects | Hadziq Razin</title>
  <meta property="og:title" content="Muhammad Hadziq Razin's Portfolio | Projects Page">
  <meta property="og:description" content="Muhammad Hadziq Razin's Portfolio | Projects Page">
  <meta name="description" content="Muhammad Hadziq Razin's Portfolio | Projects Page">
  <meta name="keywords" content="muhammad hadziq razin, muhammad, hadziq, razin, hajik, ojin">
</svelte:head>

<section in:fade={{duration: 300}} class="screen-height flex flex-col gap-10 justify-center items-center">
  <h1 class="title text-5xl font-semibold w-full">
    Projects
  </h1>
  <div>
    <img src={typeScript.img} alt="TypeScript" class="w-[100px] aspect-square">
    <a href={typeScript.url} target="_blank">
      {typeScript.name}
    </a>
  </div>
</section>
