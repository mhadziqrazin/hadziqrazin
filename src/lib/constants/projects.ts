import type { Project } from '$lib/types/project'
import todoImage from '$lib/assets/projects/todo.png'
import { tailwind, typeScript } from './techs'

export const toDo: Project = {
  img: todoImage,
  name: 'To Do Hajik',
  description: 'To do list with feeds feature where you can share your completed task',
  techs: [typeScript, tailwind],
  url: 'https://to.do.hadziqrazin.com'
}
