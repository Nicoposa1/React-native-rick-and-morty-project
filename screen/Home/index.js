import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, ImageBackground } from 'react-native'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const CharacterQuery = () => {
    return (
      <Query query={gql`{
        characters{
          results{
            id
            name
            image
          }
        }
      }`}>
      {
        ({ loading, error, data }) => {
          if(loading) return <Text>Loading...</Text>;
          if(error) return <Text>Error :(</Text>

            return (
              <FlatList
                data={data.characters.results}
                renderItem={(({ item, index }) => {
                  return(
                    <View style={styles.container} >
                      <ImageBackground source={{ uri: item.image }} style={styles.characterImage}/>
                      <Text key={index}>{item.name}</Text>
                    </View>
                  )
                })}
              />
            )
        }
      }
      </Query>
    )
  }

  const renderCharacters = () => {
    return (
    <View>
      <Text style={styles.title}>Rick and Morty</Text>
      <CharacterQuery />
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

export default renderCharacters
