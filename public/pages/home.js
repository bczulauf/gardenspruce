// Should wrap all this in an anonymous function.
// Should pull out template so it isn't redefined each time.
// Should add a render method with returns a promise.
// Should handle auth as middleware with the router.
// Need to change to submit in order to get benefits of required.

function handleStart(evt) {
    evt.preventDefault();
    console.log(evt.data);
}

function loadHome() {
    const promise = new Promise((resolve, reject) => {
        resolve(`<div class="splash">
            <div class="splash-content">
            <p class="emphasis txt-lg">Create your dream garden with one of our design experts.
            </p>
            <form>
                <input class="inpt-stretch" placeholder="Your email" required autofocus/>
                <button id="start-button" class="btn signup-link">Get Started</button>
            </form>
            </div>
        </div>
        <div class="row">
            <div class="col2"></div>
            <div class="col5">
                <p class="txt-md">Whether you are accessorizing or gut-renovating, we provide a custom and personal service that works. We will guide you through the entire garden design process, from designs to plant installation.</p>
            </div>
        </div>`)
    });

    return promise;
}

function homeLoaded() {
    document.getElementById('start-button').addEventListener('click', handleStart, false);
}