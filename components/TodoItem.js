import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

export default function TodoItem({ item, pressHandler }) {
    return (
        <TouchableOpacity style={styles.item}>
            <Text>{item.text}</Text>
            <TouchableOpacity onPress={() => pressHandler(item.id)}>
                <MaterialIcons name='delete' size={18} color='#333'/>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    }
})