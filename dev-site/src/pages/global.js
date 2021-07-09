import Viewport from "wtc-controller-viewports";

import { initReduceMotionButton } from "../components/reduce-motion-button/reduce-motion-button.js";
import { initMainNavigation } from "../components/main-nav/main-nav.js";

// Set reduce motion
const reduceMotionButton = document.querySelector(".reduce-motion-button");
if (reduceMotionButton) initReduceMotionButton(reduceMotionButton);

// main nav
initMainNavigation();

// Viewports
const vpElements = document.querySelectorAll('[data-controller="Viewport"]');
for (let element of vpElements) {
  new Viewport(element);
}

console.log(SWEET_POTATO_BREAKPOINTS["large-up"]);
