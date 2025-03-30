document.addEventListener("DOMContentLoaded", function () {
  createStars();

  addInteractiveEffects();
});

function createStars() {
  const starsContainer = document.getElementById("stars");
  const numStars = 150;

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    const x = Math.random() * 100;
    const y = Math.random() * 100;

    const size = Math.random() * 3 + 1;

    const delay = Math.random() * 4;

    const duration = 3 + Math.random() * 3;

    star.style.left = `${x}%`;
    star.style.top = `${y}%`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.animationDelay = `${delay}s`;
    star.style.animationDuration = `${duration}s`;

    if (i % 20 === 0) {
      createShootingStar();
    }

    starsContainer.appendChild(star);
  }
}

function createShootingStar() {
  const starsContainer = document.getElementById("stars");
  const shootingStar = document.createElement("div");

  shootingStar.style.position = "absolute";
  shootingStar.style.width = "2px";
  shootingStar.style.height = "2px";
  shootingStar.style.backgroundColor = "white";
  shootingStar.style.borderRadius = "50%";
  shootingStar.style.boxShadow = "0 0 10px 2px white";

  const startX = Math.random() * 100;
  shootingStar.style.left = `${startX}%`;
  shootingStar.style.top = "0";

  const animation = shootingStar.animate(
    [
      {
        top: "0",
        left: `${startX}%`,
        opacity: 1,
        boxShadow: "0 0 10px 2px white, 0 0 20px 5px rgba(255, 255, 255, 0.5)",
        offset: 0,
      },
      {
        top: "100vh",
        left: `${startX - 20 + Math.random() * 40}%`,
        opacity: 0,
        boxShadow: "0 0 0 0 white",
        offset: 1,
      },
    ],
    {
      duration: 1000 + Math.random() * 2000,
      easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
    }
  );

  starsContainer.appendChild(shootingStar);

  animation.onfinish = () => {
    shootingStar.remove();

    setTimeout(createShootingStar, 3000 + Math.random() * 5000);
  };
}

function addInteractiveEffects() {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("mousemove", function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const tiltX = (y / rect.height - 0.5) * 10;
      const tiltY = (x / rect.width - 0.5) * -10;

      this.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`;

      const shine =
        this.querySelector(".shine") || document.createElement("div");
      if (!this.querySelector(".shine")) {
        shine.classList.add("shine");
        shine.style.position = "absolute";
        shine.style.top = "0";
        shine.style.left = "0";
        shine.style.right = "0";
        shine.style.bottom = "0";
        shine.style.pointerEvents = "none";
        shine.style.background =
          "radial-gradient(circle at " +
          x +
          "px " +
          y +
          "px, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 80%)";
        this.appendChild(shine);
      } else {
        shine.style.background =
          "radial-gradient(circle at " +
          x +
          "px " +
          y +
          "px, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 80%)";
      }
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "";

      const shine = this.querySelector(".shine");
      if (shine) {
        shine.remove();
      }
    });
  });

  const icons = document.querySelectorAll(".icon");

  icons.forEach((icon) => {
    icon.addEventListener("click", function () {
      this.style.transform = "scale(0.9)";

      setTimeout(() => {
        this.style.transform = "scale(1.1)";
      }, 150);

      const ripple = document.createElement("div");
      ripple.style.position = "absolute";
      ripple.style.width = "100%";
      ripple.style.height = "100%";
      ripple.style.backgroundColor = "rgba(0, 180, 216, 0.2)";
      ripple.style.borderRadius = "50%";
      ripple.style.transform = "scale(0)";
      ripple.style.transition = "transform 0.6s, opacity 0.6s";

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.style.transform = "scale(2)";
        ripple.style.opacity = "0";
      }, 10);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  const greeting = document.querySelector(".greeting");
  const originalText = greeting.textContent;
  greeting.textContent = "";

  let i = 0;
  const typeInterval = setInterval(() => {
    if (i < originalText.length) {
      greeting.textContent += originalText.charAt(i);
      i++;
    } else {
      clearInterval(typeInterval);
    }
  }, 100);
}

setTimeout(createShootingStar, 2000);
