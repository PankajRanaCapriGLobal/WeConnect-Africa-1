import { appColor } from '@/theme/appColor';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ImageBackground, Alert } from 'react-native';

const phoneButtons = [
  '1', '2', '3',
  '4', '5', '6',
  '7', '8', '9',
  '*', '0', '#'
];

const Keyboard = () => {
  const [inputValue, setInputValue] = useState('');

  const handleButtonPress = (value: string) => {
    setInputValue(prev => formatInput(prev + value));
  };

  const handleDeletePress = () => {
    setInputValue(prev => formatInput(prev.slice(0, -1)));
  };

  const handleDeleteLongPress = () => {
    setInputValue('');
  };

  const handleZeroLongPress = () => {
    setInputValue(prev => formatInput(prev + '+'));
  };

  const handleEuroPress = () => {
    Alert.alert("Euro", ``);
  };

  const handleCallPress = () => {
    Alert.alert("Calling", `Calling ${inputValue}`);
    // Add actual call functionality here if needed
  };

  const handleContactPress = () => {
    Alert.alert("Contacts", "Accessing Contacts");
    // Add actual contact access functionality here if needed
  };

  const formatInput = (value: string) => {
    if (value.startsWith('+')) {
      const digits = value.replace(/\D/g, ''); // remove non-digit characters
      if (digits.length > 2) {
        return `+${digits.slice(0, 2)}-${digits.slice(2)}`;
      }
      return `+${digits}`;
    }
    return value;
  };

  return (
    <ImageBackground
      source={require('../../assets/images/weconnect.jpeg')}
      style={styles.background}
      resizeMode='repeat'
    >
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={inputValue}
          onChangeText={text => setInputValue(formatInput(text))}
          placeholder="Enter number"
          keyboardType="numeric"
        />
        <View style={styles.keyboard}>
          {phoneButtons.map((button) => (
            <TouchableOpacity
              key={button}
              style={styles.button}
              onPress={() => handleButtonPress(button)}
              onLongPress={button === '0' ? handleZeroLongPress : undefined}
            >
              {button === '0' ? (
                <View style={styles.zeroButton}>
                  <Text style={styles.buttonText}>0</Text>
                  <Text style={styles.plusText}>+</Text>
                </View>
              ) : (
                <Text style={styles.buttonText}>{button}</Text>
              )}
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={[styles.button, styles.deleteButton]}
            onPress={handleDeletePress}
            onLongPress={handleDeleteLongPress}
          >
            <Text style={styles.buttonText}>⌫</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.extraButtons}>
          {/* Euro Button */}
          <TouchableOpacity
            style={styles.extraButton}
            onPress={handleEuroPress}
          >
            <Text style={styles.buttonText}>€</Text>
          </TouchableOpacity>
          {/* Call Button */}
          <TouchableOpacity
            style={styles.extraButton}
            onPress={handleCallPress}
          >
            <Text style={styles.buttonText}>📞</Text>
          </TouchableOpacity>
          {/* Contact Butotn */}
          <TouchableOpacity
            style={styles.extraButton}
            onPress={handleContactPress}
          >
            <Text style={styles.buttonText}>👤</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  keyboard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColor.PRIMARY_COLOR,
    margin: 5,
    borderRadius: 30,
  },
  deleteButton: {
    backgroundColor: '#FF3B30',
  },
  zeroButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
  plusText: {
    color: '#fff',
    fontSize: 18,
    position: 'absolute',
    bottom: -15,
  },
  extraButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  extraButton: {
    width: 80,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    margin: 5,
    borderRadius: 30,
  },
});

export default Keyboard;
