<script lang="ts">
  import Icon from 'svelte-icons-pack'

  export let social: any
  export let title: string
  export let link: string
</script>

<div class="opacity-30 hover:cursor-pointer hover:opacity-75 transition-all duration-200">
  <a href={link} target="_blank">
    <div class="hidden sm:block">
      <Icon src={social} size="25" {title} />
    </div>
    <div class="block sm:hidden">
      <Icon src={social} size="17" {title} />
    </div>
  </a>
</div>
