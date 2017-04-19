// Listening for auth state changes.
let currentUser;
firebase.auth().onAuthStateChanged((user) => {
    currentUser = user;
    if (user) {
        // User is signed in.
        page.classList.add("auth");
    } else {
        // User is signed out.
        page.classList.remove("auth");
        document.getElementById('login').disabled = false;
    }
});