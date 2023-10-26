const addMovieModal = document.getElementById("add-modal");
const startMovieBtn = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
const cancelAddMovieBtn = document.body.children[1].querySelector("button");
const addMovieBtn = cancelAddMovieBtn.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");
const movies = [];

function toggleMovieModal() {
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
}

function toggleBackdrop() {
  backdrop.classList.toggle("visible");
}

function backdropClickHandler() {
  toggleMovieModal();
}

function cancelAddMovieHandler() {
  toggleMovieModal();
  clearInputs();
}

function clearInputs() {
  // userInputs.value = ""
  for (const usrInput of userInputs) {
    usrInput.value = "";
  }
}

function addMovieHandler() {
  const titleValue = userInputs[0].value;
  const userImageValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" ||
    userImageValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +rating > 5
  ) {
    alert("Please enter valid values");
    return;
  }

  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: userImageValue,
    rating: ratingValue,
  };

  movies.push(newMovie);
  console.log(movies);
  toggleMovieModal();
  clearInputs();
  addNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  updateUI();
}

function updateUI() {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
}

function deleteMovieHandler(movieId) {
  let identifiedIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    identifiedIndex++;
  }
  movies.splice(identifiedIndex, 1);
  const listRoot = document.getElementById("movie-list");
  listRoot.children[identifiedIndex].remove();
}

function addNewMovieElement(id, title, image, rating) {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
    <img src="${image}" alt="${title}" />
    </div>
    <div class="movie-element__info">
    <h2>${title}</h2>
    <p>${rating}/5 stars</p>
    </div>
    `;
  newMovieElement.addEventListener("click", deleteMovieHandler.bind(null, id));
  const listRoot = document.getElementById("movie-list");
  listRoot.append(newMovieElement);
}

startMovieBtn.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieBtn.addEventListener("click", cancelAddMovieHandler);
addMovieBtn.addEventListener("click", addMovieHandler);
