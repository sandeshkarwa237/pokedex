import axios from "axios";

export function fetchItemDetails() {
  return axios({
    url: "https://pokeapi.co/api/v2/pokemon/?limit=20",
    method: "get",
  });
}
