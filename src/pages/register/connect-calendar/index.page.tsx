import { Button, Heading, MultiStep, Text } from '@renatosouzabr-ui/react'
import { ArrowRight } from 'phosphor-react'

import { ConnectCalendarContent, ConnectCalendarGoogle } from './styles'
import { RegisterContainer, RegisterHeader } from '../styles'

export default function ConnectCalendar() {
  return (
    <RegisterContainer>
      <RegisterHeader>
        <Heading as="strong">Conecte sua agenda!</Heading>
        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </RegisterHeader>

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
