import { Heading, Text, styled } from '@renatosouzabr-ui/react'

export const HomeContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$20',

  marginLeft: 'auto',
  maxWidth: 'calc(100vw - (100vw - 1160px) / 2)',
  height: '100vh',
})

export const Hero = styled('div', {
  padding: '0 $10',
  maxWidth: 480,

  [`${Heading}`]: {
    color: '$white',
    fontSize: '$7xl',

    '@media (max-width: 600px)': {
      fontSize: '$6xl',
    },
  },

  [`${Text}`]: {
    color: '$gray200',
    marginTop: '$2',
  },
})

export const Preview = styled('div', {
  paddingRight: '$8',
  overflow: 'hidden',

  '@media (max-width: 600px)': {
    display: 'none',
  },
})
