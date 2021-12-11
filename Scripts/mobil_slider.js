/* Varibles */
//Menuitem
const menuDitem1 = document.querySelector(".menuDitem1")
const menuDitem2 = document.querySelector(".menuDitem2")
const menuDitem3 = document.querySelector(".menuDitem3")
const menuDitem4 = document.querySelector(".menuDitem4")
const menuDitem5 = document.querySelector(".menuDitem5")
const menuDitem6 = document.querySelector(".menuDitem6")

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
const menu1 = document.querySelector(".menuMitem1");
const menu2 = document.querySelector(".menuMitem2");
const menu3 = document.querySelector(".menuMitem3");
const menu4 = document.querySelector(".menuMitem4");
const menu5 = document.querySelector(".menuMitem5");
const menu6 = document.querySelector(".menuMitem6");


//* Observer 1 ///


// en varible der starter en arrow funtion. Den opretter en "new IntersectionObserver" som tjekker om vores element".text3"
// kan ses i vores Viewport.

// entries is an array of IntersectionObserverEntry objects. Each such object represents information about a given target's intersection with the root. i dette tilfælde vores element.
let observer1 = new IntersectionObserver(
  function (entries) {
    // if function der tjekker om "entries" rammmer root. [0] er placeret som en threshold på "0" da en treshold på 1 ikke kan garanteres på alle browers
    if (entries[0].isIntersecting === true) {
      console.log("Les Spécialites", this);
      // Tilføjer eller fjerner en klasse
      menukort1.classList.remove("hide");
      menukort2.classList.add("hide");
      menukort3.classList.add("hide");
      menukort4.classList.add("hide");
      menukort5.classList.add("hide");
      menukort6.classList.add("hide");
    }
  },
  //Her kan vi i stedet skrive vores threshold på hvor meget af elementet kan ses på siden inden vores if statement starter. skala fra (0-1)
  { threshold: [0.5] }
);
// obsavere det valgt element i.e ".text3". Den skal står efter vores "new IntersectionObserver"
observer1.observe(menu1);


//* Observer 2 ///

let observer2 = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting === true) {
      console.log("Les Galettes", this);
      menukort1.classList.add("hide");
      menukort2.classList.remove("hide");
      menukort3.classList.add("hide");
      menukort4.classList.add("hide");
      menukort5.classList.add("hide");
      menukort6.classList.add("hide");
    }
  },
  { threshold: [1] }
);
observer2.observe(menu2);

//* Observer 3 ///

let observer3 = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting === true) {
      console.log("Les Crêpes", this);
       menukort1.classList.add("hide");
       menukort2.classList.add("hide");
       menukort3.classList.remove("hide");
       menukort4.classList.add("hide");
       menukort5.classList.add("hide");
       menukort6.classList.add("hide");
    }
  },
  { threshold: [1] }
);
observer3.observe(menu3);

//* Observer 4 ///

let observer4 = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting === true) {
      console.log("Les Crêpes", this);
      menukort1.classList.add("hide");
      menukort2.classList.add("hide");
      menukort3.classList.add("hide");
      menukort4.classList.remove("hide");
      menukort5.classList.add("hide");
      menukort6.classList.add("hide");
    }
  },
  { threshold: [1] }
);
observer4.observe(menu4);

//* Observer 5 ///

let observer5 = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting === true) {
      console.log("Les Crêpes", this);
      menukort1.classList.add("hide");
      menukort2.classList.add("hide");
      menukort3.classList.add("hide");
      menukort4.classList.add("hide");
      menukort5.classList.remove("hide");
      menukort6.classList.add("hide");
    }
  },
  { threshold: [1] }
);
observer5.observe(menu5);

//* Observer 6 ///

let observer6 = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting === true) {
      console.log("Les Crêpes", this);
      menukort1.classList.add("hide");
      menukort2.classList.add("hide");
      menukort3.classList.add("hide");
      menukort4.classList.add("hide");
      menukort5.classList.add("hide");
      menukort6.classList.remove("hide");
    }
  },
  { threshold: [1] }
);
observer6.observe(menu6);







//* ---------- Desktop Menu ---------- //

