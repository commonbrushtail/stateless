gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger, Flip, ScrollToPlugin);

ScrollTrigger.matchMedia({
  "(min-width: 320px) and (max-width: 1024px)": function () {
    var s1TL = gsap.timeline();
    s1TL.set(".a2, .a3, .a4, .a5", {
      autoAlpha: 0,
    });
    s1TL.set(".a3, .a4, .a5", {
      position: "absolute",
      autoAlpha: 0,
    });
    s1TL.fromTo(
      ".a1",
      {
        autoAlpha: 0,
      },
      {
        scale: 1.3,
        autoAlpha: 1,
        duration: 2,
      }
    );
    s1TL.to(".a1", {
      scale: 1,
    });
    s1TL.to(".a2", {
      autoAlpha: 1,
    });
    s1TL.fromTo(
      ".a3",
      {
        position: "static",
        autoAlpha: 0,
        width: 0,
      },
      {
        autoAlpha: 1,
        width: "100%",
        duration: 1,
      }
    );
    s1TL.to(".a3", {
      marginTop: "20px",
      marginBottom: "20px",
    });
    s1TL.to(
      ".a3",
      {
        width: "80%",
      },
      "<"
    );
    s1TL.fromTo(
      ".a4",
      {
        position: "absolute",
      },
      {
        autoAlpha: 1,
      },
      "<"
    );
    s1TL.to(".aWrap", {
      y: "-50%",
    });
    s1TL.to(".a5", {
      scale: 3,
      autoAlpha: 1,
      x: "250%",
      y: "7%",
    });
    s1TL.to(
      ".a4",
      {
        autoAlpha: 1,
        x: "-35%",
      },
      "<"
    );

    /*
    s1TL.to(".a2", {
      display: "block",
      autoAlpha: 1,
      duration: 1.5,
    });
    */
  },
  "(min-width: 1025px)": function () {
    var s1TL = gsap.timeline();
    s1TL.set(".a2, .a3, .a4, .a5", {
      autoAlpha: 0,
    });
    s1TL.set(".a3, .a4, .a5", {
      position: "absolute",
      autoAlpha: 0,
    });
    s1TL.fromTo(
      ".a1",
      {
        autoAlpha: 0,
      },
      {
        scale: 1.3,
        autoAlpha: 1,
        duration: 2,
      }
    );
    s1TL.to(".a1", {
      scale: 1,
    });
    s1TL.to(".a2", {
      autoAlpha: 1,
    });
    s1TL.to(".a1-2-wrap", {
      x: "-60%",
    });
    s1TL.to(".a3", {
      autoAlpha: 1,
    });
    s1TL.fromTo(
      ".a4",
      {
        x: "50%",
        y: "-14%",
      },
      {
        x: "65%",
        y: "-14%",
        autoAlpha: 1,
      }
    );
    s1TL.fromTo(
      ".a5",
      {
        x: "1200%",
        y: "-42%",
      },
      {
        x: "1449%",
        y: "-42%",

        autoAlpha: 1,
      },
      "<"
    );
    s1TL.to(".a5", {
      scale: 6,
      x: "1638%",
      y: "45%",
    });
  },
});

new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  onLeave: function (origin, destination, direction) {
    if (origin.item.classList.contains("beforeQuote") && destination.item.classList.contains("fpQuoteSlide1")) {
      gsap.fromTo(
        ".quote-slide",
        {
          opacity: 1,
          y: "100vh",
        },
        {
          opacity: 1,
          y: 0,
        }
      );
    }
    if (destination.item.classList.contains("beforeQuote") && origin.item.classList.contains("fpQuoteSlide1")) {
      gsap.fromTo(
        ".quote-slide",
        {
          opacity: 1,
          y: 0,
        },
        {
          opacity: 1,
          y: "100vh",
        }
      );
    }

    if (destination.item.classList.contains("afterQuote") && origin.item.classList.contains("fpQuoteSlide5")) {
      gsap.fromTo(
        ".quote-slide",
        {
          opacity: 1,
          y: 0,
        },
        {
          opacity: 0,
          y: "-100vh",
        }
      );
    }

    if (destination.item.classList.contains("fpQuoteSlide5") && origin.item.classList.contains("afterQuote")) {
      gsap.fromTo(
        ".quote-slide",
        {
          opacity: 1,
          y: "-100vh",
        },
        {
          opacity: 1,
          y: 0,
        }
      );
    }

    if (destination.item.classList.contains("fpQuoteSlide1")) {
      swiper.slideTo(0);
      swiper2.slideTo(0);
    }
    if (destination.item.classList.contains("fpQuoteSlide2")) {
      swiper.slideTo(1);
      swiper2.slideTo(0);
    }
    if (destination.item.classList.contains("fpQuoteSlide3")) {
      swiper.slideTo(2);
      swiper2.slideTo(1);
    }
    if (destination.item.classList.contains("fpQuoteSlide4")) {
      swiper.slideTo(3);
      swiper2.slideTo(1);
    }
    if (destination.item.classList.contains("fpQuoteSlide5")) {
      swiper.slideTo(4);
      swiper2.slideTo(2);
    }
  },
});

