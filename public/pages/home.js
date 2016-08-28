function loadHome() {
    var page = document.getElementById("page");
    var template = `
        <div class="grid">
        <div class="col col4">
            <p class="emphasis">The easiest way to get set up with top garden design talent in Seattle.
                From start to finish, we take you through every step of the design and installation process, creating outdoor spaces you will love.  
            </p>
        </div>
        <div class="col col8">
            <div class="row">
                <div class="photo"><img src="img/photo1.png" /></div>
                <div class="photo"><img src="img/photo2.png" /></div>
                <div class="photo"><img src="img/photo5.png" /></div> 
            </div>
            <div class="row">
                <div class="photo"><img src="img/photo4.png" /></div>
                <div class="photo"><img src="img/photo3.png" /></div>
                <div class="photo"><img src="img/photo6.png" /></div>
            </div>
        </div>
        </div>`;

    page.innerHTML = template;
}