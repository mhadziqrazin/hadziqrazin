import { S as attr, K as bind_props, F as pop, D as push, T as head, J as attr_class } from "../../chunks/index.js";
import "clsx";
import { I as Icon } from "../../chunks/Icon.js";
import BsGithub from "svelte-icons-pack/bs/BsGithub.js";
import BsLinkedin from "svelte-icons-pack/bs/BsLinkedin.js";
import BsInstagram from "svelte-icons-pack/bs/BsInstagram.js";
import SiGmail from "svelte-icons-pack/si/SiGmail.js";
import BsFileEarmarkPdf from "svelte-icons-pack/bs/BsFileEarmarkPdf.js";
function IconSocial($$payload, $$props) {
  push();
  let social = $$props["social"];
  let title = $$props["title"];
  let link = $$props["link"];
  $$payload.out.push(`<div class="opacity-30 hover:cursor-pointer hover:opacity-75 transition-all duration-200"><a${attr("href", link)} target="_blank"><div class="hidden lg:block">`);
  Icon($$payload, { src: social, size: "25", title });
  $$payload.out.push(`<!----></div> <div class="block lg:hidden">`);
  Icon($$payload, { src: social, size: "17", title });
  $$payload.out.push(`<!----></div></a></div>`);
  bind_props($$props, { social, title, link });
  pop();
}
const resume = "/_app/immutable/assets/Resume_Muhammad_HADZIQ_Razin.DF5CkZ_t.pdf";
function Socials($$payload) {
  $$payload.out.push(`<div class="w-1/2 flex self-center justify-between lg:justify-around"><div>`);
  IconSocial($$payload, {
    social: BsGithub,
    title: "Github",
    link: "https://github.com/mhadziqrazin"
  });
  $$payload.out.push(`<!----></div> <div>`);
  IconSocial($$payload, {
    social: BsLinkedin,
    title: "Linkedin",
    link: "https://www.linkedin.com/in/mhadziqrazin/"
  });
  $$payload.out.push(`<!----></div> <div>`);
  IconSocial($$payload, {
    social: BsInstagram,
    title: "Instagram",
    link: "https://www.instagram.com/hadziqrazin/"
  });
  $$payload.out.push(`<!----></div> <button>`);
  IconSocial($$payload, { social: BsFileEarmarkPdf, title: "Resume", link: resume });
  $$payload.out.push(`<!----></button> <div>`);
  IconSocial($$payload, {
    social: SiGmail,
    title: "Mail",
    link: "https://mail.google.com/mail/u/0/?fs=1&to=mhadziqrazin@gmail.com&su=Let's%20Get%20to%20Know&tf=cm"
  });
  $$payload.out.push(`<!----></div></div>`);
}
function _page($$payload, $$props) {
  push();
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Hadziq Razin</title>`;
    $$payload2.out.push(`<meta property="og:title" content="Muhammad Hadziq Razin's Portfolio"/> <meta property="og:description" content="Have you smiled today?"/> <meta property="og:image" content="https://lh3.googleusercontent.com/a/ACg8ocL9KRniiuLrmUi2MBHNcN2LMr1kUvzBhpbt-Kkv2pdZdg=s288-c-no"/> <meta property="og:image:secure_url" content="https://lh3.googleusercontent.com/a/ACg8ocL9KRniiuLrmUi2MBHNcN2LMr1kUvzBhpbt-Kkv2pdZdg=s288-c-no"/> <meta name="description" content="Have you smiled today?"/> <meta name="keywords" content="muhammad hadziq razin, muhammad, hadziq, razin, hajik, ojin"/>`);
  });
  $$payload.out.push(`<!---->`);
  {
    $$payload.out.push(`<section${attr_class(`${"opacity-0"} container relative mx-auto px-4 md:w-1/2 flex flex-col justify-center items-center gap-4 lg:gap-10`)}><h1 class="flex text-xl lg:text-4xl lg:leading-[3.5rem] text-dark/25 font-extrabold">Hi! <span>:D</span></h1> <div class="flex flex-col gap-1 lg:gap-3"><p class="text-lg lg:text-3xl font-medium text-dark/[0.85]">Mu·ham·mad <span class="font-bold text-dark">Ha·dziq</span> Ra·zin <span class="text-dark/40">/'hɑzɪk/</span></p> <p class="text-[0.65rem] lg:text-sm text-dark/60 font-light">Other names: Hajik, Hajiq, Haziq, Hazik, Ojin, wait what.</p> <p class="text-base/7 lg:text-2xl/9 font-medium text-dark/80">•a <span class="text-dark/90 font-semibold">Front-end Engineer</span> at <a href="https://spun.global" target="_blank" rel="noreferrer" class="underline decoration-[1.5px] md:decoration-[2.2px]">SPUN</a>.<br/> •a fresh graduate in <a href="https://cs.ui.ac.id" target="_blank" rel="noreferrer" class="underline decoration-[1.5px] md:decoration-[2.2px]">Computer Science</a> who's passionate about <span class="text-dark/90 font-semibold">software engineering</span>.<br/> •an <span class="text-dark/90 font-semibold">Ex-<a href="https://blue.blibli.com" target="_blank" class="text-dark/90 font-semibold underline decoration-[1.5px] md:decoration-[2.2px]">UX Engineer</a> Intern</span> at <a href="https://blibli.com" target="_blank" class="underline decoration-[1.5px] md:decoration-[2.2px]">Blibli</a>.</p> <p class="text-dark/60 text-xs lg:text-lg">See: <a href="/works" class="w-full underline text-secondary">Works</a> <span class="font-semibold">·</span> <a href="/projects" class="w-full underline text-secondary">Projects</a> <span class="font-semibold">·</span> <a href="/life" class="w-full underline text-secondary">Life</a></p></div> `);
    Socials($$payload);
    $$payload.out.push(`<!----></section>`);
  }
  $$payload.out.push(`<!---->`);
  pop();
}
export {
  _page as default
};
