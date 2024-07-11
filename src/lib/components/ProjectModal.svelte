<script lang="ts">
  import Icon from "svelte-icons-pack"
  import type { Project } from "$lib/types/project";
  import { fade, fly } from "svelte/transition"
  import { clickOutside } from "$lib/assets/utils/useClickOutside";

  export let onClose: () => void
  export let project: Project
</script>

<div in:fade={{duration: 100}} out:fade={{duration: 100, delay: 100}} class="fixed bg-black/70 top-0 left-0 h-screen overflow-hidden w-full z-10">
  <div class="h-full grid place-items-center">
    <!-- MODAL -->
    <div
      use:clickOutside={onClose}
      in:fly={{y: 50, duration: 100, delay: 100}}
      out:fly={{y: 50, duration: 100}}
      class="relative flex flex-col bg-light rounded-xl overflow-clip w-full h-fit max-w-[600px] max-h-[500px] shadow-lg"
    >
      <button
        on:click={onClose}
        class="absolute top-4 right-4 h-[31px] px-4 bg-secondary text-light rounded-full"
      >
        close
      </button>
      <div class="overflow-auto scrollbar-hide p-4">
        <h2 class="text-2xl mb-6 text-dark">
          Projects on <span class="font-semibold">{project.name}</span>
        </h2>
        <div class="flex flex-col gap-5">
          {#each project.children || [] as child}
          <hr class="first:hidden border-dark/20" />
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img src={child.img} alt={child.name} class="object-cover rounded-lg aspect-[15/9] sm:aspect-auto" >
            <div class="flex flex-col gap-2">
              <a href={child.url} target="_blank" title={child.url} class="text-lg font-medium text-dark underline">
                {child.name}
              </a>
              <p class="font-light text-dark/70">
                {child.description}
              </p>
              <div class="flex gap-2 h-full items-end">
                {#each child.techs as tech}
                <a href={tech.url} target="_blank">
                  <div class="flex gap-1 p-[9px] rounded-full hover:shadow-md duration-200" style={`background: ${tech.color}`}>
                    <Icon src={tech.img} color={'#fff'} title={tech.name} size={13} />
                  </div>
                </a>
                {/each}
              </div>
            </div>
          </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
