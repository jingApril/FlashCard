import React from 'react'
import { Text, StyleSheet } from 'react-native'

export default function TextButton ({ children, style = {} }) {
  return (
     <Text style={[styles.submitBtnText, style]}>{children}</Text>
 )
}

const styles = StyleSheet.create({
    submitBtnText: {
        fontSize: 22,
        fontWeight:'bold',
        textAlign: 'center',
    }
})
