export interface Project {
  img: string
  name: string
  description: string
  techs: Tech[]
}

export interface Tech {
  name: string
  color: string
  logo: string
  url: string
}