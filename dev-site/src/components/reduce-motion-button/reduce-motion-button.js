const HTML_EL = document.documentElement;
const LOCAL_KEY = "prefersReducedMotion";
const STATE_CLASS = "is-reduced-motion";
const EVENT_STATE_MAP = { true: "on", false: "off" };

let currentState = localStorage.getItem(LOCAL_KEY);
currentState = currentState ? currentState.toLowerCase() === "true" : false;

const FIRE_EVENT = function () {
  const EVENT = new CustomEvent(
    `wtc-${EVENT_STATE_MAP[currentState]}-reduce-motion`
  );
  window.dispatchEvent(EVENT);
};

const MATCH_MEDIA = function () {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

const HANDLE_CLICK_EVENT = function ({ currentTarget }) {
  toggleReduceMotion();

  currentTarget.setAttribute("aria-pressed", currentState.toString());
};

const toggleReduceMotion = function () {
  if (currentState) turnReduceMotionOff();
  else turnReduceMotionOn();

  return currentState;
};

const turnReduceMotionOn = function () {
  currentState = true;
  localStorage.setItem(LOCAL_KEY, currentState);

  HTML_EL.classList.add(STATE_CLASS);
  FIRE_EVENT();
};

var turnReduceMotionOff = function () {
  currentState = false;
  localStorage.setItem(LOCAL_KEY, currentState);

  HTML_EL.classList.remove(STATE_CLASS);
  FIRE_EVENT();
};

// Returns the current state
const getReduceMotionState = function () {
  const MQ = MATCH_MEDIA();

  if (MQ) return true;

  return currentState;
};

const initReduceMotionButton = function (button) {
  if (!button) return;

  const MQ = MATCH_MEDIA();
  const state = getReduceMotionState();

  if (MQ) button.setAttribute("hidden", "true");
  else button.addEventListener("click", HANDLE_CLICK_EVENT);

  button.setAttribute("aria-pressed", state.toString());

  if (state) turnReduceMotionOn();
  else turnReduceMotionOff();
};

export {
  initReduceMotionButton,
  getReduceMotionState,
  turnReduceMotionOn,
  turnReduceMotionOff,
  toggleReduceMotion,
};
