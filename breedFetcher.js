const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (!error) {
      const data = JSON.parse(body);
      let desc;
      if (data[0] === undefined) {
        error = "no such breed";
        desc = null;
      } else {
        desc = data[0].description;
      }
      callback(error, desc);
    } else {
      callback(error, null);
    }
  });
};

module.exports = { fetchBreedDescription };