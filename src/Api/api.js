import axios from "axios";

export function requestGetCountry() {
  return axios.request({
    method: "get",
    url: "http://localhost:8000/api/country",
  });
}

export function requestPostCountry(values) {
  return axios.post("country", values);
}

export function requestDeleteCountry(values) {
  return axios.delete(`${"country"}/${values.payload}`);
}
export function requestUpdateCountry(values) {
  return axios.put(`${"country"}/${values.id}`, values);
}
