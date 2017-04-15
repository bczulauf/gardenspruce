/**
 * Handles the sign up button press.
 */
function handleSignUpMore(evt) {
    evt.preventDefault();
    const data = new FormData(document.getElementById('create-more'));
    const street = data.get("street");
    const zip = data.get("zip");
    const phone = data.get("phone");

    var user = firebase.auth().currentUser;

    // Sign in with email and pass.
    firebase.database().ref('users/' + user.uid).update({
        street: street,
        zip: zip,
        phone: phone
    }).then(function() {
        var path = window.location.pathname;  
        window.location.replace(`${path}#/dashboard`); 
    }).catch(function(error) {
        console.log(error);
    });
}

function loadSignupMore(data) {
    const query = data.query;
    const email = query && query["email"];
    const page = document.getElementById("page");
    const template = `
        <h4>Your project</h4>
        <form id="create-more">
            <input class="inpt-long" type="text" id="street" name="street" required placeholder="Street address"/>
            <div class="row">
                <input class="inpt-short" type="text" id="zip" name="zip" required placeholder="Zip"/>
                <input class="inpt-short" type="text" id="phone" name="phone" required placeholder="Phone"/>
            </div>
            <button type="submit" class="btn btn-lg" id="sign-up" name="signup">Sign Up</button>
        </form>`;

    page.innerHTML = template;
    document.getElementById('create-more').addEventListener('submit', handleSignUpMore, false);
}