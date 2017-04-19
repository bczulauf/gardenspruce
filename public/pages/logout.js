function handleLogout() {
    firebase.auth().signOut().then(function() {
        Router.navigate("");
    })   
}