<script lang="ts">
  import Project from "../Project.svelte"
  import toDo from "$lib/constants/projects/toDo"
</script>


<section class="flex flex-col">
  <div class="flex flex-wrap px-10 gap-x-10 justify-evenly">
    <Project project={toDo}/>
    <Project project={toDo}/>
    <Project project={toDo}/>
    <Project project={toDo}/>
    <Project project={toDo}/>
    <Project project={toDo}/>
  </div>
</section>
