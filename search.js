//require node modules
require('dotenv').config();

//accessing variables
const BASIC_AUTH = process.env.BASIC_AUTH;

function getData() {
    fetch('https://api.company-information.service.gov.uk/search/officers', {
  headers: {
    'Authorization': BASIC_AUTH
  }
})
.then(response => {
  // handle response
  return response.json()
})
.then(data => {
    console.log(data)
})
.catch(error => {
  // handle error
  console.log(error)
});
}

getData()