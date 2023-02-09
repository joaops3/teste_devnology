import React from 'react'
import { ILinkForm, IUserForm } from '../@types/interfaces'
import { api } from './api'

export const UserService = () => {

  const signin = async (data: IUserForm) => {
    const response = await api.post(`/user/`, data)
    return response
  }

  const updateUser = async (_id:string) => {
    const response = await api.put(`/user/${_id}`)
    return response
  }

  const deleteUser = async (_id:string) => {
    const response = await api.delete(`/user/${_id}`)
    return response
  }

  const getUser = async () => {
    const response = await api.get(`/user/`)
    return response
  }

  const addLinkToUser = async (id:string, data: ILinkForm) => {
    const response = await api.put(`/user/${id}/addlink`, data)
    return response
  }

  const removeLinkUser = async (id: string, idLink: string) =>  {
    const response = await api.put(`/user/${id}/removelink/${idLink}`)
    return response
  }
  return {signin, getUser, updateUser, deleteUser, addLinkToUser, removeLinkUser}
}
