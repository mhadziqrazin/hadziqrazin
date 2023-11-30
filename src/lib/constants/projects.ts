import type { Project } from '$lib/types/project'
import todoImage from '$lib/assets/projects/todo.png'
import personalImage from '$lib/assets/projects/personal.png'
import airbnbImage from '$lib/assets/projects/airbnb.png'
import iniWebImage from '$lib/assets/projects/iniWeb.png'
import { firebase, javaScript, mongoDb, nextjs, postgreSql, prisma, svelte, tailwind, typeScript } from './techs'

export const toDo: Project = {
  img: todoImage,
  name: 'To Do Hajik',
  description: 'To do list with feeds feature where you can share your completed tasks',
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

export const airbnb: Project = {
  img: airbnbImage,
  name: 'Airbnb Hajik',
  description: "Airbnb clone follow along YouTube tutorial for learning purposes",
  techs: [nextjs, typeScript, tailwind, prisma, mongoDb],
  url: 'https://www.hadziqrazin.com'
}

export const iniWeb: Project = {
  img: iniWebImage,
  name: 'IniWeb',
  description: "Social media kinda Twitter app built for Ristek Fasilkom UI open recruitment task",
  techs: [nextjs, javaScript, tailwind, prisma, firebase],
  url: 'https://hadziq-ristek-webdev-2023.vercel.app'
}

export const projects: Project[] = [
  personal, toDo, airbnb, iniWeb
]
