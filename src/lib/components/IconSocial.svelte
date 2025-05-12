<script lang="ts">
  import { ClickCategory } from '$lib/types/event'
  import { trackClick } from '$lib/utils/tracker'
  import Icon from 'svelte-icons-pack'

  export let social: any
  export let title: string
  export let link: string

  const trackSocialClick = () => {
    trackClick({
      category: ClickCategory.SOCIAL,
      label: title
    })
  }
</script>

<div class="opacity-30 hover:cursor-pointer hover:opacity-75 transition-all duration-200">
  <a href={link} target="_blank" on:click={trackSocialClick}>
    <div class="hidden lg:block">
      <Icon src={social} size="25" {title} />
    </div>
    <div class="block lg:hidden">
      <Icon src={social} size="17" {title} />
    </div>
  </a>
</div>
