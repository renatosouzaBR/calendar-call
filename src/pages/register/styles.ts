import { Box, Text, styled } from '@renatosouzabr-ui/react'

export const RegisterContainer = styled('main', {
  maxWidth: 572,
  margin: '$20 auto $4',
  padding: '0 $4',
})

export const RegisterForm = styled(Box, {
  marginTop: '$6',

  display: 'flex',
  flexDirection: 'column',

  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',
  },
})

export const FormErrorMessage = styled(Text, {
  color: '#ED4337',
  marginLeft: '$1',
  marginTop: '-4px',
})
