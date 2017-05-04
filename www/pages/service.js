function loadService() {
    var template = `
        <div class="section">
            <h2 class="page-header">How it works</h2>
            <div class="row">
                <div class="col col7">
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
                <div class="col col1"></div>
                <div class="col col4">
                    <div class="box price-box">
                        <h2>Free</h2>
                        <h3>Initial consultation</h3>
                    </div>
                    <div class="box price-box">
                        <h2>$130/hr</h2>
                        <h3>Book a designer at an hourly rate.</h3>
                    </div>
                    <div class="box price-box">
                        <h2>$500</h2>
                        <h3>Single day design for small projects like decks and pots.</h3>
                    </div>
                </div>
            </div>
        </div>`;

    page.innerHTML = template;
}