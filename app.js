const form=document.querySelector('form');
const image=document.getElementById('image');
function getShow(searchText){
    while(image.firstChild){
        image.removeChild(image.firstChild);
    }
    const url=` https://api.tvmaze.com/search/shows?q=${searchText}`;
    axios.get(url)
    .then((res)=>{
        for(let item of res.data){
            if(item.show.image){
                const img=document.createElement('img');
                 img.src=item.show.image.medium;
                 img.style.margin='15px';
                 image.append(img);
                 image.style.cursor='pointer';
            }
        }
    })
    .catch((err)=>{
        console.log(err);
    })
}


form.addEventListener('submit',(e)=>{
    e.preventDefault();
      const searchText=form.elements[0].value;
      form.elements[0].value="";
      getShow(searchText);
})