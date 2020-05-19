// Make const from UL
const movieList = document.querySelector('#movie-list');

// Make const Array of movie Titles
const titles = movies.map(m => m.Title);

// Make const Array of movie Posters
const posters = movies.map(m => m.Poster);

// Function to filter and add li's and A's  with movie Poster to UL DOM
const movieListItems = filter =>
  filter.forEach(movie => {
    let title = document.createElement('li');
    movieList.appendChild(title);
    let movieA = document.createElement('a');
    movieA.href = 'http://www.imdb.com/title/' + movie.imdbID;
    movieA.target = '_blank';
    title.appendChild(movieA);
    let image = document.createElement('img');
    image.src = movie.Poster;
    movieA.appendChild(image);
  });

// Load all Movies to DOM
movieListItems(movies);

//Make filters
const newmovies = movies.filter(title => title.Year >= 2014);

const movieFilter = mfilter =>
  movies.filter(movie => {
    let title = movie.Title.toLowerCase();
    return title.includes(mfilter);
  });

// select all radiobuttons by Name
const radio = document.getElementsByName('filter');

// voeg een eventlistener toe die luistert of er iets veranderd aan de radiobuttons en voert de filter functie uit:
radio.forEach(button => {
  button.addEventListener('change', event => {
    switch (event.target.value) {
      case 'newmovies':
        movieList.innerHTML = '';
        movieListItems(newmovies);
        break;
      case event.target.value:
        movieList.innerHTML = '';
        movieListItems(movieFilter(event.target.value));
        break;
    }
  });
});

const searchFilter = document.getElementById('search');
console.log(searchFilter);

searchFilter.addEventListener('keydown', event => {
  if (event.keyCode === 13) {
    movieList.innerHTML = '';
    movieListItems(movieFilter(event.target.value));
  }
});
