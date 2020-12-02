import Viewport from "wtc-controller-viewports";
import Gallery from "wtc-gallery-component";
import AutoplayVideo from "wtc-autoplay-video";

import linkSupportsPreload from "../../../polyfills/rel-preload";
import { rmInit } from "../../../components/reduce-motion/reduce-motion.js";
import { mnInit } from "../../../components/main-nav/main-nav.js";
import lazyImgInit from "../../../components/lazy-img/lazy-img.js";

// The browser doesn't support preload of styles so we append it
if (!linkSupportsPreload) {
  for (let link of document.querySelectorAll('[rel="preload"][as="style"]')) {
    link.setAttribute("rel", "stylesheet");
    link.onload = null;
  }
}

// Set reduce motion
rmInit();

// main nav
mnInit();

// Lazy Images
lazyImgInit();

// Viewports
const vpElements = document.querySelectorAll('[data-controller="Viewport"]');
if (vpElements && vpElements.length > 0) {
  for (let element of vpElements) {
    new Viewport(element);
  }
}

// Gallery
const galleryElements = document.querySelectorAll(
  '[data-controller="Gallery"]'
);

if (galleryElements && galleryElements.length > 0) {
  for (let element of galleryElements) {
    new Gallery(element, {
      nav: true,
      draggable: true,
      nextBtnMarkup: element.querySelector(".gallery__nav-markup--next")
        .innerHTML,
      prevBtnMarkup: element.querySelector(".gallery__nav-markup--prev")
        .innerHTML,
    });
  }
}

// Autoplay Videos
const autoplayVids = document.querySelectorAll(".autoplay-video");
for (let element of autoplayVids) {
  new AutoplayVideo(element);
}
