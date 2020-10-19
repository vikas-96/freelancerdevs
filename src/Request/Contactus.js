import axios from "axios";

export function StoreContactUs(data = {}) {
  // return fetch(process.env.REACT_APP_API_URL + "/api/contactus_it", {
  //   method: "post",
  //   headers: { "Content-Type": "application/json" },
  //   body: contactdata,
  // }).then((response) => response.data);
  return axios
    .post(process.env.REACT_APP_API_URL + "/api/contactus_it", data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.data);
}

export function getContactus() {
  return axios
    .get(process.env.REACT_APP_API_URL + "/api/contactus_it", {
      headers: {
        "Content-Type": "application/json",
        Authorization: null,
      },
    })
    .then((response) => response.data);
}
