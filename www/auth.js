// Listening for auth state changes.
let currentUser;
firebase.auth().onAuthStateChanged((user) => {
    const body = document.getElementsByTagName("body")[0];
    currentUser = user;
    if (user) {
        // User is signed in.
        body.classList.add("auth");
    } else {
        // User is signed out.
        body.classList.remove("auth");
    }
});

// Checks for current user.
function checkAuthPromise(requiresAuth) {
    return new Promise((resolve, reject) => {
        if (requiresAuth) {
            firebase.auth().onAuthStateChanged((user) => {
                resolve(user);
            });
        } else {
            resolve(true);
        }
    });
}

// Creates a new user from a form.
function createUserFromForm(email, password, group) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((data) => {
            const uid = data.uid;
            const updates = {};
            updates[`/users/${uid}/groups/${group}`] = true;
            updates[`/groups/${group}/${uid}`] = true;

            return firebase.database().ref().update(updates);
        }).catch((error) => {
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