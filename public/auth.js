/**
 * initApp handles setting up UI event listeners and registering Firebase auth listeners:
 *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
 *    out, and that is where we update the UI.
 */
function initApp() {
    var signupLinks = document.getElementsByClassName("signup-link");
    var dashboardLinks = document.getElementsByClassName("dashboard-link");
    var loginLink = document.getElementById('login-link');
    var logoutLink = document.getElementById('logout-link');
    var promise = new Promise(function(resolve, reject) {
        // Listening for auth state changes.
        firebase.auth().onAuthStateChanged(function(user) {
            resolve(user);
            
            if (user) {
                // User is signed in.
                var displayName = user.displayName;
                var email = user.email;
                var uid = user.uid;
                var providerData = user.providerData;
                
                // Hides login link and displays logout link.
                loginLink.style.display = 'none';
                logoutLink.style.display = 'block';
                
                // Hides signup links and displays dashboard links.
                for (var i = 0; i < signupLinks.length; i++) {
                    signupLinks[i].style.display = "none";
                }
                for (var i = 0; i < dashboardLinks.length; i++) {
                    dashboardLinks[i].style.display = "block";
                }
            } else {
                // User is signed out.
                // Displays login link and hides logout link.
                loginLink.style.display = 'block';
                logoutLink.style.display = 'none';
                
                // Hides dashboard links and displays signup links.
                for (var i = 0; i < signupLinks.length; i++) {
                    signupLinks[i].style.display = "block";
                }
                for (var i = 0; i < dashboardLinks.length; i++) {
                    dashboardLinks[i].style.display = "none";
                }
            }
        });
    });
    
    return promise;
}

window.onload = function() {
    // Waits for auth before loading page. 
    initApp().then(function(user) {
        loadPage(user);
    });
};