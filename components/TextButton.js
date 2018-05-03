import React from 'react'
import { Text, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import { purple, white } from '../utils/colors'

export default function TextButton ({ children, onPress, style = {} }) {
  return (
    <TouchableOpacity onPress={onPress}
      style={Platform.OS === "ios" ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}>
		  <Text style={[styles.submitBtnText, style]}>{children}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:20,
        backgroundColor: white
    },
    row:{
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },
    iosSubmitBtn: {
        backgroundColor: purple,
        padding: 10,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginRight: 40,
    },
    AndroidSubmitBtn:{
        backgroundColor: purple,
        padding: 10,
        borderRadius: 2,
        height: 45,
        paddingLeft: 30,
        paddingRight: 30,
        alignSelf: "flex-end",
        justifyContent: 'center',
        alignItems: "center",
    },
    submitBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center'
    },
    center:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30,
        marginRight:30,
    },
})
