function loadData(){
    const url = 'https://jsonplaceholder.typicode.com/comments';
    fetch(url)
    .then(res => res.json())
    .then(data => displayComments(data))
}
function displayComments(comments){
    const displayContainer = document.getElementById('comment-container');

    for (const comment of comments) {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment')
        commentDiv.innerHTML = `
        <h2>Post Id: ${comment.postId}</h2>
        <h3>Name: ${comment.name}</h3>
        <h4>Email: ${comment.email}</h4>
        <p>Details: ${comment.body}</p>
        `;
        displayContainer.appendChild(commentDiv);
    }
}
loadData();