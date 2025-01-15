import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RankingScreen = ({ navigation }) => {
  // Mock ranking data - this would typically come from a database or local storage
  const rankings = [
    { score: 1500, nickname: 'Joueur1', datetime: '2025-01-15 18:10' },
    { score: 1200, nickname: 'Joueur2', datetime: '2025-01-15 18:20' },
    { score: 900, nickname: 'Joueur3', datetime: '2025-01-15 18:30' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scores</Text>
      <View style={styles.podium}>
        {rankings.map((rank, index) => (
          <View key={index} style={styles.podiumItem}>
            <Text style={styles.score}>{rank.score}</Text>
            <Text style={styles.nickname}>{rank.nickname}</Text>
            <Text style={styles.date}>{rank.datetime}</Text>
            <Text style={styles.placement}>{index + 1}</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('HomeScreen')}
      >
        <Ionicons name="arrow-back-circle" size={32} color="white" />
        <Text style={styles.backText}>Retour au menu principal</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495E',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ECF0F1',
    textAlign: 'center',
    marginBottom: 20,
  },
  podium: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  podiumItem: {
    backgroundColor: 'rgba(236, 240, 241, 0.1)',
    borderRadius: 15,
    padding: 15,
    marginVertical: 10,
    width: Dimensions.get('window').width * 0.8,
    alignItems: 'center',
    borderColor: '#2C3E50',
    borderWidth: 1,
  },
  score: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1ABC9C',
  },
  nickname: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#BDC3C7',
  },
  date: {
    fontSize: 14,
    color: '#95A5A6',
  },
  placement: {
    position: 'absolute',
    top: 10,
    right: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F1C40F',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  backText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },
});

export default RankingScreen;