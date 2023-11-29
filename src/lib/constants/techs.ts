import type { Tech } from '$lib/types/project'
import typeScriptLogo from '$lib/assets/techs/Logo-official-svgrepo-com.svg'
import svelteLogo from '$lib/assets/techs/svelte-icon-svgrepo-com.svg'

export const typeScript: Tech = {
  name: 'TypeScript',
  color: '#3178c6',
  img: typeScriptLogo,
  url: 'https://www.typescriptlang.org/'
}

export const svelte: Tech = {
  name: 'Svelte',
  color: '#FF3E00',
  img: svelteLogo,
  url: 'https://svelte.dev/'
}