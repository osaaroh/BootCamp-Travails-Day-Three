/**
 * Making an HTTP Call - GET
 */
// options for GET
let getOptions = {
    host : 'www.nairaland.com', // Use only the domain name. no Http or https
    port : 443,
    path : '', // the rest of the url with parameters if needed
    method : 'GET' // do GET
};

console.info('Options prepared:');
console.info(getOptions);
console.info('Do the GET call');

// do the GET request
var reqGet = https.request(getOptions, function(res) {
    console.log("statusCode: ", res.statusCode);
    console.log("headers: ", res.headers);


    res.on('data', function(d) {
        console.info('GET result:\n');
        process.stdout.write(d);
        console.info('\n\nCall completed');
    });

});

reqGet.end();
reqGet.on('error', function(e) {
    console.error(e);
});
