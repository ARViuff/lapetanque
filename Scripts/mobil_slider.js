/* Varibles */
//Menuitem
const menuitem1 = document.querySelector(".menuitem1")
const menuitem2 = document.querySelector(".menuitem2")
const menuitem3 = document.querySelector(".menuitem3")
const menuitem4 = document.querySelector(".menuitem4")
const menuitem5 = document.querySelector(".menuitem5")
const menuitem6 = document.querySelector(".menuitem6")

//Shadow
const shadow = document.querySelector(".shadow");

//Menukort
const menukort1 = document.querySelector(".menucontent1");
const menukort2 = document.querySelector(".menucontent2");
const menukort3 = document.querySelector(".menucontent3");
const menukort4 = document.querySelector(".menucontent4");
const menukort5 = document.querySelector(".menucontent5");
const menukort6 = document.querySelector(".menucontent6");


//* ---------- Mobil slider ---------- //
/*Link Til Youtube Tutorial: https://youtu.be/5bxFSOA5JYo */

const slider = document.querySelector(".slider-container"),
  slides = Array.from(document.querySelectorAll(".slide"));

let isDragging = false,
  startPos = 0,
  currentTranslate = 0,
  prevTranslate = 0,
  animationID = 0,
  currentIndex = 0;

slides.forEach((slide, index) => {
  const slideImage = slide.querySelector("h1");
  slideImage.addEventListener("dragstart", (e) => e.preventDefault());

  // Touch events
  slide.addEventListener("touchstart", touchStart(index));
  slide.addEventListener("touchend", touchEnd);
  slide.addEventListener("touchmove", touchMove);

  // Mouse events
  slide.addEventListener("mousedown", touchStart(index));
  slide.addEventListener("mouseup", touchEnd);
  slide.addEventListener("mouseleave", touchEnd);
  slide.addEventListener("mousemove", touchMove);
});

// Disable context menu
window.oncontextmenu = function (event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
};

function touchStart(index) {
  return function (event) {
    currentIndex = index;
    startPos = getPositionX(event);
    isDragging = true;

    // https://css-tricks.com/using-requestanimationframe/
    animationID = requestAnimationFrame(animation);
    slider.classList.add("grabbing");
  };
}

function touchEnd() {
  isDragging = false;
  cancelAnimationFrame(animationID);

  const movedBy = currentTranslate - prevTranslate;

  if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1;

  if (movedBy > 100 && currentIndex > 0) currentIndex -= 1;

  setPositionByIndex();

  slider.classList.remove("grabbing");
}

function touchMove(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event);
    currentTranslate = prevTranslate + currentPosition - startPos;
  }
}

function getPositionX(event) {
  return event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
}

function animation() {
  setSliderPosition();
  if (isDragging) requestAnimationFrame(animation);
}

function setSliderPosition() {
  slider.style.transform = `translateX(${currentTranslate}px)`;
}

function setPositionByIndex() {
  currentTranslate = currentIndex * -window.innerWidth;
  prevTranslate = currentTranslate;
  setSliderPosition();
}





//* ---------- Observer(Tjekker om element kan ses på skærmen) ---------- //



// Variabler //
const menu1 = document.querySelector("#menucard1")
const menu2 = document.querySelector("#menucard2")
const menu3 = document.querySelector("#menucard3")


//* Observer 1 ///


// en varible der starter en arrow funtion. Den opretter en "new IntersectionObserver" som tjekker om vores element".text3"
// kan ses i vores Viewport.

// entries is an array of IntersectionObserverEntry objects. Each such object represents information about a given target's intersection with the root. i dette tilfælde vores element.
let observer1 = new IntersectionObserver(
  function (entries) {
    // if function der tjekker om "entries" rammmer root. [0] er placeret som en threshold på "0" da en treshold på 1 ikke kan garanteres på alle browers
    if (entries[0].isIntersecting === true) {
      console.log("Element has just become visible in screen1", this);
      // Tilføjer eller fjerner en klasse
      menu1.classList.remove("hidded");
      menu2.classList.add("hidded");
      menu3.classList.add("hidded");
    }
  },
  //Her kan vi i stedet skrive vores threshold på hvor meget af elementet kan ses på siden inden vores if statement starter. skala fra (0-1)
  { threshold: [0.5] }
);
// obsavere det valgt element i.e ".text3". Den skal står efter vores "new IntersectionObserver"
/* observer1.observe(document.querySelector(".text1")); */


//* Observer 2 ///


// en varible der starter en arrow funtion. Den opretter en "new IntersectionObserver" som tjekker om vores element".text3"
// kan ses i vores Viewport.

