function loadPosts(){
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then(res => res.json())
    .then(data => displayPosts(data))
}
function displayPosts(posts){
    const postDiv = document.getElementById('posts-container');
    for (const post of posts) {
       const div = document.createElement('div');
       postDiv.classList.add('post')
       div.innerHTML = `
       <h4>UserId: ${post.userId} </h4>
       <h5>Title: ${post.title} </h5>
       <h4>Details: ${post.body}</h4>
       `;
       postDiv.appendChild(div);
    }
}





loadPosts()