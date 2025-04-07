
import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import HeroList from './HeroList';
import { superheroes, heroBackgrounds } from './heroes';
import defaultImage from './assets/default.jpg'

const App = () => {
  return (
    <ImageBackground source={defaultImage} style={styles.background}>
      <View style={styles.container}>
        <HeroList heroes={superheroes} heroImages={heroBackgrounds} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Ensures the image scales properly
    justifyContent: 'center', // Centers content
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Adds transparency to improve readability
    borderRadius: 10, // Adds rounded edges
    margin: 10, // Centers on the screen with spacing
    maxWidth: 2400,
    alignSelf: 'center',
    minWidth: 900,
  }
});

export default App;
