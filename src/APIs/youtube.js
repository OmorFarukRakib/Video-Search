import axios from 'axios';

const KEY = "AIzaSyCBjC43rMnQeKcqylhMjhj6UZWUI9dNXoQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params : {
      part: 'snippet',
      maxResult: 5,
      key: KEY
  }
});