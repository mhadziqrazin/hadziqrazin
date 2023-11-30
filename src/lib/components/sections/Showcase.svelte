<script lang="ts">
  import Projects from "./Projects.svelte"

  const titles = ["Projects", "Works", "Miscellaneous"]
  let selected = 0
</script>


<section class="flex flex-col items-center py-[min(15vh,20rem)]">
  <h1 class="text-4xl lg:text-5xl font-semibold text-light">
    {titles[selected]}
  </h1>
  <div class="flex flex-col items-center justify-center lg:items-stretch lg:flex-row py-10 lg:py-20">
    <!-- NAVBAR -->
    <div class="flex lg:flex-col gap-8 items-end lg:border-r-2 border-light/70 px-4">
      {#each titles as item, i}
        <button
          on:click={() => selected = i}
          class:active={selected === i}
          class="text-light/30 hover:text-light transition-colors duration-200 font-medium  text-sm sm:text-base lg:text-xl"
        >
          {item}
        </button>
      {/each}
    </div>

    <!-- CONTENT -->
    <div class="mt-20 lg:mt-0">
      <Projects />
    </div>
  </div>
</section>

<style>
  .active {
    color: #FF8C32;
  }
</style>