import type { Project } from '$lib/types/project'
import pemburuImage from '$lib/assets/life/pemburu.png'
import cssImage from '$lib/assets/life/css.png'


export const pemburu: Project = {
  img: pemburuImage,
  name: 'Pemburu',
  description: 'Played as Polisi, a bad cop in Pemburu, a film by Sinematografi UI',
  techs: [],
  url: 'https://drive.google.com/file/d/1pZPlBGVquqQ9EBMfY5Z4YgQdmXQWgx5a/view?usp=sharing'
}

export const css: Project = {
  img: cssImage,
  name: 'We Need More',
  description: "Computer Science Sineas (CSS) Fasilkom UI 2022's teaser",
  techs: [],
  url: 'https://youtu.be/NGI3Lhjy-rw?si=tciWz0jV4JuT5yK9'
}

export const life: Project[] = [
  pemburu, css
]
