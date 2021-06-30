new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
});

gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger, Flip);

ScrollTrigger.matchMedia({
  // large

  // medium

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
});
