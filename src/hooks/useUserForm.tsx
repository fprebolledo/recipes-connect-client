import { useState } from 'react'
import { type UserForm } from '@/types/user'

function useUserForm () {
  const [userForm, setUserForm] = useState<UserForm>({
    username: '',
    email: '',
    password: ''
  })

  const handleUserInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { target } = event
    const newUser = { ...userForm, [target.name]: target.value }
    setUserForm(newUser)
  }

  return { userForm, setUserForm, handleUserInputChange }
}

export { useUserForm }
