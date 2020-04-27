import { check } from "../utils/auth.js";

function install(Vue, options = {}) {
  Vue.directive(options.name || "auth", {
    inserted: function(el, binding) {
        console.log(el.parentNode);
      if (!check(binding.value)) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    },
  });
}

export default { install };
