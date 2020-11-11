class Main {
  constructor() {
    this.landingPage();
    this.menuPick();
    this.aboutMePage = new AboutMe();
  }
  landingPage() {
    const startButton = document.querySelector(".startButton");
    const menuItems = document.querySelectorAll(".menuItems");
    const landingText = document.querySelector(".landingText");
    const hi = document.querySelector(".hi");
    let i = 0;

    startButton.addEventListener("click", () => {
      //When the startbutton is pressed...
      landingText.classList.add("hideLandingText"); //the text on the landing page is hidden

      setTimeout(() => {
        //100 ms after the startbutton is pressed the...
        startButton.classList.add("buttonDisapear"); //Startbutton disapears
        hi.classList.remove("hideHi"); //A greating to the user is reveald
      }, 100);

      //A seconSd after the startbutton is pressed the...
      setTimeout(() => {
        landingText.remove(); //The landingtext is completely removed
        startButton.remove(); //The startbutton meets the same ending as the landingtext
        hi.classList.add("hideHi"); //The earlier greeting is hidden
      }, 1000);

      //Later on we want to erase an interval and for that we need a named function
      //in wich we clear the interval after its been looping 3 times;
      const revealMenu = () => {
        if (i > 2) {
          clearInterval(revealMenu);
        } else {
          menuItems[i].classList.add("revealMenuItem");
          i++;
        }
      };
      //The interval calls the revealMenu function 3 times every 100ms to Reveal the three menu choices
      setInterval(revealMenu, 100);
    });
  }
  //this method hides and reveals elements and by that it basically starts the transitions that are related to the menu choices
  menuPick() {
    const contentPages = document.querySelectorAll(".contentPages");
    const menuItems = document.querySelectorAll(".menuItems");
    const listContainer = document.querySelector(".listContainer");
    const linkedInIcon = document.querySelector(".linkedIn");
    const githubIcon = document.querySelector(".github");
    const bobblePupper = document.querySelector("#bobblePupper");
    const quiz = document.querySelector("#quiz");

    listContainer.addEventListener("click", (e) => {
      //by waiting to hide the content on the different pages they wont clicth if you press the same menu choice again
      setTimeout(() => {
        linkedInIcon.classList.remove("revealIcon");
        githubIcon.classList.remove("revealIcon");
        bobblePupper.classList.add("hideBobblePupper");
        quiz.classList.add("hideQuiz");
      }, 300);
      for (let i = 0; i < contentPages.length; i++) {
        //the if statement beneath "resets" the page so the new picked content will have all the space it needs
        if (contentPages[i].classList.contains("revealPage")) {
          contentPages[i].classList.remove("revealPage");
          menuItems[i].classList.remove(`picked${i}`);
        }
        //if user press a button the corresponding content appears
        if (e.target === menuItems[i]) {
          contentPages[i].classList.add("revealPage");
          menuItems[i].classList.add(`picked${i}`); //gives the menu choice a class wich tilts it litle and gives it the same color as the content part
          if (i === 2) {
            setTimeout(() => {
              linkedInIcon.classList.add("revealIcon");
              githubIcon.classList.add("revealIcon");
            }, 300);
          }
          if (i === 1) {
            setTimeout(() => {
              bobblePupper.classList.remove("hideBobblePupper");
              quiz.classList.remove("hideQuiz");
            }, 300);
          }
        }
      }
    });
  }
}
