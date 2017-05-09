function loadDashboard() {
    firebase.database().ref('/users/' + currentUser.uid).once('value').then(function(snapshot) {
        //const firstName = snapshot.val().firstName;
        const template = `
            <div class="section">
                <h2 class="page-header">Dashboard</h2>
                <div class="col col7">
                    <p>Welcome! We are really excited to work with you. Our team is matching you with a designer right now.</p>
                    <p>You'll get an email introduction to a designer when a match is made, so keep an eye out! You should hear from us in the next 3 business days.</p>
                </div>
            </div>`;

        pageElem.innerHTML = template;
    });
}