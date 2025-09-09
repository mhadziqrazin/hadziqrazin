import { G as fallback, I as attr_style, J as attr_class, K as bind_props, M as stringify, N as store_get, O as slot, P as escape_html, Q as unsubscribe_stores, F as pop, D as push } from "../../chunks/index.js";
import { p as page, n as navigating } from "../../chunks/stores.js";
function SpinLine($$payload, $$props) {
  let color = fallback($$props["color"], "#FF3E00");
  let unit = fallback($$props["unit"], "px");
  let duration = fallback($$props["duration"], "4s");
  let size = fallback($$props["size"], "60");
  let stroke = fallback($$props["stroke"], () => +size / 12 + unit, true);
  let pause = fallback($$props["pause"], false);
  $$payload.out.push(`<div class="wrapper svelte-nfuakd"${attr_style(`--size: ${stringify(size)}${stringify(unit)}; --color: ${stringify(color)}; --stroke: ${stringify(stroke)}; --floatSize: ${stringify(size)}; --duration: ${stringify(duration)}`)}><div${attr_class("line svelte-nfuakd", void 0, { "pause-animation": pause })}></div></div>`);
  bind_props($$props, { color, unit, duration, size, stroke, pause });
}
function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  let path;
  let year = (/* @__PURE__ */ new Date()).getFullYear();
  page.subscribe(($page) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", "G-GFBFGTQRGQ", { page_path: $page.url.pathname });
    }
  });
  path = store_get($$store_subs ??= {}, "$page", page).route.id;
  $$payload.out.push(`<div class="mx-auto overflow-x-clip height-screen flex flex-col justify-center svelte-19z5h4j">`);
  if (!!store_get($$store_subs ??= {}, "$navigating", navigating)) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<div class="absolute top-[85px] left-1/2 -translate-x-1/2 -translate-y-1/2">`);
    SpinLine($$payload, { size: 35, color: "#2B2E4AE0" });
    $$payload.out.push(`<!----></div>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> `);
  if (path === "/projects" || path === "/works" || path === "/life") {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<nav class="py-10"><ul class="flex justify-center gap-4 text-dark"><a href="/" class="opacity-50 hover:opacity-100 transition-all duration-200">Home</a> <a href="/works"${attr_class("opacity-50 hover:opacity-100 transition-all duration-200 svelte-19z5h4j", void 0, { "selected": path === "/works" })}>Works</a> <a href="/projects"${attr_class("opacity-50 hover:opacity-100 transition-all duration-200 svelte-19z5h4j", void 0, { "selected": path === "/projects" })}>Projects</a> <a href="/life"${attr_class("opacity-50 hover:opacity-100 transition-all duration-200 svelte-19z5h4j", void 0, { "selected": path === "/life" })}>Life</a></ul></nav>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> <div class="flex flex-grow justify-center"><!---->`);
  slot($$payload, $$props, "default", {});
  $$payload.out.push(`<!----></div> <div class="py-8 w-full flex flex-col items-center"><p class="text-[0.6rem] lg:text-base font-light text-dark/80">Created by <span class="font-semibold">Muhammad Hadziq Razin</span> © ${escape_html(year)}. All Rights Reserved.</p> <p class="text-[0.5rem] lg:text-sm font-light text-dark/80">Last updated: September 9, 2025</p></div></div>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _layout as default
};
