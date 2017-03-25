function loadHome() {
    const page = document.getElementById("page");
    const template = `<div class="splash">
            <div class="splash-content">
            <p class="emphasis txt-lg">Create your dream garden with one of our design experts.
            </p>
            <form id="email-form" action="#/signup">
                <input type="email" name="email" class="inpt-stretch" placeholder="Your email" required autofocus/>
                <input type="submit" id="start-button" class="btn signup-link">Get Started</input>
            </form>
            </div>
        </div>
        <div class="row">
            <div class="col2"></div>
            <div class="col5">
                <p class="txt-md">Whether you are accessorizing or gut-renovating, we provide a custom and personal service that works. We will guide you through the entire garden design process, from designs to plant installation.</p>
            </div>
        </div>`;
    page.innerHTML = template;
}