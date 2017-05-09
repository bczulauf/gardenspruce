function loadHome() {
    const template = `
        <div class="splash">
            <div class="splash-content">
                <h2>
                    Create your dream garden.
                </h2>
                <h3>Sign up for a free consultation with one of our top designers.</h3>
                <form id="signup-form">
                    <input type="email" name="email" class="inpt-stretch" placeholder="Your email" required autofocus/>
                    <input type="password" class="inpt-stretch" name="password" required placeholder="Password"/>
                    <button type="submit" id="start-button" class="btn btn-lg submit-btn">Get Started</button>
                </form>
            </div>
        </div>
        <div class="section">
            <h2 class="section-header">About</h2>
            <div class="row">
                <div class="col col7">
                    <p>Garden Spruce makes it easy to create your dream garden.</p>
                    <p>Whether you are accessorizing or gut-renovating, we provide a custom and personal service that works. We will guide you through the entire garden design process, from designs to plant installation.</p>
                    <a href="#/about">Learn More</a>
                </div>
                <div class="col col1"></div>
                <div class="col col4">
                    <img src="img/garden1.jpg" class="home-img" />
                </div>
            </div>
            <div class="row margin-top">
                <div class="col col4"><img src="img/garden2.jpg" class="home-img" /></div>
                <div class="col col4"><img src="img/garden3.jpg" class="home-img" /></div>
                <div class="col col4"><img src="img/garden4.jpg" class="home-img" /></div>
            </div>
            <h2 class="section-header">How it works</h2>
            <div class="margin-bottom">
                <ol class="ordered-list">
                    <li>
                        <div>
                            <h2 class="inline">Book a consultation</h2>
                            <h3>Based on the project details you provide, your dedicated customer service rep will hand select one of our top designers to meet with you for a complimentary consult.</h3>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h2 class="inline">Buy time with Garden Spruce</h2>
                            <h3>After reviewing your custom proposal from your designer, you can either buy a day design package or book time at $130/hr to execute your project, in-person or by-video. See our design package options.</h3>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h2>Design and Execute</h2>
                            <h3>Depending on your scope of work, your designer will provide design plans, pick plants and hardscape, source materials, and manage contractors and installation. Your dedicated service rep will offer answers and solutions along the way.</h3>
                        </div>
                    </li>
                </ol>
            </div>
            <h2 class="section-header">Pricing</h2>
            <div class="row margin-bottom">
                <div class="col col4 box price-box">
                    <h2 class="margin-bottom">Consulation</h2>
                    <h3 class="margin-bottom">Free</h3>
                    This is a description
                </div>
                <div class="col col4 box price-box">
                    <h2 class="margin-bottom">Package</h2>
                    <h3 class="margin-bottom">$300</h3>
                    This is a description
                </div>
                <div class="col col4 box price-box">
                    <h2 class="margin-bottom">Hourly</h2>
                    <h3 class="margin-bottom">$90/hr</h3>
                    This is a description
                </div>
            </div>
            <a href="#/service">Learn More</a>
        </div>`;

    pageElem.innerHTML = template;
    document.getElementById("signup-form").addEventListener("submit", function(evt){createUserFromForm(evt, "customer")}, false);
}