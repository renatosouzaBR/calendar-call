import { Button, TextInput } from '@renatosouzabr-ui/react'
import { ArrowRight } from 'phosphor-react'

import { ClaimUsernameFormContainer } from './styles'

export function ClaimUsernameForm() {
  return (
    <ClaimUsernameFormContainer as="form">
      <TextInput
        containerSize="sm"
        prefix="ignite.com/"
        placeholder="seu-usuario"
      />

      <Button size="sm" type="submit">
        Reservar horário
        <ArrowRight />
      </Button>
    </ClaimUsernameFormContainer>
  )
}
