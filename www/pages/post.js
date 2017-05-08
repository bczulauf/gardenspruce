
function loadPost(data) {
    firebase.database().ref(`posts/${data}`).once('value').then((snapshot) => {
        const val = snapshot.val();
        const template = `
            <div class="section">
                <h2 class="page-header">The Magazine</h2>
                <div>${val.date}</div>
                <h2>${val.title}</h2>
                <h3>${val.blurb}</h3>
                <div><a href="">${val.author}</a></div>
                <img src="${val.photoUrl}" class="post-image" />
                <p>${val.body}</p>
            </div>`;
        pageElem.innerHTML = template;
    });
}