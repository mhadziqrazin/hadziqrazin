<script lang="ts">
  import Project from "$lib/components/Project.svelte"
  import type { Project as ProjectType } from "$lib/types/project"
  import { fade, fly } from "svelte/transition"
  import Icon from 'svelte-icons-pack/Icon.svelte'
  import HiOutlineChevronDoubleDown from "svelte-icons-pack/hi/HiOutlineChevronDoubleDown"
  import HiOutlineChevronDoubleUp from "svelte-icons-pack/hi/HiOutlineChevronDoubleUp"
  import { trackClick } from "$lib/utils/tracker"
  import { ClickCategory } from "$lib/types/event"

  export let data: ProjectType[]
  export let title: string
  export let subtitle: string

  let more: boolean = false
  $: numDisp = (more) ? data.length : 3
  $: toShow = data.slice(0, numDisp)

  function toggleView() {
    more = !more
    if (more) {
      trackClick({
        category: ClickCategory.SHOWMORE,
        label: title
      })
    } else {
      trackClick({
        category: ClickCategory.SHOWLESS,
        label: title
      })
    }
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

  {#if data.length > 3}
    {#if !more}
      <button on:click={toggleView} class="flex gap-1 items-center text-dark opacity-40 animate-bounce">
        show more <Icon src={HiOutlineChevronDoubleDown} />
      </button>
    {:else}
      <button on:click={toggleView} class="flex gap-1 items-center text-dark opacity-40 animate-bounce">
        show less <Icon src={HiOutlineChevronDoubleUp} />
      </button>
    {/if}
  {/if}
</section>