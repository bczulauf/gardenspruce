function loadDashboard() {
    firebase.database().ref('/users/' + currentUser.uid).once('value').then(function(snapshot) {
        const firstName = snapshot.val().firstName;
        const template = `
            <div class="section">
                <h2 class="page-header">Dashboard</h2>
                <div class="grid">
                    <div id="payments" class="col col4">
                        <h2>Payment Updates</h2>
                    </div>
                    <div class="col col8">
                        <h2>Project Updates</h2>
                        <p>Welcome, ${firstName}! We are matching you with a designer right now.</p>
                        <p>You'll get an email introduction to a designer when a match is made, so keep an eye out! This will take at least three business days</p>
                    </div>
                </div> 
            </div>`;

        page.innerHTML = template;
    });
}