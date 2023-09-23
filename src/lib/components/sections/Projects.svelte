<script lang="ts">
  import Project from "../Project.svelte";
  import toDo from "$lib/constants/projects/toDo";
</script>


<div class="flex flex-col items-center">
  <h1 class="title text-5xl font-semibold">
    Projects
  </h1>
  <div class="flex flex-wrap gap-x-20 justify-center">
    <Project project={toDo}/>
    <Project project={toDo}/>
  </div>
</div>