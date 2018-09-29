var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+Back2CN", {
    "+Back2CN": function(url, host, scheme) {
        "use strict";
        if (/(?:^|\.)music\.163\.com$/.test(host)) return "+Proxy";
        if (/(?:^|\.)music\.126\.net$/.test(host)) return "+Proxy";
        if (/^ipservice\.163\.com$/.test(host)) return "+Proxy";
        if (/(?:^|\.)hdslb\.com$/.test(host)) return "+Proxy";
        if (/(?:^|\.)bilibili\.com$/.test(host)) return "+Proxy";
        return "DIRECT";
    },
    "+Proxy": function(url, host, scheme) {
        "use strict";
        return "SOCKS5 127.0.0.1:23333; SOCKS 127.0.0.1:23333";
    }
});