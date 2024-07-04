<script lang="ts">
  import type { Project } from "$lib/types/project"
  import Icon from 'svelte-icons-pack'

  export let project: Project
  const techs = project.techs
  $: isOpen = false

  const toggleModal = () => {
    isOpen = !isOpen
  }
</script>

<div class="relative flex flex-col min-h-full w-[300px] overflow-hidden shadow-lg hover:shadow-xl duration-200 rounded-xl bg-white/70 border-[1px] border-dark/[0.13]">
  <!-- IMAGE -->
  <img src={project.img} alt={project.name} class="aspect-[15/9] object-cover" >

  <!-- BODY -->
  <div class="min-h-full p-4 flex flex-col gap-2">
    <a href={project.url} target="_blank" title={project.url} class="font-semibold text-xl text-dark underline w-fit">
      {project.name}
    </a>
    <p class="text-dark/70" class:tech-space={techs.length > 0 || project.children?.length || 0 > 0}>
      {project.description}
    </p>

    <!-- TECHS -->
    <div class="w-full absolute bottom-4 left-0 px-4 flex gap-2">
      {#each techs as tech}
      <a href={tech.url} target="_blank">
        <div class="flex gap-1 p-[9px] rounded-full hover:shadow-md duration-200" style={`background: ${tech.color}`}>
          <Icon src={tech.img} color={'#fff'} title={tech.name} size={13} />
        </div>
      </a>
      {/each}
      {#if project.children?.length || 0 > 0}
      <button
        on:click={toggleModal}
       class="ml-auto h-[31px] rounded-full px-4 bg-secondary text-sm text-light"
      >
        More works
      </button>
      {/if}
    </div>
  </div>
</div>

<style>
  .tech-space {
    margin-bottom: 60px;
  }
</style>
