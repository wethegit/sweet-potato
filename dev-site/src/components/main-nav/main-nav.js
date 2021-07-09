const MAIN_NAV = document.querySelector(".main-nav");
const TOGGLER = MAIN_NAV.querySelector(".main-nav__toggler");
const LAST_FOCUSABLE = MAIN_NAV.querySelector(".main-nav__focus-end");

let isOpen = false;
let init = false;

const HANDLE_CLICK = function () {
  isOpen = !isOpen;
  TOGGLER.setAttribute("aria-expanded", isOpen);

  if (isOpen) MAIN_NAV.setAttribute("data-open", isOpen);
  else MAIN_NAV.removeAttribute("data-open");
};

const FOCUS_TOGGLER = () => {
  TOGGLER.focus();
};

const initMainNavigation = function () {
  if (init) return;
  init = true;

  if (MAIN_NAV) {
    TOGGLER.addEventListener("click", HANDLE_CLICK);
    LAST_FOCUSABLE.addEventListener("focus", FOCUS_TOGGLER);
  }
};

export { initMainNavigation };
