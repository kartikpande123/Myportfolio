let words = document.querySelectorAll(".word");

words.forEach((word) => {
  let letters = word.textContent.trim().split("");
  word.textContent = "";

  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.classList.add("letter");
    word.appendChild(span);
  });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
  let currentWord = words[currentWordIndex];
  let nextWord =
    currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.classList.add("out");
    }, i * 80);
  });

  setTimeout(() => {
    currentWord.style.opacity = "0";
    nextWord.style.opacity = "1";

    Array.from(nextWord.children).forEach((letter, i) => {
      setTimeout(() => {
        letter.classList.remove("out");
        letter.classList.add("behind");
        setTimeout(() => {
          letter.classList.remove("behind");
          letter.classList.add("in");
        }, 340 + i * 80);
      }, 50 + i * 80);
    });

    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
  }, words[currentWordIndex].textContent.length * 80 + 400);
};

changeText();
setInterval(changeText, 3000);





// mix portfolio
var mixer = mixitup(".p-g");

// Active menu
let menuLi = document.querySelectorAll("header ul li a");
let sections = document.querySelectorAll("section");

function activeMenu() {
  let len = sections.length;
  while (--len && window.scrollY + 97 < sections[len].offsetTop) {}
  menuLi.forEach((sec) => sec.classList.remove("active"));
  menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

// sticky navbar
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 50);
});

// toggle navbar
document.addEventListener("DOMContentLoaded", function () {
  let menuIcon = document.querySelector("#menu-icon");
  let navlist = document.querySelector(".navlist");

  menuIcon.addEventListener("click", function () {
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
  });

  window.onscroll = () => {
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
  };
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-items");
    } else {
      entry.target.classList.remove("show-items");
    }
  });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el));
