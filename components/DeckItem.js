import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { purple, pink } from '../utils/colors'

export default function  DeckItem ({ item }) {
		return <View style={styles.deck}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.length}>
                    {item.questions.length} cards
                </Text>
                {/* <Text style={styles.info}>{questions ? questions.length : 0}{questions ? questions.length > 1 ? ` cards` : ` card` : 0 }</Text> */}
            </View>
        </View>

}

const styles = StyleSheet.create({
    deck: {
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        },
    title: {
    	fontSize: 25,
        fontWeight: 'bold',
    	color: purple,
    },
    length: {
    	fontSize: 20,
    	color: pink,
    }
});
