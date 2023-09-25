<script lang="ts">
  import Project from "../Project.svelte"
  import toDo from "$lib/constants/projects/toDo"
</script>


<section class="flex flex-col">
  <div class="flex flex-wrap gap-x-20 justify-center">
    <Project project={toDo}/>
    <Project project={toDo}/>
  </div>
</section>
