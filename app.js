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
        console.log(data)
        loadingstatus = false;
    loader()
    let img=document.getElementById('img');
    let h1= document.getElementById('h1');
    let p= document.getElementById('p')
    h1.innerText=data.Title;
    p.innerText=data.Plot;
    console.log(data);
    img.src=data.Poster;
      })
}