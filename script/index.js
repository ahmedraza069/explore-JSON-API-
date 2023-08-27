function loadUsersTwo(){
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then(res => res.json())
    .then(data => displayUsers(data));

}
function displayUsers(userData){
    const ul = document.getElementById('list-users');
    for (const user of userData) {
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}