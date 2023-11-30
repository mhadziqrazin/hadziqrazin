<script lang="ts">
  import Project from "$lib/components/Project.svelte"
  import { fade, fly } from "svelte/transition"
  import { works } from "$lib/constants/works";

  let more: boolean = false
  $: numDisp = (more) ? works.length : 3
  $: worksToShow = works.slice(0, numDisp)

  function toggleView() {
    more = !more
  }
</script>

<svelte:head>
  <title>Works | Hadziq Razin</title>
</svelte:head>

<section in:fade={{duration: 300}} class="max-w-[1060px] flex flex-col items-center">
  <h1 in:fly={{ y: -20, duration: 1000 }} class="text-[4rem] font-semibold text-dark">
    Works
  </h1>
  <h3 in:fly={{ y: -20, duration: 1000, delay: 300 }} class="text-sm text-dark/60">
    Paid or teamed kinda projects
  </h3>

  <div class="my-14 flex flex-wrap justify-center gap-10 px-10">
    {#each worksToShow as project}
      <div in:fade={{ duration: 300   }}>
        <Project {project} />
      </div>
    {/each}
  </div>

  {#if works.length > 3}
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