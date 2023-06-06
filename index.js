const inputTitleNode = document.getElementById('inputTitlePost');
const inputTextNode = document.getElementById('inputTextPost');
const postsNode = document.getElementById('ribbonPosts');
const addPostBtnNode = document.getElementById('addPostBtn');
const validationMessagePostTitle = document.getElementById('validationMessagePostTitle');
const validationMessagePostText = document.getElementById('validationMessagePostText');
const resultTitlePost = document.getElementById('resultTitlePost');
const resultTextPost = document.getElementById('resultTextPost');

const limitTitlePost = 100;
const limitTextPost = 200;


const posts = [];

addPostBtnNode.addEventListener('click', function() {
    const postFromUser = getPostFromUser();
    addPost(postFromUser);
    renderPosts();
});

inputTitleNode.addEventListener('input', validation);


inputTextNode.addEventListener('input', validation);

function validation() {
    const titleLength = inputTitleNode.value.length;
    const textLength = inputTextNode.value.length;

    resultTitlePost.textContent = 0 + '/' + limitTitlePost;
    resultTitlePost.textContent = titleLength + '/' + limitTitlePost;

    resultTextPost.textContent = 0 + '/' + limitTextPost;
    resultTextPost.textContent = textLength + '/' + limitTextPost;

    if (titleLength > limitTitlePost) {
        validationMessage.className = 'validationMessage_active';
        validationMessage.innerText = `Заголовок не должен превышать ${limitTitlePost} символов`;
        addPostBtnNode.disabled = true;
        return;
    }
    
    validationMessage.className = 'validationMessage';

    if (textLength > limitTextPost ) {
        validationMessage.className = 'validationMessage_active';
        validationMessage.innerText = `Пост не должен превышать ${limitTextPost} символов`
        addPostBtnNode.disabled = true;
        return;
    }

    validationMessage.className = 'validationMessage';
    addPostBtnNode.disabled = false;
}



function getPostFromUser() {
    const title = inputTitleNode.value;
    const text = inputTextNode.value;

    if (title, text == '') {
        addPostBtnNode.disabled = true;
        return;
    }

    return {
        title,
        text
    };
}

function clearFields() {
    inputTitleNode.value = '';
    inputTextNode.value = '';
}

function clearResult() {
    resultTitlePost.textContent = 0 + '/' + limitTitlePost;
    resultTextPost.textContent = 0 + '/' + limitTextPost;
}

function addPost({title, text}) {
    const currentDate = new Date();
    const dateTime = `${currentDate.toLocaleDateString()} ${currentDate.getHours()}:${currentDate.getMinutes()}`;

    posts.push({
        dateTime,
        title: title,
        text: text
    });

    clearFields();
    clearResult();
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
                <p class='jsPost__date'>${post.dateTime}</p>
                <p class='jsPost__title'>${post.title}</p>
                <p class='jsPost__text'>${post.text}</p>
            </div>
        `
    });
    postsNode.innerHTML = postsHTML;
}
