const Router = {
    routes: [],
    cachedRoutes: {},
    getFragment: function() {
        const match = window.location.href.match(/#(.*)$/);
        const path = match ? match[1] : "";
        // Removes slashes.
        return path.toString().replace(/^\/|\/$/g, '');
    },
    add: function(re, handler) {
        this.routes.push({ re: re, handler: handler });
    },
    check: function(f) {
        const fragment = f || this.getFragment();
        const cachedRoute = this.cachedRoutes[fragment];
        if (cachedRoute) {
            cachedRoute.handler.apply({}, cachedRoute.data);;
            return this;
        }

        for(let i = 0; i < this.routes.length; i++) {
            const match = fragment.match(this.routes[i].re);
            if (match) {
                const handler = this.routes[i].handler;
                match.shift();
                this.cachedRoutes[fragment] = { handler: handler, data: match };
                handler.apply({}, match);
                return this;
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
            that.check();
        });

        window.onload = function() {
            // Waits for auth before loading page. 
            initApp().then(function(user) {
                that.check();
            });
        };
    }
}

Router.add("about", loadAbout);
Router.add("dashboard", loadDashboard);
Router.add("login", loadLogin);
Router.add("logout", handleLogout);
Router.add("signup/more", loadSignupMore);
Router.add("signup", loadSignup);
Router.add("service", loadService);
Router.add("posts/(.*)", loadPost);
Router.add("magazine", loadMag);
Router.add("editor", loadEditor);
Router.add("", loadHome);

Router.listen();