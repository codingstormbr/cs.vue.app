import { reactive } from 'vue'

// Base reactive state
const base = reactive({
  url: import.meta.env.VITE_API_URL,
  params: { url: '', query: '', body: '', token: '' },
  request: {},
  response: {}
})

// Function to build the complete URL with query parameters
const buildUrl = (baseUrl, params) => {
  const queryString = new URLSearchParams(params.query).toString()
  return `${baseUrl}${params.url}?${queryString}`
}

// Function to get headers
const getHeaders = (token) => {
  const headers = { 'Content-Type': 'application/json' }
  if (token) headers['Authorization'] = `Bearer ${token}`
  return headers
}

// HTTP GET request function
const httpGet = async (params) => {
  base.params = { ...base.params, ...params }
  const url = buildUrl(base.url, base.params)
  const headers = getHeaders(base.params.token)

  try {
    const response = await fetch(url, { method: 'GET', headers })
    const data = await response.json()

    base.response = { ...base.data, ...data }
  } catch (error) {
    base.response = error
  }

  return base.response
}

const httpPost = async (params) => {
  base.params = { ...base.params, ...params }
  const url = buildUrl(base.url, base.params)
  const headers = getHeaders(base.params.token)
  const body = JSON.stringify(base.params.body)

  try {
    const response = await fetch(url, { method: 'POST', headers, body: body })
    base.response = await response.json()

    if (!response.ok) {
      throw new Error(
        `HTTP error! Status: ${base.response.status}, Message: ${base.response.message || 'Unknown error'}`
      )
    }
  } catch (error) {
    console.error('Error:', error)
  }
  return base.response
}

// const httpPost = async (params) => {
//   base.params = { ...base.params, ...params }
//   await fetch(base.url + base.params.url, {
//     method: 'POST',
//     mode: 'cors',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${base.params.token}`
//     },
//     body: JSON.stringify(base.params.body)
//   })
//     .then((response) => response.json())
//     .then((data) => (base.response = { ...base.data, ...data }))
//     .catch((data) => (base.response = base.errorMessage))

//   return base.response
// }

// const httpGet = async (params) => {
//     base.params = { ...base.params, ...params }
//     await fetch(base.url + `${base.params.url}?${new URLSearchParams(base.params.query).toString()}`, {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//         }
//     })
//         .then(response => response.json())
//         .then(data => base.response = { ...base.data, ...data })
//         .catch(data => base.response = base.errorMessage);

//     return base.response;
// }

// const httpDelete = async (params) => {
//   base.params = { ...base.params, ...params }
//   await fetch(base.url + base.params.url, {
//     method: 'DELETE',
//     mode: 'cors',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${base.params.token}`
//     },
//     body: JSON.stringify(base.params.body)
//   })
//     .then((response) => response.json())
//     .then((data) => (base.response = { ...base.data, ...data }))
//     .catch((data) => (base.response = base.errorMessage))

//   return base.response
// }

// const httpPostFormData = async (params) => {
//   base.params = { ...base.params, ...params }
//   await fetch(base.url + base.params.url, {
//     method: 'POST',
//     mode: 'cors',
//     headers: {
//       Authorization: `Bearer ${base.params.token}`
//     },
//     body: base.params.body
//   })
//     .then((response) => response.json())
//     .then((data) => (base.response = { ...base.data, ...data }))
//     .catch((data) => (base.response = base.errorMessage))

//   return base.response
// }

export { httpGet, httpPost }
