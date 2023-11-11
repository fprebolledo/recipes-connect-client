import { isLoggedIn } from '@/helpers/auth'
import SignIn from '@/components/auth/SignIn'
import RecipesIndex from '@/components/recipes/RecipesIndex'

function Session () {
  const loggedIn = isLoggedIn()

  if (loggedIn) return <RecipesIndex />

  return <SignIn />
}

export default Session
