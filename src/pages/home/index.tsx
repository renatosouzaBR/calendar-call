import Image from 'next/image'
import { Heading, Text } from '@renatosouzabr-ui/react'

import appPreview from '@/assets/app-preview.png'

import { Hero, HomeContainer, Preview } from './styles'

export default function Home() {
  return (
    <HomeContainer>
      <Hero>
        <Heading as="h1">Agendamento descomplicado</Heading>
        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>
      </Hero>

      <Preview>
        <Image
          src={appPreview}
          height={400}
          priority
          quality={100}
          alt="Calendário mostrando um resumo da aplicação"
        />
      </Preview>
    </HomeContainer>
  )
}
