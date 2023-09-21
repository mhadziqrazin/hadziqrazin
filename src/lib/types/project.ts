export interface Project {
  img: string
  name: string
  description: string
  techs: Tech[]
}

export interface Tech {
  name: string
  color: string
  img: string
  url: string
}