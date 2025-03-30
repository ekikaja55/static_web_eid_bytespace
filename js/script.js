document.addEventListener("DOMContentLoaded", function () {
  // Create stars container for falling stars
  const starsContainer = document.createElement("div");
  starsContainer.classList.add("stars-container");
  document.body.prepend(starsContainer);

  // Create falling stars animation
  function createFallingStars() {
    // Create a new star every 1-3 seconds
    const interval = Math.random() * 2000 + 1000;

    const star = document.createElement("div");
    star.classList.add("star");

    // Set random starting position and trajectory
    const startX = Math.random();
    const endY = Math.random();

    star.style.setProperty("--star-x", startX);
    star.style.setProperty("--star-y", endY);

    // Randomize animation duration between 4-8 seconds
    star.style.animationDuration = Math.random() * 4000 + 4000 + "ms";

    starsContainer.appendChild(star);

    // Remove star after animation completes
    setTimeout(() => {
      star.remove();
    }, 8000);

    // Create next star
    setTimeout(createFallingStars, interval);
  }

  // Create glowing stars in the background
  function createGlowingStars() {
    const numStars = 20;

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      star.classList.add("glow-star");

      // Random size between 2-5px
      const size = Math.random() * 3 + 2;
      star.style.width = size + "px";
      star.style.height = size + "px";

      // Random position
      star.style.left = Math.random() * 100 + "vw";
      star.style.top = Math.random() * 100 + "vh";

      // Random animation delay
      star.style.animationDelay = Math.random() * 4 + "s";

      starsContainer.appendChild(star);
    }
  }

  // Terminal typing animation
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
    let pauseBeforeDelete = 2000; // Time before deleting in ms
    let pauseBeforeTyping = 500; // Time before typing new command in ms

    function type() {
      if (isTyping) {
        // Typing
        if (charIndex < currentCommand.length) {
          typingText.textContent += currentCommand.charAt(charIndex);
          charIndex++;
          setTimeout(type, Math.random() * 50 + 50); // Random delay between keystrokes
        } else {
          // Pause before deleting
          isTyping = false;
          setTimeout(type, pauseBeforeDelete);
        }
      } else {
        // Deleting
        if (charIndex > 0) {
          typingText.textContent = currentCommand.substring(0, charIndex - 1);
          charIndex--;
          setTimeout(type, Math.random() * 30 + 30); // Random delay between deletes
        } else {
          // Switch to next command
          isTyping = true;
          commandIndex = (commandIndex + 1) % commands.length;
          currentCommand = commands[commandIndex];
          setTimeout(type, pauseBeforeTyping);
        }
      }
    }

    // Start typing animation
    type();
  }

  // Create terminal history entries dynamically
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

    // Insert new command history before the typing line
    const typingLine = document.querySelector(".terminal-line.typing");

    commandHistory.forEach((entry) => {
      // Create command line
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

      // Create output line
      const outputLine = document.createElement("div");
      outputLine.classList.add("terminal-output");
      outputLine.innerHTML = entry.output.replace(/\n/g, "<br>");

      // Add to terminal body before the typing line
      terminalBody.insertBefore(commandLine, typingLine);
      terminalBody.insertBefore(outputLine, typingLine);
    });

    // Scroll to the bottom of the terminal
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  // Initialize everything
  createFallingStars();
  createGlowingStars();
  typeWriter();
  createTerminalHistory();
});
