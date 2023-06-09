import { useEffect } from 'react'
import { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { ArrowRight } from 'phosphor-react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Text, TextInput } from '@renatosouzabr-ui/react'

import { api } from '@/lib/axios'

import { FormErrorMessage, RegisterContainer, RegisterForm } from './styles'
import { HeaderSteps } from './header-steps'

const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, 'O username deve ter pelo menos 3 caracteres')
    .regex(/^([a-z\\-]+)$/i, 'O username deve ter apenas letras e hifens')
    .transform((username) => username.toLowerCase()),
  name: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres'),
})

type RegisterFormTypes = z.infer<typeof registerFormSchema>

export default function Register() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormTypes>({
    resolver: zodResolver(registerFormSchema),
  })

  async function handleRegister(data: RegisterFormTypes) {
    try {
      await api.post('/users', {
        name: data.name,
        username: data.username,
      })

      await router.push('/register/connect-calendar')
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data.message) {
        return alert(error.response?.data.message)
      }

      console.log(error)
    }
  }

  useEffect(() => {
    if (router.query.username) {
      setValue('username', String(router.query.username))
    }
  }, [router.query.username, setValue])

  return (
    <RegisterContainer>
      <HeaderSteps
        title="Bem-vindo ao Ignite Call!"
        description="Precisamos de algumas informações para criar seu perfil! Ah, você pode editar essas informações depois."
        currentStep={1}
      />

      <RegisterForm as="form" onSubmit={handleSubmit(handleRegister)}>
        <label>
          <Text size="sm">Nome de usuário</Text>
          <TextInput
            prefix="ignite.com/"
            placeholder="seu-usuario"
            {...register('username')}
          />

          {errors.username && (
            <FormErrorMessage size="sm">
              {errors.username.message}
            </FormErrorMessage>
          )}
        </label>

        <label>
          <Text size="sm">Nome completo</Text>
          <TextInput placeholder="seu nome" {...register('name')} />

          {errors.name && (
            <FormErrorMessage size="sm">{errors.name.message}</FormErrorMessage>
          )}
        </label>

        <Button type="submit" disabled={isSubmitting}>
          Próximo passo
          <ArrowRight />
        </Button>
      </RegisterForm>
    </RegisterContainer>
  )
}
