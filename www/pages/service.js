function loadService() {
    var template = `
        <div class="section">
            <h2 class="page-header">How it works</h2>
            <div class="col8">
                <ol class="ordered-list">
                    <li>
                        <div>
                            <h2 class="inline">Book a free consultation</h2>
                            <h3>Based on the project details you provide, your dedicated customer service rep will hand select one of our top designers to meet with you for a complimentary consult.</h3>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h2 class="inline">Buy time with Garden Spruce</h2>
                            <h3>After reviewing your custom proposal from your designer, you can buy time at $130/hr to execute your project, in-person or by-video. See our design package options.</h3>
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
        </div>`;

    page.innerHTML = template;
}