import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pa Search Anime</Text>
      <Text style={styles.subtitle}>Explore popular anime titles and details</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AnimeList')}
      >
        <Text style={styles.buttonText}>View Anime ➔</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#0f172a',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    color: '#64748b',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#0284c7',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700',
  },
});