const hide = document.querySelector(".hide");
const menuIcon = document.querySelector(".menuIcon");
const menuIcon2 = document.querySelector(".menuIcon2");
const slidermenu = document.querySelector(".slidermenu");

menuIcon.addEventListener("click", () => {
/*     slidermenu.classList.toggle("hide");
    slidermenu.offsetLeft; */
    slidermenu.classList.toggle("hidded");
  menuIcon.classList.toggle("gone");
  menuIcon2.classList.toggle("gone");
});
menuIcon2.addEventListener("click", () => {
    slidermenu.classList.toggle("hidded");
    menuIcon.classList.toggle("gone");
    menuIcon2.classList.toggle("gone");

});

/* menuIcon2.addEventListener("click", function (e) {
    e.preventDefault;
    
    //introducing a delay of 40 seconds.
    setTimeout(function () {
        console.log("uyvgk")
      slidermenu.classList.add("hide");
    }, 40 * 9);
  },
  false
); */
