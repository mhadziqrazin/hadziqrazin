import type { Project } from '$lib/types/project'
import image from '$lib/assets/projects/todo.png'
import typeScript from '../techs/typeScript'

const toDo: Project = {
  img: image,
  name: 'To Do Hajik',
  description: 'To do list with feeds feature where you can share your completed task',
  techs: [typeScript],
  url: 'https://to.do.hadziqrazin.com'
}

export default toDo