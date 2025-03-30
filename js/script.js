document.addEventListener("DOMContentLoaded", function () {
  const starsContainer = document.createElement("div");
  starsContainer.classList.add("stars-container");
  document.body.prepend(starsContainer);

  function createFallingStars() {
    const interval = Math.random() * 2000 + 1000;

    const star = document.createElement("div");
    star.classList.add("star");

    const startX = Math.random();
    const endY = Math.random();

    star.style.setProperty("--star-x", startX);
    star.style.setProperty("--star-y", endY);

    star.style.animationDuration = Math.random() * 4000 + 4000 + "ms";

    starsContainer.appendChild(star);

    setTimeout(() => {
      star.remove();
    }, 8000);

    setTimeout(createFallingStars, interval);
  }

  function createGlowingStars() {
    const numStars = 20;

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      star.classList.add("glow-star");

      const size = Math.random() * 3 + 2;
      star.style.width = size + "px";
      star.style.height = size + "px";

      star.style.left = Math.random() * 100 + "vw";
      star.style.top = Math.random() * 100 + "vh";

      star.style.animationDelay = Math.random() * 4 + "s";

      starsContainer.appendChild(star);
    }
  }

  function typeWriter() {
    const commands = [
      "node server.js",
      "git push origin main",
      "npm install",
      "python3 script.py",
      "docker-compose up -d",
      "ssh bytespace@server.com",
      "./deploy.sh --production",
      "cd projects/web-app",
      "cat .gitignore",
    ];

    const typingText = document.querySelector(".typing-text");
    let commandIndex = 0;
    let charIndex = 0;
    let currentCommand = commands[commandIndex];
    let isTyping = true;
    let pauseBeforeDelete = 2000;
    let pauseBeforeTyping = 500;

    function type() {
      if (isTyping) {
        if (charIndex < currentCommand.length) {
          typingText.textContent += currentCommand.charAt(charIndex);
          charIndex++;
          setTimeout(type, Math.random() * 50 + 50);
        } else {
          isTyping = false;
          setTimeout(type, pauseBeforeDelete);
        }
      } else {
        if (charIndex > 0) {
          typingText.textContent = currentCommand.substring(0, charIndex - 1);
          charIndex--;
          setTimeout(type, Math.random() * 30 + 30);
        } else {
          isTyping = true;
          commandIndex = (commandIndex + 1) % commands.length;
          currentCommand = commands[commandIndex];
          setTimeout(type, pauseBeforeTyping);
        }
      }
    }

    type();
  }

  function createTerminalHistory() {
    const terminalBody = document.querySelector(".terminal-body");
    const commandHistory = [
      {
        command: "mkdir new-project",
        output: "Directory created successfully.",
      },
      { command: "npm init -y", output: "Initialized a package.json file" },
      {
        command: "git status",
        output:
          "On branch main\nYour branch is up to date with 'origin/main'.\n\nnothing to commit, working tree clean",
      },
    ];

    const typingLine = document.querySelector(".terminal-line.typing");

    commandHistory.forEach((entry) => {
      const commandLine = document.createElement("div");
      commandLine.classList.add("terminal-line");

      const prompt = document.createElement("span");
      prompt.classList.add("prompt");
      prompt.textContent = "bytespace@terminal:~$";

      const command = document.createElement("span");
      command.classList.add("command");
      command.textContent = entry.command;

      commandLine.appendChild(prompt);
      commandLine.appendChild(command);

      const outputLine = document.createElement("div");
      outputLine.classList.add("terminal-output");
      outputLine.innerHTML = entry.output.replace(/\n/g, "<br>");

      terminalBody.insertBefore(commandLine, typingLine);
      terminalBody.insertBefore(outputLine, typingLine);
    });

    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  createFallingStars();
  createGlowingStars();
  typeWriter();
  createTerminalHistory();
});
