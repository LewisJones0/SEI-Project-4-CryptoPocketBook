import axios from 'axios'
const baseUrl = '/api'

const withHeaders = () => {
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }
}

// AUTHENTICATION / ACCOUNT
export const registerUser = formData => {
  return axios.post(`${baseUrl}/auth/register/`, formData)
}
export const loginUser = formData => {
  return axios.post(`${baseUrl}/auth/login/`, formData)
}

// GET USER
export const getUser = () => {
  return axios.get(`${baseUrl}/auth/profile/`, withHeaders())
}

// ADD NEW SUBACCOUNT
export const newSub = formData => {
  return axios.post(`${baseUrl}/subaccount/`, formData, withHeaders())
}

// GET MARKET DATA 
export const getLiveData = () => {
  return axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cchainlink%2Cethereum%2Cyearn-finance&vs_currencies=usd
  `)
}

// SUBMIT TRANSACTION
export const submitTransaction = formData => {
  return axios.post(`${baseUrl}/transaction/`, formData, withHeaders())
}