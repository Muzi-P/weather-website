const request = require("request");

const geocode = (addr='', cb) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    addr
  )}.json?access_token=pk.eyJ1IjoibXV6aS1wIiwiYSI6ImNrYXFjdmVydDAzbnoyeWxyZXBwb3ltY2wifQ.WT9HvhOWlf2OypRTBwAo7g&limit=1`;
  request({ url, json: true }, (error, {body}) => {
    if (error) {
      cb("Unable to Connect to weather services");
    } else if (body.message) {
      cb(body.message);
    } else {
      if(body.features.length > 0){
        let { center, place_name } = body.features[0];
        cb(undefined, { lat: center[1], lon: center[0], place_name });
      } else {
      cb("Unable to find a location. Please try again");
      }
    }
  });
};

module.exports = geocode;
