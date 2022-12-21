
// Manipulating the DOM exercise.
// Exercise programmatically builds navigation,
// scrolls to anchors from navigation,

let nav = document.getElementById("navbar__list");
let sections = document.querySelectorAll("section");
let fragment = document.createDocumentFragment();
//fragment helpful in code(reduce repaint &reflow)

// function
//build the nav
function makeNav() {
  // looping in sections
  for (let section of sections) {
    let linkName = section.getAttribute("data-nav");
    let sectionName = section.getAttribute("id");
    let myItem = document.createElement("li");
    let link = document.createElement("a");
    // add class
    link.classList.add("menu__link");
    // href
    link.href =`#${sectionName}`;
    link.textContent = linkName;
    //smooth__scrolling
    // Scroll to section on link click
    link.addEventListener("click",(e) => {
      e.preventDefault();
      section.scrollIntoView({
        behavior:"smooth",
      });
    });
    myItem.appendChild(link);
    fragment.appendChild(myItem);
  }

  nav.appendChild(fragment);
}
window.addEventListener("load", makeNav);

//  add active , remove active

let links = document.querySelectorAll("a.menu__link");

// highlights section in viewport upon scrolling.
// function for highlight

function addCircle() {
  // looping
  sections.forEach((section) => {
    let sectionTop = section.getBoundingClientRect().top;
    let sectionTitle = section.getAttribute("data-nav");
    if (sectionTop > 0 && sectionTop < 280) {
      section.classList.add("your-active-class");
    }

    // class link active
    for (let link of links) {
      link.textContent === sectionTitle
        ? link.classList.add("active"): link.classList.remove("active");
    }
  });
}
window.addEventListener("scroll", addCircle);

// button up(show  = add and remove)
let span = document.querySelector(".up");
window.onscroll = function () {
  // if it was more than 300 appear
  window.scrollY >= 300
    ? span.classList.add("show")
    : span.classList.remove("show");
    //if it was less than 300 (up)hidden
};
// when i click in up the page go up
span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
