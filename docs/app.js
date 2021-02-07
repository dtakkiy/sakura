const makeSakura = () => {
  requestAnimationFrame(makeSakura);
  const sakura = document.createElement("sakura");
  sakura.style.left = Math.random() * window.innerHeight + "px";
  sakura.style.top = Math.random() * window.innerWidth + "px";

  const rx = Math.random() * 360;
  const ry = Math.random() * 360;
  const rz = Math.random() * 360;

  sakura
    .animate(
      [
        {
          transform: `rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg) translate3d(0, 0, 0)`,
          opacity: 0,
        },
        {
          transform: `rotateX(0deg) rotateY(0deg) rotateZ(0deg) translate3d(0, 0, 1000px)`,
          opacity: 1,
        },
      ],
      {
        duration: 2000,
        fill: "both",
      }
    )
    .addEventListener("finish", (event) => {
      document.body.removeChild(sakura);
    });

  document.body.appendChild(sakura);
};

makeSakura();

document.body.animate([{ background: "#000" }, { background: "#fdd" }], {
  direction: "alternate",
  iterations: Infinity,
  duration: 10000,
  fill: "both",
});
