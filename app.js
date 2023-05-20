let api = 'https://www.omdbapi.com/?i=tt3896198&apikey=c997e31e&t='
let loadingstatus = false;
function loader(){

    let getintro = document.getElementById('intro');
    getintro.style.display = 'none';
    let getloader = document.getElementById('loader');
 if(loadingstatus==true)
{
 getloader.classList.add('loader')
}
else{
    getloader.classList.remove('loader')
}
  }
 
function gen(){
    loadingstatus = true;
    loader()

    let getmoviename = document.getElementById('getmovienames');
    let apiwithmovie = api + getmoviename.value;
    console.log(apiwithmovie);
    fetch(apiwithmovie).then((response) => {
    fetch(apiwithmovie)
        .then((response) => {
            return response.json();
        }).then((data) => {
             console.log(data);
        })
        .then((data) => {
            loadingstatus = false;
            loader()
             let h1 = document.getElementById('h1')
             h1.innerText = data.Title
    let p = document.getElementById('p')
    p.innerText = data.Plot
    let img = document.getElementById('img')
            img.src = data.Poster  
        })
             let h1 = document.getElementById('h1');
    let p = document.getElementById('p');
    let img = document.getElementById('img');
            h1.innerText = data.Title;
            p.innerText = data.Plot;
            img.src = data.Poster;
            console.log(data);
        });
}