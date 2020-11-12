class AboutMe {
  constructor() {
    this.menuPick();
  }
  menuPick() {
    const buttonContainer = document.querySelector(".buttons");
    const buttons = document.querySelectorAll(".buttonAboutMe");
    const skills = document.querySelectorAll(".skills");
    const education = document.querySelectorAll(".education");
    const gustaf = document.querySelectorAll(".gustaf");

    buttonContainer.addEventListener("click", (e) => {
      //this function hides elements
      const addHidden = (array) => {
        for (let element of array) {
          element.classList.add("hidden");
        }
      };
      //this function reveals elements
      const removeHidden = (array) => {
        for (let element of array) {
          element.classList.remove("hidden");
        }
      };

      addHidden(skills);
      addHidden(education);
      addHidden(gustaf);
      //if user press the "skills" button
      if (e.target === buttons[0]) {
        removeHidden(skills);
      }
      //if user press the "education" button
      if (e.target === buttons[1]) {
        removeHidden(education);
      }
      //if user press the "Gustaf" button
      if (e.target === buttons[2]) {
        removeHidden(gustaf);
      }
    });
  }
}
