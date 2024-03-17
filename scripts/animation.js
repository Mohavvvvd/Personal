const hiddenHome = document.querySelectorAll(".home");
const hiddenProject = document.querySelectorAll(".project");
const hiddenSkills = document.querySelectorAll(".skills");
const hiddenAbout = document.querySelectorAll(".about");

const b1 = document.querySelector(".hom");
const b2 = document.querySelector(".pro");
const b3 = document.querySelector(".skil");
const b4 = document.querySelector(".abt");

if (b1 && b2 && b3 && b4) {
  b1.addEventListener("click", () => {
    hideAllExcept(homeSection);
    show(hiddenHome, homeSection);
  });

  b2.addEventListener("click", () => {
    hideAllExcept(projectSection);
    show(hiddenProject, projectSection);
  });

  b3.addEventListener("click", () => {
    hideAllExcept(skillsSection);
    show(hiddenSkills, skillsSection);
  });

  b4.addEventListener("click", () => {
    hideAllExcept(aboutSection);
    show(hiddenAbout, aboutSection);
  });
}

const homeSection = document.querySelector(".home");
const projectSection = document.querySelector(".project");
const skillsSection = document.querySelector(".skills");
const aboutSection = document.querySelector(".about");

const sections = [
  { button: b1, section: homeSection, hiddenElements: hiddenHome },
  { button: b2, section: projectSection, hiddenElements: hiddenProject },
  { button: b3, section: skillsSection, hiddenElements: hiddenSkills },
  { button: b4, section: aboutSection, hiddenElements: hiddenAbout },
];

window.addEventListener("DOMContentLoaded", () => {
  hideAllExcept(homeSection);
  show(hiddenHome, homeSection);
});

function hideAllExcept(sectionToShow) {
  sections.forEach(({ section, hiddenElements }) => {
    if (section !== sectionToShow) {
      hide(hiddenElements);
    }
  });

  show(sectionToShow.hiddenElements, sectionToShow.section); 
}

function hide(hiddenElements) {
  hiddenElements.forEach((hiddenElement, index) => {
    hiddenElement.style.opacity = "0";
    hiddenElement.style.transform = "translateX(-5000px)"; 
    hiddenElement.style.transition = "opacity 0.3s ease-in-out, transform 0.3s ease-in-out";  });
}

function show(hiddenElements, section) {
    if (hiddenElements && hiddenElements.length > 0) {
      hiddenElements.forEach((hiddenElement, index) => {
        hiddenElement.style.transitionDelay = 0.2 * index + "s";
        hiddenElement.style.opacity = "1";
        hiddenElement.style.position = "absolute";
        hiddenElement.style.top = "50%";
        hiddenElement.style.left = "50%";
        hiddenElement.style.transform = "translate(-50%, -50%)";
      });
    }
    
}
