import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function AnimeDetailsScreen({ route = {}, navigation }) {
  const { anime } = route.params || {};

  if (!anime) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>No anime details found.</Text>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{anime.title}</Text>
        <Text style={styles.year}>Released: {anime.year}</Text>
        <Text style={styles.desc}>{anime.desc}</Text>
      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>← Go Back to List</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 20,
    justifyContent: 'space-between',
  },
  center: {
    flex: 1,
    backgroundColor: '#f8fafc',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0f172a',
    marginBottom: 4,
  },
  year: {
    fontSize: 14,
    color: '#0284c7',
    fontWeight: '600',
    marginBottom: 12,
  },
  desc: {
    fontSize: 15,
    color: '#334155',
    lineHeight: 22,
  },
  errorText: {
    fontSize: 16,
    color: '#64748b',
    marginBottom: 16,
  },
  backButton: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cbd5e1',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#334155',
    fontSize: 15,
    fontWeight: '600',
  },
});