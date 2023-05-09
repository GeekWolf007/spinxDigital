let craftingHeading = document.getElementById("svgContainer");
let h2Heading = document.getElementById("h2Heading");

window.addEventListener('load', () => {
  window.scrollTo(0,0);
  setTimeout(() => {
    craftingHeading.style.opacity = "1";
  }, 1000);
  setTimeout(() => {
    h2Heading.style.opacity="1";
    h2Heading.style.transform = "translateY(0px)";
  }, 1800);

  document.getElementsByClassName("awardsHeading")[0].classList.remove("scrollAnimationClassOpacity");
  document.getElementsByClassName("awardsHeading")[0].classList.remove("scrollAnimationClassTranslate");
  for (let item of document.getElementsByClassName("awardsCard")) {
    item.classList.remove("scrollAnimationClassTranslate");
    item.classList.remove("scrollAnimationClassOpacity");   
  }
  document.getElementsByClassName("featuredProjectHeading")[0].classList.remove("scrollAnimationClassOpacity");
  document.getElementsByClassName("projectsHeading")[0].classList.remove("scrollAnimationClassOpacity");
  document.getElementsByClassName("projectsHeading")[0].classList.remove("scrollAnimationClassTranslate");
});
