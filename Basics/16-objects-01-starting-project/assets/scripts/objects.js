const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = () => {
  const movieList = document.getElementById('movie-list');
  
  if (movies.length === 0){
    movieList.classList.remove('visible') // ¿Cómo es que se remueve la parte visible del css?
    return
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  movies.forEach((movie) => {
    const movieEl = document.createElement('li');
    // movieEl.textContent = movie.info.title;
    let text = movie.info.title + ' - ';
    for (const key in movie.info){
      if (key !== 'tittle'){
        text = text + `${key}: ${movie.info[key]}`; // This print Title I DON'T KNOW WHY! 
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  })
};

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (
    title.trim() === '' || 
    extraName.trim() === '' || 
    extraValue.trim() === ''
    ) {
    return;
  }

  const newMovie = {
    info: {
      title, // will  be the same as title: title.
      [extraName]: extraValue
    },
    id: Math.random()
  }; // Object literal notation
  movies.push(newMovie);
  renderMovies();
};


addMovieBtn.addEventListener('click', addMovieHandler);