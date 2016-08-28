/**
 * Handles the sign up button press.
 */
function handleSignUp() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email.length < 4) {
        alert('Please enter an email address.');
        return;
    }
    if (password.length < 4) {
        alert('Please enter a password.');
        return;
    }
    // Sign in with email and pass.
    // [START createwithemail]
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
        var path = window.location.pathname;
        window.location.replace(`${path}#/dashboard`);
    }).catch(function(error) {
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
        // [END_EXCLUDE]
    });
    // [END createwithemail]
}

function loadSignup() {
    var page = document.getElementById("page");
    var template = `
        <h4>Sign Up</h4>
        <input class="inpt-std" type="text" id="email" name="email" placeholder="Email"/>
        <input class="inpt-std" type="password" id="password" name="password" placeholder="Password"/>
        <button class="btn-std btn-primary" id="sign-up" name="signup">Sign Up</button>
        <p>
            Already have an account? <a href="#/login">Log In!</a>
        </p>
    `;

    page.innerHTML = template;
    document.getElementById('sign-up').addEventListener('click', handleSignUp, false);
}