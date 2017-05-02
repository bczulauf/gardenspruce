/**
 * Handles the sign up button press.
 */
function handleSignUp(evt) {
    evt.preventDefault();
    const data = new FormData(document.getElementById("user-form"));
    
    firebase.database().ref('users/' + currentUser.uid).update({
        firstName: data.get("firstName"),
        lastName: data.get("lastName"),
        street: data.get("street"),
        zip: data.get("zip"),
        phone: data.get("phone")
    }).then(function() {
        Router.navigate("dashboard");
    }).catch(function(error) {
        console.log(error);
    });
}

function loadSignup() {
    const template = `
        <div class="section">
            <h2 class="page-header">Create Account</h2>
            <form id="user-form">
                <div class="row">
                    <input class="inpt-short" type="text" id="first-name" name="firstName" required placeholder="First name"/>
                    <input class="inpt-short" type="text" id="last-name" name="lastName" required placeholder="Last name"/>
                </div>
                <input class="inpt-long" type="text" id="street" name="street" required placeholder="Street address"/>
                <div class="row">
                    <input class="inpt-short" type="text" id="zip" name="zip" required placeholder="Zip"/>
                    <input class="inpt-short" type="text" id="phone" name="phone" required placeholder="Phone"/>
                </div>
                <button type="submit" class="btn btn-lg" id="sign-up" name="signup">Submit</button>
            </form>
        </div>`;

    page.innerHTML = template;
    document.getElementById("user-form").addEventListener("submit", handleSignUp, false);
}