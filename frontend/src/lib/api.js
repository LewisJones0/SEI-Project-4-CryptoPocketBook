// AUTHENTICATION / ACCOUNT
export const registerUser = formData => {
  return axios.post(`${baseUrl}/register`, formData)
}
export const loginUser = formData => {
  return axios.post(`${baseUrl}/login`, formData)
}
export const getSingleUser = ( userId ) => {
  return axios.get(`${baseUrl}/users/${userId}`)
}
// EDIT ACCOUNT DETAILS
export const editAccount = ( formData ) => {
  return axios.put(`${baseUrl}/profile/account`, formData, withHeaders())
}
// GET USERS ADDRESS INFORMATION
export const addressDetails = () => {
  return axios.get(`${baseUrl}/profile/checkout`, withHeaders())
}
// EDIT CHECKOUT DETAILS
export const editCheckout = ( formData ) => {
  return axios.put(`${baseUrl}/profile/checkout`, formData, withHeaders())
}
// GET FAVOURITE
export const getAllFavs = () => {
  return axios.get(`${baseUrl}/profile`, withHeaders())
}