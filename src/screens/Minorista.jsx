import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Minorista = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>1</Text>
        <Text style={styles.text}>8</Text>
        <Text style={styles.text}>5</Text>
        <Text style={styles.text}>0</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>0</Text>
        <Text style={styles.text}>6</Text>
        <Text style={styles.text}>0</Text>
        <Text style={styles.text}>0</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>2</Text>
        <Text style={styles.text}>0</Text>
        <Text style={styles.text}>5</Text>
        <Text style={styles.text}>0</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'green',
    padding: 20,
  },
  text: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 25,
    padding: 2,
    margin: 5,
    borderColor: 'white',
    borderTopWidth: 0.5,
    // borderRightWidth: 0.5,
    borderBottomWidth: 0.5,
    // borderRightWidth: 1,
    textAlign: 'center',
    fontFamily: 'digital'
  }
})

export default Minorista