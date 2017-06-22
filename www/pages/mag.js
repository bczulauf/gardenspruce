function loadMag() {
    firebase.database().ref("posts").once('value').then((snapshot) => {
        const posts = [];
        snapshot.forEach(function(post) {
            posts.push(`
                <li>
                    <div class="row">
                        <div class="col col3">
                            <img src="${post.val().photoUrl}" class="mag-thumb">
                        </div>
                        <div class="col col6">
                            <h2><a href="#posts/${encodeURIComponent(post.key)}">${post.val().title}</a></h2>
                            <h3>${post.val().blurb}</h3>
                            <a href="">${post.val().author}</a>
                        </div>
                    </div>
                </li>`);
        });

        const template = `
            <div class="section">
                <h2 class="page-header">The Magazine</h2>
                <ul class="list-std">${posts.join("")}</ul>
            </div>`;
        pageElem.innerHTML = template;
    });
}