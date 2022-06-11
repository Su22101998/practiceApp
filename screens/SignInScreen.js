import React, {useState, useContext} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {AuthContext} from '../store/auth-context';
import {createUser} from '../util/auth';

const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const authCtx = useContext(AuthContext);

  async function signUpHandler(email, password) {
    try {
      const token = await createUser(email, password);
      console.log(token);
      navigation.navigate('Log In');
    } catch (error) {
      Alert.alert(
        'Authentication failed!',
        'Please enter valid email and password that is 7 digit long.',
      );
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* <View style={styles.input}>
          <TextInput
            value={name}
            onChangeText={text => setName(text)}
            placeholder="Name"
            placeholderTextColor={'#595959'}
            style={styles.textStyle}
          />
        </View> */}
        <View style={styles.input}>
          <TextInput
            value={email}
            onChangeText={text => setEmail(text)}
            placeholder="Email"
            placeholderTextColor={'#595959'}
            style={styles.textStyle}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            value={password}
            onChangeText={text => setPassword(text)}
            placeholder="Password"
            placeholderTextColor={'#595959'}
            style={styles.textStyle}
          />
        </View>
        {/* <View style={styles.input}>
          <TextInput
            value={phone}
            onChangeText={text => setPhone(text)}
            placeholder="Phone"
            placeholderTextColor={'#595959'}
            style={styles.textStyle}
            keyboardType="numeric"
          />
        </View> */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            signUpHandler(email, password);
          }}>
          <Text style={{color: '#fff', fontSize: 18}}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.loginRedirectContainer}>
          <Text style={{color: '#595959'}}>Already have an account? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Log In');
            }}>
            <Text style={{color: '#5367ff'}}>Login.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  card: {
    padding: 25,
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 10,
    paddingVertical: 40,
  },
  textStyle: {
    color: '#595959',
  },
  input: {
    elevation: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical: 5,
    paddingLeft: 3,
  },
  button: {
    backgroundColor: '#00d09c',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 5,
  },
  loginRedirectContainer: {
    flexDirection: 'row',
    paddingTop: 10,
  },
});

export default SignInScreen;