// entries is an array of IntersectionObserverEntry objects. Each such object represents information about a given target's intersection with the root. i dette tilfælde vores element.
let observer2 = new IntersectionObserver(
  function (entries) {
    // if function der tjekker om "entries" rammmer root. [0] er placeret som en threshold på "0" da en treshold på 1 ikke kan garanteres på alle browers
    if (entries[0].isIntersecting === true) {
      console.log("Element has just become visible in screen1", this);
      // Tilføjer eller fjerner en klasse
      menu1.classList.add("hidded");
      menu3.classList.add("hidded");
      menu2.classList.remove("hidded");
    }
  },
  //Her kan vi i stedet skrive vores threshold på hvor meget af elementet kan ses på siden inden vores if statement starter. skala fra (0-1)
  { threshold: [1] }
);
// obsavere det valgt element i.e ".text3". Den skal står efter vores "new IntersectionObserver"
/* observer2.observe(document.querySelector(".text2")); */


//* Observer 3 ///


// en varible der starter en arrow funtion. Den opretter en "new IntersectionObserver" som tjekker om vores element".text3"
// kan ses i vores Viewport.

// entries is an array of IntersectionObserverEntry objects. Each such object represents information about a given target's intersection with the root. i dette tilfælde vores element.
let observer3 = new IntersectionObserver(
  (entries) => {
    // if function der tjekker om "entries" rammmer root. [0] er placeret som en threshold på "0" da en treshold på 1 ikke kan garanteres på alle browers
    if (entries[0].isIntersecting === true) {
      console.log("maybe it worked", this);
      // Tilføjer eller fjerner en klasse
      menu1.classList.add("hidded");
      menu3.classList.remove("hidded");
      menu2.classList.add("hidded");
    }
  },
  //Her kan vi i stedet skrive vores threshold på hvor meget af elementet kan ses på siden inden vores if statement starter. skala fra (0-1)
  { threshold: [1] }
);

// obsavere det valgt element i.e ".text3". Den skal står efter vores "new IntersectionObserver"
/* observer3.observe(document.querySelector(".text3")) */


//* ---------- Desktop Menu ---------- //

