



// --------------------Reload--------------------




let craftingHeading = document.getElementById("svgContainer");
let h2Heading = document.getElementById("h2Heading");

window.addEventListener('load', () => {
  location.href = "#";
  setTimeout(() => {
    craftingHeading.style.opacity = "1";
  }, 1000);
  setTimeout(() => {
    h2Heading.style.opacity="1";
    h2Heading.style.transform = "translateY(0px)";

    document.getElementsByClassName("awardsHeading")[0].classList.remove("scrollAnimationClassOpacity");
    document.getElementsByClassName("awardsHeading")[0].classList.remove("scrollAnimationClassTranslate");
    for (let item of document.getElementsByClassName("awardsCard")) {
      item.classList.remove("scrollAnimationClassTranslate");
      item.classList.remove("scrollAnimationClassOpacity");   
    }
    document.getElementsByClassName("featuredProjectHeading")[0].classList.remove("scrollAnimationClassOpacity");
    document.getElementsByClassName("projectsHeading")[0].classList.remove("scrollAnimationClassOpacity");
    document.getElementsByClassName("projectsHeading")[0].classList.remove("scrollAnimationClassTranslate");
    document.getElementsByClassName("projectsHeading")[1].classList.remove("scrollAnimationClassOpacity");
    document.getElementsByClassName("projectsHeading")[1].classList.remove("scrollAnimationClassTranslate");
    document.getElementsByClassName("brandPara")[0].classList.remove("scrollAnimationClassOpacity");
    document.getElementsByClassName("brandPara")[0].classList.remove("scrollAnimationClassTranslate");
    document.getElementsByClassName("brandRevealTitle")[0].classList.remove("scrollAnimationClassOpacity");
    document.getElementsByClassName("brandRevealTitle")[0].classList.remove("scrollAnimationClassTranslate");
    document.getElementsByClassName("revealExpertiseTitle")[0].classList.remove("scrollAnimationClassOpacity");
    document.getElementsByClassName("revealExpertiseTitle")[0].classList.remove("scrollAnimationClassTranslate");
    document.getElementsByClassName("expertiseList")[0].classList.remove("scrollAnimationClassOpacity");
    document.getElementsByClassName("revealPlatformHeading")[0].classList.remove("scrollAnimationClassOpacity");
    document.getElementsByClassName("revealPlatformHeading")[0].classList.remove("scrollAnimationClassTranslate");
    document.getElementsByClassName("revealTrustHeading")[0].classList.remove("scrollAnimationClassOpacity");
    document.getElementsByClassName("revealTrustHeading")[0].classList.remove("scrollAnimationClassTranslate");
    document.getElementsByClassName("trustDetailContainer")[0].classList.remove("scrollAnimationClassOpacity");
    document.getElementsByClassName("trustDetailContainer")[0].classList.remove("scrollAnimationClassTranslate");
    document.getElementsByClassName("learnRevealHeading")[0].classList.remove("scrollAnimationClassOpacity");
    document.getElementsByClassName("learnRevealHeading")[0].classList.remove("scrollAnimationClassTranslate");
    for(let a of document.getElementsByClassName("insights1Container")){
      a.classList.remove("scrollAnimationClassOpacity");
      a.classList.remove("scrollAnimationClassTranslate");
    }
    document.getElementById("insights4Container").classList.remove("scrollAnimationClassTranslate");
    document.getElementsByClassName("concrevContainer")[0].classList.remove("scrollAnimationClassOpacity");
    document.getElementsByClassName("concrevContainer")[0].classList.remove("scrollAnimationClassTranslate");
    document.getElementsByClassName("anchorDI")[0].classList.remove("scrollAnimationClassTranslate");
    document.getElementsByClassName("anchorDI")[0].classList.remove("scrollAnimationClassOpacity");  
    document.getElementsByClassName("anchorDI")[1].classList.remove("scrollAnimationClassTranslate");
    document.getElementsByClassName("anchorDI")[1].classList.remove("scrollAnimationClassOpacity");  
    document.getElementsByClassName("weAreRight")[0].classList.remove("scrollAnimationClassTranslate");
    document.getElementsByClassName("weAreRight")[0].classList.remove("scrollAnimationClassOpacity");
    document.getElementsByClassName("weAreHeading")[0].classList.remove("scrollAnimationClassTranslate");
    document.getElementsByClassName("weAreHeading")[0].classList.remove("scrollAnimationClassOpacity");
    for( let divs of document.getElementsByClassName("topRatedHoverContainer")){
      divs.classList.remove("scrollAnimationClassOpacity");
      divs.classList.remove("scrollAnimationClassTranslate");
    }
    document.getElementsByClassName("mainHeadingOP")[0].classList.remove("scrollAnimationClassOpacity");
    document.getElementsByClassName("subHeadingOP")[0].classList.remove("scrollAnimationClassOpacity");
    document.getElementsByClassName("subHeadingOP")[0].classList.remove("scrollAnimationClassTranslate");
    document.getElementsByClassName("paraOP")[0].classList.remove("scrollAnimationClassOpacity");
    document.getElementsByClassName("paraOP")[0].classList.remove("scrollAnimationClassTranslate");
    document.getElementsByClassName("discoveryItems")[0].classList.remove("scrollAnimationClassOpacity");
    document.getElementsByClassName("discoveryItems")[0].classList.remove("scrollAnimationClassTranslate");

    if(window.innerWidth<= 800){
      

      let awardCards = document.getElementsByClassName("awardsCard");
      let awardsHeading = document.getElementsByClassName("awardsHeading")[0];
      let featuredProjectHeading = document.getElementById("featuredProjectHeading");
      let projectsHeading = document.getElementsByClassName("projectsHeading")[1];

      awardsHeading.classList.add("scrollAnimationClassOpacity");
      awardsHeading.classList.add("scrollAnimationClassTranslate");
      for (let item of awardCards) {
        item.classList.add("scrollAnimationClassTranslate");
        item.classList.add("scrollAnimationClassOpacity");
      }
      featuredProjectHeading.classList.add("scrollAnimationClassOpacity");
      projectsHeading.classList.add("scrollAnimationClassOpacity");
      projectsHeading.classList.add("scrollAnimationClassTranslate");
      document.getElementsByClassName("brandPara")[0].classList.add("scrollAnimationClassOpacity");
      document.getElementsByClassName("brandPara")[0].classList.add("scrollAnimationClassTranslate");
      document.getElementsByClassName("brandRevealTitle")[0].classList.add("scrollAnimationClassOpacity");
      document.getElementsByClassName("brandRevealTitle")[0].classList.add("scrollAnimationClassTranslate");
      document.getElementsByClassName("revealExpertiseTitle")[0].classList.add("scrollAnimationClassOpacity");
      document.getElementsByClassName("revealExpertiseTitle")[0].classList.add("scrollAnimationClassTranslate");
      document.getElementsByClassName("expertiseList")[0].classList.add("scrollAnimationClassOpacity");
      document.getElementsByClassName("revealPlatformHeading")[0].classList.add("scrollAnimationClassOpacity");
      document.getElementsByClassName("revealPlatformHeading")[0].classList.add("scrollAnimationClassTranslate");
      document.getElementsByClassName("revealTrustHeading")[0].classList.add("scrollAnimationClassOpacity");
      document.getElementsByClassName("revealTrustHeading")[0].classList.add("scrollAnimationClassTranslate");
      document.getElementsByClassName("trustDetailContainer")[0].classList.add("scrollAnimationClassOpacity");
      document.getElementsByClassName("trustDetailContainer")[0].classList.add("scrollAnimationClassTranslate");
      document.getElementsByClassName("learnRevealHeading")[0].classList.add("scrollAnimationClassOpacity");
      document.getElementsByClassName("learnRevealHeading")[0].classList.add("scrollAnimationClassTranslate");
      for(let a of document.getElementsByClassName("insights1Container")){
        a.classList.add("scrollAnimationClassOpacity");
        a.classList.add("scrollAnimationClassTranslate");
      }
      document.getElementById("insights4Container").classList.add("scrollAnimationClassOpacity");
      document.getElementById("insights4Container").classList.add("scrollAnimationClassTranslate");
      document.getElementsByClassName("concrevContainer")[0].classList.add("scrollAnimationClassTranslate");
      document.getElementsByClassName("concrevContainer")[0].classList.add("scrollAnimationClassOpacity");
      document.getElementsByClassName("anchorDI")[0].classList.add("scrollAnimationClassTranslate");
      document.getElementsByClassName("anchorDI")[0].classList.add("scrollAnimationClassOpacity"); 
      document.getElementsByClassName("anchorDI")[1].classList.add("scrollAnimationClassTranslate");
      document.getElementsByClassName("anchorDI")[1].classList.add("scrollAnimationClassOpacity");
      document.getElementsByClassName("weAreRight")[0].classList.add("scrollAnimationClassTranslate");
      document.getElementsByClassName("weAreRight")[0].classList.add("scrollAnimationClassOpacity");
      document.getElementsByClassName("weAreHeading")[0].classList.add("scrollAnimationClassTranslate");
      document.getElementsByClassName("weAreHeading")[0].classList.add("scrollAnimationClassOpacity");
      for( let divs of document.getElementsByClassName("topRatedHoverContainer")){
        divs.classList.add("scrollAnimationClassTranslate");
        divs.classList.add("scrollAnimationClassOpacity");
      }
      document.getElementsByClassName("mainHeadingOP")[0].classList.add("scrollAnimationClassOpacity");
      document.getElementsByClassName("subHeadingOP")[0].classList.add("scrollAnimationClassOpacity");
      document.getElementsByClassName("subHeadingOP")[0].classList.add("scrollAnimationClassTranslate");
      document.getElementsByClassName("paraOP")[0].classList.add("scrollAnimationClassOpacity");
      document.getElementsByClassName("paraOP")[0].classList.add("scrollAnimationClassTranslate");
      document.getElementsByClassName("discoveryItems")[0].classList.add("scrollAnimationClassOpacity");
      document.getElementsByClassName("discoveryItems")[0].classList.add("scrollAnimationClassTranslate");
    }

  }, 1800);
});




