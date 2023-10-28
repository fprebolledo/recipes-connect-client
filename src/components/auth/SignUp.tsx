import { useMutation } from 'react-query'
import { BaseInput, BaseButton } from '@/components/base/'
import { create } from '@/api/users'
import { useUserForm } from '@/hooks/useUserForm'

function SignUp () {
  const { userForm, handleUserInputChange } = useUserForm()

  const { mutate, isLoading, isError, isSuccess } = useMutation(create)

  return (
    <div className='px-10 py-20'>
      <h1 className='text-3xl text-center mb-8'>Social Recipes</h1>
      <h2 className='text-2xl mb-5'>Crear cuenta</h2>
      <form className="flex flex-col space-y-4" onSubmit={() => { mutate(userForm) }}>
        {isError && <h3 className='bg-red-50 text-red-600 p-2 rounded'>Hubo un error creando al usuario</h3>}
        {isSuccess && <h3 className='bg-green-50 text-green-600 p-2 rounded'>Se ha creado la cuenta con éxito</h3>}
        <BaseInput
          label='Email'
          name='email'
          value={userForm.email}
          onChange={handleUserInputChange}
          />
        <BaseInput
          label='Username'
          name='username'
          value={userForm.username}
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
          label='Crear usuario'
          disabled={isLoading}
        >
        </BaseButton>
      </form>
    </div>
  )
}

export default SignUp
