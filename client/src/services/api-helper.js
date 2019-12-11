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

export const getWorkoutsByUserId = async user_id => {
  try {
    const response = await api.get(`/users/${user_id}/workouts`)
    return response.data
  } catch (error) {
    return { error: "Couldn't retrieve workouts" }
  }
}

export const readAllWorkouts = async () => {
  const resp = await api.get('/workouts')
  return resp.data
}
// POST MVP AXIOS CALL BELOW
// export const getImagesByWorkoutId = async workout_id => {
//   try {
//     const response = await api.get(`/users/:user_id/workouts/${workout_id}/images`)
//     return response.data.images
//   } catch (error) {
//     return { error: "Couldn't retrieve images" }
//   }
// }

export const createWorkout = async (userId, data) => {
  const resp = await api.post(`/users/${userId}/workouts`, { workout: data })
  return resp.data
}

export const singleWorkout = async (id) => {
  const resp = await api.get(`/workouts/${id}`)
  return resp.data
}

export const updateWorkout = async (id, data) => {
  const resp = await api.put(`/users/user_id/workouts/${id}`, { workout: data })
  return resp.data
}

export const destroyWorkout = async (id) => {
  const resp = await api.delete(`/users/user_id/workouts/${id}`)
  return resp.data
}