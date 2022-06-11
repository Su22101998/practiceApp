import React, {useState, useContext} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {AuthContext} from '../store/auth-context';
const DashboardScreen = ({navigation}) => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const authCtx = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={{color: '#00d09c'}}>Welcome!</Text>
        <TouchableOpacity onPress={authCtx.logout}>
          <Text style={{color: '#00d09c'}}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  card: {
    padding: 25,
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 10,
    paddingVertical: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
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

export default DashboardScreen;
