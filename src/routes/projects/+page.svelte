<script lang="ts">
  import { projects } from "$lib/constants/projects";
  import ShowcasePage from "$lib/components/sections/ShowcasePage.svelte"
</script>

<ShowcasePage data={projects} title={'Projects'} subtitle={'Some projects for learning purposes'}/>