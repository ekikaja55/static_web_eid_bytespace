document.addEventListener("DOMContentLoaded", function () {
  initTerminal();

  createMatrixEffect();
});

function initTerminal() {
  const asciiLogo = document.getElementById("ascii-logo");
  const bytespaceASCII = `
██████╗ ██╗   ██╗████████╗███████╗███████╗██████╗  █████╗  ██████╗███████╗
██╔══██╗╚██╗ ██╔╝╚══██╔══╝██╔════╝██╔════╝██╔══██╗██╔══██╗██╔════╝██╔════╝
██████╔╝ ╚████╔╝    ██║   █████╗  ███████╗██████╔╝███████║██║     █████╗  
██╔══██╗  ╚██╔╝     ██║   ██╔══╝  ╚════██║██╔═══╝ ██╔══██║██║     ██╔══╝  
██████╔╝   ██║      ██║   ███████╗███████║██║     ██║  ██║╚██████╗███████╗
╚═════╝    ╚═╝      ╚═╝   ╚══════╝╚══════╝╚═╝     ╚═╝  ╚═╝ ╚═════╝╚══════╝
                                                                        
`;
  asciiLogo.innerHTML = bytespaceASCII;

  const greeting = document.getElementById("greeting");
  const greetingText = `
╔════════════════════════════════════════════════════════════╗
║                                                            ║
║           <span class="highlight-yellow">Selamat Hari Raya Idul Fitri 1446 H</span>            ║
║                                                            ║
║  <span class="highlight-cyan">Taqabbalallahu Minna Wa Minkum, Shiyamana Wa Shiyamakum</span>  ║
║                                                            ║
║  Mohon maaf lahir dan batin kepada seluruh anggota         ║
║  komunitas ByteSpace. Semoga kita dapat terus berkarya     ║
║  dan berbagi ilmu dalam kebaikan.                          ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
`;
  greeting.innerHTML = greetingText;

  const about = document.getElementById("about");
  const aboutText = `
<span class="highlight-cyan">/** ABOUT BYTESPACE **/</span>

ByteSpace adalah komunitas para coders yang menjadi 
tempat untuk sharing pengetahuan dan belajar bersama.

<span class="highlight-green">Mission:</span> Membangun ekosistem pembelajaran yang inklusif
         dan kolaboratif untuk semua developer di Indonesia.

<span class="highlight-green">Vision:</span>  Menjadi platform komunitas utama yang mendorong 
         inovasi dan pertumbuhan talenta digital di tanah air.

<span class="highlight-blue">Founded:</span> 2023-01-15
<span class="highlight-blue">Members:</span> 1,500+
<span class="highlight-blue">Events:</span>  48
`;
  about.innerHTML = aboutText;

  const fileList = document.getElementById("file-list");
  const fileListText = `
total 32
drwxr-xr-x  5 bytespace coders  4096 Mar 30 09:24 <span class="directory">.</span>
drwxr-xr-x  3 bytespace coders  4096 Mar 30 09:24 <span class="directory">..</span>
-rwxr-xr-x  1 bytespace coders  2048 Mar 30 09:24 <span class="executable">bootcamp_resources.sh</span>
drwxr-xr-x  2 bytespace coders  4096 Mar 30 09:24 <span class="directory">events</span>
-rw-r--r--  1 bytespace coders  3521 Mar 30 09:24 <span class="file">member_list.dat</span>
drwxr-xr-x  4 bytespace coders  4096 Mar 30 09:24 <span class="directory">projects</span>
-rwxr-xr-x  1 bytespace coders  1024 Mar 30 09:24 <span class="executable">register_member.sh</span>
drwxr-xr-x  3 bytespace coders  4096 Mar 30 09:24 <span class="directory">tutorials</span>
-rw-r--r--  1 bytespace coders  5120 Mar 30 09:24 <span class="file">weekly_challenge.md</span>
`;
  fileList.innerHTML = fileListText;

  typeCommand("command-1", 50, () => {
    setTimeout(() => {
      animateTerminalLine(1);

      setTimeout(() => {
        typeCommand("command-2", 50, () => {
          setTimeout(() => {
            animateTerminalLine(2);

            setTimeout(() => {
              typeCommand("command-3", 50, () => {
                setTimeout(() => {
                  animateTerminalLine(3);

                  setTimeout(() => {
                    typeCommand("command-4", 50, () => {
                      setTimeout(() => {
                        animateTerminalLine(4);

                        setTimeout(() => {
                          addTerminalInteractivity();
                        }, 1000);
                      }, 300);
                    });
                  }, 1500);
                }, 300);
              });
            }, 1500);
          }, 300);
        });
      }, 1500);
    }, 300);
  });

  animateCursor();
}

