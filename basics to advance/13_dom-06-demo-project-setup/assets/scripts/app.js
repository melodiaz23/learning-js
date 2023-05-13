const addMovieFirstButton = document.querySelector('header button'); // it is a tag selector
const addModal = document.getElementById('add-modal');
const cancelButton = addModal.querySelector('.btn--passive'); // Dot because is a class.
const addMovieButton = addModal.querySelector('.btn--success');
const backdrop = document.getElementById('backdrop');
const userInputs = document.querySelectorAll('input');

const movies = []
const listRoot = document.getElementById('movie-list');
const deleteMovieModal = document.getElementById('delete-modal');

const addModalVisibility =  () => addModal.classList.add('visible');
const removeModal = () => addModal.classList.remove('visible')
const backdropVisibility = () => backdrop.classList.toggle('visible');
const hidebBackdrop = () => backdrop.classList.remove('visible');

const showMoviemodal = () => {
  addModalVisibility();
  backdropVisibility();
}

const hideModal = () => {
  removeModal();
  hidebBackdrop();
}

const clearMovieInput = () => { 
  for (const userInput of userInputs){
    userInput.value = '';
  }
}

const closeMovieDeletionModal = () => {
  deleteMovieModal.classList.remove('visible');
  hidebBackdrop();
}

const updateUI = () => {
  const entryTextSection = document.getElementById('entry-text');
  if (movies.length === 0) {
    entryTextSection.style.display = 'block';
  } else {
    entryTextSection.style.display = 'none';
  }
}

const renderNewMovieElement = (id, imageUrl, title, rating) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element'
  newMovieElement.innerHTML = `<div class='movie-element__image'>
    <img src='${imageUrl}' alt='${title}'>
    </div>
    <div class='movie-element__info'>
    <h2>${title}</h2>
    <p>${rating}/5 stars</p>
    </div>
  `;
  listRoot.append(newMovieElement);
  newMovieElement.addEventListener('click', startDeletionHandler.bind(null, id));
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value; //.value because we are gonna have a value property there.
  const imageUrl = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if ( // trim is a method that will remove white space at the beggining and at the end of the input
    titleValue.trim() === '' || 
    imageUrl.trim() === '' ||
    ratingValue.trim() === '' || 
    +ratingValue < 1 || // '+' is used to coerce a "string number" into an actual number.
    +ratingValue > 5
  ) {
    alert ('Please enter valid values (rating between 1 and 5)');
    return;
  }

  const newMovie = {
    id: Math.random().toString(), // toString to converting to a string
    title: titleValue,
    url: imageUrl,
    rating: ratingValue
  }
  movies.push(newMovie);
  console.log(movies);
  hideModal();
  clearMovieInput();
  renderNewMovieElement(
    newMovie.id,
    newMovie.url, 
    newMovie.title, 
    newMovie.rating);
  updateUI();
}

const deleteMovieHandler = (movieId) => {
  let movieIndex = 0
  for (const movie of movies){
    if (movie.id === movieId){
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1); // Takes an index as an input and the numnber of items we want to remove and remove it. movieIndex mean the numbers of elements from index will start to remove. The number 1 is known as 'removeCount', and means the number of elements we will remove.
  listRoot.children[movieIndex].remove();
  closeMovieDeletionModal();
  updateUI();
}

const startDeletionHandler = (movieId) =>{
  const cancelDeletionButton = deleteMovieModal.querySelector('.btn--passive');
  // debugger;
  let confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');
  confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));
  confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');

  const deletionModal = () => {
    deleteMovieModal.classList.add('visible');
    backdropVisibility();
  }
  deletionModal();

  const cancelModal = () => {
    deleteMovieModal.classList.remove('visible');
    hidebBackdrop()
  }

  cancelDeletionButton.addEventListener('click', cancelModal);
  backdrop.addEventListener('click', cancelModal);
  confirmDeletionButton.addEventListener('click', deleteMovieHandler.bind(null, movieId));
}

addMovieFirstButton.addEventListener('click', showMoviemodal);
cancelButton.addEventListener('click', hideModal);
backdrop.addEventListener('click', hideModal);
addMovieButton.addEventListener('click', addMovieHandler);

//backticks 'option' + '}'
// autoformating shift + option + f