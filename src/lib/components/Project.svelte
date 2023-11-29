<script lang="ts">
  import type { Project } from "$lib/types/project"
  import Icon from 'svelte-icons-pack'

  export let project: Project
  const techs = project.techs
</script>

<div class="relative flex flex-col min-h-full w-[300px] overflow-hidden shadow-lg hover:shadow-xl duration-200 rounded-xl bg-white/70 border-[1px] border-dark/10">
  <!-- IMAGE -->
  <img src={project.img} alt={project.name} class="aspect-[15/9] object-cover" >

  <!-- BODY -->
  <div class="min-h-full p-4 flex flex-col gap-2">
    <a href={project.url} target="_blank" class="font-semibold text-xl text-dark underline w-fit">
      {project.name}
    </a>
    <p class="text-dark/70 mb-[60px]">
      {project.description}
    </p>

    <!-- TECHS -->
    <div class="absolute bottom-4 flex gap-2">
      {#each techs as tech}
      <a href={tech.url} target="_blank">
        <div class="flex gap-1 p-[9px] rounded-full hover:shadow-md duration-200" style={`background: ${tech.color}`}>
          <Icon src={tech.img} color={'#fff'} title={tech.name} size={13} />
        </div>
      </a>
      {/each}
    </div>
  </div>
</div>
