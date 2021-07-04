let fullPageWrap = document.querySelector("#fullpage");

new fullpage("#fullpage", {
  //options here
  autoScrolling: true,

  afterLoad: function (origin, destination, direction) {
    if (destination.index == 2) {
      fullpage_api.setAllowScrolling(false);
    }
  },
});

gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger, Flip);

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
});

const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "vertical",
  simulateTouch: true,
  mousewheel: {
    thresholdDelta: 100,
  },

  speed: 1000,
  parallax: true,
  resistanceRatio: 0,

  preventInteractionOnTransition: true,
});

swiper.on("slideChange", (swiper, event) => {
  if (swiper.activeIndex == 2) {
    swiper.allowSlideNext = false;
    swiper.allowSlidePrev = false;
    swiper.mousewheel.disable();
  }
});

var isScrolling;

window.addEventListener(
  "wheel",
  function (event) {
    window.clearTimeout(isScrolling);

    isScrolling = setTimeout(function () {
      if (swiper.activeIndex != 2) {
        return console.log("note target");
      }
      if (Math.sign(event.deltaY) == 1) {
        if (swiper2.activeIndex == 0 && swiper3.activeIndex == 0) {
          swiper2.slideNext();
          return;
        }
        if (swiper2.activeIndex == 1 && swiper3.activeIndex == 0) {
          swiper2.slideNext();
          swiper3.slideNext();
          return;
        }
        if (swiper2.activeIndex == 2 && swiper3.activeIndex == 1) {
          swiper2.slideNext();

          return;
        }
        if (swiper2.activeIndex == 3 && swiper3.activeIndex == 1) {
          swiper2.slideNext();
          swiper3.slideNext();

          return;
        }
      }

      if (Math.sign(event.deltaY) == -1) {
        console.log("run");
        if (swiper2.activeIndex == 4 && swiper3.activeIndex == 2) {
          swiper2.slidePrev();
          swiper3.slidePrev();
          return;
        }
        if (swiper2.activeIndex == 3 && swiper3.activeIndex == 1) {
          swiper2.slidePrev();

          return;
        }
        if (swiper2.activeIndex == 2 && swiper3.activeIndex == 1) {
          swiper2.slidePrev();
          swiper3.slidePrev();

          return;
        }
        if (swiper2.activeIndex == 1 && swiper3.activeIndex == 0) {
          swiper2.slidePrev();

          return;
        }
        if (swiper2.activeIndex == 0 && swiper3.activeIndex == 0) {
          swiper.allowSlideNext = true;
          swiper.allowSlidePrev = true;
          swiper.slidePrev();
          console.log("fire");
          return;
        }
      }
    }, 66);
  },
  false
);

swiper.on("touchEnd", (swiper, event) => {
  if (swiper.activeIndex != 2) {
    return console.log("not target");
  }

  if (swiper.swipeDirection == "next") {
    if (swiper2.activeIndex == 0 && swiper3.activeIndex == 0) {
      swiper2.slideNext();
      return;
    }
    if (swiper2.activeIndex == 1 && swiper3.activeIndex == 0) {
      swiper2.slideNext();
      swiper3.slideNext();
      return;
    }
    if (swiper2.activeIndex == 2 && swiper3.activeIndex == 1) {
      swiper2.slideNext();

      return;
    }
    if (swiper2.activeIndex == 3 && swiper3.activeIndex == 1) {
      swiper2.slideNext();
      swiper3.slideNext();

      return;
    }
  }

  if (swiper.swipeDirection == "prev") {
    if (swiper2.activeIndex == 4 && swiper3.activeIndex == 2) {
      swiper2.slidePrev();
      swiper3.slidePrev();
      return;
    }
    if (swiper2.activeIndex == 3 && swiper3.activeIndex == 1) {
      swiper2.slidePrev();

      return;
    }
    if (swiper2.activeIndex == 2 && swiper3.activeIndex == 1) {
      swiper2.slidePrev();
      swiper3.slidePrev();

      return;
    }
    if (swiper2.activeIndex == 1 && swiper3.activeIndex == 0) {
      swiper2.slidePrev();

      return;
    }
    if (swiper2.activeIndex == 0 && swiper3.activeIndex == 0) {
      swiper.allowSlideNext = true;
      swiper.allowSlidePrev = true;
      swiper.slidePrev();
      console.log("fire");
      return;
    }
  }
});

const swiper2 = new Swiper(".swiper-container2", {
  allowTouchMove: false,
  nested: true,
  parallax: true,
  resistanceRatio: 0,

  speed: 1000,

  // Navigation arrows

  direction: "vertical",

  // If we need pagination

  // Navigation arrows
});
const swiper3 = new Swiper(".swiper-container3", {
  allowTouchMove: false,
  nested: true,
  parallax: true,
  resistanceRatio: 0,
  speed: 1000,
});