function typeCommand(elementId, speed, callback) {
  const element = document.getElementById(elementId);
  const text = element.textContent;
  element.textContent = "";

  let i = 0;
  const typing = setInterval(() => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(typing);
      if (callback) callback();
    }
  }, speed);
}

function animateTerminalLine(lineNum) {
  const terminalLines = document.querySelectorAll(".terminal-line");

  let output;
  switch (lineNum) {
    case 1:
      output = document.getElementById("ascii-logo");
      break;
    case 2:
      output = document.getElementById("greeting");
      break;
    case 3:
      output = document.getElementById("about");
      break;
    case 4:
      output = document.getElementById("file-list");
      break;
  }

  if (output) {
    output.style.display = "block";
    output.style.animation = "fadeIn 0.8s ease forwards";
  }
}

function animateCursor() {
  const cursor = document.getElementById("cursor");
  setInterval(() => {
    cursor.style.visibility =
      cursor.style.visibility === "hidden" ? "visible" : "hidden";
  }, 500);
}

function createMatrixEffect() {
  const canvas = document.createElement("canvas");
  canvas.classList.add("matrix-effect");
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const columns = Math.floor(canvas.width / 20);
  const drops = [];

  for (let i = 0; i < columns; i++) {
    drops[i] = 1;
  }

  const matrix = () => {
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0f0";
    ctx.font = "15px monospace";

    for (let i = 0; i < drops.length; i++) {
      const text = String.fromCharCode(33 + Math.floor(Math.random() * 94));
      ctx.fillText(text, i * 20, drops[i] * 20);

      if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      drops[i]++;
    }
  };

  setInterval(matrix, 50);

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

function addTerminalInteractivity() {
  document.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      const terminalBody = document.querySelector(".terminal-body");

      const newLine = document.createElement("div");
      newLine.classList.add("terminal-line");
      newLine.style.opacity = "0";
      newLine.innerHTML = `
              <span class="prompt">bytespace@terminal:~$</span>
              <span class="command">echo "Terima kasih telah mengunjungi ByteSpace!"</span>
          `;

      terminalBody.insertBefore(
        newLine,
        document.querySelector(".terminal-line:last-child")
      );

      setTimeout(() => {
        newLine.style.opacity = "1";
        newLine.style.transform = "translateY(0)";

        const output = document.createElement("div");
        output.classList.add("output");
        output.innerHTML = "Terima kasih telah mengunjungi ByteSpace!";
        output.style.color = "var(--terminal-magenta)";

        terminalBody.insertBefore(
          output,
          document.querySelector(".terminal-line:last-child")
        );

        terminalBody.scrollTop = terminalBody.scrollHeight;
      }, 100);
    }
  });

  const logo = document.getElementById("ascii-logo");
  logo.addEventListener("mouseover", function () {
    this.style.animation = "glitch 0.5s infinite";

    setTimeout(() => {
      const terminalBody = document.querySelector(".terminal-body");

      const easterEgg = document.createElement("div");
      easterEgg.classList.add("terminal-line");
      easterEgg.style.opacity = "0";

      easterEgg.innerHTML = `
              <span class="prompt">system:</span>
              <span class="command" style="color: var(--terminal-yellow);">Access granted. Welcome, Developer.</span>
          `;

      terminalBody.insertBefore(
        easterEgg,
        document.querySelector(".terminal-line:last-child")
      );

      setTimeout(() => {
        easterEgg.style.opacity = "1";
        easterEgg.style.transform = "translateY(0)";

        terminalBody.scrollTop = terminalBody.scrollHeight;
      }, 100);
    }, 1000);
  });

  logo.addEventListener("mouseout", function () {
    this.style.animation = "";
  });

  const closeButton = document.querySelector(".terminal-button.close");
  closeButton.addEventListener("click", function () {
    const terminal = document.querySelector(".terminal-container");
    terminal.style.animation = "appear 0.5s ease reverse forwards";

    setTimeout(() => {
      terminal.style.display = "none";

      const reopenMessage = document.createElement("div");
      reopenMessage.textContent = "Click to reopen terminal";
      reopenMessage.style.color = "white";
      reopenMessage.style.padding = "20px";
      reopenMessage.style.cursor = "pointer";
      reopenMessage.style.textAlign = "center";

      document.body.appendChild(reopenMessage);

      reopenMessage.addEventListener("click", function () {
        terminal.style.display = "block";
        terminal.style.animation = "appear 0.5s ease forwards";
        this.remove();
      });
    }, 500);
  });
}
