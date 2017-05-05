function loadDashboard() {
    firebase.database().ref('/users/' + currentUser.uid).once('value').then(function(snapshot) {
        //const firstName = snapshot.val().firstName;
        const template = `
            <div class="section">
                <h2 class="page-header">Dashboard</h2>
                <div class="grid">
                    <div id="payments" class="col col4">
                        <h2>Payment Updates</h2>
                        <h3 class="box">There is no activity at this time.</h3>
                    </div>
                    <div class="col col1"></div>
                    <div class="col col7">
                        <h2>Project Updates</h2>
                        <p>Welcome! We are matching you with a designer right now.</p>
                        <p>You'll get an email introduction to a designer when a match is made, so keep an eye out! You should hear from us in the next 3 business days.</p>
                    </div>
                </div> 
            </div>`;

        page.innerHTML = template;
    });
}