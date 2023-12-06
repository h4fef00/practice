const div = document.querySelectorAll(".panel");

div.forEach((image) => {
  image.addEventListener("click", () => {
    removeActive();
    image.classList.toggle("active");
  });
});

function removeActive() {
  div.forEach((image) => {
    if (image.classList.contains("active")) {
      image.classList.remove("active");
    }
  });
}
