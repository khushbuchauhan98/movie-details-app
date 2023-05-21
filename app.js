let api = 'https://www.omdbapi.com/?i=tt3896198&apikey=c997e31e&t='
let loadingstatus = false;
loader=()=>{

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
 
gen=()=>{
    loadingstatus = true;
    loader()

    let getmoviename = document.getElementById('getmovienames');
    let apiwithmovie = api + getmoviename.value;
    console.log(apiwithmovie);
    fetch(apiwithmovie).then((response)=>{
        return response.json()
      }).then((data)=>{
        if(data.Error != "Movie not found!"){
          console.log(data)
          loadingstatus = false;
      loader()
      let img=document.getElementById('img');
      img.src=data.Poster;
      let h1= document.getElementById('h1');
      h1.innerText=data.Title;
      let p= document.getElementById('p')
      p.innerText=data.Plot;
      let year= document.getElementById('year')
      year.innerText=data.Year;
      let actors= document.getElementById('actors')
      actors.innerText='Actors: '+ data.Actors;
      let awards= document.getElementById('awards')
      awards.innerText='Awards: '+ data.Awards;
      let boxoffice= document.getElementById('boxoffice')
      boxoffice.innerText='Collection: '+ data.BoxOffice;
      let directors= document.getElementById('directors')
      directors.innerText='Director: '+ data.Director;
      console.log(data);
      let detail= document.getElementById('detail');
      detail.style.display='flex';
      // detail.style.justifyContent='space-evenly';
      let error= document.getElementById('error');
      error.style.display='none'
        }
        else{
          let detail= document.getElementById('detail');
          detail.style.display='none'
          let error= document.getElementById('error');
          error.classList.add('highlight');
          error.style.display='block'
          // alert('not found');
          loadingstatus = false;
          loader()
        }
      
      })
}