import { Heading, MultiStep, Text } from '@renatosouzabr-ui/react'

import { HeaderStepsContainer } from './styles'

interface HeaderStepsProps {
  title: string
  description: string
  currentStep: number
}

export function HeaderSteps(props: HeaderStepsProps) {
  const { title, description, currentStep } = props

  return (
    <HeaderStepsContainer>
      <Heading as="strong">{title}</Heading>
      <Text>{description}</Text>

      <MultiStep size={4} currentStep={currentStep} />
    </HeaderStepsContainer>
  )
}
