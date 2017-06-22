function loadService() {
    var template = `
        <div class="container">
        <div class="section">
            <h2 class="page-header">How Garden Spruce works</h2>
            <div class="row">
                <div class="col">
                    <div class="no">1</div>
                    <h3 class="inline">Book a consultation</h3>
                    <p>Based on the project details you provide, your dedicated customer service rep will hand select one of our top designers to meet with you for a complimentary consult.</p>
                </div>
                <div class="col">
                    <div class="no">2</div>
                    <h3 class="inline">Buy design time</h3>
                    <p>After reviewing your custom proposal from your designer, you can either buy a day design package or book time at $130/hr to execute your project, in-person or by-video. See our design package options.</p>
                </div>
                <div class="col">
                    <div class="no">3</div>
                    <h3>Design and Execute</h3>
                    <p>Depending on your scope of work, your designer will provide design plans, pick plants and hardscape, source materials, and manage contractors and installation. Your dedicated service rep will offer answers and solutions along the way.</p>
                </div>
            </div>
            <div class="row">
                <div class="col"><img src="img/garden2.jpg" /></div>
                <div class="col"><img src="img/garden3.jpg" /></div>
                <div class="col"><img src="img/garden4.jpg" /></div>
            </div>
            <div class="row centered">
                <a href="#/service" class="button-std">Learn More</a>
            </div>
            <h2 class="section-header">Pricing</h2>
            <div class="row">
                <div class="col">
                    <div class="box">
                        <h3 class="margin-bottom">Consulation</h3>
                        <h4 class="margin-bottom">Free</h4>
                        <p>Start with a free consultation either at your home or by phone. You will leave with an estimate and design guidance. You can then choose to continue with your designer by purchasing a package or hourly rate plan.</p>
                    </div>
                </div>
                <div class="col">
                    <div class="box">
                        <h3 class="margin-bottom">Package</h3>
                        <h4 class="margin-bottom">$300</h4>
                        <p>A day package is a great way to go if you have a small project. You pay for a single day and receive a design and plant list. You can then choose to DIY or have us help with the installation.</p>
                    </div>
                </div>
                <div class="col">
                    <div class="box">
                        <h3 class="margin-bottom">Hourly</h3>
                        <h4 class="margin-bottom">$90/hr</h4>
                        <p>If you have a bigger project, we recommend hiring your designer by the hour. You can book and pay your designer right from our site.</p>
                    </div>
                </div>
            </div>
        </div>`;

    pageElem.innerHTML = template;
}