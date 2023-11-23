<script lang="ts">
  import { onMount } from "svelte"
  import { fade } from "svelte/transition"

  let animate = false
  onMount(() => {
    animate = true
  })
</script>

<svelte:head>
  <title>Projects | Hadziq Razin</title>
</svelte:head>

<section in:fade={{duration: 300}} class="flex flex-col items-center">
  <h1 class="text-5xl font-semibold">
    Projects
  </h1>
</section>