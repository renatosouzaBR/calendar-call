import { Heading, Text, styled } from '@renatosouzabr-ui/react'

export const HeaderStepsContainer = styled('div', {
  padding: '0 $6',

  [`> ${Heading}`]: {
    lineHeight: '$base',
  },

  [`> ${Text}`]: {
    color: '$gray200',
    marginBottom: '$6',
  },
})
