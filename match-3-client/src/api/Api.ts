import axios from 'axios'
import qs from 'qs'
const connect = {
  pathURL: 'http://localhost:8080/board/'
}

const instance = axios.create({
  baseURL: connect.pathURL,
  paramsSerializer: (params) => {
    return qs.stringify(params, { arrayFormat: 'brackets' })
  }
})
export const get = <T>(path: string, params = {}): Promise<T> =>
  instance
    .get<T>(path, { params })
    .then((result) => {
      return result.data
    })
    .catch((error) => {
      console.error('GET error:', error)
      throw error
    })
export const post = <T>(path: string, body = {}): Promise<T> =>
  instance
    .post<T>(path, body)
    .then((result) => {
      return result.data
    })
    .catch((error) => {
      console.error('POST error:', error)
      throw error
    })
