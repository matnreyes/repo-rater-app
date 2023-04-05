import { TextInput, StyleSheet, View, Pressable, Keyboard, TouchableOpacity, Dimensions } from 'react-native'
import { SFSymbol } from 'react-native-sfsymbols'
import { useState } from 'react'

const SearchBar = ({ value, setSearch }) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      margin: 10, 
      backgroundColor: 'white',
      borderColor: 'lightgrey',
      borderWidth: 1,
      borderRadius: 6,
      minHeight: 50,
      paddingHorizontal: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
    icon: {
      marginHorizontal: 10
    },
    textinput: {
      flex: 1,
      margin: 10
    },
    cancel: {
      padding: 20,
    },
  })

  const cancel = () => {
    Keyboard.dismiss()
    setSearch('')
  }

  return (
    <View style={styles.container}>
      <SFSymbol style={styles.icon} name="magnifyingglass" size="20" color="grey"/>
      <TextInput style={styles.textinput} placeholder="Search keyword..." onChangeText={setSearch} value={value}/>
      {value === ''
        ? null
        :
          <TouchableOpacity style={styles.cancel} onPress={cancel}>
            <SFSymbol name="xmark" size="20" color="grey"/>
          </TouchableOpacity>
        }
    </View>
  )
}

export default SearchBar