// --------------------Scroll Animations--------------------




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

    if (document.getElementsByClassName("brandPara")[0].getBoundingClientRect().top  <= 563.8499755859375 ) {
      document.getElementsByClassName("brandPara")[0].classList.add("scrollAnimationClassOpacity");
      document.getElementsByClassName("brandPara")[0].classList.add("scrollAnimationClassTranslate");
    }
    
    if (document.getElementsByClassName("brandRevealTitle")[0].getBoundingClientRect().top  <= 643.6500244140625   ) {
      document.getElementsByClassName("brandRevealTitle")[0].classList.add("scrollAnimationClassOpacity");
      document.getElementsByClassName("brandRevealTitle")[0].classList.add("scrollAnimationClassTranslate");
    }
    if (document.getElementsByClassName("revealExpertiseTitle")[0].getBoundingClientRect().top   <= 646.9500122070312   ) {
      document.getElementsByClassName("revealExpertiseTitle")[0].classList.add("scrollAnimationClassOpacity");
      document.getElementsByClassName("revealExpertiseTitle")[0].classList.add("scrollAnimationClassTranslate");
    }
    if (document.getElementsByClassName("revealExpertiseTitle")[0].getBoundingClientRect().top   <= 646.9500122070312   ) {
      document.getElementsByClassName("expertiseList")[0].classList.add("scrollAnimationClassOpacity");
    }
    if (document.getElementsByClassName("revealPlatformHeading")[0].getBoundingClientRect().top   <= 658.75    ) {
      document.getElementsByClassName("revealPlatformHeading")[0].classList.add("scrollAnimationClassOpacity");
      document.getElementsByClassName("revealPlatformHeading")[0].classList.add("scrollAnimationClassTranslate");
    }
    if (document.getElementsByClassName("revealTrustHeading")[0].getBoundingClientRect().top <= 640.5499877929688     ) {
      document.getElementsByClassName("revealTrustHeading")[0].classList.add("scrollAnimationClassOpacity");
      document.getElementsByClassName("revealTrustHeading")[0].classList.add("scrollAnimationClassTranslate");
      document.getElementsByClassName("trustDetailContainer")[0].classList.add("scrollAnimationClassOpacity");
      document.getElementsByClassName("trustDetailContainer")[0].classList.add("scrollAnimationClassTranslate");
    }
    if(document.getElementsByClassName("learnRevealHeading")[0].getBoundingClientRect().top <= 575.1500244140625 ){
      document.getElementsByClassName("learnRevealHeading")[0].classList.add("scrollAnimationClassOpacity");
      document.getElementsByClassName("learnRevealHeading")[0].classList.add("scrollAnimationClassTranslate");
    }
    for(let a of document.getElementsByClassName("insights1Container")){
      if(a.getBoundingClientRect().top <= 588.75){
        a.classList.add("scrollAnimationClassOpacity");
        a.classList.add("scrollAnimationClassTranslate");
      }
    }
    if(document.getElementById("insights4Container").getBoundingClientRect().top <=586.75 ){
      document.getElementById("insights4Container").classList.add("scrollAnimationClassOpacity");
      document.getElementById("insights4Container").classList.add("scrollAnimationClassTranslate");
    }
    if(document.getElementsByClassName("concrevContainer")[0].getBoundingClientRect().top <= 682.0499877929688 ){
      document.getElementsByClassName("concrevContainer")[0].classList.add("scrollAnimationClassTranslate");
      document.getElementsByClassName("concrevContainer")[0].classList.add("scrollAnimationClassOpacity");
    }
    if(document.getElementsByClassName("anchorDI")[0].getBoundingClientRect().top <= 658.63330078125 ){
      document.getElementsByClassName("anchorDI")[0].classList.add("scrollAnimationClassTranslate");
      document.getElementsByClassName("anchorDI")[0].classList.add("scrollAnimationClassOpacity");  
    }
    if(document.getElementsByClassName("anchorDI")[1].getBoundingClientRect().top <= 658.63330078125 ){
      document.getElementsByClassName("anchorDI")[1].classList.add("scrollAnimationClassTranslate");
      document.getElementsByClassName("anchorDI")[1].classList.add("scrollAnimationClassOpacity");  
    }
    if(document.getElementsByClassName("weAreRight")[0].getBoundingClientRect().top <= 561.25){
      document.getElementsByClassName("weAreRight")[0].classList.add("scrollAnimationClassTranslate");
      document.getElementsByClassName("weAreRight")[0].classList.add("scrollAnimationClassOpacity");
    }
    if(document.getElementsByClassName("weAreHeading")[0].getBoundingClientRect().top <=581.8499755859375){
      document.getElementsByClassName("weAreHeading")[0].classList.add("scrollAnimationClassTranslate");
      document.getElementsByClassName("weAreHeading")[0].classList.add("scrollAnimationClassOpacity");
    }
    for( let divs of document.getElementsByClassName("topRatedHoverContainer")){
      if(divs.getBoundingClientRect().top<=662.2666625976562 ){
        divs.classList.add("scrollAnimationClassTranslate");
        divs.classList.add("scrollAnimationClassOpacity");
      }
    }
    if(document.getElementsByClassName("mainHeadingOP")[0].getBoundingClientRect().top <= 618){
      document.getElementsByClassName("mainHeadingOP")[0].classList.add("scrollAnimationClassOpacity");
    }
    if(document.getElementsByClassName("subHeadingOP")[0].getBoundingClientRect().top <= 618){
      document.getElementsByClassName("subHeadingOP")[0].classList.add("scrollAnimationClassOpacity");
      document.getElementsByClassName("subHeadingOP")[0].classList.add("scrollAnimationClassTranslate");
    }
    if(document.getElementsByClassName("paraOP")[0].getBoundingClientRect().top <= 618){
      document.getElementsByClassName("paraOP")[0].classList.add("scrollAnimationClassOpacity");
      document.getElementsByClassName("paraOP")[0].classList.add("scrollAnimationClassTranslate");
    }
    if(document.getElementsByClassName("discoveryItems")[0].getBoundingClientRect().top <= 618){
      document.getElementsByClassName("discoveryItems")[0].classList.add("scrollAnimationClassOpacity");
      document.getElementsByClassName("discoveryItems")[0].classList.add("scrollAnimationClassTranslate");
    }
  }
  
  if(window.innerWidth>=1200){
    if(document.getElementsByClassName("brandsList")[0].getBoundingClientRect().top != 144.64999389648438  ){
      const translateValue = (144.64999389648438  - document.getElementsByClassName("brandsList")[0].getBoundingClientRect().top)*-0.35;
      document.getElementsByClassName("brandsList")[0].style.transform = `translateX(${translateValue}px)`
    }
    if(document.getElementsByClassName("brandsList")[1].getBoundingClientRect().top != 144.64999389648438  ){
      const translateValue = (144.64999389648438  - document.getElementsByClassName("brandsList")[0].getBoundingClientRect().top)*0.35;
      document.getElementsByClassName("brandsList")[1].style.transform = `translateX(${translateValue}px)`
    }
    if(document.getElementsByClassName("brandsList")[2].getBoundingClientRect().top !=149.35000610351562 ){
      const translateValue = (149.35000610351562   - document.getElementsByClassName("brandsList")[2].getBoundingClientRect().top)*-0.35;
      document.getElementsByClassName("brandsList")[2].style.transform = `translateX(${translateValue}px)`
    }
    if(document.getElementsByClassName("brandsList")[3].getBoundingClientRect().top !=149.35000610351562 ){
      const translateValue = (149.35000610351562   - document.getElementsByClassName("brandsList")[2].getBoundingClientRect().top)*0.35;
      document.getElementsByClassName("brandsList")[3].style.transform = `translateX(${translateValue}px)`
    }
  }
}

