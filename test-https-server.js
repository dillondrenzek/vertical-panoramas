var tls = require('tls');
var fs = require('fs');
var options = {
    key: fs.readFileSync('vp-key.pem'),
    cert: fs.readFileSync('vp-cert.pem')
};
tls.createServer(options, function (s) {
    s.write("welcome!\n");
    s.pipe(s);
}).listen(8000);
//# sourceMappingURL=test-https-server.js.map