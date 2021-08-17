import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import axios from 'axios'

export default function Home(){

  const [ characterList, setCharacterList ] = useState([])

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        setCharacterList(response.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  })

  return(
    <View>
      <Text>Home</Text>
    </View>
  )
}
