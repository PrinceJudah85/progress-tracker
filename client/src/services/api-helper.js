import axios from 'axios';

const baseUrl = 'http://localhost:3000'

const api = axios.create({
  baseURL: baseUrl
})

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData)
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const registerUser = async (registerData) => {
  try {
    const resp = await api.post('/users/', { user: registerData })
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
    return resp.data.user
  }
  catch (e) {
    return ({ username: "", id: null })
  }
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify');
    return resp.data
  }
  return false
}

export const createWorkout = async (data) => {
  const resp = await api.post('/workouts', { workout: data })
  return resp.data
}

// Want to retrieve All workouts by a specific user_id **** 
export const readAllWorkouts = async () => {
  const resp = await api.get('/workouts/')
  return resp.data
}

export const singleWorkout = async (id) => {
  const resp = await api.get(`/workouts/${id}`)
  return resp.data
}

export const updateWorkout = async (id, data) => {
  const resp = await api.put(`/workouts/${id}`, { workout: data })
  return resp.data
}

export const destroyWorkout = async (id) => {
  const resp = await api.delete(`/workouts/${id}`)
  return resp.data
}