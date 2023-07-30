 async function App(){
fetch('https://jsonplaceholder.typicode.com/photos/5')
  .then(res => res.json())
  .then(data => re(data))
  .catch(error => console.error('An error occured',error))

}
 function re(data){
  const dt = document.getElementById('data-container');
  dt.innerHTML = `
  <div>
      <p>Album ID: ${data.albumId}</p>
      <p>ID: ${data.id}</p>
      <p>Title: ${data.title}</p>
      <img src="${data.thumbnailUrl}" alt="${data.title}">
    </div>
  `
  };

  
 







