// get list of movie elements
let movieData = [
  {
    title: 'The Darjeeling Limited',
    plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
    cast: ['Jason Schwartzman', 'Owen Wilson', 'Adrien Brody'],
    runtime: 151,
    rating: 7.2,
    year: 2007,
  },
  {
    title: 'The Royal Tenenbaums',
    plot: 'The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons',
    rating: 7.6,
    year: 2001,
    cast: ['Gene Hackman', 'Gwnyeth Paltrow', 'Anjelica Huston'],
    runtime: 170,
  },
  {
    title: 'Fantastic Mr. Fox',
    year: 2009,
    plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
    cast: [
      'George Clooney',
      'Meryl Streep',
      'Bill Murray',
      'Jason Schwartzman',
    ],
    runtime: 147,
    rating: 7.9,
  },
  {
    title: 'The Grand Budapest Hotel',
    rating: 8.1,
    runtime: 159,
    year: 2014,
    plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    cast: ['Ralph Fiennes', 'F. Murray Abraham', 'Mathieu Amalric'],
  },
]

const moviesList = document.getElementById('movie-lists')

const displayMovies = (movieData) => {
  for (let i = 0; i < movieData.length; i++) {
    const { title, plot, cast, runtime, rating, year } = movieData[i]

    const listItem = document.createElement('li')
    const movieInfo = document.createElement('div')
    const movieTitle = document.createElement('h2')
    const moviePlot = document.createElement('p')
    const movieCast = document.createElement('p')
    const movieRuntime = document.createElement('p')
    const movieRating = document.createElement('p')
    const movieYear = document.createElement('p')

    movieTitle.textContent = `Title ${title}`
    moviePlot.textContent = `Plot: ${plot}`
    movieCast.textContent = `Cast: ${cast.join(',')}`
    movieRuntime.textContent = `Runtime: ${runtime} minutes`
    movieRating.textContent = `Rating: ${rating}`
    movieYear.textContent = `Year: ${year}`

    movieInfo.appendChild(movieTitle)
    movieInfo.appendChild(moviePlot)
    movieInfo.appendChild(movieCast)
    movieInfo.appendChild(movieRuntime)
    movieInfo.appendChild(movieRating)
    movieInfo.appendChild(movieYear)

    listItem.appendChild(movieInfo)

    moviesList.appendChild(listItem)

    // styles
    listItem.classList.add('list')
  }
}
// add movies
const addMovies = document.getElementById('add-movie-form')
addMovies.addEventListener('submit', (event) => {
  event.preventDefault()
  // get user input from form
  const title = event.target.elements.title.value
  const plot = event.target.elements.plot.value
  const cast = event.target.elements.cast.value.split(',').map((c) => c.trim())
  const runtime = event.target.elements.runtime.value
  const rating = event.target.elements.rating.value
  const year = event.target.elements.year.value

  const movies = { title, plot, cast, runtime, rating, year }
  // adding new movies
  movieData.unshift(movies)
  displayMovies([movies])
  event.target.reset()
})

// display movies

window.addEventListener('load', () => {
  displayMovies(movieData)
})
