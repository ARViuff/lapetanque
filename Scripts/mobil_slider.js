
//* ---------- Mobil slider ---------- //

const slider = document.querySelector(".slider-container"),
  slides = Array.from(document.querySelectorAll(".slide"));

let isDragging = false,
  startPos = 0,
  currentTranslate = 0,
  prevTranslate = 0,
  animationID,
  currentIndex = 0;

slides.forEach((slide, index) => {
  const slideImage = slide.querySelector("h1");
  // disable default image drag
  slideImage.addEventListener("dragstart", (e) => e.preventDefault());
  // touch events
  slide.addEventListener("touchstart", touchStart(index));
  slide.addEventListener("touchend", touchEnd);
  slide.addEventListener("touchmove", touchMove);
  // mouse events
  slide.addEventListener("mousedown", touchStart(index));
  slide.addEventListener("mouseup", touchEnd);
  slide.addEventListener("mousemove", touchMove);
  slide.addEventListener("mouseleave", touchEnd);
});

// make responsive to viewport changes
window.addEventListener("resize", setPositionByIndex);

// prevent menu popup on long press
window.oncontextmenu = function (event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
};

function getPositionX(event) {
  return event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
}

function touchStart(index) {
  return function (event) {
    currentIndex = index;
    startPos = getPositionX(event);
    isDragging = true;
    animationID = requestAnimationFrame(animation);
    slider.classList.add("grabbing");
  };
}

function touchMove(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event);
    currentTranslate = prevTranslate + currentPosition - startPos;
  }
}

function touchEnd() {
  cancelAnimationFrame(animationID);
  isDragging = false;
  const movedBy = currentTranslate - prevTranslate;

  // if moved enough negative then snap to next slide if there is one
  if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1;

  // if moved enough positive then snap to previous slide if there is one
  if (movedBy > 100 && currentIndex > 0) currentIndex -= 1;

  setPositionByIndex();

  slider.classList.remove("grabbing");
}

function animation() {
  setSliderPosition();
  if (isDragging) requestAnimationFrame(animation);
}

function setPositionByIndex() {
  currentTranslate = currentIndex * -window.innerWidth;
  prevTranslate = currentTranslate;
  setSliderPosition();
}

function setSliderPosition() {
  slider.style.transform = `translateX(${currentTranslate}px)`;
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
observer1.observe(document.querySelector(".text1"));


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
observer2.observe(document.querySelector(".text2"));


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
observer3.observe(document.querySelector(".text3"))


