class AboutMe {
  constructor() {
    this.menuPick();
  }
  menuPick() {
    const buttonContainer = document.querySelector(".buttons");
    const buttons = document.querySelectorAll(".buttonAboutMe");
    const titleAcquiered = document.querySelector(".titleAcquiered");
    const titleNotAcquiered = document.querySelector(".titleNotAcquiered");
    const acquieredSkills = document.querySelector(".acquieredSkills");
    const skillsToAcquier = document.querySelector(".skillsToAcquier");
    const skillArray = [titleAcquiered, titleNotAcquiered, acquieredSkills, skillsToAcquier];
    console.log(buttons);

    buttonContainer.addEventListener("click", (e) => {
      for (let element of skillArray) {
        element.classList.add("hidden");
      }
      if (e.target === buttons[0]) {
        for (let element of skillArray) {
          element.classList.remove("hidden");
        }
      }
    });
  }
}
