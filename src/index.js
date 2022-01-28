const httpProxy = require('http-proxy');
const http = require('http');

// check for config
const config = require('../node-proxy.js');
if (!config) {
    console.warn('no configuration loaded, "/node-proxy/node-proxy.js" is missing');
}

// create proxy
const proxy = httpProxy.createProxyServer();

// create http server
const server = http.createServer((req, res) => {
    // get proxy configuration for host
    const options = config[req.headers.host];
    if (!options) {
        res.statusCode = 404;
        return res.end('not found');
    }

    console.log(`proxying host: '${req.headers.host}' to '${options.target.host}:${options.target.port}'`);

    // reverse proxy request to service
    proxy.web(req, res, options, (err, proxyReq, proxyRes, target) => {
        if(err) {
            console.error(JSON.stringify(err));            
        }
        proxyRes.pipe(res);
    });
});

// start server
server.listen(8080, () => {
    console.log('starting server on port: 8080');
});