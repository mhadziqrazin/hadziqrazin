<script lang="ts">
  import Project from "../Project.svelte"
  import toDo from "$lib/constants/projects/toDo"
</script>


<div class="grid grid-cols-1 lg:grid-cols-2 w-fit mx-10 gap-x-10">
  <Project project={toDo}/>
  <Project project={toDo}/>
  <Project project={toDo}/>
  <Project project={toDo}/>
  <Project project={toDo}/>
  <Project project={toDo}/>
</div>
