import {Text as NativeText, StyleSheet } from 'react-native'

import theme from '../theme'

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
    flex: 100,
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
    style
  ]

  return <NativeText style={textStyle} {...props} />
}

export default Text