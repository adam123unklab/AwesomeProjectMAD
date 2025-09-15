import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Button from './components/Button';
import TextInput from './components/TextInput';
import Title from './components/Title';

const Exercise5 = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login dengan:', {username, password});
  };

  const handleGoogleSignIn = () => {
    console.log('Sign in with Google');
  };

  const handleFacebookSignIn = () => {
    console.log('Sign in with Facebook');
  };

  const handleAppleSignIn = () => {
    console.log('Sign in with Apple');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Title
          title="Welcome"
          subtitle="Silakan masuk ke akun Anda"
          spacing="large"
          alignment="center"
        />
      </View>

      <View style={styles.form}>
        <TextInput
          label="Username"
          placeholder="Masukkan username anda"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <TextInput
          label="Password"
          placeholder="Masukkan password kamu"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <Button title="Sign In" onPress={handleLogin} variant="primary" />

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <View style={styles.dividerLine} />
        </View>

        {/* Social Buttons */}
        <View style={styles.socialContainer}>
          <Button
            title="Sign in with Google"
            onPress={handleGoogleSignIn}
            variant="google"
            style={styles.socialButton}
          />
          <Button
            title="Sign in with Facebook"
            onPress={handleFacebookSignIn}
            variant="facebook"
            style={styles.socialButton}
          />
          <Button
            title="Sign in with Apple"
            onPress={handleAppleSignIn}
            variant="apple"
            style={styles.socialButton}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 40,
    justifyContent: 'space-between',
  },
  header: {
    marginBottom: 30,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  dividerText: {
    fontSize: 14,
    color: '#666666',
    marginHorizontal: 12,
  },
  socialContainer: {
    marginTop: 10,
    alignItems: 'center', // tombol rata tengah
  },
  socialButton: {
    width: 250,            // ukuran fixed
    alignSelf: 'center',
    marginVertical: 4,     // jarak rapat antar tombol
  },
});

export default Exercise5;
