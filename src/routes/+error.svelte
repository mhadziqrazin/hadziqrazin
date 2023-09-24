<script lang="ts">
    import { page } from '$app/stores'
    import { onMount } from 'svelte'
    import { fade } from 'svelte/transition'

    let animate = false
    onMount(() => {
      animate = true
    })
</script>

<div class="min-h-screen flex flex-col justify-center items-center">
  {#if animate}
    <h1 in:fade={{duration: 1000}} class="text-lg font-medium text-dark/60">
      {$page.status} | {$page.error?.message}
    </h1>
  {/if}
  
  {#if $page.status == 404 && animate}
    <h3 in:fade={{duration: 1000, delay: 200}} class="mt-8 text-xl font-medium text-dark/90">
      You're lost but relax
    </h3>
    <p in:fade={{duration: 1000, delay: 400}} class="mt-1 text-lg w-1/2 text-center font-light text-dark/80">
      I've lost more than I can remember. But it's about how <b class="font-semibold text-primary">fast</b> you can get back on the <b class="font-semibold text-secondary">right</b> track, eh?
    </p>
    <p in:fade={{duration: 1000, delay: 600}} class="mt-4 text-dark">
      Here, I'll take you <a href="/" class="underline">home</a>
    </p>
  {:else if $page.status != 404 && animate}
    <h3 in:fade={{duration: 1000, delay: 200}} class="mt-8 text-xl font-medium text-dark/90">
      I'm sorry
    </h3>
    <p in:fade={{duration: 1000, delay: 400}} class="mt-1 text-lg w-1/2 text-center font-light text-dark/80">
      Just like other humans, I'm not perfect. Or maybe this isn't my fault lol. Idk. You may refresh or close this page.
    </p>
  {/if}
</div>
