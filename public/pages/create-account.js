function handleSignup(evt) {
    evt.preventDefault();
    const data = new FormData(document.getElementById("create-account-form"));
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

function loadCreateAccount() {
    const template = `
        <div class="section">
            <form id="create-account-form">
                <input type="email" name="email" class="inpt-long" placeholder="Your email" required autofocus/>
                <input type="password" class="inpt-long" name="password" required placeholder="Password"/>
                <button type="submit" id="start-button" class="btn btn-lg">Get Started</button>
            </form>
        </div>`;

    page.innerHTML = template;
    document.getElementById("create-account-form").addEventListener("submit", handleSignup, false);
}