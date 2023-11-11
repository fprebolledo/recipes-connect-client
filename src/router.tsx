import { createBrowserRouter } from 'react-router-dom'
import SignUp from '@/components/auth/SignUp.tsx'
import SignIn from '@/components/auth/SignIn.tsx'
import Session from '@/components/Session.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Session />
  },
  {
    path: '/sign-up',
    element: <SignUp />
  },
  {
    path: '/sign-in',
    element: <SignIn />
  }
])
export default router
