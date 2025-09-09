import "clsx";
import { s as svelte, t as typeScript, a as tailwind, n as nextjs, p as prisma, b as postgreSql, m as mongoDb, j as javaScript, f as firebase } from "../../../chunks/techs.js";
import { S as ShowcasePage } from "../../../chunks/ShowcasePage.js";
const todoImage = "/_app/immutable/assets/todo.C95fmau0.png";
const personalImage = "/_app/immutable/assets/personal.C6AzpYKz.png";
const airbnbImage = "/_app/immutable/assets/airbnb.CPk3ZmXT.png";
const iniWebImage = "/_app/immutable/assets/iniWeb.CsOeGm8P.png";
const ptiImage = "/_app/immutable/assets/pti.CmdMBhtl.png";
const vocabularichImage = "/_app/immutable/assets/vocabularich.K4OvNZnL.png";
const toDo = {
  img: todoImage,
  name: "To Do Hajik",
  description: "To do list with feeds feature where you can share your completed tasks",
  techs: [nextjs, typeScript, tailwind, prisma, postgreSql],
  url: "https://to.do.hadziqrazin.com"
};
const personal = {
  img: personalImage,
  name: "Personal Website",
  description: "Yup, the one that you're looking at right now",
  techs: [svelte, typeScript, tailwind],
  url: "https://www.hadziqrazin.com"
};
const airbnb = {
  img: airbnbImage,
  name: "Airbnb Hajik",
  description: "Airbnb clone follow along YouTube tutorial for learning purposes",
  techs: [nextjs, typeScript, tailwind, prisma, mongoDb],
  url: "https://airbnb.hadziqrazin.com"
};
const iniWeb = {
  img: iniWebImage,
  name: "IniWeb",
  description: "Social media kinda Twitter app built for Ristek Fasilkom UI WebDev division open recruitment task",
  techs: [nextjs, javaScript, tailwind, prisma, firebase],
  url: "https://hadziq-ristek-webdev-2023.vercel.app"
};
const pti = {
  img: ptiImage,
  name: "PTI Weather and Movies",
  description: "Utilizing weather and movie open API for BEM Fasilkom UI WebDev division (PTI) open recruitment task",
  techs: [nextjs, typeScript, tailwind],
  url: "https://pti-weather-hadziq.vercel.app"
};
const vocabularich = {
  img: vocabularichImage,
  name: "Vocabularich",
  description: "A dictionary game website using Gemini API where you have to choose the closest meaning of a word.",
  techs: [nextjs, typeScript, tailwind],
  url: "https://vocabularich.vercel.app"
};
const projects = [
  personal,
  toDo,
  vocabularich,
  airbnb,
  iniWeb,
  pti
];
function _page($$payload) {
  ShowcasePage($$payload, {
    data: projects,
    title: "Projects",
    subtitle: "Self-projects for learning purposes"
  });
}
export {
  _page as default
};
