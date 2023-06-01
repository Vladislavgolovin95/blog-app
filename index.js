const inputTitleNode = document.getElementById('inputTitlePost');
const inputTextNode = document.getElementById('inputTextPost');
const postsNode = document.getElementById('ribbonPosts');
const addPostBtnNode = document.getElementById('addPostBtn');
const validationMessagePostTitle = document.getElementById('validationMessagePostTitle');
const validationMessagePostText = document.getElementById('validationMessagePostText');
const resultTitlePost = document.getElementById('resultTitlePost');
const resultTextPost = document.getElementById('resultTextPost');

const limitTitlePost = 10;
const limitTextPost = 20;


const posts = [];

addPostBtnNode.addEventListener('click', function() {
    const postFromUser = getPostFromUser();
    addPost(postFromUser);
    renderPosts();
});

function validateTitle() {
    resultTitlePost.textContent = 0 + '/' + limitTitlePost;

    inputTitleNode.addEventListener('input', function(event) {
        const presentValue = event.target.value;
        const charactersText = presentValue.length;

        resultTitlePost.textContent = charactersText + '/' + limitTitlePost;

        if (charactersText > limitTitlePost) {
            validationMessagePostTitle.className = 'validationMessagePostTitle_active';
            addPostBtnNode.disabled = true;
        } else {
            validationMessagePostTitle.className = 'validationMessagePostTitle';
            addPostBtnNode.disabled = false;
        }
    });
}

validateTitle();

function validateText() {
    resultTextPost.textContent = 0 + '/' + limitTextPost;

    inputTextNode.addEventListener('input', function(event) {
        const presentValue = event.target.value;
        const charactersText = presentValue.length;

        resultTextPost.textContent = charactersText + '/' + limitTextPost;

        if (charactersText > limitTextPost ) {
            validationMessagePostText.className = 'validationMessagePostText_active';
            addPostBtnNode.disabled = true;
        } else {
            validationMessagePostText.className = 'validationMessagePostText';
            addPostBtnNode.disabled = false;
        }
    });
}

validateText();

function getPostFromUser() {
    const title = inputTitleNode.value;
    const text = inputTextNode.value;

    if (title, text == '') {
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
