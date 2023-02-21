const addMovieFirstButton = document.querySelector('header button');
const addModal = document.getElementById('add-modal');
const cancelButton = addModal.querySelector('.btn--passive'); // Dot because is a class.
const addMovieButton = addModal.querySelector('.btn--success');
const backdrop = document.getElementById('backdrop');
const userInputs = document.querySelectorAll('input');

const movies = []

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

const updateUI = () => {
  const entryTextSection = document.getElementById('entry-text');
  if (movies === 0) {
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
  newMovieElement.addEventListener('click', startDeletionHandler);
  const listRoot = document.getElementById('movie-list');
  listRoot.append(newMovieElement);
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrl = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === '' || 
    imageUrl.trim() === '' ||
    ratingValue.trim() === '' || 
    +ratingValue < 1 || 
    +ratingValue > 5
  ) {
    alert ('Please enter valid values (rating between 1 and 5)');
    return;
  }

  const newMovie = {
    id: Math.random().toString, // toString to converting to a string
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

const startDeletionHandler = () =>{
  const deleteMovieModal = document.getElementById('delete-modal');
  const cancelDeletionButton = deleteMovieModal.querySelector('.btn--passive');
  const confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');

  const deletionModal = () => {
    deleteMovieModal.classList.add('visible');
    backdropVisibility();
  }

  deletionModal();

  const cancelModal = () => {
    deleteMovieModal.classList.remove('visible');
    hidebBackdrop()
  }
  
  // backdropVisibility();

  cancelDeletionButton.addEventListener('click', cancelModal);
  backdrop.addEventListener('click', cancelModal);
  confirmDeletionButton.addEventListener('click', console.log('CONFIRM'))
}

addMovieFirstButton.addEventListener('click', showMoviemodal);
cancelButton.addEventListener('click', hideModal);
backdrop.addEventListener('click', hideModal);
addMovieButton.addEventListener('click', addMovieHandler);


























// const startAddMovieButton = document.querySelectorAll("button")[4];
// const cancelButton = document.querySelectorAll("button")[0];
// const modal = document.getElementById("add-modal"); // max way.
// // const modal = document.querySelector('.modal'); // my way
// const addButton = modal.querySelector(".btn--success"); // another approach
// // const addButton = document.querySelectorAll("button")[1];
// const userInputs = modal.querySelectorAll("input");
// // CONTROLLING THE BACKDROP
// const backdrop = document.getElementById("backdrop");
// const entryText = document.getElementById('entry-text');
// const deleteMovieModal = document.getElementById('delete-modal')
// const movies = [];

// const updateUI = () => {
//   if (movies.length === 0){
//     entryText.style.display = 'block';
//   } else {
//     entryText.style.display = 'none';
//   }
// };

// const deleteMovie = (movieId) => {
//   let movieIndex = 0; 
//   for (const movie of movies){
//     if (movie.id === movieId){
//       break;
//     }
//     movieIndex++;
//   }
//   movies.splice(movieIndex, 1) // Takes an index as an input and the numnber of items we want to remove and remove it. movieIndex mean the numbers of elements from index will start to remove. The number 1 is known as 'removeCount', and means the number of elements we will remove.
//   const ulMovieList = document.getElementById('movie-list');
//   ulMovieList.children[movieIndex].remove();
//   closeMovieDeletionModal();
//   updateUI();
// }

// const closeMovieDeletionModal = () => {
//   toggleBackdrop();
//   deleteMovieModal.classList.remove('visible');
// }

// const deleteMovieHandler = (movieId) => {
//   deleteMovieModal.classList.add('visible');
//   toggleBackdrop();
//   const cancelDeletionButton = deleteMovieModal.querySelector('.btn--passive');
//   let confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');

//   confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));

//   confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');

//   cancelDeletionButton.removeEventListener('click', closeMovieDeletionModal);

//   cancelDeletionButton.addEventListener('click',closeMovieDeletionModal);
//   confirmDeletionButton.addEventListener('clik', deleteMovieHandler.bind(null, movieId));
// }

// const addNewMovie = (id, title, imageUrl, rating) => {
//   const newMovieElement = document.createElement('li');
//   newMovieElement.className = 'movie-element';
//    //backticks 'option' + '}'
//   newMovieElement.innerHTML = `
//     <div class="movie-element__image">
//       <img src="${imageUrl}" alt="${title}">
//     </div>
//     <div class ="movie-element__info">
//       <h2>${title}</h2>
//       <p>${rating}/5 stars</p>
//     </div>
//   `;
//   newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id))
//   const ulMovieList = document.getElementById('movie-list');
//   ulMovieList.append(newMovieElement);
// }

// const addMovieHandler = () => {
//   const tittleValue = userInputs[0].value; //.value because we are gonna have a value property there.
//   const imageUrlValue = userInputs[1].value;
//   const ratingValue = userInputs[2].value;
// // autoformating shift + option + f
//   if (
//   // trim is a method that will remove white space at the beggining and at the end of the input
//   tittleValue.trim() === "" ||
//     imageUrlValue.trim() === "" ||
//     ratingValue.trim === "" ||
//     +ratingValue < 1 || // '+' is used to coerce a "string number" into an actual number.
//     +ratingValue > 5
//   ) {
//     alert('Please enter a valid values (rating between 1 and 5).')
//     return;
//   }
//   const newMovie = {
//     id: Math.random().toString(), // toString to converting to a string
//     title: tittleValue,
//     image: imageUrlValue,
//     rating: ratingValue
//   };
//   movies.push(newMovie);
//   console.log(movies)
//   closeMovieModal();
//   // toggleBackdrop();
//   addNewMovie(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
//   updateUI();
// };

// const clearMovieInput = () => {
//   for (const usrInput of userInputs){
//     usrInput.value = '';
//   }
// }

// const toggleBackdrop = () => {
//   backdrop.classList.toggle("visible");
// };

// const closeMovieModal = () => {
//   modal.classList.remove('visible')
//   toggleBackdrop();
// }

// const showMovieModal = () => {
//   modal.classList.add('visible');
//   toggleBackdrop();
//   clearMovieInput();
// }

// const backdropClickHandler = () => {
//   closeMovieModal();
//   closeMovieDeletionModal();
//   toggleBackdrop();
// }

// // Max way:
// // const startMovieButton = document.querySelector('header button') // it is a tag selector

// // const toggleMovieModal = () => {
//   //   addMovieModal.classList.toggle('visible');
//   // }
//   // startMovieButton.addEventListener('click', toggleMovieModal);
  
// startAddMovieButton.addEventListener("click", showMovieModal);
// backdrop.addEventListener("click", backdropClickHandler);
// cancelButton.addEventListener("click", closeMovieModal);
// addButton.addEventListener('click', addMovieHandler);

