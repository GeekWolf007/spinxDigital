const header = document.getElementsByClassName("fixedPosTop")[0];
let pageScrolled = false;
let navMenu = document.getElementsByClassName("menuItemsLink");
let navLi = document.getElementsByClassName("menuItemsList");
let dropDownArrow = document.getElementsByClassName("dropdownArrow");
let logoIcon = document.getElementsByClassName("logoIcon")[0];
let marquee = document.getElementsByClassName("marqueeButton")[0];
let topPosition = marquee.offsetTop;
let rightPosition = marquee.offsetRight;
let hamburgerIcon = document.getElementsByClassName("hamburgerLine");
let hamburgerButton = document.getElementsByClassName("hamburgerIcon")[0];
let hamburgerMenu = document.getElementsByClassName("hamburgerMenu")[0];

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset;
  if (scrollTop > 0) {
    if (!pageScrolled) {
      header.classList.add("scrolledHeader");
      for (let items of navMenu) {
        items.style.color = "#000000";
        items.style.padding = "20px 0";
      }
      for (let items of navLi) {
        items.style.padding = "20px 0";
      }
      for (let items of dropDownArrow) {
        items.classList.add("colorChangeBlack");
      }
      logoIcon.classList.add("colorChangeBlack");
      for(let lines of hamburgerIcon){
        lines.style.background = "#000";
      }
      document.documentElement.style.setProperty("--var-maxWidth", "73px");
      document.documentElement.style.setProperty("--navbar-height", "60px");     
      document.documentElement.style.setProperty("--underline-nav", "42px");
    }
    pageScrolled = true;
  } else {
    if (pageScrolled) {
      header.classList.remove("scrolledHeader");
      for (let items of navMenu) {
        items.style.removeProperty("color");
        items.style.padding = "50px 0";
      }
      for (let items of navLi) {
        items.style.padding = "50px 0";
      }
      for (let items of dropDownArrow) {
        items.classList.remove("colorChangeBlack");
      }
      logoIcon.classList.remove("colorChangeBlack");
      for(let lines of hamburgerIcon){
        lines.style.background = "#fff";
      }
      document.documentElement.style.setProperty("--var-maxWidth", "132px");
      document.documentElement.style.setProperty("--navbar-height", "120px");
      document.documentElement.style.setProperty("--underline-nav", "73px");
    }
    pageScrolled = false;
  }
});


let hamburgerPressed = false;

const hamburgerFunc = () => {
  if (!hamburgerPressed) {
    hamburgerIcon[0].style.width = "0";
    hamburgerIcon[3].style.width = "0";
    hamburgerIcon[1].style.transform = "rotate(45deg)"
    hamburgerIcon[2].style.transform = "rotate(-45deg)"
    hamburgerMenu.style.top = "0";
    hamburgerMenu.style.opacity = "1";
    for(let lines of hamburgerIcon){
      lines.style.background = "#000";
    }

    hamburgerPressed = true;
  } else {
    hamburgerIcon[0].style.width = "calc(100% - 10px)";
    hamburgerIcon[3].style.width = "12px";
    hamburgerIcon[1].style.transform = "rotate(0deg)"
    hamburgerIcon[2].style.transform = "rotate(0deg)"
    hamburgerMenu.style.top = "-100%";
    hamburgerMenu.style.opacity = "0";
    if(!pageScrolled){
    for(let lines of hamburgerIcon){
      lines.style.background = "#fff";
    }
  }

    hamburgerPressed = false;
  }
};

hamburgerButton.addEventListener("click", hamburgerFunc);
