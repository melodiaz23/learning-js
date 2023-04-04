const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');
  
  if (movies.length === 0){
    movieList.classList.remove('visible') // ¿Cómo es que se remueve la parte visible del css?
    return
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  const filteredMovies = !filter 
  ? movies 
  : movies.filter(movie => movie.info.title.includes(filter));

  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement('li');
    // movieEl.textContent = movie.info.title;
    let text = movie.info.title + ' - ';
    for (const key in movie.info){
      if (key !== 'title'){ // todos los que no sean title.. que despliegan? 
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

const searchMovieHandler = () => {
  const filterTerm = document.getElementById('filter-title').value;
  renderMovies(filterTerm);
}


addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);
