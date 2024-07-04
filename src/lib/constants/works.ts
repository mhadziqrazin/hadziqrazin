import type { Project } from '$lib/types/project'
import appbilitieaseImage from '$lib/assets/works/appbilitiease.png'
import mikostopImage from '$lib/assets/works/mikostop.png'
import uuPediaImage from '$lib/assets/works/uupedia.png'
import { javaScript, nextjs, reactjs, tailwind, typeScript } from './techs'


export const appbilitiease: Project = {
  img: appbilitieaseImage,
  name: 'Appbilitiease',
  description: 'Disability support website in order to participate in Gemastik XVI 2023',
  techs: [nextjs, typeScript, tailwind],
  url: 'https://appbilitiease.vercel.app'
}

export const mikostop: Project = {
  img: mikostopImage,
  name: 'Mikostop',
  description: 'Invasive Pulmonary Aspergillosis (IPA) Scoring website owned by Indonesia Pulmonary Mycoses Centre (IPMC)',
  techs: [reactjs, javaScript],
  url: 'https://mikostop.com'
}

export const uuPedia: Project = {
  img: uuPediaImage,
  name: 'UUPedia',
  description: 'AI chatbot using Gemini API to ask about laws in Indonesia, in order to participate in Gemastik XVII 2024',
  techs: [nextjs, typeScript, tailwind],
  url: 'https://uupedia.vercel.app'
}

export const works: Project[] = [
  uuPedia,
  appbilitiease,
  mikostop
]
