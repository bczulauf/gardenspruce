var routes = [];
var patternCache = {};

function matchUri(pattern, uri) {
    const compiledPattern = this.compilePattern(pattern)
    const { regexString, params } = compiledPattern
    const match = uri.match(new RegExp(regexString, 'i'))
    if (!match) {
        return null
    }

    return params.reduce((result, param, index) => {
        result[param] = match[index+1]
        return result
    }, {})
}

function compilePattern(pattern) {
    let compiled = patternCache[pattern];
    if (!compiled) {
        compiled = this._compilePattern(pattern);
        patternCache[pattern] = compiled;
    }
    return compiled
}

function _compilePattern(pattern) {
    const params = []
    const regexParts = []

    pattern
        .split('/')
        .filter((s) => !!s)
        .forEach((segment) => {
            // it is a parameter
            if (segment.indexOf(":") === 0 && segment.length > 1) {
                params.push(segment.slice(1))
                regexParts.push("([^/]+)")
            } else {
                regexParts.push(segment)
            }
        })

    regexParts.push("?")

    return {
        regexString: regexParts.join('/'),
        params
    }
}

// Adds a new route.
function addRoute(url, dispatch) {
    routes.push({ url: url, dispatch: dispatch });
}

function parseQuery(location) {
    let match;
    const pl = /\+/g;  // Regex for replacing addition symbol with a space
    const search = /([^&=]+)=?([^&]*)/g;
    const decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); };
    const query = location.search.substring(1);

    queryData = {};
    while (match = search.exec(query))
       queryData[decode(match[1])] = decode(match[2]);
    return queryData;
}

// Based on current url, loads page.
function loadPage(user) {
    const location = window.location;
    let path = location.hash.replace(/^#/, "");
    
    // This is a temporary hack to make regex match work.
    if (path === "/") {
        path = "/home";
    }

    // Parses the query.
    const query = parseQuery(location);

    // Performs a pattern match.
    var params
    for (var i = 0; i < this.routes.length; i++) {
        const route = this.routes[i]
        params = this.matchUri(route.url, path)
        
        if (params) {
            route.dispatch({ params: params, query: query })
            break
        }
    }
}

// Registers routes.
addRoute("/home", loadHome);
addRoute("/about", loadAbout);
addRoute("/dashboard", loadDashboard);
addRoute("/login", loadLogin);
addRoute("/logout", handleLogout);
addRoute("/signup/more", loadSignupMore);
addRoute("/signup", loadSignup);
addRoute("/service", loadService);
addRoute("/mag", loadMag);
addRoute("/editor", loadEditor);

// Listens on hash change.
window.addEventListener("hashchange", () => {
    loadPage();
});