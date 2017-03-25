
var routes = [];
var patternCache = {};

function compile(pattern) {
    var params = [];
    var regexParts = [];

    pattern
        .split('/')
        .filter((s) => !!s)
        .forEach((segment) => {
            // It is a parameter
            if (segment.indexOf(":") === 0 && segment.length > 1) {
                params.push(segment.slice(1));
                regexParts.push("([^/]+)");
            } else {
                regexParts.push(segment);
            }
        })

    regexParts.push("?");

    return {
        regexString: regexParts.join('/'),
        params
    };
}

function compilePattern(pattern) {
    let compiled = patternCache[pattern];
    if (!compiled) {
        compiled = compile(pattern);
        patternCache[pattern] = compiled;
    }
    return compiled;
}

// Matches url with registered route.
function matchUrl(pattern, url) {
    var compiledPattern = compilePattern(pattern);
    var regexString = compiledPattern.regexString;
    var params = compiledPattern.params;
    var match = url.match(new RegExp(regexString, 'i'));
    if (!match) {
        return null;
    }

    return params.reduce((result, param, index) => {
        result[param] = match[index+1];
        return result;
    }, {});
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
    let hash = location.hash.replace(/^#/, "");
    
    // This is a temporary hack to make regex match work.
    if (hash === "/") {
        hash = "/home";
    }

    // Parses the query.
    // const query = search && search.replace("?", "").split("&").map(function(n){return n=n.split("="),this[n[0]]=n[1],this;}.bind({}))[0];
    const query = parseQuery(location);

    for (var i = 0; i < routes.length; i++) {
        // Looks up route.
        var route = routes[i];
        var match = matchUrl(route.url, hash);
        
        if (match) {
            route.dispatch({ params: match, query: query });
        }
    }
}

// Registers routes.
addRoute("/home", loadHome);
addRoute("/about", loadAbout);
addRoute("/dashboard", loadDashboard);
addRoute("/login", loadLogin);
addRoute("/logout", handleLogout);
addRoute("/signup", loadSignup);
addRoute("/service", loadService);
addRoute("/mag", loadMag);

// Listens on hash change.
window.addEventListener("hashchange", () => {
    loadPage();
});