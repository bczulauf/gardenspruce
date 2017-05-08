function loadSignup() {
    const template = `
        <div class="section">
            <h2 class="page-header">Sign Up</h2>
            <form id="create-account-form">
                <input type="email" name="email" class="inpt-long" placeholder="Your email" required autofocus/>
                <input type="password" class="inpt-long" name="password" required placeholder="Password"/>
                <button type="submit" id="start-button" class="btn btn-lg submit-btn">Get Started</button>
            </form>
        </div>`;

    pageElem.innerHTML = template;
    document.getElementById("create-account-form").addEventListener("submit", function(evt){createUserFromForm(evt, "customer")}, false);
}