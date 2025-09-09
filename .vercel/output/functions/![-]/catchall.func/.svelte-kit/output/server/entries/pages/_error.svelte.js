import { N as store_get, Q as unsubscribe_stores, F as pop, D as push } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
function _error($$payload, $$props) {
  push();
  var $$store_subs;
  let animate = false;
  $$payload.out.push(`<div class="flex flex-col justify-center items-center">`);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> `);
  if (store_get($$store_subs ??= {}, "$page", page).status == 404 && animate) ;
  else {
    $$payload.out.push("<!--[!-->");
    if (store_get($$store_subs ??= {}, "$page", page).status != 404 && animate) ;
    else {
      $$payload.out.push("<!--[!-->");
    }
    $$payload.out.push(`<!--]-->`);
  }
  $$payload.out.push(`<!--]--></div>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _error as default
};
