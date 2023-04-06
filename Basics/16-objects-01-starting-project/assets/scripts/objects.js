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
    // if ('info' in movie){ // In operator -- another way is with movie.info === undefined
    // } To ckeck if a property is there.
    const { info, ... otherProps} = movie; // Object destructuring
    console.log(otherProps);
    // const {title: movieTitle} = info
    let {getFormattedTitle} = movie;
    // getFormattedTitle = getFormattedTitle.bind(movie);
    let text = getFormattedTitle.call(movie) + ' - ';  // Allow us to pass diferent arguments as a list.
    // let text = getFormattedTitle.apply(movie) + ' - '; // Similar to call. Apply alow us to pass additional arguments as an array.
    for (const key in info){
      if (key !== 'title' && key !== '_title'){ // todos los que no sean title.. que despliegan? 
        text = text + `${key}: ${info[key]}`; // This print Title I DON'T KNOW WHY! 
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
    // title.trim() === '' || 
    extraName.trim() === '' || 
    extraValue.trim() === ''
    ) {
    return;
  }

  const newMovie = {  // Object literal notation
    info: {
      // title, // will  be the same as title: title.
      set title(val) {
        if (val.trim() === ''){
        this._title = 'DEFAULT';
        return
        }
        this._title = val;
      },
      get title() {
        return this._title;
      }, // It will create a getter
      [extraName]: extraValue
    },
    id: Math.random().toString(), // We're chaining the toString method on the result of Math.random.
    getFormattedTitle() {
      return this.info.title.toUpperCase(); 
    }
  };

  newMovie.info.title = title;
  console.log(newMovie.info.title);

  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById('filter-title').value;
  renderMovies(filterTerm);
}


addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);