const args = process.argv.slice(2);
const breedName = args[0];
const request = require('request');

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }
  // console.log('statusCode:', response && response.statusCode);
  // console.log(typeof body);
  // console.log(body.length);
  // if (body.length === 0) {
  //   console.log("Sorry, no results were found.");
  // }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("Sorry, no results were found.");
    return;
  }
  console.log(typeof data);
  // console.log(data.length);
  console.log(body);
  console.log(data[0].description);

});