window.addEventListener("scroll", onScroll);
document.body.addEventListener("touchmove", onScroll);
window.addEventListener("scroll",()=>{
  if(window.pageYOffset> window.innerHeight && window.innerWidth>1200){
    document.getElementsByClassName("goUp")[0].style.display = "block"
  }else{
    document.getElementsByClassName("goUp")[0].style.display = "none"
  }
});




// --------------------Cursor--------------------




const cursor = document.getElementById("cursor");
const cursorCircle = document.getElementById("cursorCircleBorder");
const insights1Container = document.getElementById("insights1Container");
const insights2Container = document.getElementById("insights2Container");
const insights2ContainerImage = document.getElementById("insights2ContainerImage");
const insights2ContainerImageimg = document.getElementById("insights2ContainerImageimg");
const insights3Container = document.getElementById("insights3Container");
const insights3ContainerImage = document.getElementById("insights3ContainerImage");
const insights3ContainerImageimg = document.getElementById("insights3ContainerImageimg");
const topRatedHoverContainer1 = document.getElementsByClassName("topRatedHoverContainer")[0];
const topRatedHoverContainer1img = document.getElementById("topRatedHoverContainer1");
const topRatedHoverContainer1image = document.getElementById("topRatedHoverContainer1image");
const topRatedHoverContainer2 = document.getElementsByClassName("topRatedHoverContainer")[1];
const topRatedHoverContainer2img = document.getElementById("topRatedHoverContainer2");
const topRatedHoverContainer2image = document.getElementById("topRatedHoverContainer2image");
const topRatedHoverContainer3 = document.getElementsByClassName("topRatedHoverContainer")[2];
const topRatedHoverContainer3img = document.getElementById("topRatedHoverContainer3");
const topRatedHoverContainer3image = document.getElementById("topRatedHoverContainer3image");
const topRatedHoverContainer4 = document.getElementsByClassName("topRatedHoverContainer")[3];
const topRatedHoverContainer4img = document.getElementById("topRatedHoverContainer4");
const topRatedHoverContainer4image = document.getElementById("topRatedHoverContainer4image");
const topRatedHoverContainer5 = document.getElementsByClassName("topRatedHoverContainer")[4];
const topRatedHoverContainer5img = document.getElementById("topRatedHoverContainer5");
const topRatedHoverContainer5image = document.getElementById("topRatedHoverContainer5image");
const topRatedHoverContainer6 = document.getElementsByClassName("topRatedHoverContainer")[5];
const topRatedHoverContainer6img = document.getElementById("topRatedHoverContainer6");
const topRatedHoverContainer6image = document.getElementById("topRatedHoverContainer6image");
const cursorHovered = () =>{
  cursorCircle.classList.add("cursorHovered");
};
const cursorNotHovered = () =>{
  cursorCircle.classList.remove("cursorHovered");
};
const cursorHoveredEye = () =>{
  cursorCircle.classList.add("eyeCursor");
};
const cursorNotHoveredEye = () =>{
  cursorCircle.classList.remove("eyeCursor");
};

