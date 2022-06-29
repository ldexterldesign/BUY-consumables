let apikey = null
let food = "175140"; // sardine
let url = "https://api.nal.usda.gov/fdc/v1/food";
const jsonResponse = await fetch(`${url}/${food}?api_key=${apikey}`);
const jsonData = await jsonResponse.json();
console.log(jsonData);