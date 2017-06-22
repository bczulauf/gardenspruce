/**
 * Handles the sign up button press.
 */
function projectFormHandler(evt) {
    evt.preventDefault();
    const data = new FormData(evt.target);

    firebase.database().ref('users/' + currentUser.uid).update({
        street: data.get("street"),
        zip: data.get("zip"),
        phone: data.get("phone"),
        details: data.get("details"),
        availability: data.get("availability"),
        budget: data.get("budget")
    }).then(function() {
        Router.navigate("dashboard");
    }).catch(function(error) {
        console.log(error);
    });
}

function loadProject() {
    const template = `
        <div class="container">
            <div class="section">
                <h2 class="page-header">Project Details</h2>
                <form id="project-form" class="form-std">
                    <div class="row">
                        <div class="col">
                            <input type="text" id="street" name="street" required placeholder="Street address"/>
                        </div>
                        <div class="col">
                            <input type="text" id="zip" name="zip" required placeholder="Zip"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <input type="text" id="phone" name="phone" required placeholder="Phone"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label>Budget</label>
                            <select name="budget">
                                <option value="Below $5k">Below $5k</option>
                                <option value="$5-10k" selected="selected">$5-10k</option>
                                <option value="$10-25k">$10-25k</option>
                                <option value="$25-75k">$25-75k</option>
                                <option value="$75k and Up">$75k and Up</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label>Project Details</label>
                            <textarea name="details" placeholder="Tell us about your project. Pinterest links are great!"></textarea>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label>Availability</label>
                            <textarea name="availability" placeholder="I am free after 6pm Monday through Friday. On the weekends I can do 10am - 1pm."></textarea>
                        </div>
                    </div>
                    <button type="submit" class="button-std">Submit</button>
                </form>
            </div>
        </div>`;

    pageElem.innerHTML = template;
    document.getElementById("project-form").addEventListener("submit", projectFormHandler, false);
}