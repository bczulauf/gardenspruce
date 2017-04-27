function loadDashboard() {
    firebase.database().ref('/users/' + currentUser.uid).once('value').then(function(snapshot) {
        const firstName = snapshot.val().firstName;
        const template = `
            <div class="section grid">
                <div id="payments" class="col col4">
                    <h4>
                        Payment Updates
                    </h4>
                </div>
                <div class="col col8">
                    <h4>Project Updates</h4>
                    <p>Welcome, ${firstName}! We are matching you with a designer right now.</p>
                    <p>You'll get an email introduction to a designer when a match is made, so keep an eye out! This will take at least three business days</p>
                </div>    
            </div>`;

        page.innerHTML = template;
    });
}