<script lang="ts">
  import Project from "../Project.svelte"
  import toDo from "$lib/constants/projects/toDo"

  const layers = [0, 1, 2, 3, 4, 5]
  let y: number
  let section: HTMLElement
</script>

<svelte:window bind:scrollY={y} />

<section bind:this={section} class="screen-height  w-[100vw] flex flex-col items-center">

  <div class="relative w-[1500px] -translate-x-1/4 md:-translate-x-[200px] lg:translate-x-0 h-full flex justify-center">
    {#each layers as layer}
    <img
      class="absolute "
      style="transform: translateY(-{(Math.max(0, y - section?.offsetTop) * layer) / (layers.length - 1)}px)"
      src="./src/lib/assets/parallax/parallax{layer}.png"
      alt="parallax layer {layer}"
    />
    {/each}
    
    <div class="w-full relative" style="transform: translateY(-{(Math.max(0, y - section?.offsetTop) * 6) / (layers.length - 1)}px)">
      <img
        class="absolute"
        src="./src/lib/assets/parallax/parallax6.png"
        alt="parallax layer 6"
      />
      <div class="absolute translate-y-[1000px] h-[150vh] w-full bg-[#030510] ">
        <div class="absolute flex w-full justify-center bottom-0 py-8">
          <p class="text-[0.5rem] lg:text-base font-light text-light/80">
            Created by <span class="font-semibold">Muhammad Hadziq Razin</span> &copy; 2023. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  </div>


  <!-- <h1 class="title text-5xl font-semibold">
    Projects
  </h1>
  <div class="flex flex-wrap gap-x-20 justify-center">
    <Project project={toDo}/>
    <Project project={toDo}/>
  </div> -->
</section>
