import { Button, Text } from '@renatosouzabr-ui/react'
import { ArrowRight } from 'phosphor-react'

import { ConnectCalendarContent, ConnectCalendarGoogle } from './styles'
import { RegisterContainer } from '../styles'
import { HeaderSteps } from '../header-steps'

export default function ConnectCalendar() {
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
          <Button variant="secondary" size="sm">
            Conectar
            <ArrowRight />
          </Button>
        </ConnectCalendarGoogle>

        <Button>
          Próximo passo
          <ArrowRight />
        </Button>
      </ConnectCalendarContent>
    </RegisterContainer>
  )
}
