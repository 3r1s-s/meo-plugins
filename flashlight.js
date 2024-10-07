const flashstyle = document.createElement('style');
flashstyle.textContent = `
  body:after {
    content: '';
    position: fixed;
    inset: -50vmax;
    z-index: 7;
    pointer-events: none;

    background-image: radial-gradient(circle, transparent -100px, var(--background) 200px);
    background-position: var(--flashx) var(--flashy);
    background-repeat: no-repeat;
    }

  .modal-back {
    z-index: 8;
  }
`;
document.head.appendChild(flashstyle);


function flashlight(e) {
  document.body.style.setProperty("--flashx", `${e.clientX - window.innerWidth / 2}px`);
  document.body.style.setProperty("--flashy", `${e.clientY - window.innerHeight / 2}px`);
}

addEventListener("pointermove", flashlight);
