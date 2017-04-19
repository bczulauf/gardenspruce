function loadPost(data) {
    firebase.database().ref(`posts/${data}`).once('value').then((snapshot) => {
        const val = snapshot.val();

        const template = `<div class="section">${val.body}</div>`;
        page.innerHTML = template;
    });
}