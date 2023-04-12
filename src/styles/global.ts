import { globalCss } from '@renatosouzabr-ui/react'

export const globalStyles = globalCss({
  '*': {
    border: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '--webkit-font-smoothing': 'antialiased',
  },
})
