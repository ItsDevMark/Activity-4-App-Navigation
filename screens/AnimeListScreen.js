import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { ANIME_LIST } from '../data/anime';

export default function AnimeListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={ANIME_LIST}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('AnimeDetails', { anime: item })}
          >
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardYear}>Released: {item.year}</Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  list: {
    padding: 16,
    gap: 10,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardBody: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 2,
  },
  cardYear: {
    fontSize: 14,
    color: '#64748b',
  },
  arrow: {
    fontSize: 22,
    color: '#0284c7',
    fontWeight: '600',
  },
});