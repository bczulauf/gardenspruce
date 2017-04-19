function loadService() {
    var template = `
        <div class="section">
            <div class="row">
                <div class="col2"></div>
                <div class="col8">
                    <h2>How it works</h2>
                </div>
            </div>
            <div class="row">
                <div class="col2">
                </div>
                <div class="col5">
                    <h4>1. Book a free consultation</h4>
                    <p>
                        Based on the project details you provide, your dedicated customer service rep (a Homepolish Queen Bee) will hand select one of our top designers to meet with you for a complimentary consult.
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col2">
                </div>
                <div class="col5">
                    <h4>2. Buy time with Garden Spruce</h4>
                    <p>
                        After reviewing your custom proposal from your designer, you can buy time at $130/hr to execute your project, 
    in-person or by-video. See our design package options.
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col2">
                </div>
                <div class="col5">
                    <h4>3. Design and Execute</h4>
                    <p>
                        Depending on your scope of work, your designer will provide floor plans and furniture layouts, pick paint palettes, source furnishings, finishes and accessories, and manage contractors and installation. Your dedicated Queen Bee will offer answers and solutions along the way.
                    </p>
                </div>
            </div>
        </div>`;

    page.innerHTML = template;
}