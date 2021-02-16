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

export function requestGetCity() {
  return axios.request({
    method: "get",
    url: "http://localhost:8000/api/city",
  });
}

export function requestPostCity(values) {
  return axios.post("city", values);
}

export function requestDeleteCity(values) {
  return axios.delete(`${"city"}/${values.payload}`);
}
export function requestUpdateCity(values) {
  return axios.put(`${"city"}/${values.id}`, values);
}

// Religion
export function requestGetReligion() {
  return axios.get("religion");
}

export function requestPostReligion(values) {
  return axios.post("religion", values);
}

export function requestDeleteReligion(values) {
  return axios.delete(`${"religion"}/${values.payload}`);
}
export function requestUpdateReligion(values) {
  return axios.put(`${"religion"}/${values.id}`, values);
}

// evaluation compentencies

export function requestGetEvaluationcompentencies() {
  return axios.request({
    method: "get",
    url: "http://localhost:8000/api/evaluation_competence",
  });
}

export function requestPostEvaluationcompentencies(values) {
  return axios.post("evaluation_competence", values);
}

export function requestDeleteEvaluationcompentencies(values) {
  return axios.delete(`${"evaluation_competence"}/${values.payload}`);
}
export function requestUpdateEvaluationcompentencies(values) {
  return axios.put(`${"evaluation_competence"}/${values.id}`, values);
}

// education
export function requestGetEducationTraingType() {
  return axios.request({
    method: "get",
    url: "http://localhost:8000/api/educationtrainingtype",
  });
}

export function requestPostEducationTraingType(values) {
  return axios.post("educationtrainingtype", values);
}

export function requestDeleteEducationTraingType(values) {
  return axios.delete(`${"educationtrainingtype"}/${values.payload}`);
}
export function requestUpdateEducationTraingType(values) {
  return axios.put(`${"educationtrainingtype"}/${values.id}`, values);
}
// document type
export function requestGetDocumenttype() {
  return axios.request({
    method: "get",
    url: "http://localhost:8000/api/documenttype",
  });
}

export function requestPostDocumenttype(values) {
  return axios.post("documenttype", values);
}

export function requestDeleteDocumenttype(values) {
  return axios.delete(`${"documenttype"}/${values.payload}`);
}
export function requestUpdateDocumenttype(values) {
  return axios.put(`${"documenttype"}/${values.id}`, values);
}
