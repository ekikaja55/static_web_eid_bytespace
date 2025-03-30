document.addEventListener("DOMContentLoaded", function () {
  // Add twinkling stars effect to the festive greeting
  const greeting = document.querySelector(".festive-greeting");

  // Create random stars/lanterns
  for (let i = 0; i < 20; i++) {
    const star = document.createElement("div");
    star.classList.add("lantern");
    star.textContent = "✧";
    star.style.position = "absolute";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.fontSize = Math.random() * 12 + 10 + "px";
    star.style.opacity = Math.random() * 0.5 + 0.2;
    star.style.animationDelay = Math.random() * 3 + "s";

    greeting.appendChild(star);
  }

  // Add subtle pulsing animation to the greeting content
  const greetingContent = document.querySelector(".greeting-content");
  setInterval(function () {
    greetingContent.style.boxShadow = "0 0 10px rgba(224, 175, 104, 0.5)";
    setTimeout(function () {
      greetingContent.style.boxShadow = "0 0 20px rgba(224, 175, 104, 0.7)";
    }, 1000);
  }, 2000);

  // Terminal typing effect
  const commands = [
    "ls -l projects/",
    "cat README.md",
    "npm start",
    "git status",
    "cd projects/new-app",
    "python3 main.py",
  ];

  let currentCommandIndex = 0;
  const typingText = document.querySelector(".typing-text");
  const cursor = document.querySelector(".cursor");

  function typeCommand(command, index = 0) {
    if (index < command.length) {
      typingText.textContent += command.charAt(index);
      setTimeout(
        () => typeCommand(command, index + 1),
        Math.random() * 100 + 50
      );
    } else {
      // Finished typing current command
      setTimeout(executeCommand, 1000);
    }
  }

  function executeCommand() {
    // Clear the typing text
    typingText.textContent = "";

    // Execute current command (would add terminal output here)
    setTimeout(startNewCommand, 500);
  }

  function startNewCommand() {
    currentCommandIndex = (currentCommandIndex + 1) % commands.length;
    typeCommand(commands[currentCommandIndex]);
  }

  // Start the typing animation with the first command
  setTimeout(() => {
    typeCommand(commands[currentCommandIndex]);
  }, 1000);

  // Animation for site title
  const siteTitle = document.querySelector(".site-title");
  setInterval(() => {
    siteTitle.style.textShadow =
      "0 0 15px rgba(125, 207, 255, 0.7), 0 0 40px rgba(125, 207, 255, 0.4)";
    setTimeout(() => {
      siteTitle.style.textShadow =
        "0 0 10px rgba(125, 207, 255, 0.5), 0 0 30px rgba(125, 207, 255, 0.3)";
    }, 1500);
  }, 3000);
});
