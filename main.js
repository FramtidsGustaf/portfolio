class Main {
  constructor() {
    this.menuPick();
  }

  menuPick() {
    const contentPages = document.getElementsByClassName("contentPages");
    const menuItems = document.getElementsByClassName("menuItems");
    const listContainer = document.getElementsByClassName("listContainer")[0];

    listContainer.addEventListener("click", (e) => {
      for (let i = 0; i < contentPages.length; i++) {
        if (contentPages[i].classList.contains("revealPage")) {
          contentPages[i].classList.remove("revealPage");
          menuItems[i].classList.remove(`picked${i}`);
        }
        if (e.target === menuItems[i]) {
          contentPages[i].classList.add("revealPage");
          menuItems[i].classList.add(`picked${i}`);
        }
      }
    });
  }
}
