function loadPortfolio() {
    var template = `
        <div class="section">
            <div class="row margin-bottom">
                <div class="col col4"><img src="img/garden5.jpg" class="home-img" /></div>
                <div class="col col4"><img src="img/garden6.jpg" class="home-img" /></div>
                <div class="col col4"><img src="img/garden7.jpg" class="home-img" /></div>
            </div>
            <div class="row margin-bottom">
                <div class="col col4"><img src="img/garden2.jpg" class="home-img" /></div>
                <div class="col col4"><img src="img/garden3.jpg" class="home-img" /></div>
                <div class="col col4"><img src="img/garden4.jpg" class="home-img" /></div>
            </div>
            <div class="row margin-bottom">
                <div class="col col4"><img src="img/garden8.jpg" class="home-img" /></div>
                <div class="col col4"><img src="img/garden9.jpg" class="home-img" /></div>
                <div class="col col4"><img src="img/garden10.jpg" class="home-img" /></div>
            </div>
        </div>`;

    pageElem.innerHTML = template;
}