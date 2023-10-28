import apiClient from '.'
import type { UserForm, User } from '@/types/user'

const create = async (user: UserForm): Promise<User> => {
  return await apiClient.post('/users', user).then((response) => response?.data)
}

const signIn = async (user: UserForm): Promise<User> => {
  return await apiClient.post('/auth/login', user).then((response) => response?.data)
}

export { create, signIn }