menuDitem1.addEventListener("mouseenter", () => {
  console.log("menukort 1")
  menukort1.classList.remove("hide")
  menukort2.classList.add("hide");
  menukort3.classList.add("hide");
  menukort4.classList.add("hide");
  menukort5.classList.add("hide");
  menukort6.classList.add("hide");
  menuDitem1.classList.add("shadow");
  menuDitem2.classList.remove("shadow");
  menuDitem3.classList.remove("shadow");
  menuDitem4.classList.remove("shadow");
  menuDitem5.classList.remove("shadow");
  menuDitem6.classList.remove("shadow");

}) ;
menuDitem1.addEventListener("click", () => {
  console.log("menukort 1")
  menukort1.classList.remove("hide");
  menukort2.classList.add("hide");
  menukort3.classList.add("hide");
  menukort4.classList.add("hide");
  menukort5.classList.add("hide");
  menukort6.classList.add("hide");
  menuDitem1.classList.add("shadow");
  menuDitem2.classList.remove("shadow");
  menuDitem3.classList.remove("shadow");
  menuDitem4.classList.remove("shadow");
  menuDitem5.classList.remove("shadow");
  menuDitem6.classList.remove("shadow");
}) ;
menuDitem2.addEventListener("mouseenter", () => {
  console.log("menukort 2")
  menukort1.classList.add("hide")
  menukort2.classList.remove("hide");
  menukort3.classList.add("hide");
  menukort4.classList.add("hide");
  menukort5.classList.add("hide");
  menukort6.classList.add("hide");
  menuDitem1.classList.remove("shadow");
  menuDitem2.classList.add("shadow");
  menuDitem3.classList.remove("shadow");
  menuDitem4.classList.remove("shadow");
  menuDitem5.classList.remove("shadow");
  menuDitem6.classList.remove("shadow");
  
}) ;
menuDitem2.addEventListener("click", () => {
  console.log("menukort 2")
  menukort1.classList.add("hide");
  menukort2.classList.remove("hide");
  menukort3.classList.add("hide");
  menukort4.classList.add("hide");
  menukort5.classList.add("hide");
  menukort6.classList.add("hide");
  menuDitem1.classList.remove("shadow");
  menuDitem2.classList.add("shadow");
  menuDitem3.classList.remove("shadow");
  menuDitem4.classList.remove("shadow");
  menuDitem5.classList.remove("shadow");
  menuDitem6.classList.remove("shadow");
}) ;
menuDitem3.addEventListener("mouseenter", () => {
  console.log("menukort 3")
  menukort1.classList.add("hide")
  menukort2.classList.add("hide");
  menukort3.classList.remove("hide");
  menukort4.classList.add("hide");
  menukort5.classList.add("hide");
  menukort6.classList.add("hide");
  menuDitem1.classList.remove("shadow");
  menuDitem2.classList.remove("shadow");
  menuDitem3.classList.add("shadow");
  menuDitem4.classList.remove("shadow");
  menuDitem5.classList.remove("shadow");
  menuDitem6.classList.remove("shadow");
}) ;
menuDitem3.addEventListener("click", () => {
  console.log("menukort 3")
  menukort1.classList.add("hide");
  menukort2.classList.add("hide");
  menukort3.classList.remove("hide");
  menukort4.classList.add("hide");
  menukort5.classList.add("hide");
  menukort6.classList.add("hide");
  menuDitem1.classList.remove("shadow");
  menuDitem2.classList.remove("shadow");
  menuDitem3.classList.add("shadow");
  menuDitem4.classList.remove("shadow");
  menuDitem5.classList.remove("shadow");
  menuDitem6.classList.remove("shadow");
}) ;
menuDitem4.addEventListener("mouseenter", () => {
  console.log("menukort 4")
  menukort1.classList.add("hide")
  menukort2.classList.add("hide");
  menukort3.classList.add("hide");
  menukort4.classList.remove("hide");
  menukort5.classList.add("hide");
  menukort6.classList.add("hide");
  menuDitem1.classList.remove("shadow");
  menuDitem2.classList.remove("shadow");
  menuDitem3.classList.remove("shadow");
  menuDitem4.classList.add("shadow");
  menuDitem5.classList.remove("shadow");
  menuDitem6.classList.remove("shadow");
}) ;
menuDitem4.addEventListener("click", () => {
  console.log("menukort 4")
  menukort1.classList.add("hide");
  menukort2.classList.add("hide");
  menukort3.classList.add("hide");
  menukort4.classList.remove("hide");
  menukort5.classList.add("hide");
  menukort6.classList.add("hide");
  menuDitem1.classList.remove("shadow");
  menuDitem2.classList.remove("shadow");
  menuDitem3.classList.remove("shadow");
  menuDitem4.classList.add("shadow");
  menuDitem5.classList.remove("shadow");
  menuDitem6.classList.remove("shadow");
}) ;
menuDitem5.addEventListener("mouseenter", () => {
  console.log("menukort 5")
  menukort1.classList.add("hide")
  menukort2.classList.add("hide");
  menukort3.classList.add("hide");
  menukort4.classList.add("hide");
  menukort5.classList.remove("hide");
  menukort6.classList.add("hide");
  menuDitem1.classList.remove("shadow");
  menuDitem2.classList.remove("shadow");
  menuDitem3.classList.remove("shadow");
  menuDitem4.classList.remove("shadow");
  menuDitem5.classList.add("shadow");
  menuDitem6.classList.remove("shadow");
}) ;
menuDitem5.addEventListener("click", () => {
  console.log("menukort 5")
  menukort1.classList.add("hide");
  menukort2.classList.add("hide");
  menukort3.classList.add("hide");
  menukort4.classList.add("hide");
  menukort5.classList.remove("hide");
  menukort6.classList.add("hide");
  menuDitem1.classList.remove("shadow");
  menuDitem2.classList.remove("shadow");
  menuDitem3.classList.remove("shadow");
  menuDitem4.classList.remove("shadow");
  menuDitem5.classList.add("shadow");
  menuDitem6.classList.remove("shadow");
}) ;
menuDitem6.addEventListener("mouseenter", () => {
  console.log("menukort 6")
  menukort1.classList.add("hide")
  menukort2.classList.add("hide");
  menukort3.classList.add("hide");
  menukort4.classList.add("hide");
  menukort5.classList.add("hide");
  menukort6.classList.remove("hide");
  menuDitem1.classList.remove("shadow");
  menuDitem2.classList.remove("shadow");
  menuDitem3.classList.remove("shadow");
  menuDitem4.classList.remove("shadow");
  menuDitem5.classList.remove("shadow");
  menuDitem6.classList.add("shadow");
}) ;
menuDitem6.addEventListener("click", () => {
  console.log("menukort 6")
  menukort1.classList.add("hide");
  menukort2.classList.add("hide");
  menukort3.classList.add("hide");
  menukort4.classList.add("hide");
  menukort5.classList.add("hide");
  menukort6.classList.remove("hide");
  menuDitem1.classList.remove("shadow");
  menuDitem2.classList.remove("shadow");
  menuDitem3.classList.remove("shadow");
  menuDitem4.classList.remove("shadow");
  menuDitem5.classList.remove("shadow");
  menuDitem6.classList.add("shadow");
}) ;

