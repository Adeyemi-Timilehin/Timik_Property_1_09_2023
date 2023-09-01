import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://us-real-estate.p.rapidapi.com/v3/property-detail',
  params: {
    property_id: '4951372754'
  },
  headers: {
    'X-RapidAPI-Key': '05e86ff720msh32ee92d81539fd6p12bfb6jsna5bf93db9cc5',
    'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}