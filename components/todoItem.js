import React from 'react'
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default function TodoItem({ pressHandler, item }) {
  return (
    <View style = {styles.row}>
      <Text style={styles.item}>{item.text} </Text>
      <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <FontAwesome style = {styles.icon} name = "trash-o" />
    </TouchableOpacity>
      </View>
    
  )
}

const styles = StyleSheet.create({

  row: {
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16, 
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 1,
    borderRadius: 10,
    borderColor: 'lightblue'
  },

  item: {
    padding: 13,
    paddingHorizontal: 10,
    flex: 1,
    fontSize: 17
  },

  icon:{
    fontSize: 30,
    paddingHorizontal: 12
  },
});