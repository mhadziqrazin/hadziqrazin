<script lang="ts">
  import Icon from 'svelte-icons-pack/Icon.svelte'

  export let social: any
  export let title: string
  export let link: string
</script>

<div class="opacity-30 hover:cursor-pointer hover:opacity-75 transition-all duration-200">
  <a href={link} target="_blank">
    <Icon src={social} size="25" {title} />
  </a>
</div>
