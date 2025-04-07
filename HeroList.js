// HeroList.js
import React, { useState } from 'react';
import { View, TextInput, ScrollView, StyleSheet } from 'react-native';
import HeroCard from './HeroCard';
import Summary from './Summary';

const HeroList = ({ heroes, heroImages }) => {
  const [search, setSearch] = useState('');

  const filteredHeroes = heroes.filter(hero =>
    hero.name.toLowerCase().includes(search.toLowerCase()) ||
    hero.alias.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search heroes..."
        value={search}
        onChangeText={setSearch}
      />
      {filteredHeroes.map(hero => (
        <HeroCard key={hero.name} hero={hero} heroImages={heroImages} />
      ))}
      <Summary heroes={filteredHeroes} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { paddingBottom: 20 },
  input: { padding: 10, margin: 10, borderWidth: 1, borderRadius: 5 }
});

export default HeroList;
