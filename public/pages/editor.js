function handleBlogSubmit() {
    evt.preventDefault();
    const data = new FormData(document.getElementById('blog-form'));
    const title = data.get("blogTitle");
    const post = data.get("blogPost");

    firebase.database
}

function loadEditor() {
    const page = document.getElementById("page");
    template = `
        <form id="blog-form">
            <label>Title</label>
            <input type="text" name="blogTitle" />
            <label>Post</label>
            <textarea name="blogPost"></textarea>
        </form>
    `;

    page.innerHTML = template;
    document.getElementById('blog-form').addEventListener('submit', handleBlogSubmit, false);
}