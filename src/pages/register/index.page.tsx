import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { ArrowRight } from 'phosphor-react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Button,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from '@renatosouzabr-ui/react'

import {
  FormErrorMessage,
  RegisterContainer,
  RegisterForm,
  RegisterHeader,
} from './styles'
import { useEffect } from 'react'

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

  function handleRegister(data: RegisterFormTypes) {
    console.log(data)
  }

  useEffect(() => {
    if (router.query.username) {
      setValue('username', String(router.query.username))
    }
  }, [router.query.username, setValue])

  return (
    <RegisterContainer>
      <RegisterHeader>
        <Heading as="strong">Bem-vindo ao Ignite Call!</Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>

        <MultiStep size={4} currentStep={1} />
      </RegisterHeader>

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
