<script lang="ts">
  import Projects from "./Projects.svelte"

  const titles = ["Projects", "Works", "Miscellaneous"]
  let selected = 0
</script>


<section class="flex flex-col items-center py-20">
  <h1 class="text-4xl lg:text-5xl font-semibold text-light">
    {titles[selected]}
  </h1>
  <div class="flex flex-col items-center md:items-stretch md:flex-row py-10 md:py-20 items-left">
    <!-- NAVBAR -->
    <div class="flex md:flex-col gap-10 items-end md:border-r-2 border-light/70 px-8">
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
    <div class="mt-20 md:mt-0">
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