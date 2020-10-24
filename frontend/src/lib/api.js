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
  return axios.post(`${baseUrl}/register`, formData)
}
export const loginUser = formData => {
  return axios.post(`${baseUrl}/auth/login/`, formData)
}

// GET USER
export const getUser = () => {
  return axios.get(`${baseUrl}/auth/profile`, withHeaders())
}