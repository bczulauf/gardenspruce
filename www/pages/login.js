/**
 * Handles the log in button press.
 */
function handleLogin(evt) {
    evt.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
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
        <div class="container">
            <div class="section">
                <h2 class="page-header">Log In</h2>
                <form id="login-form" class="form-std">
                    <div class="row">
                        <div class="col">
                            <input type="text" id="email" name="email" autofocus placeholder="Email"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <input type="password" id="password" name="password" placeholder="Password"/>
                        </div>
                    </div>
                    <button type="submit" class="button-std" id="login" name="login">Log In</button>
                </form>
                <p>
                    Don't have an account yet?
                </p>
                <a href="#/signup" class="button-std">Sign up</a>
            </div>
        </div>
        `;

    pageElem.innerHTML = template;
    document.getElementById("login-form").addEventListener("submit", handleLogin, false);
}