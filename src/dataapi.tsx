import axios from "axios";
const [posts, setPosts] = useState([]);

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
const fetch= async ()=> {
const {data} = await axios.request(options);
setPosts(data)
console.log(posts)
}
