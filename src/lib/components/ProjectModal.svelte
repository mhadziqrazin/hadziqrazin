<script lang="ts">
  import Icon from "svelte-icons-pack"
  import type { Project } from "$lib/types/project";
  import { fade, fly } from "svelte/transition"
  import { clickOutside } from "$lib/assets/utils/useClickOutside";
  import Badge from "$lib/components/Badge.svelte"
  import { trackClick } from "$lib/utils/tracker"
  import { ClickCategory } from "$lib/types/event"

  export let onClose: () => void
  export let project: Project

  const trackModalLink = (name: string) => {
    trackClick({
      category: ClickCategory.LINK,
      label: name
    })
  }
</script>

<div in:fade={{duration: 100}} out:fade={{duration: 100, delay: 100}} class="fixed bg-black/70 top-0 left-0 height-screen overflow-hidden w-full z-10">
  <div class="h-full flex justify-center items-end sm:items-center">
    <!-- MODAL -->
    <div
      use:clickOutside={onClose}
      in:fly={{y: 50, duration: 100, delay: 100}}
      out:fly={{y: 50, duration: 100}}
      class="flex flex-col bg-light rounded-t-xl sm:rounded-b-xl overflow-clip w-full max-w-[639px] h-fit max-h-[85%] sm:max-h-[576px] shadow-lg"
    >
      <div class="flex justify-between items-center gap-4 p-4">
        <h2 class="text-2xl text-dark">
          Projects on <span class="font-semibold">{project.name}</span>
        </h2>
        <button on:click={onClose}>
          <Badge>close</Badge>
        </button>
      </div>
      <div class="overflow-auto scrollbar-hide p-4">
        <div class="flex flex-col gap-10">
          {#each project.children || [] as child}
            <hr class="first:hidden border-dark/20" />
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <img src={child.img} alt={child.name} class="object-cover rounded-lg aspect-[15/9]" >
              <div class="flex flex-col gap-2">
                {#if child.url}
                  <a href={child.url} target="_blank" rel="noopener" on:click={() => trackModalLink(child.name)} title={child.url} class="text-lg font-medium text-dark underline">
                    {child.name}
                  </a>
                {:else}
                  <div class="text-lg font-medium text-dark">
                    {child.name}
                  </div>
                {/if}
                <p class="font-light text-dark/70 pb-4">
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

<style>
  .height-screen {
    height: 100vh;
    height: 100dvh;
  }
</style>
