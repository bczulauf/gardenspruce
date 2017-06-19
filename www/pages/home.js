function loadHome() {
    const template = `
        <div class="home-hero">
            <div class="home-hero-content">
                <h2>
                    Create your dream garden.
                </h2>
                <div>Sign up for a free consultation with a Garden Spruce designer.</div>
                <form id="home-form">
                    <input type="email" name="email" class="inpt-long" placeholder="Your email" required autofocus/>
                    <button type="submit" id="start-button" class="button-std">Get Started</button>
                </form>
            </div>
        </div>
        <div class="section col12">
            <div class="row section-header">
                <div class="col col5">
                    <img src="img/garden3.jpg" class="col5" />
                </div>
                <div class="col col1"></div>
                <div class="col col6">
                    <h3>Designed for you.</h3>
                    <p>We make it simple for you to hire an amazing designer. We have handpicked the best up-and-coming garden designers in Seattle to help you create your garden oasis.</p>
                    <p>No matter how big or small your project, our team can handle it. We will guide you through each step from blueprints, to installation.</p>
                </div>
            </div>
            <h2 class="section-header">How Garden Spruce works</h2>
            <div class="margin-bottom flex">
                <div class="col col4">
                    <div class="no">1</div>
                    <h3 class="inline">Book a consultation</h3>
                    <p>Based on the project details you provide, your dedicated customer service rep will hand select one of our top designers to meet with you for a complimentary consult.</p>
                </div>
                <div class="col col4">
                    <div class="no">2</div>
                    <h3 class="inline">Buy design time</h3>
                    <p>After reviewing your custom proposal from your designer, you can either buy a day design package or book time at $130/hr to execute your project, in-person or by-video. See our design package options.</p>
                </div>
                <div class="col col4">
                    <div class="no">3</div>
                    <h3>Design and Execute</h3>
                    <p>Depending on your scope of work, your designer will provide design plans, pick plants and hardscape, source materials, and manage contractors and installation. Your dedicated service rep will offer answers and solutions along the way.</p>
                </div>
            </div>
            <div class="row margin-top">
                <div class="col col4"><img src="img/garden2.jpg" class="col4" /></div>
                <div class="col col4"><img src="img/garden3.jpg" class="col4" /></div>
                <div class="col col4"><img src="img/garden4.jpg" class="col4" /></div>
            </div>
            <div class="row centered margin-top">
                <a href="#/service" class="button-std">Learn More</a>
            </div>
            <h2 class="section-header">Pricing</h2>
            <div class="row">
                <div class="col col4 box price-box">
                    <h3 class="margin-bottom">Consulation</h3>
                    <h4 class="margin-bottom">Free</h4>
                    <p>Start with a free consultation either at your home or by phone. You will leave with an estimate and design guidance. You can then choose to continue with your designer by purchasing a package or hourly rate plan.</p>
                </div>
                <div class="col col4 box price-box">
                    <h3 class="margin-bottom">Package</h3>
                    <h4 class="margin-bottom">$300</h4>
                    <p>A day package is a great way to go if you have a small project. You pay for a single day and receive a design and plant list. You can then choose to DIY or have us help with the installation.</p>
                </div>
                <div class="col col4 box price-box">
                    <h3 class="margin-bottom">Hourly</h3>
                    <h4 class="margin-bottom">$90/hr</h4>
                    <p>If you have a bigger project, we recommend hiring your designer by the hour. You can book and pay your designer right from our site.</p>
                </div>
            </div>
            <div class="row centered margin-top">
                <a href="#/service" class="button-std">Get Started</a>
            </div>
        </div>`;

    pageElem.innerHTML = template;
    document.getElementById("home-form").addEventListener("submit", function(evt){createUserFromForm(evt, "customer")}, false);
}