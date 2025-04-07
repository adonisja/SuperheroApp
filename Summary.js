// Summary.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Summary = ({ heroes }) => {
  if (heroes.length === 0) return null; // Avoids errors when the list is empty

  const totalHeroes = heroes.length;
  const sortedByAge = [...heroes].sort((a, b) => a.birthYear - b.birthYear);
  const sortedByPower = [...heroes].sort((a, b) => b.powerLevel - a.powerLevel);

  const oldest = sortedByAge[0];
  const youngest = sortedByAge[sortedByAge.length - 1];
  const strongest = sortedByPower[0];
  const weakest = sortedByPower[sortedByPower.length - 1];

  const averagePower = Math.round(heroes.reduce((sum, hero) => sum + hero.powerLevel, 0) / totalHeroes);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Summary</Text>
      <Text>Total Heroes: {totalHeroes}</Text>
      <Text>Oldest: {oldest.name} ({new Date().getFullYear() - oldest.birthYear} years old)</Text>
      <Text>Youngest: {youngest.name} ({new Date().getFullYear() - youngest.birthYear} years old)</Text>
      <Text>Strongest: {strongest.name} (Power: {strongest.powerLevel})</Text>
      <Text>Weakest: {weakest.name} (Power: {weakest.powerLevel})</Text>
      <Text>Average Power Level: {averagePower}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      padding: 15,
      marginTop: 15,
      backgroundColor: 'rgba(243, 243, 243, 0.7)',
      borderRadius: 10,
      alignItems: 'center',
    },
    header: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
    },
    text: {
      color: '#ddd',
    }
  });

export default Summary;