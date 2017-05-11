/**
 * Created by DangJin on 2017/5/6.
 */
import axios from 'axios'
import qs from 'qs'
import { baseUrl } from '../config'

export const getArticleList = (params) => {
  return axios.get(baseUrl + '/Article', {params})
}
export const updateArticle = (params) => {
  return axios.post(baseUrl + '/Article/update', qs.stringify(params))
}

export const deleteArticle = (params) => {
  return axios.post(baseUrl + '/Article/delete', qs.stringify(params))
}

export const saveArticle = (params) => {
  return axios.post(baseUrl + '/Article/save', {params: params})
}

export const category = (params) => {
  return axios.get(baseUrl + '/Category')
}
