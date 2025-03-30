<script lang="ts">
  import { cn } from "$lib/utils/cn"
  export let className: string
</script>

<span class={cn(
  "h-[31px] w-fit rounded-full px-4 text-sm text-light flex items-center bg-secondary",
  className
)}>
  <slot />
</span>
