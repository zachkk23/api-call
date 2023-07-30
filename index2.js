async function Com(){
    fetch('https://jsonplaceholder.typicode.com/comments/4')
    .then(res => res.json())
    .then(data => es(data))
    .catch(error => console.log('error occured',error))
}
 function es(data){
    const fr = document.getElementById('container');
    fr.innerHTML = `
    <div>
    <p>POSTID:${data.postId}</p>
    <p>ID: ${data.id}</p>
    <p>NAME:${data.name}
    <p>EMAIL:${data.email}</p>
    <p>BODY:${data.body}</p>
    </div>
    `
 }

 