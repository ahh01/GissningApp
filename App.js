import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

export default function App() {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [numberToGuess, setNumberToGuess] = useState(generateRandomNumber());

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const handleGuess = () => {
    const guessedNumber = parseInt(guess);
    if (isNaN(guessedNumber)) {
      Alert.alert('Ange ett nummer mellan 1 och 100');
      return;
    }

    if (guessedNumber < numberToGuess) {
      setMessage('För lågt!');
    } else if (guessedNumber > numberToGuess) {
      setMessage('För högt!');
    } else {
      setMessage('Rätt Svar! Startar om spelet...');
      setNumberToGuess(generateRandomNumber());
    }

    setGuess('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gissa Numret!</Text>
      <TextInput
        style={styles.input}
        placeholder="Gissa här"
        keyboardType="number-pad"
        value={guess}
        onChangeText={text => setGuess(text)}
      />
      <Button title="Gissa" onPress={handleGuess} />
      {message !== '' && <Text style={styles.message}>{message}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
    marginBottom: 20,
    width: '80%',
  },
  message: {
    marginTop: 20,
    fontSize: 18,
  },
});
