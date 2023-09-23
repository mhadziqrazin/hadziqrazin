<script lang="ts">
  import Project from "../Project.svelte";
  import toDo from "$lib/constants/projects/toDo";

  let title
  export let y: number
</script>


<div class="flex flex-col items-center">
  <h1 class="title text-5xl font-semibold" bind:this={title}
  style="transform: translate(0,-{((Math.max(y-400, 0) * 1) / (10))}px)"
  >
    Projects
  </h1>
  <div>{title?.offsetTop}</div>
  <div class="flex flex-wrap gap-x-20 justify-center">
    <Project project={toDo}/>
    <Project project={toDo}/>
  </div>
  <div>
    {y}
  </div>
</div>