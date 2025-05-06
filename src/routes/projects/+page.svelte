<script lang="ts">
  import { projects } from "$lib/constants/projects";
  import ShowcasePage from "$lib/components/sections/ShowcasePage.svelte"
</script>

<ShowcasePage data={projects} title={'Projects'} subtitle={'Self-projects for learning purposes'}/>