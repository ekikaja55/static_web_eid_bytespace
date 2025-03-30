document.addEventListener("DOMContentLoaded", function () {
  initParticles();

  createBinaryElements();

  createFloatingIcons();

  animateElements();

  adjustForMediaQueries();

  window.addEventListener("resize", function () {
    adjustForMediaQueries();
  });
});

function initParticles() {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#38bdf8",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.3,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#38bdf8",
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 0.5,
          },
        },
        push: {
          particles_nb: 4,
        },
      },
    },
    retina_detect: true,
  });
}

function createBinaryElements() {
  const container = document.getElementById("binary-container");
  if (!container) return;

  const width = window.innerWidth;
  const height = window.innerHeight;

  container.innerHTML = "";

  for (let i = 0; i < 25; i++) {
    const binary = document.createElement("div");
    binary.classList.add("binary");
    binary.style.left = `${Math.random() * width}px`;
    binary.style.top = `${Math.random() * height}px`;

    let binaryText = "";
    for (let j = 0; j < 8; j++) {
      binaryText += Math.round(Math.random());
    }
    binary.textContent = binaryText;
    container.appendChild(binary);

    gsap.to(binary, {
      y: "-=50",
      duration: 10 + Math.random() * 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: Math.random() * 5,
    });
  }
}

function createFloatingIcons() {
  const container = document.querySelector(".floating-icons");
  if (!container) return;

  const width = window.innerWidth;
  const height = window.innerHeight;
  const iconClasses = [
    "fa-code",
    "fa-terminal",
    "fa-database",
    "fa-js",
    "fa-python",
    "fa-html5",
    "fa-css3-alt",
    "fa-react",
    "fa-node",
    "fa-java",
    "fa-php",
    "fa-github",
    "fa-git-alt",
    "fa-aws",
  ];

  container.innerHTML = "";

  const numIcons = width < 768 ? 10 : 15;

  for (let i = 0; i < numIcons; i++) {
    const icon = document.createElement("i");
    const randomClass =
      iconClasses[Math.floor(Math.random() * iconClasses.length)];

    if (randomClass.includes("fa-")) {
      if (
        randomClass.startsWith("fa-git") ||
        randomClass === "fa-github" ||
        randomClass === "fa-node" ||
        randomClass === "fa-aws" ||
        randomClass === "fa-java" ||
        randomClass === "fa-php"
      ) {
        icon.className = `fa-brands ${randomClass}`;
      } else {
        icon.className = `fa-solid ${randomClass}`;
      }
    }

    icon.style.left = `${Math.random() * 90 + 5}%`;
    icon.style.top = `${Math.random() * 90 + 5}%`;
    icon.style.fontSize = `${Math.random() * 16 + 16}px`;
    icon.style.opacity = "0";
    container.appendChild(icon);

    gsap.to(icon, {
      opacity: 0.15,
      duration: 2,
      delay: Math.random() * 3,
    });

    gsap.to(icon, {
      y: "-=40",
      x: `${(Math.random() - 0.5) * 20}`,
      duration: 10 + Math.random() * 20,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: Math.random() * 5,
    });
  }
}

