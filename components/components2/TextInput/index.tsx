import React from 'react';
import { TextInput as RNTextInput, View, Text, StyleSheet, KeyboardTypeOptions } from 'react-native';

interface TextInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
}

const TextInput: React.FC<TextInputProps> = ({ 
  label, 
  placeholder, 
  value, 
  onChangeText, 
  keyboardType = 'default' 
}) => {
  const handleTextChange = (text: string) => {
    // If keyboard type is numeric, filter out all non-numeric characters
    if (keyboardType === 'numeric') {
      // Remove all characters that are not digits (0-9)
      const numericOnly = text.replace(/[^0-9]/g, '');
      onChangeText(numericOnly);
    } else {
      onChangeText(text);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <RNTextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        value={value}
        onChangeText={handleTextChange}
        keyboardType={keyboardType === 'numeric' ? 'number-pad' : keyboardType}
        returnKeyType={keyboardType === 'numeric' ? 'done' : 'default'}
        maxLength={keyboardType === 'numeric' ? 15 : undefined}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#374151',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#374151',
    backgroundColor: '#FFFFFF',
  },
});

export default TextInput;