let currentDirection = null;
      let tween = null;

      function moveMarquee(direction) {
        if (tween) tween.kill();

        const rotation = direction === "right" ? 180 : 0;
        const xValue = direction === "right" ? "-100%" : "0%";
        const fromX = direction === "right" ? "0%" : "-100%";

        gsap.to("#image img", {
          rotate: rotation,
          duration: 0.7,
        });

        tween = gsap.fromTo(
          ".in",
          { x: fromX },
          {
            x: xValue,
            duration: 5,
            ease: "none",
            repeat: -1,
          }
        );
      }

      window.addEventListener("wheel", (e) => {
        if (e.deltaY > 0 && currentDirection !== "right") {
          currentDirection = "right";
          moveMarquee("right");
        } else if (e.deltaY < 0 && currentDirection !== "left") {
          currentDirection = "left";
          moveMarquee("left");
        }
      });
