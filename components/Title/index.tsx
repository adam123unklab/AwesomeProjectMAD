import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface TitleProps {
  title: string;
  subtitle?: string;
  titleStyle?: object;
  subtitleStyle?: object;
  containerStyle?: object;
  alignment?: 'left' | 'center' | 'right';
  spacing?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'large' | 'small';
}

const Title: React.FC<TitleProps> = ({
  title,
  subtitle,
  titleStyle,
  subtitleStyle,
  containerStyle,
  alignment = 'center',
  spacing = 'medium',
  variant = 'default',
}) => {
  const getAlignmentStyle = () => {
    switch (alignment) {
      case 'left':
        return {alignItems: 'flex-start'};
      case 'right':
        return {alignItems: 'flex-end'};
      case 'center':
      default:
        return {alignItems: 'center'};
    }
  };

  const getTextAlignmentStyle = () => {
    switch (alignment) {
      case 'left':
        return 'left';
      case 'right':
        return 'right';
      case 'center':
      default:
        return 'center';
    }
  };

  const getSpacingStyle = () => {
    switch (spacing) {
      case 'small':
        return {marginBottom: 20};
      case 'large':
        return {marginBottom: 60};
      case 'medium':
      default:
        return {marginBottom: 40};
    }
  };

  const getTitleVariantStyle = () => {
    switch (variant) {
      case 'large':
        return styles.titleLarge;
      case 'small':
        return styles.titleSmall;
      case 'default':
      default:
        return styles.titleDefault;
    }
  };

  const getSubtitleVariantStyle = () => {
    switch (variant) {
      case 'large':
        return styles.subtitleLarge;
      case 'small':
        return styles.subtitleSmall;
      case 'default':
      default:
        return styles.subtitleDefault;
    }
  };

  return (
    <View
      style={[
        styles.container,
        getAlignmentStyle(),
        getSpacingStyle(),
        containerStyle,
      ]}>
      <Text
        style={[
          styles.title,
          getTitleVariantStyle(),
          {textAlign: getTextAlignmentStyle()},
          titleStyle,
        ]}>
        {title}
      </Text>
      {subtitle && (
        <Text
          style={[
            styles.subtitle,
            getSubtitleVariantStyle(),
            {textAlign: getTextAlignmentStyle()},
            subtitleStyle,
          ]}>
          {subtitle}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 8,
  },
  subtitle: {
    color: '#666666',
  },
  // Title Variants
  titleDefault: {
    fontSize: 32,
  },
  titleLarge: {
    fontSize: 40,
  },
  titleSmall: {
    fontSize: 24,
  },
  // Subtitle Variants
  subtitleDefault: {
    fontSize: 16,
  },
  subtitleLarge: {
    fontSize: 18,
  },
  subtitleSmall: {
    fontSize: 14,
  },
});

export default Title;