const HTML_EL = document.documentElement;
const LOCAL_KEY = "prefersReducedMotion";
const STATE_CLASS = "is-reduced-motion";
let buttonList = [];
let currentState = localStorage.getItem(LOCAL_KEY);
currentState = currentState ? currentState.toLowerCase() === "true" : false;

const FIRE_EVENT = function () {
  const EVENT = new CustomEvent("wtc-reduce-motion", {
    detail: { state: currentState },
  });
  window.dispatchEvent(EVENT);
};

const TOGGLE = function () {
  if (currentState) rmOff();
  else rmOn();

  if (buttonList && buttonList.length > 0) {
    for (let btn of buttonList) {
      btn.setAttribute("aria-pressed", currentState.toString());
    }
  }
};

const MATCH_MEDIA = function () {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

const rmOn = function () {
  currentState = true;
  localStorage.setItem(LOCAL_KEY, currentState);
  HTML_EL.classList.add(STATE_CLASS);
  FIRE_EVENT();
};

var rmOff = function () {
  currentState = false;
  localStorage.setItem(LOCAL_KEY, currentState);
  HTML_EL.classList.remove(STATE_CLASS);
  FIRE_EVENT();
};

// Returns the current state
const rmGetState = function () {
  const MQ = MATCH_MEDIA();

  if (MQ) return true;

  return currentState;
};

const rmInit = function (buttons = '[data-controller="ReduceMotion"]') {
  if (typeof buttons === "object" && buttons.length <= 0) return;

  const ELEMENTS =
    typeof buttons === "string" ? document.querySelectorAll(buttons) : buttons;

  if (!ELEMENTS) return;

  const MQ = MATCH_MEDIA();
  const state = rmGetState();

  for (let button of ELEMENTS) {
    if (MQ) button.setAttribute("hidden", "true");
    else button.addEventListener("click", TOGGLE);

    button.setAttribute("aria-pressed", state.toString());
  }

  buttonList = [...buttonList, ...ELEMENTS];

  if (state) rmOn();
  else rmOff();
};

const rmDestroy = function () {
  if (buttonList && buttonList.length > 0) {
    for (let btn of buttonList) {
      btn.addEventListener("click", TOGGLE);
    }

    buttonList = [];
  }
};

export { rmGetState, rmOn, rmOff, rmInit, rmDestroy };
