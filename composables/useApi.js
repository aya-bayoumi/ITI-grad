// // composables/useApi.js
// import { useAuthToken } from '~/stores/useAuthToken'

// export const useApi = () => {
//   const authTokenStore = useAuthToken()

//   const apiRequest = async (url, options = {}) => {
//     const token = authTokenStore.getToken // Get the token from the store

//     // Set headers to include Authorization if token exists
//     const headers = {
//       ...options.headers,
//       Authorization: token ? `Bearer ${token}` : '',
//     }

//     try {
//       const response = await fetch(url, {
//         ...options,
//         headers,
//       })

//       if (!response.ok) {
//         throw new Error('API request failed')
//       }

//       return response.json() // Assuming the API returns JSON
//     } catch (error) {
//       console.error('API Error:', error)
//       throw error
//     }
//   }

//   return { apiRequest }
// }
import { useAuthToken } from '~/stores/useAuthToken'

export function useApi() {
  const authTokenStore = useAuthToken()

  const apiFetch = async (url, options = {}) => {
    const headers = options.headers || {}

    // ✅ If token exists, add it to headers
    if (authTokenStore.token) {
      headers['Authorization'] = `${authTokenStore.token}`
      console.log(`token fron useApi ${authTokenStore.token}`)
    }

    const response = await fetch(`http://localhost:5000${url}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong')
    }

    return data
  }

  return { apiFetch }
}
