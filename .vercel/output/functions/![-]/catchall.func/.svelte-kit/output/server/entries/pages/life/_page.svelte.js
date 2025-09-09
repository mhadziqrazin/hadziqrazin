import "clsx";
import { S as ShowcasePage } from "../../../chunks/ShowcasePage.js";
const pemburuImage = "/_app/immutable/assets/pemburu.C51HxZdD.png";
const cssImage = "/_app/immutable/assets/css.DADwsV2n.png";
const meetTheCastImage = "/_app/immutable/assets/meet-the-cast.3W9ahdTw.jpg";
const aDayInMyLifeImage = "/_app/immutable/assets/a-day-in-my-life.CAAtrTKM.png";
const gameMasterImage = "/_app/immutable/assets/game-master.JqrQhrZ6.jpg";
const pemburu = {
  img: pemburuImage,
  name: "Pemburu",
  description: "Played as Polisi, a bad cop in Pemburu, a film by Sinematografi UI",
  techs: [],
  url: "https://youtu.be/lKsgIKfpMbA"
};
const css = {
  img: cssImage,
  name: "We Need More",
  description: "Computer Science Sineas (CSS) Fasilkom UI 2022's teaser, in charge as a producer, actor, script writer, and editor",
  techs: [],
  url: "https://youtu.be/NGI3Lhjy-rw?si=tciWz0jV4JuT5yK9"
};
const meetTheCast = {
  img: meetTheCastImage,
  name: "Meet The Cast | Pemburu",
  description: "Interview of Casts of the Pemburu movie",
  techs: [],
  url: "https://www.youtube.com/watch?v=alrDde8ZgHo"
};
const aDayInMyLife = {
  img: aDayInMyLifeImage,
  name: "GENZ SURVIVE CHALLENGE SEHARI TANPA SOCMED???",
  description: "Requested to be an actor in Techtalks video by COMPFEST",
  techs: [],
  url: "https://youtu.be/y8s5dOhIrY0?si=xaWJzLXL5TRmqOrt"
};
const gameMaster = {
  img: gameMasterImage,
  name: "Game Master",
  description: "Chosen to be a game master and performed in front of 250+ employees at the 2024 Blibli Platform's end-year gathering event during UX Engineering internship",
  techs: [],
  url: "https://www.instagram.com/bliblidesign/reel/DEM5BGfJm8S/"
};
const life = [
  gameMaster,
  css,
  pemburu,
  aDayInMyLife,
  meetTheCast
];
function _page($$payload) {
  ShowcasePage($$payload, {
    data: life,
    title: "Life",
    subtitle: `Non-IT related but still makes me proud :D`
  });
}
export {
  _page as default
};
