var port = process.env.port || 8008;
var is_deamon = process.env.deamon || false;

if (is_deamon) {
    var deamon = deamon(port);
} else {
    var server = server(port);
}