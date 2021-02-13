import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert, Keyboard } from 'react-native';

export default function Form({ addItem }) {
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    const submitHandler = () => {
        if (text.length > 3) {
            addItem(text)
            setText('')
            Keyboard.dismiss()
        } else {
            Alert.alert(`Text too short`, 'Must be < 3',[
                { text: 'Understood' }
            ])
        }
        
    }
    
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="new todo..."
                onChangeText={changeHandler}
                value={text}
            />
            <Button onPress={() => submitHandler()} title="add todo" color="green"/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})