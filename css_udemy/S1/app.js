const backdrop = document.querySelector(".backdrop");
const selectPlanBtn = document.querySelectorAll(".plan .button");
const modal = document.querySelector(".modal");
const btnNope = document.querySelector(".modal__action--negative");
const btnMenu = document.querySelector(".toggle-button");
const navMobile = document.querySelector(".mobile-nav");

function closeModal() {
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
}

const showMenu = () => {
  backdrop.classList.add("open");
  navMobile.classList.add("open");
};

function closeSidenav() {
  navMobile.classList.remove("open");
  closeModal();
}

selectPlanBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    // backdrop.style.display = "block";
    // modal.style.display = "block";
    modal.classList.add("open");
    backdrop.classList.add("open");
  });
});

if (btnNope) {
  btnNope.addEventListener("click", closeModal);
}

btnMenu.addEventListener("click", showMenu);
backdrop.addEventListener("click", closeSidenav);
