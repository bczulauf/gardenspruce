function loadDashboard() {
    var page = document.getElementById("page");
    var currentUser = firebase.auth().currentUser;
    
    if (currentUser) {
        firebase.database().ref('/users/' + currentUser.uid).once('value').then(function(snapshot) {
            var firstName = snapshot.val().firstName;
            
            var template = `
                <div class="grid">
                <div id="payments" class="col col4">
                <h4>
                Payment Updates
                </h4>
                </div>
                <div class="col col8">
                <h4>Project Updates</h4>
                <p>Welcome, ${firstName}! We are matching you with a designer right now.</p>
                <p class="txt-sm>You'll get an email introduction to a designer when a match is made, so keep an eye out! This will take at least three business days</p>
                </div>    
                </div>
            `;

            page.innerHTML = template;
        });
    } else {
        var path = window.location.pathname;

        window.location.replace(`${path}#/login`);
        console.log("User must be signed in to access dashboard.");
    }
}