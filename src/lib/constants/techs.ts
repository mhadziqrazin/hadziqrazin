import type { Tech } from '$lib/types/project'
import SiTypescript from 'svelte-icons-pack/si/SiTypescript'
import SiSvelte from 'svelte-icons-pack/si/SiSvelte'
import SiNextdotjs from 'svelte-icons-pack/si/SiNextdotjs'
import SiTailwindcss from 'svelte-icons-pack/si/SiTailwindcss'
import SiPostgresql from 'svelte-icons-pack/si/SiPostgresql'
import SiPrisma from 'svelte-icons-pack/si/SiPrisma'
import SiReact from 'svelte-icons-pack/si/SiReact'
import SiJavascript from 'svelte-icons-pack/si/SiJavascript'
import SiMongodb from 'svelte-icons-pack/si/SiMongodb'
import SiFirebase from 'svelte-icons-pack/si/SiFirebase'

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

export const postgreSql: Tech = {
  name: 'PostgreSQL',
  color: '#306793',
  img: SiPostgresql,
  url: 'https://www.postgresql.org/'
}

export const prisma: Tech = {
  name: 'Prisma',
  color: '#0c344b',
  img: SiPrisma,
  url: 'https://www.prisma.io/'
}

export const reactjs: Tech = {
  name: 'ReactJS',
  color: '#64d9fd',
  img: SiReact,
  url: 'https://react.dev/'
}

export const javaScript: Tech = {
  name: 'JavaScript',
  color: '#F7DF1E',
  img: SiJavascript,
  url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
}

export const mongoDb: Tech = {
  name: 'MongoDB',
  color: '#58AA50',
  img: SiMongodb,
  url: 'https://www.mongodb.com/'
}

export const firebase: Tech = {
  name: 'Firebase',
  color: '#fcca3f',
  img: SiFirebase,
  url: 'https://firebase.google.com/'
}