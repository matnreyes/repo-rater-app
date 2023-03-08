import { StyleSheet, View, Text } from 'react-native'
import { Controller } from 'react-hook-form'
import TextInput from './TextInput'

import theme from '../theme'

const styles = StyleSheet.create({
  errorText: {
    marginLeft: 10,
    color: theme.colors.error,
    alignSelf: 'stretch'
  },
  errorInput: {
    borderColor: theme.colors.error
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 6,
    minHeight: 50,
    margin: 10,
    padding: 10
  }
})

const FormInput = ({ placeholder, name, control, style, secureTextEntry, rules = {} }) => {
  return <Controller 
    control={control}
    name={name}
    rules={rules}
    render={({field: { value, onChange, onBlur}, fieldState: { error }}) => (
      <>
        <View>
          <TextInput 
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            style={[styles.input, style, error && styles.errorInput]}
            secureTextEntry={secureTextEntry}
          />
        </View>
        {error && <Text style={styles.errorText}>{error.message || 'Error'}</Text>}
      </>
    )}
  />
}

export default FormInput