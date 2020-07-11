import { StyleSheet } from 'react-native'

const size = {
  h1: 38,
  h2: 34,
  h3: 24,
  h4: 18,
  input: 22,
  regular: 14,
  medium: 12,
  small: 10
}

export default StyleSheet.create({
  h1: {
    fontSize: size.h1,
    fontWeight: 'bold'
  },
  h2: {
    fontSize: size.h2,
    fontWeight: 'bold'
  },
  h3: {
    fontSize: size.h3,
    fontWeight: 'bold'
  },
  normal: {
    fontSize: size.regular,
  },
  label: {
    fontSize: size.medium,
  },
  input: {
    fontSize: size.input,
  },
  big: {
    fontSize: size.h4,
  },
})