menuitem1.addEventListener("mouseenter", () => {
  console.log("menukort 1")
  menukort1.classList.remove("hide")
  menukort2.classList.add("hide");
  menukort3.classList.add("hide");
  menukort4.classList.add("hide");
  menukort5.classList.add("hide");
  menukort6.classList.add("hide");
  menuitem1.classList.add("shadow");
  menuitem2.classList.remove("shadow");
  menuitem3.classList.remove("shadow");
  menuitem4.classList.remove("shadow");
  menuitem5.classList.remove("shadow");
  menuitem6.classList.remove("shadow");

}) ;
menuitem1.addEventListener("click", () => {
  console.log("menukort 1")
  menukort1.classList.remove("hide");
  menukort2.classList.add("hide");
  menukort3.classList.add("hide");
  menukort4.classList.add("hide");
  menukort5.classList.add("hide");
  menukort6.classList.add("hide");
  menuitem1.classList.add("shadow");
  menuitem2.classList.remove("shadow");
  menuitem3.classList.remove("shadow");
  menuitem4.classList.remove("shadow");
  menuitem5.classList.remove("shadow");
  menuitem6.classList.remove("shadow");
}) ;
menuitem2.addEventListener("mouseenter", () => {
  console.log("menukort 2")
  menukort1.classList.add("hide")
  menukort2.classList.remove("hide");
  menukort3.classList.add("hide");
  menukort4.classList.add("hide");
  menukort5.classList.add("hide");
  menukort6.classList.add("hide");
  menuitem1.classList.remove("shadow");
  menuitem2.classList.add("shadow");
  menuitem3.classList.remove("shadow");
  menuitem4.classList.remove("shadow");
  menuitem5.classList.remove("shadow");
  menuitem6.classList.remove("shadow");
  
}) ;
menuitem2.addEventListener("click", () => {
  console.log("menukort 2")
  menukort1.classList.add("hide");
  menukort2.classList.remove("hide");
  menukort3.classList.add("hide");
  menukort4.classList.add("hide");
  menukort5.classList.add("hide");
  menukort6.classList.add("hide");
   menuitem1.classList.remove("shadow");
   menuitem2.classList.add("shadow");
   menuitem3.classList.remove("shadow");
   menuitem4.classList.remove("shadow");
   menuitem5.classList.remove("shadow");
   menuitem6.classList.remove("shadow");
}) ;
menuitem3.addEventListener("mouseenter", () => {
  console.log("menukort 3")
  menukort1.classList.add("hide")
  menukort2.classList.add("hide");
  menukort3.classList.remove("hide");
  menukort4.classList.add("hide");
  menukort5.classList.add("hide");
  menukort6.classList.add("hide");
   menuitem1.classList.remove("shadow");
   menuitem2.classList.remove("shadow");
   menuitem3.classList.add("shadow");
   menuitem4.classList.remove("shadow");
   menuitem5.classList.remove("shadow");
   menuitem6.classList.remove("shadow");
}) ;
menuitem3.addEventListener("click", () => {
  console.log("menukort 3")
  menukort1.classList.add("hide");
  menukort2.classList.add("hide");
  menukort3.classList.remove("hide");
  menukort4.classList.add("hide");
  menukort5.classList.add("hide");
  menukort6.classList.add("hide");
  menuitem1.classList.remove("shadow");
  menuitem2.classList.remove("shadow");
  menuitem3.classList.add("shadow");
  menuitem4.classList.remove("shadow");
  menuitem5.classList.remove("shadow");
  menuitem6.classList.remove("shadow");
}) ;
menuitem4.addEventListener("mouseenter", () => {
  console.log("menukort 4")
  menukort1.classList.add("hide")
  menukort2.classList.add("hide");
  menukort3.classList.add("hide");
  menukort4.classList.remove("hide");
  menukort5.classList.add("hide");
  menukort6.classList.add("hide");
   menuitem1.classList.remove("shadow");
   menuitem2.classList.remove("shadow");
   menuitem3.classList.remove("shadow");
   menuitem4.classList.add("shadow");
   menuitem5.classList.remove("shadow");
   menuitem6.classList.remove("shadow");
}) ;
menuitem4.addEventListener("click", () => {
  console.log("menukort 4")
  menukort1.classList.add("hide");
  menukort2.classList.add("hide");
  menukort3.classList.add("hide");
  menukort4.classList.remove("hide");
  menukort5.classList.add("hide");
  menukort6.classList.add("hide");
  menuitem1.classList.remove("shadow");
  menuitem2.classList.remove("shadow");
  menuitem3.classList.remove("shadow");
  menuitem4.classList.add("shadow");
  menuitem5.classList.remove("shadow");
  menuitem6.classList.remove("shadow");
}) ;
menuitem5.addEventListener("mouseenter", () => {
  console.log("menukort 5")
  menukort1.classList.add("hide")
  menukort2.classList.add("hide");
  menukort3.classList.add("hide");
  menukort4.classList.add("hide");
  menukort5.classList.remove("hide");
  menukort6.classList.add("hide");
  menuitem1.classList.remove("shadow");
  menuitem2.classList.remove("shadow");
  menuitem3.classList.remove("shadow");
  menuitem4.classList.remove("shadow");
  menuitem5.classList.add("shadow");
  menuitem6.classList.remove("shadow");
}) ;
menuitem5.addEventListener("click", () => {
  console.log("menukort 5")
  menukort1.classList.add("hide");
  menukort2.classList.add("hide");
  menukort3.classList.add("hide");
  menukort4.classList.add("hide");
  menukort5.classList.remove("hide");
  menukort6.classList.add("hide");
  menuitem1.classList.remove("shadow");
  menuitem2.classList.remove("shadow");
  menuitem3.classList.remove("shadow");
  menuitem4.classList.remove("shadow");
  menuitem5.classList.add("shadow");
  menuitem6.classList.remove("shadow");
}) ;
menuitem6.addEventListener("mouseenter", () => {
  console.log("menukort 6")
  menukort1.classList.add("hide")
  menukort2.classList.add("hide");
  menukort3.classList.add("hide");
  menukort4.classList.add("hide");
  menukort5.classList.add("hide");
  menukort6.classList.remove("hide");
  menuitem1.classList.remove("shadow");
  menuitem2.classList.remove("shadow");
  menuitem3.classList.remove("shadow");
  menuitem4.classList.remove("shadow");
  menuitem5.classList.remove("shadow");
  menuitem6.classList.add("shadow");
}) ;
menuitem6.addEventListener("click", () => {
  console.log("menukort 6")
  menukort1.classList.add("hide");
  menukort2.classList.add("hide");
  menukort3.classList.add("hide");
  menukort4.classList.add("hide");
  menukort5.classList.add("hide");
  menukort6.classList.remove("hide");
  menuitem1.classList.remove("shadow");
  menuitem2.classList.remove("shadow");
  menuitem3.classList.remove("shadow");
  menuitem4.classList.remove("shadow");
  menuitem5.classList.remove("shadow");
  menuitem6.classList.add("shadow");
}) ;

