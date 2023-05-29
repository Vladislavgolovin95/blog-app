const inputTitleNode = document.getElementById('inputTitlePost');
const inputTextNode = document.getElementById('inputTextPost');
const postsNode = document.getElementById('ribbonPosts');
const addPostBtnNode = document.getElementById('addPostBtn');
const validationMessagePostTitle = document.getElementById('validationMessagePostTitle');
const validationMessagePostText = document.getElementById('validationMessagePostText');

const posts = [];

addPostBtnNode.addEventListener('click', function() {
    const postFromUser = getPostFromUser();
    addPost(postFromUser);
    renderPosts();
});

inputTitleNode.addEventListener('input', function(event) {
    const presentValue = event.target.value;
    const charactersTitle = presentValue.length;
    
    if (charactersTitle > 100) {
        validationMessagePostTitle.className = 'validationMessagePostTitle_active';
        addPostBtnNode.setAttribute('disabled', true);
    } else if (charactersTitle == 0) {
        addPostBtnNode.setAttribute('disabled', true);
    } else {
        validationMessagePostTitle.className = 'validationMessagePostTitle';
        addPostBtnNode.removeAttribute('disabled');
    }
});

inputTextNode.addEventListener('input', function(event) {
    const presentValue = event.target.value;
    const charactersText = presentValue.length;
    
    if (charactersText > 200) {
        validationMessagePostText.className = 'validationMessagePostText_active';
        addPostBtnNode.setAttribute('disabled', true);
    } else if (charactersText == 0) {
        addPostBtnNode.setAttribute('disabled', true);
    } else {
        validationMessagePostText.className = 'validationMessagePostText';
        addPostBtnNode.removeAttribute('disabled');
    }
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
    const currentDate = new Date();
    const dateTime = `${currentDate.toLocaleDateString()} ${currentDate.getHours()}:${currentDate.getMinutes()}`;

    if (title, text == 0) {
        return;
    }

    posts.push({
        dateTime,
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
                <p class='jsPost__date'>${post.dateTime}</p>
                <p class='jsPost__title'>${post.title}</p>
                <p class='jsPost__text'>${post.text}</p>
            </div>
        `
    });
    postsNode.innerHTML = postsHTML;
}