document.addEventListener("DOMContentLoaded", function () {
  initTerminal();
  createMatrixEffect();
});

function initTerminal() {
  animateCursor();

  typeCommandSequence(
    [
      "command-1",
      "command-2",
      "command-3",
      "command-4",
      "command-5",
      "command-6",
      "command-7",
      "command-8",
      "command-9",
      "command-10",
      "command-11",
      "command-12",
      "command-13",
      "command-14",
      "command-15",
      "command-16",
      "command-17",
      "command-18",
      "command-19",
      "command-20",
      "command-21",
      "command-22",
      "command-23",
      "command-24",
      "command-25",
      "command-26",
      "command-27",
    ],
    30,
    function () {
      showElement("greeting");

      setTimeout(() => {
        typeCommandSequence(
          [
            "command-28",
            "command-29",
            "command-30",
            "command-31",
            "command-32",
            "command-33",
            "command-34",
            "command-35",
            "command-36",
            "command-37",
            "command-38",
            "command-39",
            "command-40",
          ],
          30,
          function () {
            showElement("about");

            setTimeout(() => {
              typeCommandSequence(["command-41"], 30, function () {
                showElement("file-list");
                addTerminalInteractivity();
              });
            }, 800);
          }
        );
      }, 800);
    }
  );
}

function typeCommandSequence(commandIds, speed, callback) {
  let currentIndex = 0;

  function typeNext() {
    if (currentIndex < commandIds.length) {
      const commandId = commandIds[currentIndex];
      typeCommand(commandId, speed, function () {
        currentIndex++;
        setTimeout(typeNext, 100);
      });
    } else if (callback) {
      callback();
    }
  }

  typeNext();
}

function typeCommand(elementId, speed, callback) {
  const element = document.getElementById(elementId);
  const text = element.innerHTML;
  element.innerHTML = "";
  element.style.opacity = "1";
  element.style.transform = "translateY(0)";

  let i = 0;
  const typing = setInterval(() => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(typing);
      if (callback) callback();
    }
  }, speed);
}

function showElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.style.display = "block";
    element.style.opacity = "1";
  }
}

function animateCursor() {
  const cursor = document.getElementById("cursor");
  if (cursor) {
    setInterval(() => {
      cursor.style.opacity = cursor.style.opacity === "0" ? "1" : "0";
    }, 500);
  }
}

function addTerminalInteractivity() {
  const terminalBody = document.querySelector(".terminal-body");
  const cursor = document.getElementById("cursor");

  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const newLine = document.createElement("div");
      newLine.className = "terminal-line";

      const prompt = document.createElement("span");
      prompt.className = "prompt";
      prompt.textContent = ">";

      const command = document.createElement("span");
      command.className = "command";
      command.textContent = "";

      newLine.appendChild(prompt);
      newLine.appendChild(command);

      terminalBody.insertBefore(newLine, cursor.parentNode);
      terminalBody.scrollTop = terminalBody.scrollHeight;
    }
  });
}

function createMatrixEffect() {
  const canvas = document.getElementById("matrix-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789こんにちは世界ばイトスペース";
  const fontSize = 14;
  const columns = canvas.width / fontSize;

  const drops = [];
  for (let i = 0; i < columns; i++) {
    drops[i] = Math.floor((Math.random() * -canvas.height) / fontSize);
  }

  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#7dcfff";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
      const text = characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.98) {
        drops[i] = 0;
      }

      drops[i]++;
    }
  }

  setInterval(draw, 35);

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}
