<script lang="ts">
  import About from "$lib/sections/About.svelte";
  import { works } from "$lib/constants/works";
  import { projects } from "$lib/constants/projects";
  import { life } from "$lib/constants/life";
  import ShowcasePage from "$lib/components/sections/ShowcasePage.svelte"
</script>

<svelte:head>
  <title>Hadziq Razin</title>
  <meta property="og:title" content="Muhammad Hadziq Razin's Portfolio">
  <meta property="og:description" content="Have you smiled today?">
  <meta property="og:image" content="https://lh3.googleusercontent.com/a/ACg8ocL9KRniiuLrmUi2MBHNcN2LMr1kUvzBhpbt-Kkv2pdZdg=s288-c-no">
  <meta property="og:image:secure_url" content="https://lh3.googleusercontent.com/a/ACg8ocL9KRniiuLrmUi2MBHNcN2LMr1kUvzBhpbt-Kkv2pdZdg=s288-c-no">
  <meta name="description" content="Have you smiled today?">
  <meta name="keywords" content="muhammad hadziq razin, muhammad, hadziq, razin, hajik, ojin">
</svelte:head>

<About />
<ShowcasePage data={works} title={'Works'} subtitle={'Paid or teamed kinda projects'} />
<ShowcasePage data={projects} title={'Projects'} subtitle={'Some projects for learning purposes'}/>
<ShowcasePage data={life} title={'Life'} subtitle={`Non-IT related but still makes me proud :D`}/>
