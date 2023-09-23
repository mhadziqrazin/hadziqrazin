<script lang="ts">
  import { fade } from "svelte/transition"
  import toDo from "$lib/constants/projects/toDo";
  import Project from "$lib/components/Project.svelte"
</script>

<svelte:head>
  <title>Projects | Hadziq Razin</title>
  <meta property="og:title" content="Muhammad Hadziq Razin's Portfolio | Projects Page">
  <meta property="og:description" content="Muhammad Hadziq Razin's Portfolio | Projects Page">
  <meta name="description" content="Muhammad Hadziq Razin's Portfolio | Projects Page">
  <meta name="keywords" content="muhammad hadziq razin, muhammad, hadziq, razin, hajik, ojin">
</svelte:head>

<section in:fade={{duration: 300}} class="screen-height flex flex-col gap-10 justify-center items-center">
  <h1 class="title text-5xl font-semibold">
    Projects
  </h1>
  <div class="flex flex-wrap gap-x-20 justify-center">
    <Project project={toDo}/>
    <Project project={toDo}/>
  </div>
</section>
