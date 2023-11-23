<script lang="ts">
  import '../app.css'
</script>

<div class="mx-auto overflow-x-clip min-h-screen flex flex-col justify-center">
  <div class="flex flex-grow justify-center">
    <slot />
  </div>
  <div class="py-8 w-full flex justify-center">
    <p class="text-[0.5rem] lg:text-base font-light text-dark/80">
      Created by <span class="font-semibold">Muhammad Hadziq Razin</span> &copy; 2023. All Rights Reserved.
    </p>
  </div>
</div>
