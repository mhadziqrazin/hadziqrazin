import type { Project } from '$lib/types/project'
import todoImage from '$lib/assets/projects/todo.png'
import appbilitieaseImage from '$lib/assets/projects/appbilitiease.png'
import personalImage from '$lib/assets/projects/personal.png'
import { nextjs, postgreSql, prisma, svelte, tailwind, typeScript } from './techs'

export const toDo: Project = {
  img: todoImage,
  name: 'To Do Hajik',
  description: 'To do list with feeds feature where you can share your completed task',
  techs: [nextjs, typeScript, tailwind, prisma, postgreSql],
  url: 'https://to.do.hadziqrazin.com'
}

export const appbilitiease: Project = {
  img: appbilitieaseImage,
  name: 'Appbilitiease',
  description: 'Disability support website in order to participate in Gemastik XVI 2023',
  techs: [nextjs, typeScript, tailwind],
  url: 'https://appbilitiease.vercel.app'
}

export const personal: Project = {
  img: personalImage,
  name: 'Personal Website',
  description: "Yup, the one that you're looking at right now",
  techs: [svelte, typeScript, tailwind],
  url: 'https://www.hadziqrazin.com'
}

export const projects: Project[] = [
  appbilitiease, personal, toDo, toDo, toDo, toDo, toDo
]
