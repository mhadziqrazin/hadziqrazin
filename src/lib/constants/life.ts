import type { Project } from '$lib/types/project'
import pemburuImage from '$lib/assets/life/pemburu.png'


export const pemburu: Project = {
  img: pemburuImage,
  name: 'Pemburu',
  description: 'Played as Polisi, a bad cop in Pemburu, a film by Sinematografi UI',
  techs: [],
  url: 'https://drive.google.com/file/d/1pZPlBGVquqQ9EBMfY5Z4YgQdmXQWgx5a/view?usp=sharing'
}

export const life: Project[] = [
  pemburu
]
