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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClaimUsernameFormType>({
    resolver: zodResolver(claimUsernameFormSchema),
  })

  function handleSubmitForm(data: ClaimUsernameFormType) {
    console.log(data)
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

      <Button size="sm" type="submit">
        Reservar horário
        <ArrowRight />
      </Button>

      {errors.username && (
        <FormErrorMessage>{errors.username.message}</FormErrorMessage>
      )}
    </ClaimUsernameFormContainer>
  )
}
