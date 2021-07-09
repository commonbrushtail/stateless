gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger, Flip, ScrollToPlugin);

ScrollTrigger.matchMedia({
  // large
  // medium
  /*
  "(min-width: 320px) and (max-width: 768px)": function () {
    function s1Flip() {
      let containers1 = document.querySelector(".container.s1");
      let group1s1 = document.querySelector(".container.s1 .group1");
      let group2s1 = document.querySelector(".container.s1 .group2");
      let state1s1 = Flip.getState(group1s1);
      let state2s1 = Flip.getState(group2s1);

      containers1.style.flexDirection = "column";

      Flip.from(state1s1, {
        duration: 1,
      });
      Flip.from(state2s1, {
        duration: 1,
      });
    }
    let containers1 = document.querySelector(".container.s1");
    var s1TL = gsap.timeline({ paused: true });
    s1TL.from(containers1, {
      autoAlpha: 0,
      duration: 2,
    });
    s1TL.from(containers1, {
      onStart: () => {
        s1Flip();
      },
    });

    s1TL.to(".divider", {
      height: "25px",

      delay: 1.2,
    });
    s1TL.to(
      ".divider .inner",
      {
        width: "60vw",
        height: "2px",
      },
      "<"
    );
    s1TL.set(
      ".s1 .group2 .item-wrap .item2,.s1 .group2 .item-wrap .item3",
      {
        height: "auto",
      },
      "start"
    );

    s1TL.from(
      ".s1 .group2 .item-wrap .item2,.s1 .group2 .item-wrap .item3",
      {
        height: 0,
        duration: 0.5,
        ease: Power4.easeOut,
      },
      "<"
    );
    s1TL.to(
      ".s1 .group2 .item-wrap .item2,.s1 .group2 .item-wrap .item3",
      {
        autoAlpha: 1,
        duration: 0.3,
      },
      "<"
    );
    s1TL.set(
      ".s1 .group1 .item2",
      {
        height: "auto",
      },
      "start"
    );

    s1TL.from(
      ".s1 .group1 .item2",
      {
        height: 0,
        duration: 0.5,
        ease: Power4.easeOut,
      },
      "<"
    );
    s1TL.to(
      ".s1 .group1 .item2",
      {
        position: "static",
      },
      "<"
    );
    s1TL.to(
      ".s1 .group1 .item1",
      {
        textAlign: "center",
      },
      "<"
    );
    s1TL.to(
      ".s1 .group1 .item2",
      {
        autoAlpha: 1,
        delay: 0.2,
        duration: 0.5,
      },
      "<"
    );
    s1TL.to(
      ".s1 .group2 .item-wrap2",
      {
        fontSize: "110px",
        y: "0px",
      },
      "<"
    );

    s1TL.play();
  },

  "(min-width: 769px)": function () {
    var s1TL = gsap.timeline({ paused: true });
    s1TL.from(".s1 .group1 .item1", {
      x: "50%",
      delay: 1.5,
    });
    s1TL.from(
      ".s1 .group2 .item1,.s1 .group2 .item-wrap2",
      {
        autoAlpha: 0,
        duration: 1.5,
      },
      "<"
    );
    s1TL.to(".s1 .divider", {
      width: "5%",
    });
    s1TL.to(
      ".s1 .divider .inner",
      {
        height: "200px",
        width: "2px",
      },
      "<"
    );

    s1TL.set(
      ".s1 .group2 .item-wrap .item2,.s1 .group2 .item-wrap .item3",
      {
        height: "auto",
      },
      "start"
    );
    s1TL.from(
      ".s1 .group2 .item-wrap .item2,.s1 .group2 .item-wrap .item3",
      {
        height: 0,

        duration: 1,
        ease: Power4.easeOut,
      },
      "<"
    );
    s1TL.from(
      ".s1 .group2 .item-wrap .item2,.s1 .group2 .item-wrap .item3",
      {
        autoAlpha: 0,
        duration: 0.5,
      },
      "<"
    );
    s1TL.to(
      ".s1 .group1 .item2",
      {
        display: "block",
        autoAlpha: 1,
      },
      "<"
    );
    s1TL.to(
      ".group2 .item-wrap2",
      {
        fontSize: "200px",
        duration: 0.5,
      },
      "+=0"
    );
    s1TL.to(
      ".group1",
      {
        y: "-40%",
      },
      "<"
    );
    s1TL.play();
  },
  */
  "(min-width: 320px) and (max-width: 768px)": function () {},
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

var scene1 = document.getElementById("scene1");
var parallaxInstance = new Parallax(scene1, {
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
