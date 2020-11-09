class Main {
  constructor() {
    this.landingPage();
    this.menuPick();
  }
  landingPage() {
    const startButton = document.querySelector(".startButton");
    const menuItems = document.querySelectorAll(".menuItems");
    let i = 0;
    startButton.addEventListener("click", () => {
      startButton.classList.add("buttonDisapear");
      setTimeout(() => {
        startButton.remove();
      }, 1000);
      const revealMenu = () => {
        if (i > 2) {
          clearInterval(revealMenu);
        } else {
          menuItems[i].classList.add("revealMenuItem");
          i++;
        }
      };
      setInterval(revealMenu, 100);
    });
  }
  menuPick() {
    const contentPages = document.getElementsByClassName("contentPages");
    const menuItems = document.getElementsByClassName("menuItems");
    const listContainer = document.getElementsByClassName("listContainer")[0];
    const linkedInIcon = document.querySelector(".linkedIn");
    const githubIcon = document.querySelector(".github");
    listContainer.addEventListener("click", (e) => {
      setTimeout(() => {
        linkedInIcon.classList.remove("revealIcon");
        githubIcon.classList.remove("revealIcon");
      }, 300);
      for (let i = 0; i < contentPages.length; i++) {
        if (contentPages[i].classList.contains("revealPage")) {
          contentPages[i].classList.remove("revealPage");
          menuItems[i].classList.remove(`picked${i}`);
        }
        if (e.target === menuItems[i]) {
          contentPages[i].classList.add("revealPage");
          menuItems[i].classList.add(`picked${i}`);
          if (i === 2) {
            setTimeout(() => {
              linkedInIcon.classList.add("revealIcon");
              githubIcon.classList.add("revealIcon");
            }, 300);
          }
        }
      }
    });
  }
}
