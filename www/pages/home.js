function loadHome() {
    const template = `
        <div class="splash">
            <div class="splash-content">
                <h2>
                    Create your dream garden.
                </h2>
                <h3>Sign up for a free consultation with one of our top designers.</h3>
                <form id="signup-form">
                    <input type="email" name="email" class="inpt-stretch" placeholder="Your email" required autofocus/>
                    <input type="password" class="inpt-stretch" name="password" required placeholder="Password"/>
                    <button type="submit" id="start-button" class="btn btn-lg submit-btn">Get Started</button>
                </form>
            </div>
        </div>
        <div class="section">
            <div class="row">
                <div class="col8">
                    <p>Whether you are accessorizing or gut-renovating, we provide a custom and personal service that works. We will guide you through the entire garden design process, from designs to plant installation.</p>
                </div>
            </div>
        </div>`;

    page.innerHTML = template;
    document.getElementById("signup-form").addEventListener("submit", createUserFromForm, false);
}