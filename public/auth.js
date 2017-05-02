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