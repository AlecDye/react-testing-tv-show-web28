import axios from "axios";

function fetchShow() {
  return axios
    .get(
      "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    )
    .then(res => {
      console.log(".get", res);
    })
    .catch(err => console.error(err));
}

export default fetchShow;
