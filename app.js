let api = 'http://www.omdbapi.com/?i=tt3896198&apikey=61e576a4&t='
let loadingstatus = false
loader = () => {
    let getloader = document.getElementById('loader')
    let getintro = document.getElementById('intro')
    getintro.style.display = 'none';
    if (loadingstatus == true) {
        getloader.classList.add('loader')
    }
    else {
        getloader.classList.remove('loader')
    }

}
gen = () => {
    loadingstatus = true
    loader();
   
    let getmoviename = document.getElementById('getmoviename');
    let apiwithmovie = api + getmoviename.value;
    // console.log(apiwithmovie);
    fetch(apiwithmovie)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            loadingstatus = false;
            loader();
            let h1 = document.getElementById('h1');
            let p = document.getElementById('p');
            let img = document.getElementById('img');
            h1.innerText = data.Title;
            p.innerText = data.Plot;
            img.src = data.Poster;
            // console.log(data);
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