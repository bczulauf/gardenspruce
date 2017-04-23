function loadMag() {
    firebase.database().ref("posts").once('value').then((snapshot) => {
        const posts = []
        snapshot.forEach(function(post) {
            posts.push(`<li><h3><a href="#posts/${encodeURIComponent(post.key)}">${post.val().title}</a></h3><p>${post.val().blurb}</p></li>`);
        });

        const template = `<div class="section"><ul class="posts">${posts.join("")}</ul></div>`;
        page.innerHTML = template;
    });
}