//some of the test code for gettng an image from the api to display it

const { response } = require("../app");

const api_url = "https://picsum.photos/600/480";

async function getapi(url) {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.json();
  console.log(data);
  if (response) {
    hideloader();
  }
  show(data);
}
// Calling that async function
getapi(api_url);

console.log(response);
