function loadService() {
    var template = `
        <div class="section">
            <h2 class="page-header">How it works</h2>
            <ol class="ordered-list">
                <li>
                    <div>
                        <h2 class="inline">Book a consultation</h2>
                        <h3 class="col8">Based on the project details you provide, your dedicated customer service rep will hand select one of our top designers to meet with you for a complimentary consult.</h3>
                    </div>
                </li>
                <li>
                    <div>
                        <h2 class="inline">Buy time with Garden Spruce</h2>
                        <h3 class="col8">After reviewing your custom proposal from your designer, you can either buy a day design package or book time at $130/hr to execute your project, in-person or by-video. See our design package options.</h3>
                    </div>
                </li>
                <li>
                    <div>
                        <h2>Design and Execute</h2>
                        <h3 class="col8">Depending on your scope of work, your designer will provide design plans, pick plants and hardscape, source materials, and manage contractors and installation. Your dedicated service rep will offer answers and solutions along the way.</h3>
                    </div>
                </li>
            </ol>
            <h2 class="section-header">Pricing</h2>
            <div class="row margin-bottom">
                <div class="col col4 box price-box">
                    <h2 class="margin-bottom">Consulation</h2>
                    <h3 class="margin-bottom">Free</h3>
                    <div class="text-small">Start with a free consultation either at your home or by phone. You will leave with an estimate and design guidance. You can then choose to continue with your designer by purchasing a package or hourly rate plan.</div>
                </div>
                <div class="col col4 box price-box">
                    <h2 class="margin-bottom">Package</h2>
                    <h3 class="margin-bottom">$300</h3>
                    <div class="text-small">A day package is a great way to go if you have a small project. You pay for a single day and receive a design and plant list. You can then choose to DIY or have us help with the installation.</div>
                </div>
                <div class="col col4 box price-box">
                    <h2 class="margin-bottom">Hourly</h2>
                    <h3 class="margin-bottom">$90/hr</h3>
                    <div class="text-small">If you have a bigger project, we recommend hiring your designer by the hour. You can book and pay your designer right from our site.</div>
                </div>
            </div>
        </div>`;

    pageElem.innerHTML = template;
}