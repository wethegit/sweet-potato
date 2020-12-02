const LAZY_IMGS = document.querySelectorAll('img[loading="lazy"]');
const DISTANCE_THRESHOLD = 0;

const lazyImgInit = () => {
  if (LAZY_IMGS && LAZY_IMGS.length > 0) {
    // check if native lazy-loading is supported.
    // otherwise, fall back to our IntersectionObserver method of loading.
    if ("loading" in HTMLImageElement.prototype) {
      for (let img of LAZY_IMGS) {
        img.addEventListener(
          "load",
          () => {
            img.classList.add("loaded");
          },
          { once: true }
        );
        if (img.dataset.src) img.src = img.dataset.src;
        if (img.dataset.srcset) img.srcset = img.dataset.srcset;
      }
    } else {
      attachObserver();
    }
  }
};

const observerConfig = {
  root: null,
  rootMargin: `0px 0px ${DISTANCE_THRESHOLD}px 0px`,
  threshold: 0,
};

const attachObserver = () => {
  const observer = new IntersectionObserver((entries, self) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        loadImage(entry.target);
        self.unobserve(entry.target);
      }
    });
  }, observerConfig);

  for (let img of LAZY_IMGS) {
    observer.observe(img);
  }
};

const loadImage = (element) => {
  element.src = element.dataset.src;
  if (element.dataset.srcset) element.srcset = element.dataset.srcset;
  element.addEventListener(
    "load",
    () => {
      element.classList.add("loaded");
    },
    { once: true }
  );
};

export default lazyImgInit;
