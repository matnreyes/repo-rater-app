import {Text as NativeText, StyleSheet } from 'react-native'

import theme from '../theme'

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
    flexWrap: 'wrap'
  },
  colorTextPrimary: {
    color: theme.colors.textPrimary
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary
  },
  colorPrimary: {
    color: theme.colors.primary
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold
  },
  textCentered: {
    textAlign: 'center'
  },
  largeText: {
    fontSize: 14
  }
})

const Text = ({ color, fontSize, fontWeight, textAlign, style, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'textprimary' && styles.colorTextPrimary,
    color === 'textSecondary' && styles.colorTextSecondary,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    textAlign === 'centered' && styles.textCentered,
    fontSize === 'large' && styles.largeText,
    style
  ]

  return <NativeText style={textStyle} {...props} />
}

export default Text