if(window.innerWidth>=1000){

  window.onpointermove = (event) => {
    const { clientX, clientY } = event;
    
    cursor.style.display = "block";
    cursorCircle.style.display = "block";
    cursor.style.opacity = "1";
    cursorCircle.style.opacity = "1";
    cursor.style.left = `${clientX}px`;
    cursor.style.top = `${clientY}px`;
    insights2ContainerImage.style.left = `${clientX}px`;
    insights2ContainerImage.style.top = `${clientY}px`;
    insights3ContainerImage.style.left = `${clientX}px`;
    insights3ContainerImage.style.top = `${clientY}px`;
    topRatedHoverContainer1img.style.top = `${clientY}px`;
    topRatedHoverContainer1img.style.left = `${clientX}px`;
    topRatedHoverContainer2img.style.left = `${clientX}px`;
    topRatedHoverContainer2img.style.top = `${clientY}px`;
    topRatedHoverContainer3img.style.left = `${clientX}px`;
    topRatedHoverContainer3img.style.top = `${clientY}px`;
    topRatedHoverContainer4img.style.left = `${clientX}px`;
    topRatedHoverContainer4img.style.top = `${clientY}px`;
    topRatedHoverContainer5img.style.left = `${clientX}px`;
    topRatedHoverContainer5img.style.top = `${clientY}px`;
    topRatedHoverContainer6img.style.left = `${clientX}px`;
    topRatedHoverContainer6img.style.top = `${clientY}px`;
    
    let _clientX = clientX - 12;
    let _clientY = clientY - 12;
    
    cursorCircle.animate(
      {
        left: `${_clientX}px`,
        top: `${_clientY}px`,
      },{ duration: 600, fill: "forwards" }
      );
    };
    document.documentElement.addEventListener("mouseleave", () => {
      cursor.style.display = "none";
      cursorCircle.style.display = "none";
      cursor.style.opacity = "0";
      cursorCircle.style.opacity = "0";
    });
    // const cursorHovered = () =>{
    //   cursorCircle.classList.add("cursorHovered")
    // };
    // const cursorNotHovered = () =>{
    //   cursorCircle.classList.remove("cursorHovered")
    // };
    insights1Container.addEventListener("mouseover", () => {
      cursor.style.visibility = "hidden";
      cursorCircle.style.visibility = "hidden";
    });
    insights1Container.addEventListener("mouseout", () => {
      cursor.style.visibility = "visible";
      cursorCircle.style.visibility = "visible";
    });
    insights2Container.addEventListener("mouseover", () => {
      cursor.style.visibility = "hidden";
    cursorCircle.style.visibility = "hidden";
    insights2ContainerImage.style.opacity = ".5";
    insights2ContainerImage.style.clipPath = "inset(0px)";
    insights2ContainerImage.style.visibility = "visible";
    insights2ContainerImageimg.style.transform = "scale(1)";
  });
  insights2Container.addEventListener("mouseout", () => {
    cursor.style.visibility = "visible";
    cursorCircle.style.visibility = "visible";
    insights2ContainerImage.style.opacity = "0";
    insights2ContainerImage.style.clipPath = "inset(100% 0px 0px)";
    insights2ContainerImage.style.visibility = "hidden";
    insights2ContainerImageimg.style.transform = "scale(1.2)";
  });
  insights3Container.addEventListener("mouseover", () => {
    cursor.style.visibility = "hidden";
    cursorCircle.style.visibility = "hidden";
    insights3ContainerImage.style.opacity = ".5";
    insights3ContainerImage.style.clipPath = "inset(0px)";
    insights3ContainerImage.style.visibility = "visible";
    insights3ContainerImageimg.style.transform = "scale(1)";
  });
  insights3Container.addEventListener("mouseout", () => {
    cursor.style.visibility = "visible";
    cursorCircle.style.visibility = "visible";
    insights3ContainerImage.style.opacity = "0";
    insights3ContainerImage.style.clipPath = "inset(100% 0px 0px)";
    insights3ContainerImage.style.visibility = "hidden";
    insights3ContainerImageimg.style.transform = "scale(1.2)";
  });
  topRatedHoverContainer1.addEventListener("mouseover" ,()=>{
    cursor.style.visibility = "hidden";
    cursorCircle.style.visibility = "hidden";
    topRatedHoverContainer1img.style.opacity = ".5";
    topRatedHoverContainer1img.style.clipPath = "inset(0px)";
    topRatedHoverContainer1img.style.visibility = "visible";
    topRatedHoverContainer1image.style.transform = "scale(1)";
  });
  topRatedHoverContainer1.addEventListener("mouseout" ,()=>{
    cursor.style.visibility = "visible";
    cursorCircle.style.visibility = "visible";
    topRatedHoverContainer1img.style.opacity = "0";
    topRatedHoverContainer1img.style.clipPath = "inset(100% 0px 0px)";
    topRatedHoverContainer1img.style.visibility = "hidden";
    topRatedHoverContainer1image.style.transform = "scale(1.2)";
  });
  topRatedHoverContainer2.addEventListener("mouseover" ,()=>{
    cursor.style.visibility = "hidden";
    cursorCircle.style.visibility = "hidden";
    topRatedHoverContainer2img.style.opacity = ".5";
    topRatedHoverContainer2img.style.clipPath = "inset(0px)";
    topRatedHoverContainer2img.style.visibility = "visible";
    topRatedHoverContainer2image.style.transform = "scale(1)";
  });
  topRatedHoverContainer2.addEventListener("mouseout" ,()=>{
    cursor.style.visibility = "visible";
    cursorCircle.style.visibility = "visible";
    topRatedHoverContainer2img.style.opacity = "0";
    topRatedHoverContainer2img.style.clipPath = "inset(100% 0px 0px)";
    topRatedHoverContainer2img.style.visibility = "hidden";
    topRatedHoverContainer2image.style.transform = "scale(1.2)";
  });
  topRatedHoverContainer3.addEventListener("mouseover" ,()=>{
    cursor.style.visibility = "hidden";
    cursorCircle.style.visibility = "hidden";
    topRatedHoverContainer3img.style.opacity = ".5";
    topRatedHoverContainer3img.style.clipPath = "inset(0px)";
    topRatedHoverContainer3img.style.visibility = "visible";
    topRatedHoverContainer3image.style.transform = "scale(1)";
  });
  topRatedHoverContainer3.addEventListener("mouseout" ,()=>{
    cursor.style.visibility = "visible";
    cursorCircle.style.visibility = "visible";
    topRatedHoverContainer3img.style.opacity = "0";
    topRatedHoverContainer3img.style.clipPath = "inset(100% 0px 0px)";
    topRatedHoverContainer3img.style.visibility = "hidden";
    topRatedHoverContainer3image.style.transform = "scale(1.2)";
  });
  topRatedHoverContainer4.addEventListener("mouseover" ,()=>{
    cursor.style.visibility = "hidden";
    cursorCircle.style.visibility = "hidden";
    topRatedHoverContainer4img.style.opacity = ".5";
    topRatedHoverContainer4img.style.clipPath = "inset(0px)";
    topRatedHoverContainer4img.style.visibility = "visible";
    topRatedHoverContainer4image.style.transform = "scale(1)";
  });
  topRatedHoverContainer4.addEventListener("mouseout" ,()=>{
    cursor.style.visibility = "visible";
    cursorCircle.style.visibility = "visible";
    topRatedHoverContainer4img.style.opacity = "0";
    topRatedHoverContainer4img.style.clipPath = "inset(100% 0px 0px)";
    topRatedHoverContainer4img.style.visibility = "hidden";
    topRatedHoverContainer4image.style.transform = "scale(1.2)";
  });
  topRatedHoverContainer5.addEventListener("mouseover" ,()=>{
    cursor.style.visibility = "hidden";
    cursorCircle.style.visibility = "hidden";
    topRatedHoverContainer5img.style.opacity = ".5";
    topRatedHoverContainer5img.style.clipPath = "inset(0px)";
    topRatedHoverContainer5img.style.visibility = "visible";
    topRatedHoverContainer5image.style.transform = "scale(1)";
  });
  topRatedHoverContainer5.addEventListener("mouseout" ,()=>{
    cursor.style.visibility = "visible";
    cursorCircle.style.visibility = "visible";
    topRatedHoverContainer5img.style.opacity = "0";
    topRatedHoverContainer5img.style.clipPath = "inset(100% 0px 0px)";
    topRatedHoverContainer5img.style.visibility = "hidden";
    topRatedHoverContainer5image.style.transform = "scale(1.2)";
  });
  topRatedHoverContainer6.addEventListener("mouseover" ,()=>{
    cursor.style.visibility = "hidden";
    cursorCircle.style.visibility = "hidden";
    topRatedHoverContainer6img.style.opacity = ".5";
    topRatedHoverContainer6img.style.clipPath = "inset(0px)";
    topRatedHoverContainer6img.style.visibility = "visible";
    topRatedHoverContainer6image.style.transform = "scale(1)";
  });
  topRatedHoverContainer6.addEventListener("mouseout" ,()=>{
    cursor.style.visibility = "visible";
    cursorCircle.style.visibility = "visible";
    topRatedHoverContainer6img.style.opacity = "0";
    topRatedHoverContainer6img.style.clipPath = "inset(100% 0px 0px)";
    topRatedHoverContainer6img.style.visibility = "hidden";
    topRatedHoverContainer6image.style.transform = "scale(1.2)";
  });
}




