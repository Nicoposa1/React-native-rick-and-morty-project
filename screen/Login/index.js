import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Button } from 'react-native'
import Firebase from '../../bd/firebase'

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  }

  handleLogin = () => {
    const { email, password } = this.state
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {this.props.navigation.navigate('Home')})
      .catch(error  => console.log(error))
  }

  render(){
    return (
      <View style={styles.container} >
        <TextInput
          style={styles.inputBox}
          value={this.state.email}
          onChangeText={email => this.setState({email})}
          placeholder='Email'
        />
        <TextInput
          style={styles.inputBox}
          value={this.state.password}
          onChangeText={password => this.setState({password})}
          placeholder='Password'
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Button 
          title='ir a Sign Up'
          onPress={() => this.props.navigation.navigate('SignUp')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputBox: {
    width: '85%',
    margin: 10,
    padding: 15,
    fontSize: 20,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  button: {
    width: 200,
    marginBottom: 20,
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#1A85ED',
    borderRadius: 5
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  }
})

export default Login
