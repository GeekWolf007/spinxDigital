



let oneImageImage = document.getElementById("oneImageImage");
let twoImageImageOne = document.getElementById("twoImageImageOne");
let twoImageImageTwo = document.getElementById("twoImageImageTwo");
const speedFactor = 0.4;
const speedFactor2 = 0.4;

const parallax = () =>{
  let scroll = window.scrollY;
  let moveImageOne = (487-scroll)*speedFactor;
  oneImageImage.style.transform = 'translate3d(0, ' + moveImageOne + 'px, 0)';
  let moveImageTwo = (1348.38330078125 -scroll)*speedFactor2;
  twoImageImageOne.style.transform = 'translate3d(0, ' + moveImageTwo + 'px, 0)';
  twoImageImageTwo.style.transform = 'translate3d(0, ' + moveImageTwo + 'px, 0)';
};
window.addEventListener("scroll",parallax);


let lastScrollTop = 0;
const onScroll= () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let scrollDirection;

  if (scrollTop > lastScrollTop) {
    scrollDirection = "down";
  } else {
    scrollDirection = "up";
  }

  lastScrollTop = scrollTop;

  if (scrollDirection === "down") {

    let awardCards = document.getElementsByClassName("awardsCard");
    let awardsHeading = document.getElementsByClassName("awardsHeading")[0];
    let featuredProjectHeading = document.getElementById("featuredProjectHeading");
    let projectsHeading = document.getElementsByClassName("projectsHeading")[1];

    if (awardsHeading.getBoundingClientRect().top <= 558.7833251953125) {
      awardsHeading.classList.add("scrollAnimationClassOpacity");
      awardsHeading.classList.add("scrollAnimationClassTranslate");
    }

    for (let item of awardCards) {
      if (awardCards[0].getBoundingClientRect().top <= 550.7833251953125) {
        item.classList.add("scrollAnimationClassTranslate");
        item.classList.add("scrollAnimationClassOpacity");
      }
    }

    if (featuredProjectHeading.getBoundingClientRect().top <= 665.4666748046875) {
      featuredProjectHeading.classList.add("scrollAnimationClassOpacity");
    }
    
    if (projectsHeading.getBoundingClientRect().top <= 707.1666870117188) {
      projectsHeading.classList.add("scrollAnimationClassOpacity");
      projectsHeading.classList.add("scrollAnimationClassTranslate");
    }
  }
}

window.addEventListener("scroll", onScroll);
document.body.addEventListener("touchmove", onScroll);
