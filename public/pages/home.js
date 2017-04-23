function handleSignup(evt) {
    evt.preventDefault();
    const data = new FormData(document.getElementById("signup-form"));
    firebase.auth().createUserWithEmailAndPassword(data.get("email"), data.get("password")).then(() => {
        Router.navigate("signup");
    }).catch((err) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
    });
}

function loadHome() {
    const template = `
        <div class="splash">
            <div class="splash-content">
                <h2>
                    Create your dream garden.
                </h2>
                <p>Sign up for a free consultation with one of our top designers.</p>
                <form id="signup-form">
                    <input type="email" name="email" class="inpt-stretch" placeholder="Your email" required autofocus/>
                    <input type="password" class="inpt-stretch" name="password" required placeholder="Password"/>
                    <button type="submit" id="start-button" class="btn btn-lg">Get Started</button>
                </form>
            </div>
        </div>
        <div class="section">
            <div class="row">
                <div class="col2"></div>
                <div class="col5">
                    <p><h3>Whether you are accessorizing or gut-renovating, we provide a custom and personal service that works. We will guide you through the entire garden design process, from designs to plant installation.</h3></p>
                </div>
            </div>
        </div>`;

    page.innerHTML = template;
    document.getElementById("signup-form").addEventListener("submit", handleSignup, false);
}