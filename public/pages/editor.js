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

function handleFileSelect(evt) {
    const file = evt.target.files[0];
    // Get a reference to the location where we'll store our photos.
    const storageRef = storage.ref().child("mag-photos");
    
    // Get a reference to store file at photos/<FILENAME>.jpg
    const photoRef = storageRef.child(file.name);

    // Upload file to Firebase Storage
    const uploadTask = photoRef.put(file);
    uploadTask.on("state_changed", null, null, function() {
        // When the image has successfully uploaded, we get its download URL
        const downloadUrl = uploadTask.snapshot.downloadURL;
        // Set the download URL to the message box, so that the user can send it to the database
        //textInput.value = downloadUrl;
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
    template = `
        <div class="section">
            <div class="row">
                <div class="col col8">
                    <form id="post-form">
                        <input type="text" class="inpt-long" name="title" placeholder="Title" />
                        <input type="file" id="image-file" class="inpt-long" name="photoUrl" />
                        <textarea name="blurb" class="inpt-long" placeholder="Blurb"></textarea>
                        <textarea name="body" id="blog-body" class="inpt-long" placeholder="Body"></textarea>
                        <button type="submit" class="btn btn-lg">Post</button>
                    </form>
                </div>
                <div class="col col4">
                    image: ![Alt text](/path/to/img.jpg)</br>
                    link: [link title](http://www.google.com)
                </div>
            </div>
        </div>
    `;

    page.innerHTML = template;
    document.getElementById("image-file").addEventListener("change", handleFileSelect, false);
    document.getElementById("post-form").addEventListener("submit", handlePostSubmit, false);
}