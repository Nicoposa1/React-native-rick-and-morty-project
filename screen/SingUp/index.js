import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native'
import Firebase from '../../bd/firebase'

class SignUp extends React.Component {
  state= {
    name: '',
    email: '',
    password: ''
  }

  handleSingUp = () => {
    const {email, password} = this.state
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Home'))
      .catch(error => console.log(error))
  }

  render(){
    return(
      <View style={styles.container}>
        <TextInput
          style={styles.inputContainer}
          value={this.state.name}
          onChangeText={name => this.setState({name})}
          placeholder='Full name'
        />
        <TextInput 
          style={styles.inputContainer}
          value={this.state.email}
          onChangeText={email => this.setState({email})}
          placeholder='Email'
          autoCapitalize='none'
        />
        <TextInput 
          value={this.state.password}
          style={styles.inputContainer}
          onChangeText={password => this.setState({password})}
          placeholder='Password'
          secureTextEntry={true}
          minLength="6"
        />
        <TouchableOpacity style={styles.button} onPress={this.handleSingUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: '85%',
    margin: 10,
    padding: 15,
    fontSize: 20,
    borderBottomWidth: 1,
    borderColor: 'gray'
  },
  buttonText: {
    fontSize: 20, 
    fontWeight: 'bold',
    color: '#fff'
  },
  button:{
    marginTop: 30,
    marginBottom: 20,
    paddingVertical: 5,
    alignItems: 'center',
    backgroundColor: '#FFA611',
    borderColor: '#FFA611',
    borderRadius: 5,
    width: 200,
  }
})


export default SignUp
