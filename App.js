import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Navigation from './navigation'
import ApolloClient, { gql } from 'apollo-boost'
import { ApolloProvider, Query, useQuery } from 'react-apollo'
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import CharacterQuery from './screen/Home'

export default function App() {
  const client = new ApolloClient({
    uri:'https://rickandmortyapi.com/graphql'
  })


  return (
    <ApolloProvider client={client} >
      <CharacterQuery />
    </ApolloProvider>
  )
}

const styles = StyleSheet.create({
  characterImage: {
    width: 100,
    height: 100,
  }
})
