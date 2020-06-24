// Make var from UL
const movieList = document.querySelector('#movie-list');

// Function to add li's and A's with movie Poster to UL DOM
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

// add eventlistener to radiobuttons en run movie filter function
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

// searchfield function with eventlistener
const searchFilter = document.getElementById('search');
searchFilter.addEventListener('keydown', event => {
  if (event.keyCode === 13) {
    movieList.innerHTML = '';
    movieListItems(movieFilter(event.target.value));
    radio.forEach(button => (button.checked = false));
  }
});
