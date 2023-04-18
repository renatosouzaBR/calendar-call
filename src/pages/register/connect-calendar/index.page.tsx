import { Button, Text } from '@renatosouzabr-ui/react'
import { ArrowRight, Check } from 'phosphor-react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

import { HeaderSteps } from '../header-steps'
import { RegisterContainer } from '../styles'
import {
  ConnectCalendarContent,
  ConnectCalendarGoogle,
  ErrorMessage,
} from './styles'

export default function ConnectCalendar() {
  const session = useSession()
  const router = useRouter()

  const hasRouterError = !!router.query.error
  const isSignedIn = session.status === 'authenticated'

  async function handleSignIn() {
    signIn('google')
  }

  return (
    <RegisterContainer>
      <HeaderSteps
        title="Conecte sua agenda!"
        description="Conecte o seu calendário para verificar automaticamente as horas ocupadas e os novos eventos à medida em que são agendados."
        currentStep={2}
      />

      <ConnectCalendarContent>
        <ConnectCalendarGoogle>
          <Text>Google Agenda</Text>
          {isSignedIn ? (
            <Button size="sm" disabled>
              Conectado <Check />
            </Button>
          ) : (
            <Button variant="secondary" size="sm" onClick={handleSignIn}>
              Conectar
              <ArrowRight />
            </Button>
          )}
        </ConnectCalendarGoogle>

        {hasRouterError && (
          <ErrorMessage size="sm">
            Não foi possível se conectar a conta da Google. Verifique se você
            concedeu permissão para acesso ao Calendário Google.
          </ErrorMessage>
        )}

        <Button disabled={!isSignedIn}>
          Próximo passo
          <ArrowRight />
        </Button>
      </ConnectCalendarContent>
    </RegisterContainer>
  )
}
