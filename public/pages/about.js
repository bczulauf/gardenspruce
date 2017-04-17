function loadAbout() {
    var page = document.getElementById("page");
    var template = `
        <div class="section">
            <div class="row">
                <div class="col2"></div>
                <div class="col8">
                    <h2>About</h2>
                </div>
            </div>
            <div class="row">
                <div class="col2"></div>
                <div class="col5">
                    <p class="txt-md">Garden Spruce was founded with a simple idea: garden design needed a redesign for the way we live now. So we set out to create a smart, accessible and personal service that works whether you are accessorizing or gut-renovating. By giving our clients access to top emerging garden design talent, and exceptional customer service (we are fanatical about it), we are making it easy to love where you live.</p>
                </div>
            </div>
        </div>
    `;

    page.innerHTML = template;
}