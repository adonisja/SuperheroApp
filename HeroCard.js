import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const HeroCard = ({ hero, heroImages }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
    setImageIndex(prevIndex => (prevIndex === 0 ? 1 : 0)); // Change image when details toggle
  };

  return (
    <View style={styles.card}>
      <Image source={heroImages[hero.name]?.[imageIndex] || require('./assets/default.jpg')} style={styles.image} />
      <Text style={styles.name}>{hero.name} ({hero.alias}) {hero.powerLevel > 90 && '🔥'}</Text>
      <Text>Superpower: {hero.superpower}</Text>
      <Button title={showDetails ? "Hide Details" : "Show Details"} onPress={toggleDetails} />
      {showDetails && (
        <View>
          <Text>Power Level: {hero.powerLevel}</Text>
          <Text>Weapon: {hero.weapon}</Text>
          <Text>Partner: {hero.partner}</Text>
          <Text>Birth Year: {hero.birthYear}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    card: {
        padding: 15,
        marginVertical: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5, 
        alignItems: 'center',
      },
      image: {
        width: 100,
        height: 100,
        borderRadius: 10,
      },
      name: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 5,
      }
});

export default HeroCard;
