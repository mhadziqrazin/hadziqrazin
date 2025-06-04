import type { Project } from '$lib/types/project'
import appbilitieaseImage from '$lib/assets/works/appbilitiease.png'
import mikostopImage from '$lib/assets/works/mikostop.png'
import uuPediaImage from '$lib/assets/works/uupedia.png'
import blueImage from '$lib/assets/works/blue.png'
import globalSearchImage from '$lib/assets/works/global-search.png'
import dropdownChips from '$lib/assets/works/dropdown-chips.png'
import monthSelector from '$lib/assets/works/month-selector.png'
import coverageImage from '$lib/assets/works/coverage.png'
import eslintPrettierImage from '$lib/assets/works/eslint-prettier.png'
import moEngageImage from '$lib/assets/works/mo-engage.png'
import changelogScriptImage from '$lib/assets/works/changelog-script.png'
import pejuangOsnImage from '$lib/assets/works/pejuang-osn.png'
import rsummiImage from '$lib/assets/works/rsummi.png'
import rsummiPharamcistImage from '$lib/assets/works/rsummi-pharmacist.png'
import rsummiAdminImage from '$lib/assets/works/rsummi-admin.png'
import rsummiLocationImage from '$lib/assets/works/rsummi-location.png'
import rsummiLogsImage from '$lib/assets/works/rsummi-logs.png'
import rsummiPickupImage from '$lib/assets/works/rsummi-pickup.png'
import rsummiScanImage from '$lib/assets/works/rsummi-scan.png'
import {
  javaScript,
  nextjs,
  reactjs,
  sass,
  tailwind,
  typeScript,
  vuejs,
  algolia,
  playwright,
  eslint,
  prettier,
  html,
  css,
  express
} from './techs'


const appbilitiease: Project = {
  img: appbilitieaseImage,
  name: 'Appbilitiease',
  description: 'Disability support website in order to participate in Gemastik XVI 2023',
  techs: [nextjs, typeScript, tailwind],
  url: 'https://appbilitiease.vercel.app'
}

const mikostop: Project = {
  img: mikostopImage,
  name: 'Mikostop',
  description: 'Invasive Pulmonary Aspergillosis (IPA) Scoring website owned by Indonesia Pulmonary Mycoses Centre (IPMC)',
  techs: [reactjs, javaScript],
}

const uuPedia: Project = {
  img: uuPediaImage,
  name: 'UUPedia',
  description: 'AI chatbot using Gemini API to ask about laws in Indonesia, in order to participate in Gemastik XVII 2024',
  techs: [nextjs, typeScript, tailwind],
  url: 'https://uupedia.vercel.app'
}

const blue: Project = {
  img: blueImage,
  name: 'BLUE',
  description: 'BLUE (Blibli Unifying Elements) is the Blibli\'s design system containing reusable components and design standard guidelines to build Blibli\'s digital products',
  techs: [vuejs, javaScript, sass],
  url: 'https://blue.blibli.com',
  children: [
    {
      img: globalSearchImage,
      name: 'Global search',
      description: 'Global search helps users to find and navigate through relevant information with ease',
      techs: [algolia, vuejs, javaScript, sass],
      url: 'https://blue.blibli.com',
    },
    {
      img: coverageImage,
      name: 'Coverage Score',
      description: 'Improved integration test coverage up to 98+% for 38 components using Playwright ',
      techs: [playwright, javaScript],
      url: 'https://blue.blibli.com/blue3/components/button/implementation',
    },
    {
      img: changelogScriptImage,
      name: 'Changelog Generator Script',
      description: 'Created changelog update automation script that reduced workload by up to 2 hours using Node.js',
      techs: [javaScript],
      url: 'https://blue.blibli.com/blue3/components/button/changelog',
    },
    {
      img: eslintPrettierImage,
      name: 'ESLint & Prettier',
      description: 'Implemented ESLint and Prettier inside the BLUE source code to enhance clean code',
      techs: [eslint, prettier],
    },
    {
      img: moEngageImage,
      name: 'MoEngage',
      description: 'Created Customer Satisfaction Survey using MoEngage, HTML, CSS, Javascript, and Blibli’s component class',
      techs: [javaScript, html, css],
    },
    {
      img: dropdownChips,
      name: 'Dropdown with Chips',
      description: 'A dropdown trigger with chips component instead of text to display the value of the dropdown',
      techs: [vuejs, javaScript, sass],
      url: 'https://blue.blibli.com/blue3/components/dropdown/implementation#with-chips',
    },
    {
      img: monthSelector,
      name: 'Month Selector',
      description: 'A date picker variant to select month-scale date',
      techs: [vuejs, javaScript, sass],
      url: 'https://blue.blibli.com/blue3/components/date-picker/implementation#month-selector',
    }
  ]
}

const pejuangOsn: Project = {
  img: pejuangOsnImage,
  name: 'Pejuang OSN',
  description: 'E-learning platform by PT. Pejuang Indonesia Cerdas for students to prepare for the National Science Olympiad with features like masterclass, quiz, and exam-question bank',
  techs: [nextjs, typeScript, tailwind],
  url: 'https://pejuangosn.com',
}

const rsummi: Project = {
  img: rsummiImage,
  name: 'Meds Vending Machine',
  description: 'Vending machine-style system by RS UMMI Bogor that lets patients skip the pharmacy queue and helps pharmacists manage medications more efficiently',
  techs: [nextjs, express, typeScript, tailwind],
  url: 'https://ppl-c6.rsummi.co.id',
  children: [
    {
      img: rsummiPharamcistImage,
      name: 'Manage Medications',
      description: 'Pharmacists can load medications into the vending machine and mark them as ready to send a QR code to the patient',
      techs: [],
    },
    {
      img: rsummiLocationImage,
      name: 'Medications Location',
      description: 'Pharmacists can select medications\' location in the vending machine',
      techs: [],
    },
    {
      img: rsummiScanImage,
      name: 'Scan QR Code',
      description: 'Patients can scan their QR code to pick up medications',
      techs: [],
    },
    {
      img: rsummiPickupImage,
      name: 'Pickup Medications',
      description: 'Staff and patients can instantly see where a medication is located',
      techs: [],
    },
    {
      img: rsummiAdminImage,
      name: 'Manage Pharmacists',
      description: 'Admin can manage pharmacists\' account',
      techs: [],
    },
    {
      img: rsummiLogsImage,
      name: 'Monitor Activity',
      description: 'Admin can monitor activites within the system',
      techs: [],
    },
  ]
}

export const works: Project[] = [
  blue,
  rsummi,
  pejuangOsn,
  uuPedia,
  appbilitiease,
  mikostop
]
