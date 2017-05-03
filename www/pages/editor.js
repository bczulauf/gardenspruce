const parseImage = (str) => {
    const re = /!\[([^\[]+)\]\(([^\)]+)\)/;
    return str.replace(re, '<img src=\'\$2\' alt=\'\$1\'>');
}
const parseLink = (str) => {
    const re = /\[([^\[]+)\]\(([^\)]+)\)/;
    return str.replace(re, '<a href=\'\$2\'>\$1</a>');
}
const parseParagraph = (str) => {
    const re = /(\r\n|\n|\r)/g;
    return str.replace(re, '<br>');
}
const rules = [
    parseImage,
    parseLink,
    parseParagraph
]

function renderHtml(str) {
    rules.forEach((rule) => {
        str = rule(str);
    });
    
    return str;
}

// this should be a promise. handle postsubmit should wait for this to resolve. it will then have the image url which postSubmit needs.
function handleFileSelect(evt) {
    const target = evt.target;
    const file = target.files[0];

    // Get a reference to the location where we'll store our photos.
    const storageRef = firebase.storage().ref().child("mag-photos");
    
    // Get a reference to store file at photos/<FILENAME>.jpg
    const photoRef = storageRef.child(file.name);

    // Upload file to Firebase Storage
    const uploadTask = photoRef.put(file);


    uploadTask.on("state_changed", null, null, function() {
        // When the image has successfully uploaded, we get its download URL
        const downloadUrl = uploadTask.snapshot.downloadURL;

        // Stores a reference in database for easy lookup.
        const newPhotoKey = firebase.database().ref().child("mag-photos").push().key;
        const updates = {};
        updates[`/mag-photos/${newPhotoKey}`] = downloadUrl.toString();
        firebase.database().ref().update(updates);
    });
}

function handlePostSubmit(evt) {
    evt.preventDefault();
    const data = new FormData(document.getElementById("post-form"));
    const uid = currentUser.uid;
    firebase.database().ref('/users/' + currentUser.uid).once('value').then(function(snapshot) {
        const firstName = snapshot.val().firstName;
        const lastName = snapshot.val().lastName;
        const post = renderHtml(data.get("body"));

        const postData = {
            uid: uid,
            title: data.get("title"),
            photoUrl: data.get("photoUrl"),
            blurb: data.get("blurb"),
            body: post,
            date: new Date(),
            author: `${firstName} ${lastName}`
        };

        const newPostKey = firebase.database().ref().child("posts").push().key;
        const updates = {};
        updates[`/posts/${newPostKey}`] = postData;
        updates[`/user-posts/${uid}/${newPostKey}`] = postData;

        return firebase.database().ref().update(updates);
    });
}

function loadEditor() {
    const template = `
        <div class="section">
            <div class="row">
                <div class="col col6">
                    <form id="post-form">
                        <input type="text" class="inpt-long" name="title" placeholder="Title" />
                        <textarea name="blurb" class="inpt-long" placeholder="Blurb"></textarea>
                        <input type="text" name="photoUrl" class="inpt-long" placeholder="Image Url" />
                        <textarea name="body" id="blog-body" class="inpt-long" placeholder="Body"></textarea>
                        <button type="submit" class="btn btn-lg submit-btn">Post</button>
                    </form>
                </div>
                <div class="col col6">
                    <h4>Instructions</h4>
                    <ul class="box instructions">
                        <li>
                            <div><b>Image:</b></div>
                            <div>![Alt text](/path/to/img.jpg)</div>
                        </li>
                        <li>
                            <div><b>Link:</b></div>
                            <div>[link title](http://www.google.com)</div>
                        </li>
                    </ul>
                    <h4>Images</h4>
                    <input type="file" id="image-file" />
                    <div id="thumbs"></div>
                </div>
            </div>
        </div>
    `;

    page.innerHTML = template;
    document.getElementById("image-file").addEventListener("change", handleFileSelect, false);
    document.getElementById("post-form").addEventListener("submit", handlePostSubmit, false);

    firebase.database().ref("mag-photos").once('value').then((snapshot) => {
        const photos = [];
        snapshot.forEach(function(image) {
            photos.push(`<li><div>${image.val()}</div><img src="${image.val()}" class="thumb-photo"></li>`);
        });

        const template = `<ul>${photos.join("")}</ul>`;
        document.getElementById("thumbs").innerHTML = template;
    });
}