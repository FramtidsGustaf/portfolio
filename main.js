class Main {
  constructor() {
    this.landingPage();
    this.menuPick();
  }
  landingPage() {
    const startButton = document.querySelector(".startButton");
    const menuItems = document.querySelectorAll(".menuItems");
    const landingText = document.querySelector(".landingText");
    let i = 0;
    startButton.addEventListener("click", () => {
      landingText.classList.add("hideLandingText");
      setTimeout(() => {
        startButton.classList.add("buttonDisapear");
      }, 100);

      setTimeout(() => {
        landingText.remove();
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
    const contentPages = document.querySelectorAll(".contentPages");
    const menuItems = document.querySelectorAll(".menuItems");
    const listContainer = document.querySelector(".listContainer");
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
