import { useRouter } from 'next/router'
import { Button, TextInput } from '@renatosouzabr-ui/react'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { ClaimUsernameFormContainer, FormErrorMessage } from './styles'

const claimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, 'O username deve ter pelo menos 3 caracteres')
    .regex(/^([a-z\\-]+)$/i, 'O username deve ter apenas letras e hifens')
    .transform((username) => username.toLowerCase()),
})

type ClaimUsernameFormType = z.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameForm() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ClaimUsernameFormType>({
    resolver: zodResolver(claimUsernameFormSchema),
  })

  async function handleSubmitForm(data: ClaimUsernameFormType) {
    const { username } = data
    await router.push(`/register?username=${username}`)
  }

  return (
    <ClaimUsernameFormContainer
      as="form"
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      <TextInput
        containerSize="sm"
        prefix="ignite.com/"
        placeholder="seu-usuario"
        {...register('username')}
      />

      <Button size="sm" type="submit" disabled={isSubmitting}>
        Reservar horário
        <ArrowRight />
      </Button>

      {errors.username && (
        <FormErrorMessage>{errors.username.message}</FormErrorMessage>
      )}
    </ClaimUsernameFormContainer>
  )
}
