var initial = `M 0 30 Q 50 30 100 30`;

let svg = document.querySelector("svg");
let path = document.querySelector("path");

let check = false;
let handler = null;

function enter() {
  if (check) return;
  check = true;

  handler = function (e) {
    const rect = svg.getBoundingClientRect();
    const viewBox = svg.viewBox.baseVal;

    const x = ((e.clientX - rect.left) / rect.width) * viewBox.width;
    const y = ((e.clientY - rect.top) / rect.height) * viewBox.height;

    let p = `M 0 30 Q ${x.toFixed(0)} ${y.toFixed(0)} 100 30`;
    gsap.to("path", {
      duration: 0.2,
      attr: { d: p },
    });
  };

  svg.addEventListener("mousemove", handler);
}

// ✅ Check if mouse enters y-range 25 to 35
svg.addEventListener("mousemove", (e) => {
  if (check) return;

  const rect = svg.getBoundingClientRect();
  const viewBox = svg.viewBox.baseVal;
  const y = ((e.clientY - rect.top) / rect.height) * viewBox.height;

  if (y >= 25 && y <= 35) {
    enter();
  }
});

// ✅ Reset on SVG leave
svg.addEventListener("mouseleave", () => {
  check = false;
  svg.removeEventListener("mousemove", handler);
  gsap.to("path", {
    attr: { d: initial },
    duration: 1,
    ease: "elastic.out(1.75,0.2)",
  });
});
