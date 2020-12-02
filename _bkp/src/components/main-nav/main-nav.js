import { getElementPosition } from "wtc-utility-helpers";

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

const GET_SCROLL = function () {
  let doc = document.documentElement;
  return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
};

const GET_MIN_TOP = function () {
  return getElementPosition(MAIN_NAV).top + MAIN_NAV.clientHeight;
};

const HANDLE_SCROLL = function () {
  if (GET_SCROLL() > GET_MIN_TOP()) {
    MAIN_NAV.setAttribute("data-fixed", true);
  } else {
    MAIN_NAV.removeAttribute("data-fixed");
  }
};

const mnInit = function () {
  if (init) return;
  init = true;

  if (MAIN_NAV) {
    TOGGLER.addEventListener("click", HANDLE_CLICK);
    CLOSE_BTN.addEventListener("click", HANDLE_CLICK);
    window.addEventListener("scroll", HANDLE_SCROLL);
  }
};

const mnDestroy = function () {
  if (MAIN_NAV) {
    TOGGLER.removeEventListener("click", HANDLE_CLICK);
    CLOSE_BTN.removeEventListener("click", HANDLE_CLICK);
    window.removeEventListener("scroll", HANDLE_SCROLL);
  }
};

export { mnInit, mnDestroy };