function animateElements() {
  const mainContent = document.querySelector(".main-container");
  if (mainContent) {
    mainContent.style.visibility = "visible";
  }

  const textElements = document.querySelectorAll(
    ".code-line, .greeting-title, .greeting-message"
  );
  textElements.forEach((element) => {
    element.style.display = "block";
  });

  gsap.fromTo(
    "#bytespace-text",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 1.5, ease: "back.out" }
  );

  gsap.fromTo(
    ".bracket-left",
    { opacity: 0, x: 30 },
    { opacity: 1, x: 0, duration: 1, ease: "back.out", delay: 0.3 }
  );

  gsap.fromTo(
    ".bracket-right",
    { opacity: 0, x: -30 },
    { opacity: 1, x: 0, duration: 1, ease: "back.out", delay: 0.3 }
  );

  const codeLines = document.querySelectorAll(".code-line");
  codeLines.forEach((line, index) => {
    gsap.fromTo(
      line,
      { opacity: 0, y: 10, display: "block" },
      { opacity: 1, y: 0, duration: 0.5, delay: 0.8 + index * 0.15 }
    );
  });

  gsap.fromTo(
    ".greeting-content",
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1, duration: 1, delay: 1.5 }
  );

  gsap.fromTo(
    ".greeting-title",
    { opacity: 0, y: 15 },
    { opacity: 1, y: 0, duration: 0.8, delay: 1.7 }
  );

  gsap.fromTo(
    ".greeting-message",
    { opacity: 0, y: 15 },
    { opacity: 1, y: 0, duration: 0.8, delay: 1.9 }
  );

  gsap.fromTo(
    ".gradient-text",
    { opacity: 0 },
    { opacity: 1, duration: 1.2, delay: 1.2 }
  );

  const cursor = document.querySelector(".cursor");
  if (cursor) {
    gsap.to(cursor, {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.6,
    });
  }

  gsap.fromTo(
    ".footer",
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 1, delay: 2.5 }
  );

  gsap.fromTo(
    ".lantern-left",
    { opacity: 0, y: 30 },
    { opacity: 0.7, y: 0, duration: 1.5, delay: 2 }
  );

  gsap.fromTo(
    ".lantern-right",
    { opacity: 0, y: 30 },
    { opacity: 0.7, y: 0, duration: 1.5, delay: 2.3 }
  );
}

function adjustForMediaQueries() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const logo = document.querySelector(".logo");
  const greetingCard = document.querySelector(".greeting-card");
  const codeDecorations = document.querySelector(".code-decoration");
  const hiddenMobileElements = document.querySelectorAll(".code-hidden-mobile");

  if (logo) {
    if (width < 380) {
      logo.style.fontSize = "3rem";
    } else if (width < 640) {
      logo.style.fontSize = "4rem";
    } else if (width < 768) {
      logo.style.fontSize = "6rem";
    } else if (width < 1024) {
      logo.style.fontSize = "7rem";
    } else {
      logo.style.fontSize = "8rem";
    }
  }

  if (codeDecorations) {
    codeDecorations.style.display = width >= 640 ? "block" : "none";
  }

  if (greetingCard) {
    if (width < 640) {
      greetingCard.style.padding = "0.5rem";
    } else {
      greetingCard.style.padding = "0";
    }
  }

  hiddenMobileElements.forEach((element) => {
    element.style.display = width < 640 ? "none" : "block";
  });

  if (width < 768) {
    if (window.pJSDom && window.pJSDom[0]) {
      window.pJSDom[0].pJS.particles.number.value = 40;
      window.pJSDom[0].pJS.fn.particlesRefresh();
    }
  }

  if (width < 380) {
    document.documentElement.style.setProperty(
      "--greeting-font-size",
      "0.9rem"
    );
  } else {
    document.documentElement.style.setProperty(
      "--greeting-font-size",
      "1.1rem"
    );
  }
}

function addTypewriterEffect() {
  const textElement = document.querySelector(".execution");
  if (!textElement) return;

  const text = textElement.textContent;
  textElement.textContent = "";

  let i = 0;
  const typeSpeed = 100;

  function type() {
    if (i < text.length) {
      textElement.textContent += text.charAt(i);
      i++;
      setTimeout(type, typeSpeed);
    }
  }

  setTimeout(() => {
    type();
  }, 3000);
}

setTimeout(addTypewriterEffect, 2000);

function addPulseToGreeting() {
  const greetingTitle = document.querySelector(".greeting-title");
  if (!greetingTitle) return;

  gsap.to(greetingTitle, {
    scale: 1.05,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
}

function revealHiddenContent() {
  const allElements = document.querySelectorAll("*");
  allElements.forEach((element) => {
    if (
      window.getComputedStyle(element).display === "none" &&
      !element.classList.contains("code-hidden-mobile")
    ) {
      gsap.to(element, {
        display: "block",
        opacity: 1,
        duration: 1,
      });
    }
  });
}

setTimeout(revealHiddenContent, 3000);
setTimeout(addPulseToGreeting, 3000);

document.fonts.ready.then(() => {
  const textElements = document.querySelectorAll("h1, h2, p, .code-line");
  textElements.forEach((el) => {
    el.style.opacity = "0.99";
    setTimeout(() => {
      el.style.opacity = "1";
    }, 10);
  });
});
