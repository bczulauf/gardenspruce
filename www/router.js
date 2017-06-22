const pageElem = document.getElementById("page");
const Router = {
    routes: [],
    cachedRoutes: {},
    getFragment: function() {
        const match = window.location.href.match(/#(.*)$/);
        const path = match ? match[1] : "";
        // Removes slashes.
        return path.toString().replace(/^\/|\/$/g, '');
    },
    add: function(re, handler, requiresAuth) {
        this.routes.push({ re: re, handler: handler, requiresAuth: requiresAuth });
    },
    match: function(f) {
        const fragment = f || this.getFragment();
        const cachedRoute = this.cachedRoutes[fragment];
        if (cachedRoute) {
            return checkAuthPromise(cachedRoute.requiresAuth).then((user) => {
                if (!user) {
                    this.navigate("login");
                    return this;
                } else {
                    cachedRoute.handler.apply({}, cachedRoute.data);;
                    return this;
                }
            });
        }

        for(let i = 0; i < this.routes.length; i++) {
            const match = fragment.match(this.routes[i].re);
            if (match) {
                const route = this.routes[i];

                return checkAuthPromise(route.requiresAuth).then((user) => {
                    if (!user) {
                        this.navigate("login");
                        return this;
                    } else {
                        const handler = this.routes[i].handler;
                        match.shift();
                        this.cachedRoutes[fragment] = { handler: handler, data: match };
                        handler.apply({}, match);

                        return this;
                    }
                });
            }           
        }
        return this;
    },
    navigate: function(path) {
        window.location.href = window.location.href.replace(/#(.*)$/, '') + '#' + path;
    },
    listen: function() {
        const that = this;
        // Listens to hash changes.
        window.addEventListener("hashchange", () => {
            that.match();
        });

        window.addEventListener("load", () => {
            that.match();
        });
    }
}

Router.add("about", loadAbout);
Router.add("dashboard", loadDashboard, true);
Router.add("login", loadLogin);
Router.add("logout", handleLogout);
Router.add("signup", loadSignup);
Router.add("service", loadService);
Router.add("project", loadProject);
Router.add("posts/(.*)", loadPost);
Router.add("portfolio", loadPortfolio);
Router.add("magazine", loadMag);
Router.add("terms", loadTerms);
Router.add("contact", loadContact);
Router.add("editor", loadEditor, true);
Router.add("", loadHome);
Router.listen();