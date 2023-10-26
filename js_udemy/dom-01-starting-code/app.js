// const ul = document.body.firstElementChild.nextElementSibling;
// const firstLi = ul.firstElementChild;
// console.log(firstLi);

const section = document.querySelector("section");
// section.style.backgroundColor = "blue";
section.className = "red-bg";

const button = document.querySelector("button");
button.addEventListener("click", () => {
  // if (section.className === "red-bg visible") {
  //   section.className = "red-bg invisible";
  // } else {
  //   section.className = "red-bg visible";
  // }

  section.classList.toggle("visible");
  section.classList.toggle("invisible");
});

const list = document.querySelector("ul");
// list.remove();
list.parentElement.removeChild(list);
