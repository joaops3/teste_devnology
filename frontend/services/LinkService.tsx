import React from 'react'
import { ILinkForm } from '../@types/interfaces'
import { api } from './api'

const LinkService = () => {

   const getOne = async (id: string) => {
    const response = await api.get(`/link/${id}`)
    return response
   }

   const updateLink =async (id: string, data: ILinkForm) => {
    const response = await api.put(`/link/${id}`, data)
    return response
   }

 
  return {getOne,updateLink }
}

export default LinkService