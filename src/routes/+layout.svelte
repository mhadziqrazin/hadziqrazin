<script lang="ts">
  import '../app.css'
</script>

<div class="container mx-auto px-4 flex flex-col justify-center items-center">
  <slot />
  <div class="absolute bottom-0 pb-8">
    <p class="text-[0.5rem] lg:text-base font-light text-dark/80">
      Created by <span class="font-semibold">Muhammad Hadziq Razin</span> &copy; 2023. All Rights Reserved.
    </p>
  </div>
</div>
