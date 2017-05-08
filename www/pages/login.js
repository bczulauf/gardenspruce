/**
 * Handles the log in button press.
 */
function handleLogin(evt) {
    evt.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email.length < 4) {
        alert('Please enter an email address.');
        return;
    }
    if (password.length < 4) {
        alert('Please enter a password of at least 4 characters.');
        return;
    }
    
    // Sign in with email and pass.
    firebase.auth().signInWithEmailAndPassword(email, password).then(function(user) {
        Router.navigate("dashboard");
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
    });
}

function loadLogin() {
    var template = `
        <div class="section">
            <h2 class="page-header">Log In</h2>
            <form id="login-form">
                <input class="inpt-long" type="text" id="email" name="email" placeholder="Email"/>
                <input class="inpt-long" type="password" id="password" name="password" placeholder="Password"/>
                <button type="submit" class="btn btn-lg submit-btn" id="login" name="login">Log In</button>
            </form>
            <p>
                Don't have an account yet? <a href="#/signup">Sign up!</a>
            </p>
        </div>
    `;

    pageElem.innerHTML = template;
    document.getElementById("login-form").addEventListener("submit", handleLogin, false);
}