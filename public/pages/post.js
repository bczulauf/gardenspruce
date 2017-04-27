
function loadPost(data) {
    firebase.database().ref(`posts/${data}`).once('value').then((snapshot) => {
        const val = snapshot.val();
        const template = `
            <div class="section">
                <div>${val.date}</div>
                <h3>${val.title}</h3>
                <h6>${val.author}</h6>
                ${val.body}
            </div>`;
        page.innerHTML = template;
    });
}