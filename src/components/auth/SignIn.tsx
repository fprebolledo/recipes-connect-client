import { useMutation } from 'react-query'
import { BaseInput, BaseButton } from '@/components/base/'
import { create } from '@/api/users'
import { useUserForm } from '@/hooks/useUserForm'

function SignIn () {
  const { userForm, handleUserInputChange } = useUserForm()
  const { data, mutate, isLoading, isError, isSuccess } = useMutation(create)

  function logIn (): void {
    mutate(userForm)
    if (data !== undefined) {
      localStorage.setItem('token', data.token)
      window.location.href = '/'
    }
  }

  return (
    <div className='px-10 py-20'>
      <h1 className='text-3xl text-center mb-8'>Social Recipes</h1>
      <h2 className='text-2xl mb-5'>Ingresar</h2>
      <form className="flex flex-col space-y-4" onSubmit={logIn}>
        {isError && <h3 className='bg-red-50 text-red-600 p-2 rounded'>Hubo un error con tus credenciales</h3>}
        {isSuccess && <h3 className='bg-green-50 text-green-600 p-2 rounded'>Nice</h3>}
        <BaseInput
          label='Email'
          name='email'
          value={userForm.email}
          onChange={handleUserInputChange}
          />
        <BaseInput
          label='Contraseña'
          name='password'
          type='password'
          value={userForm.password}
          onChange={handleUserInputChange}
          />
        <BaseButton
          label='Ingresar'
          disabled={isLoading}
          type='submit'
        >
        </BaseButton>
        <a href='/sign-up' className='text-center underline'>Crear cuenta</a>
      </form>
    </div>
  )
}

export default SignIn
