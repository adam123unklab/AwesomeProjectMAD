import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'google' | 'facebook' | 'apple';
  style?: object;
  textStyle?: object;
  disabled?: boolean;
  activeOpacity?: number;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  style,
  textStyle,
  disabled = false,
  activeOpacity = 0.8,
}) => {
  const getButtonStyle = () => {
    switch (variant) {
      case 'primary':
        return styles.primaryButton;
      case 'google':
        return styles.googleButton;
      case 'facebook':
        return styles.facebookButton;
      case 'apple':
        return styles.appleButton;
      default:
        return styles.primaryButton;
    }
  };

  const getTextStyle = () => {
    switch (variant) {
      case 'primary':
        return styles.primaryButtonText;
      case 'google':
        return styles.googleButtonText;
      case 'facebook':
        return styles.facebookButtonText;
      case 'apple':
        return styles.appleButtonText;
      default:
        return styles.primaryButtonText;
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.baseButton,
        getButtonStyle(),
        style,
        disabled && styles.disabledButton,
      ]}
      onPress={onPress}
      activeOpacity={activeOpacity}
      disabled={disabled}>
      <Text style={[styles.baseButtonText, getTextStyle(), textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  baseButton: {
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
  },
  baseButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  // Primary Button (Sign In)
  primaryButton: {
    backgroundColor: '#1be974ff',
    borderColor: '#FF6B35',
    height: 56,
    marginBottom: 24,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  // Google Button
  googleButton: {
    backgroundColor: '#DB4437',
    borderColor: '#DB4437',
    height: 52,
  },
  googleButtonText: {
    color: '#FFFFFF',
  },
  // Facebook Button
  facebookButton: {
    backgroundColor: '#4267B2',
    borderColor: '#4267B2',
    height: 52,
  },
  facebookButtonText: {
    color: '#FFFFFF',
  },
  // Apple Button
  appleButton: {
    backgroundColor: '#000000',
    borderColor: '#000000',
    height: 52,
  },
  appleButtonText: {
    color: '#FFFFFF',
  },
  // Disabled Button
  disabledButton: {
    backgroundColor: '#E0E0E0',
    borderColor: '#E0E0E0',
  },
});

export default Button;