const swiper = new Swiper(".swiper-container", {
  allowTouchMove: false,
  parallax: true,
  resistanceRatio: 0,
  speed: 1000,
  direction: "vertical",
});

const swiper2 = new Swiper(".swiper-container2", {
  allowTouchMove: false,
  nested: true,
  parallax: true,
  resistanceRatio: 0,
  speed: 1000,
});

var scene23 = document.getElementById("scene23");
var parallaxInstance = new Parallax(scene23, {
  pointerEvents: true,
});
var rippleTimeLine = gsap.timeline({
  pause: true,
  reverse: true,
});

let ob = document.querySelectorAll(".ob");
let ob1 = document.querySelector(".ob1");
gsap.set(ob1, {
  scale: 1.5,
});
gsap.set(ob1.children[1], {
  scale: 0.55,
});
gsap.set(ob1.children[2], {
  height: "100%",
  autoAlpha: 1,
});
ob.forEach((element) => {
  element.addEventListener("mouseover", () => {
    rippleTimeLine.fromTo(
      element.firstElementChild,
      {
        scale: 1.01,
      },
      {
        scale: 1.3,
        duration: 0.8,
        repeat: -1,
      }
    );
  });
  element.addEventListener("mouseleave", () => {
    rippleTimeLine.clear();
    rippleTimeLine.to(element.firstElementChild, {
      scale: 1,
    });
  });
  element.addEventListener("click", (e) => {
    ob.forEach((element) => {
      gsap.to(element, {
        scale: 1,
      });
      gsap.to(element.children[1], {
        scale: 1,
      });
      gsap.to(element.children[2], {
        height: 0,
        autoAlpha: 0,
      });
    });
    gsap.to(e.currentTarget, {
      scale: 1.5,
    });
    gsap.to(e.currentTarget.children[1], {
      scale: 0.55,
    });
    gsap.to(e.currentTarget.children[2], {
      height: "100%",
      autoAlpha: 1,
    });
  });
});

let oh = document.querySelectorAll(".oh");
let oh1 = document.querySelector(".oh1");

gsap.set(oh1.children[1], {
  scale: 0.7,
});
gsap.set(oh1.children[2], {
  height: "max-content",
  autoAlpha: 1,
  marginTop: "10px",
});
oh.forEach((element) => {
  element.addEventListener("mouseover", () => {
    rippleTimeLine.fromTo(
      element.firstElementChild,
      {
        scale: 1.01,
      },
      {
        scale: 1.3,
        duration: 0.8,
        repeat: -1,
      }
    );
  });
  element.addEventListener("mouseleave", () => {
    rippleTimeLine.clear();
    rippleTimeLine.to(element.firstElementChild, {
      scale: 1,
    });
  });
  element.addEventListener("click", (e) => {
    oh.forEach((element) => {
      gsap.to(element, {
        scale: 1,
      });
      gsap.to(element.children[1], {
        scale: 1,
      });
      gsap.to(element.children[2], {
        height: 0,
        autoAlpha: 0,
        marginTop: "0px",
      });
    });

    gsap.to(e.currentTarget.children[1], {
      scale: 0.7,
    });
    gsap.to(e.currentTarget.children[2], {
      height: "max-content",
      autoAlpha: 1,
      marginTop: "10px",
    });
  });
});
