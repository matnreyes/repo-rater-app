import { Platform } from 'react-native'

const theme = {
  colors: {
    textPrimary: 'black',
    textSecondary: 'white',
    error: '#d73a4a',
    primary: '#0366d6',
    secondary: '#24292e',
    background: '#e1e4e8'
  },
  fontSizes: {
    body: 14,
    subheading: 16
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System'
    })
  },
  fontWeights: {
    normal: '400',
    bold: '700'
  }
}

export default theme