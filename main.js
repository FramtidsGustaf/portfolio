class Main {
  constructor() {
    this.menuPick();
  }
  menuPick() {
    let mainContentBackground = document.getElementsByClassName("mainContent")[0];
    let aboutMe = document.getElementsByClassName("aboutMe")[0];
    let portfolio = document.getElementsByClassName("portfolio")[0];
    let contactMe = document.getElementsByClassName("contactMe")[0];
    menuList.addEventListener("click", (e) => {
      aboutMe.classList.remove("aboutMePicked");
      portfolio.classList.remove("portfolioPicked");
      contactMe.classList.remove("contactMePicked");
      mainContentBackground.classList.remove(
        "aboutMeBackground",
        "portfolioBackground",
        "contactMeBackground"
      );
      if (e.target == aboutMe) {
        mainContentBackground.classList.add("aboutMeBackground");
        aboutMe.classList.add("aboutMePicked");
      } else if (e.target === portfolio) {
        mainContentBackground.classList.add("portfolioBackground");
        portfolio.classList.add("portfolioPicked");
      } else if (e.target === contactMe) {
        mainContentBackground.classList.add("contactMeBackground");
        contactMe.classList.add("contactMePicked");
      }
    });
  }
}