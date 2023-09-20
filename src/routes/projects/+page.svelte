<script lang="ts">
  import { onMount } from "svelte"
  import Icon from "svelte-icons-pack"
  import FaSolidHammer from "svelte-icons-pack/fa/FaSolidHammer"
  import { fade } from "svelte/transition"

  let animate = false
  onMount(() => {
    animate = true
  })
</script>

<svelte:head>
  <title>Projects | Hadziq Razin</title>
  <meta property="og:title" content="Muhammad Hadziq Razin's Portfolio | Projects Page">
  <meta property="og:description" content="Muhammad Hadziq Razin's Portfolio | Projects Page">
  <meta name="description" content="Muhammad Hadziq Razin's Portfolio | Projects Page">
  <meta name="keywords" content="muhammad hadziq razin, muhammad, hadziq, razin, hajik, ojin">
</svelte:head>

<section in:fade={{duration: 300}} class="screen-height flex flex-col gap-2 justify-center items-center">
  <Icon src={FaSolidHammer} size="50" color="#FF8C32"/>
  <h1 class="text-3xl text-center font-semibold">
    Page under development
  </h1>
  <p class="text-xl text-center">
    I'm working on it. I swear.
  </p>
  <a href="/" class="underline">Back</a>
</section>
