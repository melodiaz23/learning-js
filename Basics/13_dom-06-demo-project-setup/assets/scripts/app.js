const addMovieButton = document.querySelectorAll("button")[4];
const cancelButton = document.querySelectorAll("button")[0];
const modal = document.getElementById("add-modal"); // max way.
// const modal = document.querySelector('.modal'); // my way
const addButton = modal.querySelector(".btn--success"); // another approach
// const addButton = document.querySelectorAll("button")[1];
const userInputs = modal.querySelectorAll("input");
// CONTROLLING THE BACKDROP
const backdrop = document.getElementById("backdrop");
const movies = [];



const addMovieHandler = () => {
  const tittleValue = userInputs[0].value; //.value because we are gonna have a value property there.
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;
// autoformating shift + option + f
  if (
  // trim is a method that will remove white space at the beggining and at the end of the input
  tittleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim === "" ||
    +ratingValue < 1 || // '+' is used to coerce a "string number" into an actual number.
    +ratingValue > 5
  ) {
    alert('Please enter a valid values (rating between 1 and 5).')
    return;
  }

  const newMovie = {
    title: tittleValue,
    image: imageUrlValue,
    rating: ratingValue
  };

  movies.push(newMovie);
  console.log(movies)
  toogleModal();
};

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const toogleModal = () => {
  modal.classList.toggle('visible');
  toggleBackdrop();
}


// Max way:
// const startMovieButton = document.querySelector('header button') // it is a tag selector

// const toggleMovieModal = () => {
  //   addMovieModal.classList.toggle('visible');
  // }
  // startMovieButton.addEventListener('click', toggleMovieModal);
  
addMovieButton.addEventListener("click", toogleModal);
cancelButton.addEventListener("click", toogleModal);
backdrop.addEventListener("click", toogleModal);
addButton.addEventListener('click', addMovieHandler);
