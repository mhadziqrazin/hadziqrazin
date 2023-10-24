<script lang="ts">
  import Projects from "./Projects.svelte"

  const titles = ["Projects", "Works", "Miscellaneous"]
  let selected = 0
</script>


<section class="flex flex-col items-center py-20">
  <h1 class="text-4xl lg:text-5xl font-semibold text-light">
    {titles[selected]}
  </h1>
  <div class="flex flex-col flex-grow items-center sm:items-stretch sm:flex-row gap-[4vh] py-[8vh] items-left">
    <!-- NAVBAR -->
    <div class="flex sm:flex-col gap-8 items-end sm:border-r-2 border-light/70 px-8">
      {#each titles as item, i}
        <button
          on:click={() => selected = i}
          class:active={selected === i}
          class="text-light/70 font-medium"
        >
          {item}
        </button>
      {/each}
    </div>

    <!-- CONTENT -->
    <div class="sm:pr-8">
      <Projects />
    </div>
  </div>
</section>

<style>
  .active {
    --tw-text-opacity: 1;
    color: rgb(232 69 69 / var(--tw-text-opacity));
  }
</style>