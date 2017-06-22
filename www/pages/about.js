function loadAbout() {
    var template = `
        <div class="container">
            <div class="section">
                <h2 class="page-header">About</h2>
                <div class="row">
                    <div class="col">
                        <p>Whether you want a few perfect pots or a breezy backyard oasis, Garden Spruce makes it easy to create your dream garden.</p>
                        <p>We'll match you with a handpicked, top-quality designer to help you with every part of the design process, from sketches to blueprints, installation to maintenance.</p>
                        <p>Whether you're looking for some advice on a DIY project or a full service garden makeover, our designers, contractors and crews are happy to help.  Prices are wholesale, payment is simple and transparent, and packages are tailored to your needs.  Getting started is risk free, so tell us about your project!  We can't wait to get digging.</p>
                    </div>
                    <div class="col">
                        <img src="img/pool.jpg" />
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <h3>Services</h3>
                        <ul class="list-std">
                            <li>
                                Pots & Planters
                            </li>
                            <li>
                                Porches
                            </li>
                            <li>
                                Patios
                            </li>
                            <li>
                                Yards
                            </li>
                            <li>
                                Irrigation
                            </li>
                            <li>
                                Vegetable Gardens
                            </li>
                            <li>
                                Rain Wise Gardens
                            </li>
                            <li>
                                Hardscaping
                            </li>
                            <li>
                                Fences & Walls
                            </li>
                            <li>
                                Sheds
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;

    pageElem.innerHTML = template;
}