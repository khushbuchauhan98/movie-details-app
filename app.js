
let api = 'https://www.omdbapi.com/?i=tt3896198&apikey=c997e31e&t='
let loadingstatus = false;
function loader(){

    let getintro = document.getElementById('intro');
    getintro.style.display = 'none';
    let getloader = document.getElementById('loader');
  
    if (loadingstatus == true) {
        getloader.classList.add('loader')
    }
    else {
        getloader.classList.remove('loader')
    }
  }
  function fetchMovieDetails(){
 

    loadingStatus = true;
    checkLoaderStatus()
    let movieName = document.getElementById('movieName');
    let apiQuery = API_Movie + movieName.value
    console.log(apiQuery)
  
    fetch(apiQuery).then((response)=>{
      return response.json()
    }).then((data)=>{
      console.log(data)
      loadingStatus = false;
      checkLoaderStatus()
      let img = document.getElementById('img')
        img.src = data.Poster;
        let title = document.getElementById('title')
        title.innerText = data.Title
        let desc = document.getElementById('desc')
        desc.innerText = data.Plot
        let actors = document.getElementById('actors')
        actors.innerText = 'Actors: ' + data.Actors
        let awards = document.getElementById('awards')
        awards.innerText = 'Awards: ' + data.Awards
        let boxOffice = document.getElementById('boxOffice')
        boxOffice.innerText = 'Box Office: ' + data.BoxOffice
        let director = document.getElementById('director')
        director.innerText = 'Director: ' + data.Director
        let country = document.getElementById('country')
        country.innerText = 'Country: ' + data.Country
        let genre = document.getElementById('genre')
        genre.innerText = 'Genre: ' + data.Genre
        let language = document.getElementById('language')
        language.innerText = 'Language: ' + data.Language
        
    
    })
  }
function gen(){
    loadingstatus = true;
    loader()
   
    let getmoviename = document.getElementById('getmovienames');
    let apiwithmovie = api + getmoviename.value;
    console.log(apiwithmovie);
    fetch(apiwithmovie)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            loadingstatus = false;
            loader()
             let h1 = document.getElementById('h1');
    let p = document.getElementById('p');
    let img = document.getElementById('img');
            h1.innerText = data.Title;
            p.innerText = data.Plot;
            img.src = data.Poster;
            console.log(data);
        });
}
// let api = 'http://www.omdbapi.com/?i=tt3896198&apikey=61e576a4&t=dangal'

// fetch(api)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
   
//     console.log(data);
//     console.log(data.Plot);
//     let h1 = document.getElementById('h1');
//     let p = document.getElementById('p');
//     let img = document.getElementById('img');
//     h1.innerText = data.Title;
//     p.innerText = data.Plot;
//     img.src = data.Poster;
//   });