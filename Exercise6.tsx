// ===== Exercise6.tsx =====
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Title from './components/Title';
import TextInput from './components/TextInput';
import Button from './components/Button';

interface FormData {
  name: string;
  username: string;
  email: string;
  address: string;
  phoneNumber: string;
}

const Exercise6: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    username: '',
    email: '',
    address: '',
    phoneNumber: ''
  });

const handleInputChange = (field: keyof FormData, value: string) => {
  setFormData(prev => ({
    ...prev,
    [field]: value
  }));
};

const handlePhoneChange = (value: string) => {
  // Double check - ensure only numbers
  const cleanPhone = value.replace(/[^0-9]/g, '');
  setFormData(prev => ({
    ...prev,
    phoneNumber: cleanPhone
  }));
};

  const handleRegister = () => {
    console.log('=== Registration Data ===');
    console.log('Name:', formData.name);
    console.log('Username:', formData.username);
    console.log('Email:', formData.email);
    console.log('Address:', formData.address);
    console.log('Phone Number:', formData.phoneNumber);
    console.log('========================');
    
    // Optional: Show alert
    // Alert.alert('Success', 'Registration data logged to console');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.formContainer}>
          <Title text="Registration" />
          
          <TextInput
            label="Name"
            placeholder="Masukan nama lengkap anda"
            value={formData.name}
            onChangeText={(value) => handleInputChange('name', value)}
          />
          
          <TextInput
            label="Username"
            placeholder="Masukan username anda"
            value={formData.username}
            onChangeText={(value) => handleInputChange('username', value)}
          />
          
          <TextInput
            label="Email"
            placeholder="Masukan email anda"
            value={formData.email}
            onChangeText={(value) => handleInputChange('email', value)}
            keyboardType="email-address"
          />
          
          <TextInput
            label="Address"
            placeholder="Masukan alamat anda"
            value={formData.address}
            onChangeText={(value) => handleInputChange('address', value)}
          />
          
          <TextInput
  label="Phone Number"
  placeholder="Masukan Nomor telepon anda"
  value={formData.phoneNumber}
  onChangeText={handlePhoneChange}
  keyboardType="numeric"
/>
          
          <View style={styles.buttonContainer}>
            <Button
              title="Register"
              onPress={handleRegister}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 32,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonContainer: {
    marginTop: 32,
  },
});

export default Exercise6;