<script lang="ts">
  import Project from "$lib/components/Project.svelte"
  import type { Project as ProjectType } from "$lib/types/project"
  import { fade, fly } from "svelte/transition"

  export let data: ProjectType[]
  export let title: string
  export let subtitle: string

  let more: boolean = false
  $: numDisp = (more) ? data.length : 3
  $: toShow = data.slice(0, numDisp)

  function toggleView() {
    more = !more
  }
</script>

<svelte:head>
  <title>{title} | Hadziq Razin</title>
</svelte:head>

<section in:fade={{duration: 300}} class="max-w-[1060px] flex flex-col items-center">
  <h1 in:fly={{ y: -20, duration: 1000 }} class="text-[4rem] font-semibold text-dark">
    {title}
  </h1>
  <h3 in:fly={{ y: -20, duration: 1000, delay: 300 }} class="text-sm text-dark/60">
    {subtitle}
  </h3>

  <div class="my-14 flex flex-wrap justify-center gap-10 px-10">
    {#each toShow as project}
      <div in:fade={{ duration: 300 }}>
        <Project {project} />
      </div>
    {/each}
  </div>

  {#if toShow.length > 3}
    {#if !more}
      <button on:click={toggleView} class="text-dark/40 animate-bounce">
        View more
      </button>
    {:else}
      <button on:click={toggleView} class="text-dark/40 animate-bounce">
        View less
      </button>
    {/if}
  {/if}
</section>