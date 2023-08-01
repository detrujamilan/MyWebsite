function scrollHeader() {
  const e = document.getElementById("header");
  this.scrollY >= 50
    ? e.classList.add("scroll-header")
    : e.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalClose = document.querySelectorAll(".services__modal-close");
let modal = function (e) {
  modalViews[e].classList.add("active-modal");
};
modalBtns.forEach((e, t) => {
  e.addEventListener("click", () => {
    modal(t);
  });
}),
  modalClose.forEach((e) => {
    e.addEventListener("click", () => {
      modalViews.forEach((e) => {
        e.classList.remove("active-modal");
      });
    });
  });
let mixer = mixitup(".work__container", {
  selectors: { target: ".work__card" },
  animation: { duration: 300 },
});
const workLinks = document.querySelectorAll(".work__item");
function activeWork(e) {
  workLinks.forEach((e) => {
    e.classList.remove("active-work");
  }),
    e.classList.add("active-work");
}
workLinks.forEach((e) => {
  e.addEventListener("click", () => {
    activeWork(e);
  });
});
let swiperTestimonial = new Swiper(".testimonial__container", {
  spaceBetween: 24,
  loop: !0,
  grabCursor: !0,
  pagination: { el: ".swiper-pagination", clickable: !0 },
  breakpoints: {
    576: { slidesPerView: 2 },
    768: { slidesPerView: 2, spaceBetween: 48 },
  },
});
const sections = document.querySelectorAll("section[id]");
function scrollActive() {
  const e = window.pageYOffset;
  sections.forEach((t) => {
    const o = t.offsetHeight,
      s = t.offsetTop - 58,
      a = t.getAttribute("id");
    e > s && e <= s + o
      ? document
          .querySelector(".nav__menu a[href*=" + a + "]")
          .classList.add("active-link")
      : document
          .querySelector(".nav__menu a[href*=" + a + "]")
          .classList.remove("active-link");
  });
}
window.addEventListener("scroll", scrollActive);
const themeButton = document.getElementById("theme-button"),
  lightTheme = "light-theme",
  iconTheme = "bx-sun",
  selectedTheme = localStorage.getItem("selected-theme"),
  selectedIcon = localStorage.getItem("selected-icon"),
  getCurrentTheme = () =>
    document.body.classList.contains(lightTheme) ? "dark" : "light",
  getCurrentIcon = () =>
    themeButton.classList.contains("bx-sun") ? "bx bx-moon" : "bx bx-sun";
selectedTheme &&
  (document.body.classList["dark" === selectedTheme ? "add" : "remove"](
    lightTheme
  ),
  themeButton.classList["bx bx-moon" === selectedIcon ? "add" : "remove"](
    "bx-sun"
  )),
  themeButton.addEventListener("click", () => {
    document.body.classList.toggle(lightTheme),
      themeButton.classList.toggle("bx-sun"),
      localStorage.setItem(
        "selected-theme",
        document.body.classList.contains(lightTheme) ? "dark" : "light"
      ),
      localStorage.setItem(
        "selected-icon",
        themeButton.classList.contains("bx-sun") ? "bx bx-moon" : "bx bx-sun"
      );
  });
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: !0,
});
sr.reveal(".nav__menu", {
  delay: 100,
  scale: 0.1,
  origin: "bottom",
  distance: "300px",
}),
  sr.reveal(".home__data"),
  sr.reveal(".home__handle", { delay: 100 }),
  sr.reveal(".home__social, .home__scroll", { delay: 100, origin: "bottom" }),
  sr.reveal(".about__img", {
    delay: 100,
    origin: "left",
    scale: 0.9,
    distance: "30px",
  }),
  sr.reveal(".about__data, .about__description, .about__button-contact", {
    delay: 100,
    scale: 0.9,
    origin: "right",
    distance: "30px",
  }),
  sr.reveal(".skills__content", {
    delay: 100,
    scale: 0.9,
    origin: "bottom",
    distance: "30px",
  }),
  sr.reveal(".services__title, services__button", {
    delay: 100,
    scale: 0.9,
    origin: "top",
    distance: "30px",
  }),
  sr.reveal(".work__card", {
    delay: 100,
    scale: 0.9,
    origin: "bottom",
    distance: "30px",
  }),
  sr.reveal(".testimonial__container", {
    delay: 100,
    scale: 0.9,
    origin: "bottom",
    distance: "30px",
  }),
  sr.reveal(".contact__info, .contact__title-info", {
    delay: 100,
    scale: 0.9,
    origin: "left",
    distance: "30px",
  }),
  sr.reveal(".contact__form, .contact__title-form", {
    delay: 100,
    scale: 0.9,
    origin: "right",
    distance: "30px",
  }),
  sr.reveal(".footer, footer__container", {
    delay: 100,
    scale: 0.9,
    origin: "bottom",
    distance: "30px",
  });
