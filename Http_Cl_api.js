/* A simple Command Line Application to get the Geographical Location
* that uses a Google API
* */
function getMyGoogleMapLocation(){
        // Initialize the response
        response.content = '';
        response.headers['Content-Type'] = 'application/json';
        try {

            if ((request.queryParams.postalcode == undefined) ||

                (request.queryParams.country == undefined)) {

                console.log('"postalcode" and "country" query parameters are required');

            }

            // Send an HTTP GET to the URL that we construct

            var geocoding = httpClient.get('http://maps.googleapis.com/maps/api/geocode/json?address=' + request.queryParams.postalcode +'&region=' + request.queryParams.country +'&sensor=false');
            geocoding.waitForComplete();

            if (!ding.isSuccess()) {
                console.log( 'Error contacting geocoding web service');
            }
            // We got a response. Parse the JSON into a JavaScript object.
            geocodeResponse = geocoding.getResponse().content.asJSON;

            if (geocodeResponse.status != 'OK') {
                console.log('Error returned from geocoding web service: ' + geocodeResponse.status);

            }

            // Go through the JavaScript returned by Google and get the results
            var lat = geocodeResponse.results[0].geometry.location.lat;
            var lng = geocodeResponse.results[0].geometry.location.lng;

            // Send another HTTP GET to the other service
            var altitude = httpClient.get(

                'http://maps.googleapis.com/maps/api/elevation/json?sensor=false&locations=' +lat + ',' + lng);
                 altitude.waitForComplete();

            if (!altitude.isSuccess()) {
                console.log( 'Error contacting altitude web service');
            }

            altitudeResponse = altitude.getResponse().content.asJSON;

            if (altitudeResponse.status != 'OK') {
                console.log( 'Error returned from altitude web service: ' + altitudeResponse.status);
            }


            var alt = altitudeResponse.results[0].elevation;
            // Final assembly of the JSON object

            var body = response.content.asJSON;
            body.country = request.queryParams.country;
            body.postalcode = request.queryParams.postalcode;
            body.location = { latitude: lat, longitude: lng};
            body.altitude = { meters : alt, feet : alt * 3.2808399};
        }

        catch (err) {
            // Handle any error that may have happened previously by generating a response
            response.content.asJSON.error = err;
        }

    /*
    * calling the API
    * $ curl "http://{myorg}-test.apigee.net/javascript-mashup-cookbook?country=us&postalcode=80503"
    *
     */

/*

    * The response is a JSON object that includes the geocoded location (latitude/longitude)
    * for the center of the supplied postal code area combined with the elevation at
    * that geocoded location.

   {
     {

     "country": "us",
     "postalcode": 80503,
     "location": {
     "latitude": 40.1724007,
     "longitude": -105.1960795
     },

     "altitude": {
     "meters": 1570.249755859375,
     "feet": 5151.7380519886965
     }
     }

    *

    * */

}
