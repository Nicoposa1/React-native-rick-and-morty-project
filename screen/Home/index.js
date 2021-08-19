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
              <View style={styles.listContainer} >
                <FlatList
                  data={data.characters.results}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={(({ item }) => {
                    return(
                      <View style={styles.container} >
                        <ImageBackground source={{ uri: item.image }} style={styles.characterImage}/>
                        <Text>{item.name}</Text>
                      </View>
                    )
                  })}
                />
              </View>
            )
        }
      }
      </Query>
    )
  }

  const renderCharacters = () => {
    return (
    <View style={styles.listContainer}>
      <Text style={styles.title}>Rick and Morty</Text>
      <CharacterQuery />
      <View style={styles.buttonsContainer}>

      </View>
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
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#000',
  },  
  characterImage: {
    width: 100,
    height: 100,
  },
  listContainer:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  }
})

export default renderCharacters
