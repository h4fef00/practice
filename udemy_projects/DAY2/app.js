const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const steps = document.querySelectorAll(".circle");
const stepsLine = document.querySelectorAll(".line");

function prevStep() {
  for (const stepLine of stepsLine) {
    stepLine.classList.remove("active-line");
    prevBtn.disabled = true;
    prevBtn.classList.remove("active");
  }
}

function nextStep() {
  for (const stepLine of stepsLine) {
    stepLine.classList.add("active-line");
    console.log(stepLine);
    prevBtn.disabled = false;
    prevBtn.classList.add("active");
  }
}

prevBtn.addEventListener("click", prevStep);
nextBtn.addEventListener("click", nextStep);
