<script lang="ts">
  import type { Project } from "$lib/types/project"

  export let project: Project
</script>

<div class="w-[400px]">
  <img src={project.img} alt="To Do Hajik">

  <!-- DETAILS -->
  <div>
    <p>
      {project.name}
    </p>
  </div>
</div>