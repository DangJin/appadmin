/**
 * Created by DangJin on 2017/5/11.
 */
import axios from 'axios'
import qs from 'qs'
import { baseUrl } from '../config'

export const getOrderList = (params) => {
  return axios.get(baseUrl + '/Order', {params})
}
export const updateOrder = (params) => {
  return axios.post(baseUrl + '/Order/update', qs.stringify(params))
}

export const deleteOrder = (params) => {
  return axios.post(baseUrl + '/Order/delete', qs.stringify(params))
}

export const saveOrder = (params) => {
  return axios.post(baseUrl + '/Order/save', {params: params})
}
