//require node modules
require('dotenv').config();

//accessing variables
const BASIC_AUTH = process.env.BASIC_AUTH;

//defining global variables
let foundCompanies = [];

function getData(searchString) {

    fetch(`https://api.company-information.service.gov.uk/search/companies?q=${searchString}`, {
  headers: {
    'Authorization': BASIC_AUTH
  }
})
.then(response => {
  // handle response
  return response.json()
})
.then(data => {
    foundCompanies = data.items
    console.log(foundCompanies)
})
.catch(error => {
  // handle error
  console.log(error)
});
}

getData("Tesco")