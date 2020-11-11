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

    const nackademin = document.querySelector(".nackademin");
    const educationTitle = document.querySelector(".educationTitle");
    const educationList = document.querySelector(".educationList");
    const educationArray = [nackademin, educationTitle, educationList];

    buttonContainer.addEventListener("click", (e) => {
      let addHidden = (array) => {
        for (let element of array) {
          element.classList.add("hidden");
        }
      };
      let removeHidden = (array) => {
        for (let element of array) {
          element.classList.remove("hidden");
        }
      };
      addHidden(skillArray);
      addHidden(educationArray);

      if (e.target === buttons[0]) {
        removeHidden(skillArray);
      }
      if (e.target === buttons[1]) {
        removeHidden(educationArray);
      }
    });
  }
}
