const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=Uttam%20Townscapes%20Yerwada%20pune',
    json: true
}, (error, response, body) => {
    // console.log(JSON.stringify(response, undefined, 2));
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});