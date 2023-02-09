// Your code here
fetch("http://localhost:3000/films/1")
    .then(res => res.json())
    .then((firstMovie) => displayFirstMovie(firstMovie))

function displayFirstMovie(firstMovie) {
    document.getElementById('poster').src = firstMovie.poster
    document.getElementById('title').textContent = firstMovie.title
    document.getElementById('runtime').textContent = `${firstMovie.runtime} minutes`
    document.getElementById('film-info').textContent = firstMovie.description
    document.getElementById('showtime').textContent = firstMovie.showtime
    document.getElementById('ticket-num').textContent = parseInt(firstMovie.capacity) - parseInt(firstMovie['tickets_sold'])
    document.getElementById('buy-ticket').addEventListener('click', () => {
        if (document.getElementById('ticket-num').textContent > 0) {
        document.getElementById('ticket-num').textContent -= 1
        }
    })
}


fetch("http://localhost:3000/films")
    .then(res => res.json())
    .then((filmData) => filmData.forEach(film => createMovieList(film)))

function createMovieList(film) {
    const li = document.createElement('li')
    li.textContent = film.title
    li.className = 'film item'
    document.getElementById('films').append(li)
}