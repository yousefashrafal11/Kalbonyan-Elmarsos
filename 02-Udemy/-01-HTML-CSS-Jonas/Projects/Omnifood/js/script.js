console.log("Hello World");

const myName = "Youssef Ashraf";
const h1 = document.querySelector(".heading-primary");
console.log(myName);
console.log(h1);

// h1.textContent = myName;
// h1.style.backgrundColor = "red";
// h1.style.backgroundColor = 'red';
// h1.style.padding = "5rem";

// h1.addEventListener("click", function () {
//   h1.textContent = myName;
//   h1.style.backgrundColor = "red";
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem";
// });

//Set current year
/*
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear);
yearEl.textContent = currentYear;
*/

// Make Mobile Navigation Work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

////////////////////////////////////////////////////
// Smooth Scrolling animation

const allLinks = document.querySelectorAll("a:link");

// // console.log(allLinks);

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // here I Make test Event is run or not
    // but if you want make it work with you you should do not forget make click any link I mentioned it here because I am forget do it
    // console.log(e);
    e.preventDefault();
    const href = link.getAttribute("href");
    // here make test if href is found print ( # )
    // console.log(href);

    // Scroll Back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // this is important point
    //The startsWith() method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.

    if (href !== "#" && href.startsWith("#")) {
      //here if href
      console.log(href);

      // 1 ) - here to make print element href && it has string after href ---- like #test

      const sectionEl = document.querySelector(href);

      // 1 ) - here to make scrolling to element selector

      //The Element interface's scrollIntoView() method scrolls the element's parent container such that the element on which scrollIntoView() is called is visible to the user.
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // here make Close mobile navigation
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

/////////////////////////////////////// Sticky navigation
//  here he is makes selector "Section-hero" only = true
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewPort
    root: null,
    threshold: 0,
    //here we are make margin instead of height navigation bar
    rootMargin: "-80px",
  }
);

obs.observe(sectionHeroEl);
