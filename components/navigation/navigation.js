const MAIN_NAV = document.querySelector(".main-nav");
const TOGGLER = MAIN_NAV.querySelector(".main-nav__toggler");
const CLOSE_BTN = MAIN_NAV.querySelector(".main-nav__close");
let isOpen = false;
let init = false;

const HANDLE_CLICK = function () {
  isOpen = !isOpen;
  TOGGLER.setAttribute("aria-expanded", isOpen);

  if (isOpen) MAIN_NAV.setAttribute("data-open", isOpen);
  else MAIN_NAV.removeAttribute("data-open");
};

const mnInit = function () {
  if (init) return;
  init = true;

  if (MAIN_NAV) {
    TOGGLER.addEventListener("click", HANDLE_CLICK);
    CLOSE_BTN.addEventListener("click", HANDLE_CLICK);
  }
};

const mnDestroy = function () {
  if (MAIN_NAV) {
    TOGGLER.removeEventListener("click", HANDLE_CLICK);
    CLOSE_BTN.removeEventListener("click", HANDLE_CLICK);
  }
};

export { mnInit, mnDestroy };
