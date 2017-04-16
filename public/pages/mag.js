function loadMag() {
    const page = document.getElementById("page");
    firebase.database().ref("posts").once('value').then((snapshot) => {
        const posts = []
        snapshot.forEach(function(post) {
            posts.push(`<li><div><a href="#posts/${encodeURIComponent(post.key)}">${post.val().title}</a></div><div>${post.val().summary}</div></li>`);
        });

        const template = `<ul>${posts.join("")}</ul>`;
        page.innerHTML = template;
    });
}