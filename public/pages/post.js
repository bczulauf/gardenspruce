
function loadPost(data) {
    firebase.database().ref(`posts/${data}`).once('value').then((snapshot) => {
        const val = snapshot.val();
        const template = `
            <div class="section">
                <img src="${val.photoUrl}" class="post-image" />
                <div>${val.date}</div>
                <h2>${val.title}</h2>
                <h3>${val.blurb}</h3>
                <a href="">${val.author}</a>
                <p>${val.body}</p>
            </div>`;
        page.innerHTML = template;
    });
}