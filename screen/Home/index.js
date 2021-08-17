import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, ImageBackground } from 'react-native'
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
      <Text style={styles.title}>Rick and Morty</Text>
      <FlatList 
        data={characterList}
        renderItem={({ item, index }) => {
          return(
            <View style={styles.container}>
                <ImageBackground source={{ uri: item.image }} style={styles.characterImage}/>
                <Text key={index}>{item.name}</Text>
            </View>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
    backgroundColor: '#b2b2b2'
  },  
  characterImage: {
    width: 100,
    height: 100,
  }
})
