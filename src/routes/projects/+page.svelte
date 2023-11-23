<script lang="ts">
  import { onMount } from "svelte"
  import { fade, fly } from "svelte/transition"

  let animate = false
  onMount(() => {
    animate = true
  })
</script>

<svelte:head>
  <title>Projects | Hadziq Razin</title>
</svelte:head>

<section in:fade={{duration: 300}} class="flex flex-col items-center">
  <h1 in:fly={{y:20, duration: 1000}} class="text-[4rem] font-semibold text-dark">
    Projects
  </h1>
</section>