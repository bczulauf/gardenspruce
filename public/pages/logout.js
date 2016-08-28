function handleLogout() {
    firebase.auth().signOut().then(function() {
        var path = window.location.pathname;
        window.location.replace(`${path}#/`);
    })   
}