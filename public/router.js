
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

// Based on current url, loads page.
function loadPage(user) {
    var url = window.location.hash.slice(1) || "/";
    var splitUrl = url.split("?");
    var path = splitUrl[0];
    var queryStr = splitUrl[1];
    
    // This is a temporary hack to make regex match work.
    if (path === "/") {
        path = "/home";    
    }

    // Parses the query.
    var query = queryStr && queryStr.split("&").map(function(n){return n=n.split("="),this[n[0]]=n[1],this;}.bind({}))[0];
    
    for (var i = 0; i < routes.length; i++) {
        // Looks up route.
        var route = routes[i];
        var match = matchUrl(route.url, path);
        
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
addRoute("/signup/location", loadLocation);
addRoute("/signup", loadSignup);
addRoute("/service", loadService);
addRoute("/mag", loadMag);

// Listens on hash change.
window.addEventListener("hashchange", () => {
    loadPage();
});