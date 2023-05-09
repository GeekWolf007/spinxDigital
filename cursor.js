const cursor = document.getElementById("cursor");
const cursorCircle = document.getElementById("cursorCircleBorder");

window.onpointermove = (event) => {
  const { clientX, clientY } = event;

  cursor.style.display = "block";
  cursorCircle.style.display = "block";
  cursor.style.opacity = "1";
  cursorCircle.style.opacity = "1";
  cursor.style.left = `${clientX}px`;
  cursor.style.top = `${clientY}px`;
  // cursorCircle.style.left = `${clientX}px`;
  // cursorCircle.style.top = `${clientY}px`;

  _clientX = clientX - 12;
  _clientY = clientY - 12;

  cursorCircle.animate(
    {
      left: `${_clientX}px`,
      top: `${_clientY}px`,
    },
    { duration: 600, fill: "forwards" }
  );
};
// document.onmouseleave=()=>{
//   cursor.style.display = "none";
//   cursorCircle.style.display = "none";
//   cursor.style.opacity = "0";
//   cursorCircle.style.opacity = "0";
// };
document.documentElement.addEventListener("mouseleave", () => {
  cursor.style.display = "none";
  cursorCircle.style.display = "none";
  cursor.style.opacity = "0";
  cursorCircle.style.opacity = "0";
});

const cursorHovered = () =>{
  cursorCircle.classList.add("cursorHovered")
};
const cursorNotHovered = () =>{
  cursorCircle.classList.remove("cursorHovered")
};

