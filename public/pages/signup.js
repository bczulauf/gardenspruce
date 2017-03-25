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

function loadSignup(data) {
    const query = data.query;
    const email = query && query["email"];
    const page = document.getElementById("page");
    const template = `
        <h4>Sign Up</h4>
        <form id="create-account">
        <div class="row">
        <input class="inpt-short" type="text" id="first-name" name="firstName" required placeholder="First name"/>
        <input class="inpt-short" type="text" id="last-name" name="lastName" required placeholder="Last name"/>
        </div>
        <input class="inpt-long" type=${email ? "hidden" : "email"} value="${email}" id="email" name="email" required placeholder="Email"/>
        <input class="inpt-long" type="password" id="password" name="password" required placeholder="Password"/>
        <input type="submit" class="btn" id="sign-up" name="signup">Sign Up</input>
        </form>`;

    page.innerHTML = template;
    document.getElementById('create-account').addEventListener('submit', handleSignUp, false);
}