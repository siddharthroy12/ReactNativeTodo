import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import Form from './components/Form'

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy cofee', id: '1' },
    { text: 'create an app', id: '2' },
    { text: 'play on the switch', id: '3' },
  ])

  const itemPressHandler = id => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== id)
    })
  }

  const addTodo = (text) => {
    setTodos(prevTodos => {
        return [
          ...prevTodos,
          { text: text, id: Math.random().toString() }
        ]
    })
}

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Form addItem={addTodo}/>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={itemPressHandler}/>
            )}
          />
        </View>
      </View>
      <StatusBar style="light"/>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40
  },
  list: {
    flex:1,
    marginTop: 20
  }
});
