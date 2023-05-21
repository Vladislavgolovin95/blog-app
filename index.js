const inputTitleNode = document.getElementById('inputTitlePost');
const inputTextNode = document.getElementById('inputTextPost');
const postsNode = document.getElementById('ribbonPosts');
const addPostBtnNode = document.getElementById('addPostBtn');

const posts = [];

addPostBtnNode.addEventListener('click', function() {
    const postFromUser = getPostFromUser();
    addPost(postFromUser);
    renderPosts();
});

function getPostFromUser() {
    const title = inputTitleNode.value;
    const text = inputTextNode.value;
    return {
        title,
        text
    };
}

function addPost({title, text}) {
    posts.push({
        title: title,
        text: text
    });
}

function getPosts() {
    return posts;
}

function renderPosts() {
    const posts = getPosts();
    let postsHTML = '';
    posts.forEach(post => {
        postsHTML += `
            <div class='jsPost'>
                <p class='jsPost__date'>${date} ${time}</p>
                <p class='jsPost__title'>${post.title}</p>
                <p class='jsPost__text'>${post.text}</p>
            </div>
        `
    });
    postsNode.innerHTML = postsHTML;
}

//------------Дата и время-----------------
const currentDate = new Date();
const date = currentDate.toLocaleDateString();
const time = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });