<script lang="ts">
  import Project from "$lib/components/Project.svelte"
  import { onMount } from "svelte"
  import { fade, fly } from "svelte/transition"
  import { projects } from "$lib/constants/projects";

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

  <div class="my-14 flex flex-wrap justify-center gap-10">
    {#each projects as project}
    <div transition:fly={{ x: 500, duration: 2000, delay: 1000 }} >
      <Project {project} />
    </div>
    {/each}
  </div>

</section>