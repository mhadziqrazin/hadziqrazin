import type { Tech } from '$lib/types/project'
import SiTypescript from 'svelte-icons-pack/si/SiTypescript'
import SiSvelte from 'svelte-icons-pack/si/SiSvelte'
import SiNextdotjs from 'svelte-icons-pack/si/SiNextdotjs'
import SiTailwindcss from 'svelte-icons-pack/si/SiTailwindcss'

export const typeScript: Tech = {
  name: 'TypeScript',
  color: '#3178c6',
  img: SiTypescript,
  url: 'https://www.typescriptlang.org/'
}

export const svelte: Tech = {
  name: 'Svelte',
  color: '#FF3E00',
  img: SiSvelte,
  url: 'https://svelte.dev/'
}

export const nextjs: Tech = {
  name: 'Next.js',
  color: '#000',
  img: SiNextdotjs,
  url: 'https://nextjs.org/'
}

export const tailwind: Tech = {
  name: 'TailwindCSS',
  color: '#44a8b3',
  img: SiTailwindcss,
  url: 'https://tailwindcss.com/'
}
