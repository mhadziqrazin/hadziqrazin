import { G as fallback, X as spread_attributes, V as clsx, K as bind_props, F as pop, D as push } from "./index.js";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function Icon($$payload, $$props) {
  push();
  let src = $$props["src"];
  let size = fallback($$props["size"], "1em");
  let viewBox = fallback($$props["viewBox"], void 0);
  let color = fallback($$props["color"], void 0);
  let title = fallback($$props["title"], void 0);
  let className = fallback($$props["className"], "");
  let innerHtml;
  let attr = {};
  {
    attr = {};
    if (color) {
      if (src.a.stroke !== "none") {
        attr.stroke = color;
      }
      if (src.a.fill !== "none") {
        attr.fill = color;
      }
    }
  }
  {
    innerHtml = (title ? `<title>${title}</title>` : "") + src.c;
  }
  $$payload.out.push(`<svg${spread_attributes(
    {
      width: size,
      height: size,
      viewBox,
      "stroke-width": "0",
      class: clsx(className),
      ...src.a,
      ...attr,
      xmlns: "http://www.w3.org/2000/svg"
    },
    null,
    void 0,
    void 0,
    3
  )}>${html(innerHtml)}</svg>`);
  bind_props($$props, { src, size, viewBox, color, title, className });
  pop();
}
export {
  Icon as I
};