// --------------------NavBar--------------------




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

window.addEventListener("scroll", ()=> {
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




// --------------------Brands Section--------------------




const brandsWhite = [
  {
    img: "brands/amazon.svg",
    alt: "Amazon",
    title: "Amazon"
  },
  {
    img: "brands/beats.svg",
    alt: "Beats",
    title: "Beats"
  },
  {
    img: "brands/GE.png",
    alt: "GE",
    title: "GE"
  },
  {
    img: "brands/nbc.svg",
    alt: "NBC",
    title: "NBC"
  },
  {
    img: "brands/cbso.svg",
    alt: "CBSO",
    title: "CBSO"
  },
  {
    img: "brands/la.svg",
    alt: "LACOunty",
    title: "LACOunty"
  },
  {
    img: "brands/la.svg",
    alt: "LACOunty",
    title: "LACOunty"
}];
  const brandsBlack = [
  {
    img: "brands/qe.svg",
    alt: "QE",
    title: "QE"
  },
  {
    img: "brands/physicianformula.svg",
    alt: "PhysicicanFormula",
    title: "PhysicicanFormula"
  },
  {
    img: "brands/redbarn.svg",
    alt: "RedBarn",
    title: "RedBarn"
  },
  {
    img: "brands/aerovironment.svg",
    alt: "AeroVironment",
    title: "AeroVironment"
  },
  {
    img: "brands/lipsmaker.svg",
    alt: "LipSmacker",
    title: "LipSMacker"
  },
  {
    img: "brands/tce.svg",
    alt: "TCE",
    title: "TCE"
  },
  {
    img: "brands/tce.svg",
    alt: "TCE",
    title: "TCE"
}];
  
const brandContainerWhite = document.getElementsByClassName("brandsList")[0];
const brandContainerBlack = document.getElementsByClassName("brandsList")[1];
  
const generateBrandsWhite = (brands) =>{
  return `<div class="brandImg">
  <img src="${brands.img}" alt="${brands.alt}" title="${brands.title}">
  </div>`;
};
const generateBrandsBlack = (brands) =>{
  return `<div class="brandImgBlack">
  <img src="${brands.img}" alt="${brands.alt}" title="${brands.title}">
  </div>`;
};
  
const renderBrandsWhite = (brandsWhite) =>{
  brandContainerWhite.innerHTML = "";
  brandsWhite.forEach(brandsWhite => {
    brandContainerWhite.innerHTML += generateBrandsWhite(brandsWhite);
  });
};
const renderBrandsBlack = (brandsWhite) =>{
  brandContainerBlack.innerHTML = "";
  brandsBlack.forEach(brandsBlack => {
    brandContainerBlack.innerHTML += generateBrandsBlack(brandsBlack);
  });
};
renderBrandsWhite(brandsWhite);
renderBrandsBlack(brandsBlack);




// --------------------Our Expertise--------------------




const listItems = document.getElementsByClassName("listItem");
const clickableHeadings = document.getElementsByClassName("clickableHeading");
const clickableHeadingButtons = document.getElementsByClassName("clickableHeadingButton");
const collapsibleDetails = document.getElementsByClassName("detailCollapse1");

for (let i = 0; i < 6; i++) {
  const clickableHeading = clickableHeadings[i];
  const listItem = listItems[i];
  const clickableHeadingButton = clickableHeadingButtons[i];
  const detailCollapse = collapsibleDetails[i];
  
  clickableHeading.addEventListener("click", () => {
    
    detailCollapse.classList.toggle("detailCollapseClose");
    listItem.classList.toggle("detailOpened");
    clickableHeadingButton.classList.toggle("changeHeadingColor");
    
    for (let j = 0; j < 6; j++) {
      if (j !== i) {
        collapsibleDetails[j].classList.add("detailCollapseClose");
        listItems[j].classList.remove("detailOpened");
        clickableHeadingButtons[j].classList.remove("changeHeadingColor");
      }
    }
  });
}
for (let i = 6; i < 12; i++) {
  const clickableHeading = clickableHeadings[i];
  const listItem = listItems[i];
  const clickableHeadingButton = clickableHeadingButtons[i];
  const detailCollapse = collapsibleDetails[i];
  
  clickableHeading.addEventListener("click", () => {
    
    detailCollapse.classList.toggle("detailCollapseClose");
    listItem.classList.toggle("detailOpened");
    clickableHeadingButton.classList.toggle("changeHeadingColor");
    
    for (let j = 5; j < 12; j++) {
      if (j !== i) {
        collapsibleDetails[j].classList.add("detailCollapseClose");
        listItems[j].classList.remove("detailOpened");
        clickableHeadingButtons[j].classList.remove("changeHeadingColor");
      }
    }
  });
}
for (let i = 12; i < clickableHeadings.length; i++) {
  const clickableHeading = clickableHeadings[i];
  const listItem = listItems[i];
  const clickableHeadingButton = clickableHeadingButtons[i];
  const detailCollapse = collapsibleDetails[i];
  
  clickableHeading.addEventListener("click", () => {
    
    detailCollapse.classList.toggle("detailCollapseClose");
    listItem.classList.toggle("detailOpened");
    clickableHeadingButton.classList.toggle("changeHeadingColor");
    
    for (let j = 12; j < collapsibleDetails.length; j++) {
      if (j !== i) {
        collapsibleDetails[j].classList.add("detailCollapseClose");
        listItems[j].classList.remove("detailOpened");
        clickableHeadingButtons[j].classList.remove("changeHeadingColor");
      }
    }
  });
}




// --------------------Platform Technologies--------------------




const platformsArray = [
  {
    img: "platform_tech/magento.svg",
    alt: "Magento",
    title: "Magento"
  },
  {
    img: "platform_tech/wordpress.svg",
    alt: "WordPress",
    title: "WordPress"
  },
  {
    img: "platform_tech/shopify.svg",
    alt: "Shopify",
    title: "Shopify"
  },
  {
    img: "platform_tech/umbraco.svg",
    alt: "Umbraco",
    title: "Umbraco"
  },
  {
    img: "platform_tech/microsoft.svg",
    alt: "Microsoft .NET",
    title: "Microsoft .NET"
  },
  {
    img: "platform_tech/sitefinity.svg",
    alt: "Progress Sitefinity",
    title: "Progress Sitefinity"
  },
  {
    img: "platform_tech/sitefinity.svg",
    alt: "Progress Sitefinity",
    title: "Progress Sitefinity"
  }
];
const techArray = [
  {
    img: "platform_tech/drupal.webp",
    alt: "Drupal",
    title: "Drupal"
  },
  {
    img: "platform_tech/sitecore.svg",
    alt: "Sitecore",
    title: "Sitecore"
  },
  {
    img: "platform_tech/kentico.svg",
    alt: "Kentico",
    title: "Kentico"
  },
  {
    img: "platform_tech/react.svg",
    alt: "React JS",
    title: "React JS"
  },
  {
    img: "platform_tech/apple.svg",
    alt: "Apple IOS",
    title: "Apple IOS"
  },
  {
    img: "platform_tech/android.svg",
    alt: "Android",
    title: "Android"
  },
  {
    img: "platform_tech/android.svg",
    alt: "Android",
    title: "Android"
  }
];

const generatePlatform = (e) =>{
  return `<div class="brandImg flex-column">
  <img src="${e.img}" alt="${e.alt}" title="${e.title}" class="margin16pxbottom">
  <span class="platformWord">${e.title}</span>
  </div>`;
};
const generateTech = (e) =>{
  return `<div class="brandImgBlack flex-column">
  <img src="${e.img}" alt="${e.alt}" title="${e.title}" class="margin16pxbottom">
  <span class="platformWordWhite">${e.title}</span>
  </div>`;
};

const platformContainer = document.getElementsByClassName("brandsList")[2];
const techContainer = document.getElementsByClassName("brandsList")[3];

const renderPlatforms = (platformsArray) =>{
  platformContainer.innerHTML = "";
  platformsArray.forEach(platformsArray => {
    platformContainer.innerHTML += generatePlatform(platformsArray);
  });
};
const renderTech = (techArray) =>{
  techContainer.innerHTML = "";
  techArray.forEach(techArray => {
    techContainer.innerHTML += generateTech(techArray);
  });
};
renderPlatforms(platformsArray);
renderTech(techArray);




// --------------------Connect Create Evolve--------------------




const concrevItem1 = document.getElementsByClassName("concrevItem")[0];
const concrevItem2 = document.getElementsByClassName("concrevItem")[1];
const concrevItem3 = document.getElementsByClassName("concrevItem")[2];
const concrevItemTitle1 = document.getElementsByClassName("title1")[0];
const concrevItemTitle2 = document.getElementsByClassName("title2")[0];
const concrevItemTitle3 = document.getElementsByClassName("title3")[0];

concrevItem1.addEventListener("click" , () =>{
  
  concrevItem1.classList.add("concrevOpened");
  concrevItem2.classList.remove("concrevOpened");
  concrevItem3.classList.remove("concrevOpened");
  
  concrevItemTitle1.style.color = "#000";
  concrevItemTitle2.style.color = "#fff";
  concrevItemTitle3.style.color = "#fff";
  
  
});
concrevItem2.addEventListener("click" , () =>{
  
  concrevItem2.classList.add("concrevOpened");
  concrevItem1.classList.remove("concrevOpened");
  concrevItem3.classList.remove("concrevOpened");
  
  concrevItemTitle2.style.color = "#000";
  concrevItemTitle1.style.color = "#fff";
  concrevItemTitle3.style.color = "#fff";
  
});
concrevItem3.addEventListener("click" , () =>{
  
  concrevItem3.classList.add("concrevOpened");
  concrevItem2.classList.remove("concrevOpened");
  concrevItem1.classList.remove("concrevOpened");
  
  concrevItemTitle3.style.color = "#000";
  concrevItemTitle1.style.color = "#fff";
  concrevItemTitle2.style.color = "#fff";
  
});




// --------------------Discovery Section--------------------




const discoveryItem1 = document.getElementsByClassName("discoveryItem")[0];
const discoveryItem2 = document.getElementsByClassName("discoveryItem")[1];
const discoveryItem3 = document.getElementsByClassName("discoveryItem")[2];
const discoveryItem4 = document.getElementsByClassName("discoveryItem")[3];
const discoveryItem5 = document.getElementsByClassName("discoveryItem")[4];
const discoveryItem6 = document.getElementsByClassName("discoveryItem")[5];
const discoveryItemTitle1 = document.getElementsByClassName("discoverytitle1")[0];
const discoveryItemTitle2 = document.getElementsByClassName("discoverytitle2")[0];
const discoveryItemTitle3 = document.getElementsByClassName("discoverytitle3")[0];
const discoveryItemTitle4 = document.getElementsByClassName("discoverytitle4")[0];
const discoveryItemTitle5 = document.getElementsByClassName("discoverytitle5")[0];
const discoveryItemTitle6 = document.getElementsByClassName("discoverytitle6")[0];

discoveryItem1.addEventListener("click" , () =>{
  
  discoveryItem1.classList.add("discoveryOpened");
  discoveryItem2.classList.remove("discoveryOpened");
  discoveryItem3.classList.remove("discoveryOpened");
  discoveryItem4.classList.remove("discoveryOpened");
  discoveryItem5.classList.remove("discoveryOpened");
  discoveryItem6.classList.remove("discoveryOpened");
  
  discoveryItemTitle1.style.color = "#000";
  discoveryItemTitle2.style.color = "#fff";
  discoveryItemTitle3.style.color = "#fff";
  discoveryItemTitle4.style.color = "#fff";
  discoveryItemTitle5.style.color = "#fff";
  discoveryItemTitle6.style.color = "#fff";
  
  
});
discoveryItem2.addEventListener("click" , () =>{
  
  discoveryItem2.classList.add("discoveryOpened");
  discoveryItem1.classList.remove("discoveryOpened");
  discoveryItem3.classList.remove("discoveryOpened");
  discoveryItem4.classList.remove("discoveryOpened");
  discoveryItem5.classList.remove("discoveryOpened");
  discoveryItem6.classList.remove("discoveryOpened");
  
  discoveryItemTitle2.style.color = "#000";
  discoveryItemTitle1.style.color = "#fff";
  discoveryItemTitle3.style.color = "#fff";
  discoveryItemTitle4.style.color = "#fff";
  discoveryItemTitle5.style.color = "#fff";
  discoveryItemTitle6.style.color = "#fff";
  
});
discoveryItem3.addEventListener("click" , () =>{
  
  discoveryItem3.classList.add("discoveryOpened");
  discoveryItem2.classList.remove("discoveryOpened");
  discoveryItem1.classList.remove("discoveryOpened");
  discoveryItem4.classList.remove("discoveryOpened");
  discoveryItem5.classList.remove("discoveryOpened");
  discoveryItem6.classList.remove("discoveryOpened");
  
  discoveryItemTitle3.style.color = "#000";
  discoveryItemTitle1.style.color = "#fff";
  discoveryItemTitle2.style.color = "#fff";
  discoveryItemTitle4.style.color = "#fff";
  discoveryItemTitle5.style.color = "#fff";
  discoveryItemTitle6.style.color = "#fff";
  
});
discoveryItem4.addEventListener("click" , () =>{
  
  discoveryItem4.classList.add("discoveryOpened");
  discoveryItem2.classList.remove("discoveryOpened");
  discoveryItem1.classList.remove("discoveryOpened");
  discoveryItem3.classList.remove("discoveryOpened");
  discoveryItem5.classList.remove("discoveryOpened");
  discoveryItem6.classList.remove("discoveryOpened");
  
  discoveryItemTitle4.style.color = "#000";
  discoveryItemTitle1.style.color = "#fff";
  discoveryItemTitle2.style.color = "#fff";
  discoveryItemTitle3.style.color = "#fff";
  discoveryItemTitle5.style.color = "#fff";
  discoveryItemTitle6.style.color = "#fff";
  
});
discoveryItem5.addEventListener("click" , () =>{
  
  discoveryItem5.classList.add("discoveryOpened");
  discoveryItem2.classList.remove("discoveryOpened");
  discoveryItem1.classList.remove("discoveryOpened");
  discoveryItem3.classList.remove("discoveryOpened");
  discoveryItem4.classList.remove("discoveryOpened");
  discoveryItem6.classList.remove("discoveryOpened");
  
  discoveryItemTitle5.style.color = "#000";
  discoveryItemTitle1.style.color = "#fff";
  discoveryItemTitle2.style.color = "#fff";
  discoveryItemTitle3.style.color = "#fff";
  discoveryItemTitle4.style.color = "#fff";
  discoveryItemTitle6.style.color = "#fff";
  
});
discoveryItem6.addEventListener("click" , () =>{
  
  discoveryItem6.classList.add("discoveryOpened");
  discoveryItem2.classList.remove("discoveryOpened");
  discoveryItem1.classList.remove("discoveryOpened");
  discoveryItem3.classList.remove("discoveryOpened");
  discoveryItem4.classList.remove("discoveryOpened");
  discoveryItem5.classList.remove("discoveryOpened");
  
  discoveryItemTitle6.style.color = "#000";
  discoveryItemTitle1.style.color = "#fff";
  discoveryItemTitle2.style.color = "#fff";
  discoveryItemTitle3.style.color = "#fff";
  discoveryItemTitle4.style.color = "#fff";
  discoveryItemTitle5.style.color = "#fff";
  
});




// --------------------Dive In Section--------------------




const diveInCursorHovered1 = () =>{
  document.getElementById("cursorCircleBorder").classList.add("cursorHovered");
  document.getElementById("diveInImg1").style.opacity = "0";
  document.getElementById("diveInImg2").style.opacity = "1";
};
const diveInNotCursorHovered1 = () =>{
  document.getElementById("cursorCircleBorder").classList.remove("cursorHovered");
  document.getElementById("diveInImg1").style.opacity = "1";
  document.getElementById("diveInImg2").style.opacity = "0";
};
const diveInCursorHovered2 = () =>{
  document.getElementById("cursorCircleBorder").classList.add("cursorHovered");
  document.getElementById("diveInImg1").style.opacity = "0";
  document.getElementById("diveInImg3").style.opacity = "1";
};
const diveInNotCursorHovered2 = () =>{
  document.getElementById("cursorCircleBorder").classList.remove("cursorHovered");
  document.getElementById("diveInImg1").style.opacity = "1";
  document.getElementById("diveInImg3").style.opacity = "0";
};
