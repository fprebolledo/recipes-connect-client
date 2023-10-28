interface User {
  id: number
  username: string
  email: string
  token: string
}

interface UserForm {
  username?: string
  email?: string
  password?: string
}

export type { User, UserForm }
