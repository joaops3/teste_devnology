import React from 'react'
import { api } from './api'

const LinkService = () => {

   const getOne = async (id: string) => {
    const response = await api.get(`/user/${id}`)
    return response
   }

   const updateLink =async (id: string) => {
    const response = await api.put(`/user/${id}`)
    return response
   }

 
  return { }
}

export default LinkService