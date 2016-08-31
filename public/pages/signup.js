/**
 * Handles the sign up button press.
 */
function handleSignUp() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;

    if (password.length < 4) {
        alert('Please enter a password with at least 4 characters.');
        return;
    }
    // Sign in with email and pass.
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user) {
        var path = window.location.pathname;
        
        firebase.database().ref('users/' + user.uid).update({
            firstName: firstName,
            lastName: lastName
        }).then(function() {
            window.location.replace(`${path}#/dashboard`); 
        }).catch(function(error) {
            console.log(error);
        });
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
}

function loadSignup() {
    var page = document.getElementById("page");
    var template = `
        <h4>Sign Up</h4>
        <div class="row">
        <input class="inpt-short" type="text" id="first-name" name="firstName" placeholder="First name"/>
        <input class="inpt-short" type="text" id="last-name" name="lastName" placeholder="Last name"/>
        </div>
        <input class="inpt-long" type="email" id="email" name="email" placeholder="Email"/>
        <input class="inpt-long" type="password" id="password" name="password" placeholder="Password"/>
        <button class="btn-std btn-primary" id="sign-up" name="signup">Sign Up</button>
        <p class="txt-sm">
            Already have an account? <a href="#/login">Log In!</a>
        </p>
    `;

    page.innerHTML = template;
    document.getElementById('sign-up').addEventListener('click', handleSignUp, false);
}