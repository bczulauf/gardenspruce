function handlePostSubmit(evt) {
    evt.preventDefault();
    const data = new FormData(document.getElementById("post-form"));
    const uid = currentUser.uid;
    const postData = {
        uid: uid,
        title: data.get("title"),
        photoUrl: data.get("photoUrl"),
        blurb: data.get("blurb"),
        body: data.get("body"),
        date: new Date()
    };

    const newPostKey = firebase.database().ref().child("posts").push().key;
    const updates = {};
    updates[`/posts/${newPostKey}`] = postData;
    updates[`/user-posts/${uid}/${newPostKey}`] = postData;

    return firebase.database().ref().update(updates);
}

function loadEditor() {
    template = `
        <div class="section">
            <form id="post-form">
                <input type="text" class="inpt-long" name="title" placeholder="Title" />
                <input type="text" class="inpt-long" name="photoUrl" placeholder="Photo Url" />
                <textarea name="blurb" class="inpt-long" placeholder="Blurb"></textarea>
                <textarea name="body" id="blog-body" class="inpt-long" placeholder="Body"></textarea>
                <button type="submit" class="btn btn-lg">Post</button>
            </form>
        </div>
    `;

    page.innerHTML = template;
    document.getElementById("post-form").addEventListener("submit", handlePostSubmit, false);
}