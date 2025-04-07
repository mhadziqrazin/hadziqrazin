import type { Project } from '$lib/types/project'
import pemburuImage from '$lib/assets/life/pemburu.png'
import cssImage from '$lib/assets/life/css.png'
import meetTheCastImage from '$lib/assets/life/meet-the-cast.jpg'
import aDayInMyLifeImage from '$lib/assets/life/a-day-in-my-life.png'
import gameMasterImage from '$lib/assets/life/game-master.jpg'


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
  description: "Computer Science Sineas (CSS) Fasilkom UI 2022's teaser, in charge as a producer, actor, script writer, and editor",
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

export const aDayInMyLife: Project = {
  img: aDayInMyLifeImage,
  name: 'GENZ SURVIVE CHALLENGE SEHARI TANPA SOCMED???',
  description: 'Requested to be an actor in Techtalks video by COMPFEST',
  techs: [],
  url: 'https://youtu.be/y8s5dOhIrY0?si=xaWJzLXL5TRmqOrt'
}

export const gameMaster: Project = {
  img: gameMasterImage,
  name: 'Game Master',
  description: 'Chosen to be a game master and performed in front of 250+ employees at the 2024 Blibli Platform\'s end-year gathering event during UX Engineer internship',
  techs: [],
  url: 'https://www.instagram.com/bliblidesign/reel/DEM5BGfJm8S/'
}

export const life: Project[] = [
  gameMaster, css, pemburu, aDayInMyLife, meetTheCast
]
