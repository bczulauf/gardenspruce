function loadPortfolio() {
    var template = `
        <div class="container">
            <div class="section">
                <h2 class="page-header">Portfolio</h2>
                <div class="row margin-bottom">
                    <div class="col"><img src="img/garden9.jpg" /></div>
                    <div class="col"><img src="img/garden6.jpg" /></div>
                    <div class="col"><img src="img/garden7.jpg" /></div>
                </div>
                <div class="row margin-bottom">
                    <div class="col"><img src="img/garden2.jpg" /></div>
                    <div class="col"><img src="img/garden3.jpg" /></div>
                    <div class="col"><img src="img/garden4.jpg" /></div>
                </div>
            </div>
        </div>`;

    pageElem.innerHTML = template;
}