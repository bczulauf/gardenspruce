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
}