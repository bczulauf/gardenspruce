/**
 * Handles the log in button press.
 */
function handleLogin() {
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
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
        var path = window.location.pathname;
        window.location.replace(`${path}#/dashboard`);
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
        document.getElementById('login').disabled = false;
    });

    document.getElementById('login').disabled = true;
}

function loadLogin() {
    var page = document.getElementById("page");
    var template = `
        <h4>Log In</h4>
        <input class="inpt-std" type="text" id="email" name="email" placeholder="Email"/>
        <input class="inpt-std" type="password" id="password" name="password" placeholder="Password"/>
        <button class="btn-std btn-primary" id="login" name="login">Log In</button>
        <p>
            Don't have an account yet? <a href="#/signup">Sign up!</a>
            Forgot your password?
        </p>
    `;

    page.innerHTML = template;
    document.getElementById('login').addEventListener('click', handleLogin, false);
}