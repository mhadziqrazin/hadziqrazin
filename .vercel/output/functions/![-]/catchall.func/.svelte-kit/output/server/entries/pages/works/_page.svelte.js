import "clsx";
import { c as algolia, v as vuejs, j as javaScript, d as sass, e as playwright, g as eslint, h as prettier, i as html, k as css, n as nextjs, l as express, t as typeScript, a as tailwind, r as reactjs } from "../../../chunks/techs.js";
import { S as ShowcasePage } from "../../../chunks/ShowcasePage.js";
const appbilitieaseImage = "/_app/immutable/assets/appbilitiease.B-sG6zvp.png";
const mikostopImage = "/_app/immutable/assets/mikostop.D2J-gsDl.png";
const uuPediaImage = "/_app/immutable/assets/uupedia.G9KSKznN.png";
const blueImage = "/_app/immutable/assets/blue.Dd2QLLLL.png";
const globalSearchImage = "/_app/immutable/assets/global-search.olLbwuMF.png";
const dropdownChips = "/_app/immutable/assets/dropdown-chips.6t7UXvaa.png";
const monthSelector = "/_app/immutable/assets/month-selector.BRM8Mv8I.png";
const coverageImage = "/_app/immutable/assets/coverage.cgw_LPCG.png";
const eslintPrettierImage = "/_app/immutable/assets/eslint-prettier.YTbvTmBX.png";
const moEngageImage = "/_app/immutable/assets/mo-engage.Bn10nZaf.png";
const changelogScriptImage = "/_app/immutable/assets/changelog-script.DOLd92kZ.png";
const pejuangOsnImage = "/_app/immutable/assets/pejuang-osn.BipwS_-Y.png";
const rsummiImage = "/_app/immutable/assets/rsummi.DlK8qbQ2.png";
const rsummiPharamcistImage = "/_app/immutable/assets/rsummi-pharmacist.C5t2l4jl.png";
const rsummiAdminImage = "/_app/immutable/assets/rsummi-admin.D8NZt7EA.png";
const rsummiLocationImage = "/_app/immutable/assets/rsummi-location.a9KZcGB3.png";
const rsummiLogsImage = "/_app/immutable/assets/rsummi-logs.qw2SXyWk.png";
const rsummiPickupImage = "/_app/immutable/assets/rsummi-pickup.Bu2J2rFB.png";
const rsummiScanImage = "/_app/immutable/assets/rsummi-scan.MIZuRF2l.png";
const appbilitiease = {
  img: appbilitieaseImage,
  name: "Appbilitiease",
  description: "Disability support website in order to participate in Gemastik XVI 2023",
  techs: [nextjs, typeScript, tailwind],
  url: "https://appbilitiease.vercel.app"
};
const mikostop = {
  img: mikostopImage,
  name: "Mikostop",
  description: "Invasive Pulmonary Aspergillosis (IPA) Scoring website owned by Indonesia Pulmonary Mycoses Centre (IPMC)",
  techs: [reactjs, javaScript]
};
const uuPedia = {
  img: uuPediaImage,
  name: "UUPedia",
  description: "AI chatbot using Gemini API to ask about laws in Indonesia, in order to participate in Gemastik XVII 2024",
  techs: [nextjs, typeScript, tailwind],
  url: "https://uupedia.vercel.app"
};
const blue = {
  img: blueImage,
  name: "BLUE",
  description: "BLUE (Blibli Unifying Elements) is the Blibli's design system containing reusable components and design standard guidelines to build Blibli's digital products",
  techs: [vuejs, javaScript, sass],
  url: "https://blue.blibli.com",
  children: [
    {
      img: globalSearchImage,
      name: "Global search",
      description: "Global search helps users to find and navigate through relevant information with ease",
      techs: [algolia, vuejs, javaScript, sass],
      url: "https://blue.blibli.com"
    },
    {
      img: coverageImage,
      name: "Coverage Score",
      description: "Improved integration test coverage up to 98+% for 38 components using Playwright ",
      techs: [playwright, javaScript],
      url: "https://blue.blibli.com/blue3/components/button/implementation"
    },
    {
      img: changelogScriptImage,
      name: "Changelog Generator Script",
      description: "Created changelog update automation script that reduced workload by up to 2 hours using Node.js",
      techs: [javaScript],
      url: "https://blue.blibli.com/blue3/components/button/changelog"
    },
    {
      img: eslintPrettierImage,
      name: "ESLint & Prettier",
      description: "Implemented ESLint and Prettier inside the BLUE source code to enhance clean code",
      techs: [eslint, prettier]
    },
    {
      img: moEngageImage,
      name: "MoEngage",
      description: "Created Customer Satisfaction Survey using MoEngage, HTML, CSS, Javascript, and Blibli’s component class",
      techs: [javaScript, html, css]
    },
    {
      img: dropdownChips,
      name: "Dropdown with Chips",
      description: "A dropdown trigger with chips component instead of text to display the value of the dropdown",
      techs: [vuejs, javaScript, sass],
      url: "https://blue.blibli.com/blue3/components/dropdown/implementation#with-chips"
    },
    {
      img: monthSelector,
      name: "Month Selector",
      description: "A date picker variant to select month-scale date",
      techs: [vuejs, javaScript, sass],
      url: "https://blue.blibli.com/blue3/components/date-picker/implementation#month-selector"
    }
  ]
};
const pejuangOsn = {
  img: pejuangOsnImage,
  name: "Pejuang OSN",
  description: "E-learning platform by PT Pejuang Indonesia Cerdas for students to prepare for the National Science Olympiad with features like masterclass, quiz, and exam-question bank",
  techs: [nextjs, typeScript, tailwind],
  url: "https://pejuangosn.com"
};
const rsummi = {
  img: rsummiImage,
  name: "Meds Vending Machine",
  description: "Vending machine-style system by RS UMMI Bogor that lets patients skip the pharmacy queue and helps pharmacists manage medications more efficiently",
  techs: [nextjs, express, typeScript, tailwind],
  url: "https://ppl-c6.rsummi.co.id",
  children: [
    {
      img: rsummiPharamcistImage,
      name: "Manage Medications",
      description: "Pharmacists can load medications into the vending machine and mark them as ready to send a QR code to the patient",
      techs: []
    },
    {
      img: rsummiLocationImage,
      name: "Medications Location",
      description: "Pharmacists can select medications' location in the vending machine",
      techs: []
    },
    {
      img: rsummiScanImage,
      name: "Scan QR Code",
      description: "Patients can scan their QR code to pick up medications",
      techs: []
    },
    {
      img: rsummiPickupImage,
      name: "Pickup Medications",
      description: "Staff and patients can instantly see where a medication is located",
      techs: []
    },
    {
      img: rsummiAdminImage,
      name: "Manage Pharmacists",
      description: "Admin can manage pharmacists' account",
      techs: []
    },
    {
      img: rsummiLogsImage,
      name: "Monitor Activity",
      description: "Admin can monitor activites within the system",
      techs: []
    }
  ]
};
const works = [
  blue,
  rsummi,
  pejuangOsn,
  uuPedia,
  appbilitiease,
  mikostop
];
function _page($$payload) {
  ShowcasePage($$payload, {
    data: works,
    title: "Works",
    subtitle: "Paid or teamed kinda projects"
  });
}
export {
  _page as default
};
