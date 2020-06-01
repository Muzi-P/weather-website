const request = require("request");

const mapbox = (location, cb) => {
  let url = `http://api.weatherstack.com/current?access_key=4a4d342e61567873f9e2bfac156e2e0a&query=${location}`;

  request({ url, json: true }, (error, {body}) => {
    if (error) {
      cb("Unable to Connect to weather services");
    } else if (body.error) {
      cb(body.error.info);
    } else {
      let { location, current } = body;
      let { temperature, humidity, weather_descriptions } = current;
      cb(undefined, { weather_descriptions,temperature, humidity, location });
    }
  });
};

module.exports = mapbox;
                                                                                                                                                    