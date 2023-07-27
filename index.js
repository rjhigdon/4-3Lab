let message = document.querySelector('aside')

function addMovie(event){
    event.preventDefault()
    let inputField= document.querySelector('input')
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'x'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    let list = document.querySelector('ul')
    list.appendChild(movie)
    inputField.value = ''
}
document.querySelector('form').addEventListener('submit', addMovie)

function deleteMovie(event){
    event.target.parentNode.remove()
    message.textContent = 'Movie Removed'
    revealMessage(callback)
}

function crossOffMovie(event){
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')){
        message.textContent = 'Movie watched'
    }else{
        message.textContent = "Movie reAdded"
    }
    
}revealMessage()

let revealMessage = () =>{
    setTimeout(1000, callback)
    let hide = document.createElement('class')
    message.appendChild(hide)
}