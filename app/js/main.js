window.addEventListener("DOMContentLoaded", () => {
  //TODO: https://css-tricks.com/moving-backgrounds-with-mouse-position/ - study !!!!

  //Elements

  const burgerMenu = document.querySelector(".header__burger");
  const cursorElement = document.querySelector(".cursor");
  const contactBtn = document.querySelector(".header__about-btn");
  const modalWindow = document.querySelector(".contact-me");
  const closeBtn = document.querySelector(".contact-me__close");

  //Show  Modal Window

  const showModal = (targetElement, modal) => {
    targetElement.addEventListener("click", () => {
      modal.classList.add("show");
      document.documentElement.style.overflowY = "hidden";
    });
  };

  //Mixitup

  let mixer = mixitup(".portfolio__items-wrapper", {
    load: {
      filter: ".websites",
    },
  });

  const hideModal = (targetElement, modal) => {
    targetElement.addEventListener("click", () => {
      modal.classList.remove("show");
      document.documentElement.style.overflowY = "auto";
    });
  };
  //Typeit

  new TypeIt(".header__about-title--typeit", {
    strings: "Front End Developer",
    speed: 200,
    waitUntilVisible: true,
  })
    // .delete(19, { delay: 100 })
    // .type("WordPress Developer", { speed: 200 })
    .go();

  //Darkmode theme

  const options = {
    time: "0.5s",
    mixColor: "#fff",
    backgroundColor: "#17181a",
    buttonColorDark: "#000",
    buttonColorLight: "#fff",
    saveInCookies: false,
    label: "🌓",
    autoMatchOsTheme: true,
  };

  const darkmode = new Darkmode(options);
  darkmode.showWidget();

  //Function for burger menu

  const burgerActive = (e) => {
    if (!e.target.classList.contains("active")) {
      e.target.classList.add("active");
      gsap.to(".about", 1, { clipPath: "circle(2500px at 100% -10%)" });
      document.body.classList.add("hide");
    } else {
      e.target.classList.remove("active");
      gsap.to(".about", 1, { clipPath: "circle(50px at 100% -10%)" });
      document.body.classList.remove("hide");
    }
  };
  //Function for cursor

  const cursor = (e) => {
    cursorElement.style.top = e.pageY + "px";
    cursorElement.style.left = e.pageX + "px";
  };

  //Function for active cursor

  const activeCursor = (e) => {
    const itemTarget = e.target;

    if (
      itemTarget.classList.contains("header__burger") ||
      itemTarget.classList.contains("header__burger-line") ||
      itemTarget.classList.contains("logo__img")
    ) {
      cursorElement.classList.add("cursor-active");
    } else {
      cursorElement.classList.remove("cursor-active");
    }
  };

  burgerMenu.addEventListener("click", burgerActive);
  window.addEventListener("mousemove", cursor);
  window.addEventListener("mouseover", activeCursor);
  showModal(contactBtn, modalWindow);
  hideModal(closeBtn, modalWindow);
});
