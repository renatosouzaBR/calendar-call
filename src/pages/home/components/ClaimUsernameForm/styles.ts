import { Box, Text, styled } from '@renatosouzabr-ui/react'

export const ClaimUsernameFormContainer = styled(Box, {
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gap: '$2',
  marginTop: '$4',
  padding: '$4',

  '@media (max-width: 600px)': {
    gridTemplateColumns: '1fr',
  },
})

export const FormErrorMessage = styled(Text, {
  paddingLeft: '$1',
  color: '$gray400',

  defaultVariants: {
    size: 'xs',
  },
})
