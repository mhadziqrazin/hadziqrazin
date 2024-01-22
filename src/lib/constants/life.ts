import type { Project } from '$lib/types/project'
import pemburuImage from '$lib/assets/life/pemburu.png'
import cssImage from '$lib/assets/life/css.png'
import meetTheCastImage from '$lib/assets/life/meet-the-cast.png'


export const pemburu: Project = {
  img: pemburuImage,
  name: 'Pemburu',
  description: 'Played as Polisi, a bad cop in Pemburu, a film by Sinematografi UI',
  techs: [],
  url: 'https://youtu.be/lKsgIKfpMbA'
}

export const css: Project = {
  img: cssImage,
  name: 'We Need More',
  description: "Computer Science Sineas (CSS) Fasilkom UI 2022's teaser",
  techs: [],
  url: 'https://youtu.be/NGI3Lhjy-rw?si=tciWz0jV4JuT5yK9'
}

export const meetTheCast: Project = {
  img: meetTheCastImage,
  name: 'Meet The Cast | Pemburu',
  description: 'Interview of Casts of the Pemburu movie',
  techs: [],
  url: 'https://www.youtube.com/watch?v=alrDde8ZgHo'
}

export const life: Project[] = [
  css, pemburu, meetTheCast
]
