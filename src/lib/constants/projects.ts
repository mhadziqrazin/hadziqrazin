import type { Project } from '$lib/types/project'
import todoImage from '$lib/assets/projects/todo.png'
import personalImage from '$lib/assets/projects/personal.png'
import { nextjs, postgreSql, prisma, svelte, tailwind, typeScript } from './techs'

export const toDo: Project = {
  img: todoImage,
  name: 'To Do Hajik',
  description: 'To do list with feeds feature where you can share your completed task',
  techs: [nextjs, typeScript, tailwind, prisma, postgreSql],
  url: 'https://to.do.hadziqrazin.com'
}

export const personal: Project = {
  img: personalImage,
  name: 'Personal Website',
  description: "Yup, the one that you're looking at right now",
  techs: [svelte, typeScript, tailwind],
  url: 'https://www.hadziqrazin.com'
}

export const projects: Project[] = [
  personal, toDo, toDo, toDo, toDo, toDo
]
