import {axiosApi } from "@@/api";


export const createApi = async (url, payload={}) => {
  try {
    let promise = await axiosApi.post(url, payload);
    return promise
  } catch (e) {
    if(e.response){
      console.log("Response errors", e.response.data);
      return e.response.data
    }
    else if(e.request)
      console.log("Request errors", e.request)
    else
    console.error('Api found some errors as ', e)
  }
}


export const listApi = async (url) => {
  try {
    let promise = await axiosApi.get(url, {  validateStatus: (status) => {
      return status < 500
    }});
    return promise
  } catch (e) {
    if(e.response){
      console.log("Response errors", e.response.data);
      return e.response.data
    }
    else if(e.request)
      console.log("Request errors", e.request)
    else
    console.error('Api found some errors as ', e)
  }
}

export const updateApi = async (url, payload) => {
  try {
    let promise = await axiosApi.put(url, { ...payload, validateStatus: (status) => {
      return status < 500
    }});
    return promise
  } catch (e) {
    if(e.response){
      console.log("Response errors", e.response.data);
      return e.response.data
    }
    else if(e.request)
      console.log("Request errors", e.request)
    else
    console.error('Api found some errors as ', e)
  }
}

export const deleteApi = async (url) => {
  try {
    let promise = await axiosApi.delete(url, {   validateStatus: (status) => {
      return status < 500
    }})
    return promise
  } catch (e) {
    if(e.response){
      console.log("Response errors", e.response);
      return e.response.data
    }
    else if(e.request)
      console.log("Request errors", e.request)
    else
    console.error('Api found some errors as ', e)
  }
}
