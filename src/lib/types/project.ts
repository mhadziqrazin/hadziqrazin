export interface Project {
  img: string
  name: string
  description: string
  techs: Tech[]
  url: string
  children?: Project[]
}

export interface Tech {
  name: string
  color: string
  img: any
  url: string
}