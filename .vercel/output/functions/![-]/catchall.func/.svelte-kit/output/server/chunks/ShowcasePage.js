import { U as current_component, J as attr_class, V as clsx$1, O as slot, K as bind_props, F as pop, D as push, W as ensure_array_like, P as escape_html, S as attr, I as attr_style, T as head } from "./index.js";
import { I as Icon } from "./Icon.js";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import HiOutlineChevronDoubleDown from "svelte-icons-pack/hi/HiOutlineChevronDoubleDown.js";
import "svelte-icons-pack/hi/HiOutlineChevronDoubleUp.js";
function onDestroy(fn) {
  var context = (
    /** @type {Component} */
    current_component
  );
  (context.d ??= []).push(fn);
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function Badge($$payload, $$props) {
  push();
  let className = $$props["className"];
  $$payload.out.push(`<span${attr_class(clsx$1(cn("h-[31px] w-fit rounded-full px-4 text-sm text-light flex items-center bg-secondary", className)))}><!---->`);
  slot($$payload, $$props, "default", {});
  $$payload.out.push(`<!----></span>`);
  bind_props($$props, { className });
  pop();
}
function ProjectModal($$payload, $$props) {
  push();
  let onClose = $$props["onClose"];
  let project = $$props["project"];
  const each_array = ensure_array_like(project.children || []);
  $$payload.out.push(`<div class="fixed bg-black/70 top-0 left-0 height-screen overflow-hidden w-full z-10 svelte-eww1lh"><div class="h-full flex justify-center items-end sm:items-center"><div class="flex flex-col bg-light rounded-t-xl sm:rounded-b-xl overflow-clip w-full max-w-[639px] h-fit max-h-[85%] sm:max-h-[576px] shadow-lg"><div class="flex justify-between items-center gap-4 p-4"><h2 class="text-2xl text-dark">Projects on <span class="font-semibold">${escape_html(project.name)}</span></h2> <button>`);
  Badge($$payload, {
    children: ($$payload2) => {
      $$payload2.out.push(`<!---->close`);
    },
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----></button></div> <div class="overflow-auto scrollbar-hide p-4"><div class="flex flex-col gap-10"><!--[-->`);
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let child = each_array[$$index_1];
    const each_array_1 = ensure_array_like(child.techs);
    $$payload.out.push(`<hr class="first:hidden border-dark/20"/> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><img${attr("src", child.img)}${attr("alt", child.name)} class="object-cover rounded-lg aspect-[15/9]"/> <div class="flex flex-col gap-2">`);
    if (child.url) {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<a${attr("href", child.url)} target="_blank" rel="noopener"${attr("title", child.url)} class="text-lg font-medium text-dark underline">${escape_html(child.name)}</a>`);
    } else {
      $$payload.out.push("<!--[!-->");
      $$payload.out.push(`<div class="text-lg font-medium text-dark">${escape_html(child.name)}</div>`);
    }
    $$payload.out.push(`<!--]--> <p class="font-light text-dark/70 pb-4">${escape_html(child.description)}</p> <div class="flex gap-2 h-full items-end"><!--[-->`);
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let tech = each_array_1[$$index];
      $$payload.out.push(`<a${attr("href", tech.url)} target="_blank"><div class="flex gap-1 p-[9px] rounded-full hover:shadow-md duration-200"${attr_style(`background: ${tech.color}`)}>`);
      Icon($$payload, { src: tech.img, color: "#fff", title: tech.name, size: 13 });
      $$payload.out.push(`<!----></div></a>`);
    }
    $$payload.out.push(`<!--]--></div></div></div>`);
  }
  $$payload.out.push(`<!--]--></div></div></div></div></div>`);
  bind_props($$props, { onClose, project });
  pop();
}
function Project($$payload, $$props) {
  push();
  let isOpen;
  let project = $$props["project"];
  const techs = project.techs;
  const closeModal = () => {
    isOpen = false;
    document.body.classList.remove("body-lock-scroll");
  };
  onDestroy(() => {
    if (typeof document !== "undefined") document.body.classList.remove("body-lock-scroll");
  });
  isOpen = false;
  const each_array = ensure_array_like(techs);
  $$payload.out.push(`<div class="relative flex flex-col min-h-full w-[300px] overflow-hidden shadow-lg hover:shadow-xl duration-200 rounded-xl bg-white/70 border-[1px] border-dark/[0.13]"><img${attr("src", project.img)}${attr("alt", project.name)} class="aspect-[15/9] object-cover"/> <div class="min-h-full p-4 flex flex-col gap-2"><div class="flex items-center justify-between">`);
  if (project.url) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<a${attr("href", project.url)} target="_blank" rel="noopener"${attr("title", project.url)} class="font-semibold text-xl text-dark underline w-fit">${escape_html(project.name)}</a>`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<div class="font-semibold text-xl text-dark w-fit">${escape_html(project.name)}</div>`);
  }
  $$payload.out.push(`<!--]--> `);
  if (project.ongoing) {
    $$payload.out.push("<!--[-->");
    Badge($$payload, {
      className: "bg-green-500",
      children: ($$payload2) => {
        $$payload2.out.push(`<!---->ongoing`);
      },
      $$slots: { default: true }
    });
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></div> <p${attr_class("text-dark/70 svelte-n77cct", void 0, {
    "tech-space": techs.length > 0 || project.children?.length || 0 > 0
  })}>${escape_html(project.description)}</p> <div class="w-full absolute bottom-4 left-0 px-4 flex gap-2"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let tech = each_array[$$index];
    $$payload.out.push(`<a${attr("href", tech.url)} target="_blank"><div class="flex gap-1 p-[9px] rounded-full hover:shadow-md duration-200"${attr_style(`background: ${tech.color}`)}>`);
    Icon($$payload, { src: tech.img, color: "#fff", title: tech.name, size: 13 });
    $$payload.out.push(`<!----></div></a>`);
  }
  $$payload.out.push(`<!--]--> `);
  if (project.children?.length || 0 > 0) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<button class="ml-auto">`);
    Badge($$payload, {
      children: ($$payload2) => {
        $$payload2.out.push(`<!---->more..`);
      },
      $$slots: { default: true }
    });
    $$payload.out.push(`<!----></button>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></div></div></div> `);
  if (isOpen && project.children?.length || 0 > 0) {
    $$payload.out.push("<!--[-->");
    ProjectModal($$payload, { onClose: closeModal, project });
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]-->`);
  bind_props($$props, { project });
  pop();
}
function ShowcasePage($$payload, $$props) {
  push();
  let numDisp, toShow;
  let data = $$props["data"];
  let title = $$props["title"];
  let subtitle = $$props["subtitle"];
  numDisp = 3;
  toShow = data.slice(0, numDisp);
  const each_array = ensure_array_like(toShow);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(title)} | Hadziq Razin</title>`;
  });
  $$payload.out.push(`<section class="max-w-[1060px] flex flex-col items-center"><h1 class="text-[4rem] font-semibold text-dark">${escape_html(title)}</h1> <h3 class="text-sm text-dark/60">${escape_html(subtitle)}</h3> <div class="my-14 flex flex-wrap justify-center gap-10 px-10"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let project = each_array[$$index];
    $$payload.out.push(`<div>`);
    Project($$payload, { project });
    $$payload.out.push(`<!----></div>`);
  }
  $$payload.out.push(`<!--]--></div> `);
  if (data.length > 3) {
    $$payload.out.push("<!--[-->");
    {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<button class="flex gap-1 items-center text-dark opacity-40 animate-bounce">show more `);
      Icon($$payload, { src: HiOutlineChevronDoubleDown });
      $$payload.out.push(`<!----></button>`);
    }
    $$payload.out.push(`<!--]-->`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></section>`);
  bind_props($$props, { data, title, subtitle });
  pop();
}
export {
  ShowcasePage as S
};
