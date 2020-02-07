import { SEARCH } from "./types";
import axios from "axios";

export const search = query => dispatch => {
  console.log("here124");
  axios
    .post(`http://localhost:3001/api/pharmacy/search`, { query }) // the proxy isn't working properly
    .then(res => res.data)
    .then(pharmacies =>
      dispatch({
        type: SEARCH,
        payload: pharmacies
      })
    );
};
