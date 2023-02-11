const addMovieButton = document.querySelectorAll('button')[4];
const cancelBotton = document.querySelectorAll('button')[0];
const modal = document.querySelector('.modal');

addMovieButton.addEventListener('click', () => {
  modal.classList.toggle('visible');
})


// Max way:
// const addMovieModal = document.getElementById('add-modal');
// const startMovieButton = document.querySelector('header button') // it is a tag selector

// const toggleMovieModal = () => {
//   addMovieModal.classList.toggle('visible');
// }
// startMovieButton.addEventListener('click', toggleMovieModal);


