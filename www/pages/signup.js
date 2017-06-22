function createUserProfile(data) {
    const password = data.get("password");
    if (currentUser) {
        return currentUser.updatePassword(password);
    } else {
        return createUserFromForm(data.get("email"), password, "customer");
    }
}

/**
 * Handles the signup button press.
 */
function handleSignup(evt) {
    evt.preventDefault();
    const data = new FormData(evt.target);

    createUserProfile(data)
        .then(() => {
            firebase.database().ref('users/' + currentUser.uid).update({
                firstName: data.get("firstName"),
                lastName: data.get("lastName")
            })
        })
        .then(() => {
            Router.navigate("project");
        }).catch(function(error) {
            console.log(error);
        });
}

function loadSignup() {
    const template = `
        <div class="container">
            <div class="section">
                <h2 class="page-header">Sign Up</h2>
                <form id="signup-form" class="form-std">
                    <div class="row">
                        <div class="col">
                            <input type="text" id="first-name" name="firstName" required autofocus placeholder="First name"/>
                        </div>
                        <div class="col">
                            <input type="text" id="last-name" name="lastName" required placeholder="Last name"/>
                        </div>
                    </div>
                    <div class="row" id="signup-email-row">
                        <div class="col">
                            <input type="email" name="email" placeholder="Your email" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <input type="password" name="password" required placeholder="Password"/>
                        </div>
                    </div>
                    <button type="submit" id="start-button" class="button-std submit-btn">Get Started</button>
                </form>
            </div>
        </div>`;

    pageElem.innerHTML = template;
    document.getElementById("signup-form").addEventListener("submit", function(evt){handleSignup(evt, "customer")}, false);
}