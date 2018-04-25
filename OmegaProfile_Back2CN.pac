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
        if (/(?:^|\.)hdslb\.com$/.test(host)) return "+C";
        if (/(?:^|\.)acgvideo\.com$/.test(host)) return "+C";
        if (/(?:^|\.)bilibili\.com$/.test(host)) return "+C";
        if (/(?:^|\.)126\.net$/.test(host)) return "+C";
        if (/(?:^|\.)163\.com$/.test(host)) return "+C";
        if (/(?:^|\.)cn$/.test(host)) return "+C";
        return "DIRECT";
    },
    "+C": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host) || /^192\.168$/.test(host) || /^\(\^\|\\\.\)local\$$/.test(host) || /^\(\^\|\\\.\)localhost\$$/.test(host) || /^\(\^\|\\\.\)ip6-localhost\$$/.test(host) || /^\(\^\|\\\.\)ip6-loopback\$$/.test(host) || host.indexOf(":") >= 0 && (typeof isInNetEx === "function" ? isInNetEx(host, "0:0:0:ffff::/1") : isInNet(host, "0:0:0:ffff::", "8000::")) || host.indexOf(":") >= 0 && (typeof isInNetEx === "function" ? isInNetEx(host, "::ffff:128:0:0:0/1") : isInNet(host, "::ffff:128:0:0:0", "8000::")) || host[host.length - 1] >= 0 && isInNet(host, "0.0.0.0", "255.0.0.0") || host[host.length - 1] >= 0 && isInNet(host, "10.0.0.0", "255.0.0.0") || host[host.length - 1] >= 0 && isInNet(host, "100.64.0.0", "255.192.0.0") || host[host.length - 1] >= 0 && isInNet(host, "127.0.0.0", "255.0.0.0") || host[host.length - 1] >= 0 && isInNet(host, "169.254.0.0", "255.255.0.0") || host[host.length - 1] >= 0 && isInNet(host, "172.16.0.0", "255.240.0.0") || host[host.length - 1] >= 0 && isInNet(host, "192.0.0.0", "255.255.255.248") || host[host.length - 1] >= 0 && isInNet(host, "192.0.2.0", "255.255.255.0") || host[host.length - 1] >= 0 && isInNet(host, "192.88.99.0", "255.255.255.0") || host[host.length - 1] >= 0 && isInNet(host, "192.168.0.0", "255.255.0.0") || host[host.length - 1] >= 0 && isInNet(host, "198.18.0.0", "255.254.0.0") || host[host.length - 1] >= 0 && isInNet(host, "198.51.100.0", "255.255.255.0") || host[host.length - 1] >= 0 && isInNet(host, "203.0.113.0", "255.255.255.0") || host[host.length - 1] >= 0 && isInNet(host, "224.0.0.0", "224.0.0.0")) return "DIRECT";
        return "SOCKS5 192.168.123.1:23333; SOCKS 192.168.123.1:23333";
    }
});