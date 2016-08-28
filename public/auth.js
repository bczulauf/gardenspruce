/**
 * Sends an email verification to the user.
 */
function sendEmailVerification() {
    // [START sendemailverification]
    firebase.auth().currentUser.sendEmailVerification().then(function() {
    // Email Verification sent!
    // [START_EXCLUDE]
    alert('Email Verification Sent!');
    // [END_EXCLUDE]
    });
    // [END sendemailverification]
}
function sendPasswordReset() {
    var email = document.getElementById('email').value;
    // [START sendpasswordemail]
    firebase.auth().sendPasswordResetEmail(email).then(function() {
    // Password Reset Email Sent!
    // [START_EXCLUDE]
    alert('Password Reset Email Sent!');
    // [END_EXCLUDE]
    }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // [START_EXCLUDE]
    if (errorCode == 'auth/invalid-email') {
        alert(errorMessage);
    } else if (errorCode == 'auth/user-not-found') {
        alert(errorMessage);
    }
    console.log(error);
    // [END_EXCLUDE]
    });
    // [END sendpasswordemail];
}

/**
 * initApp handles setting up UI event listeners and registering Firebase auth listeners:
 *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
 *    out, and that is where we update the UI.
 */
function initApp() {
    // Listening for auth state changes.
    // [START authstatelistener]
    firebase.auth().onAuthStateChanged(function(user) {

        if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var uid = user.uid;
            var providerData = user.providerData;
            // [START_EXCLUDE silent]
            document.getElementById('login-link').style.display = 'none';
            document.getElementById('logout-link').style.display = 'block';
            //document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');
            // [END_EXCLUDE]
        } else {
            // User is signed out.
            // [START_EXCLUDE silent]
            document.getElementById('login-link').style.display = 'block';
            document.getElementById('logout-link').style.display = 'none';
            //document.getElementById('quickstart-account-details').textContent = 'null';
            // [END_EXCLUDE]
        }
    });
    // [END authstatelistener]
}

window.onload = function() {
    initApp();
};