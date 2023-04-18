import { Box, Text, styled } from '@renatosouzabr-ui/react'

export const ConnectCalendarContent = styled(Box, {
  marginTop: '$6',
  display: 'flex',
  flexDirection: 'column',
})

export const ConnectCalendarGoogle = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '$4 $6',
  borderRadius: 6,
  border: '1px solid $colors$gray600',

  [`> ${Text}`]: {
    fontWeight: 500,
  },
})
