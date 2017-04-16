function loadPost(data) {
    firebase.database().ref(`posts/${data}`).once('value').then((snapshot) => {
        const val = snapshot.val();

        const template = `${val.body}`;
        page.innerHTML = template;
    });
}