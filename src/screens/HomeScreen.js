import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const version = "0.0.1";
  const lastScore = {
    score: 1500,
    nickname: "Joueur",
    datetime: "2025-01-15 18:10"
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Candy Matches</Text>
        <Text style={styles.version}>v{version}</Text>
      </View>

      <View style={styles.content}>
        {lastScore && (
          <View style={styles.scoreBox}>
            <Text style={styles.scoreTitle}>Dernier score:</Text>
            <Text style={styles.scoreText}>{lastScore.score}</Text>
            <Text style={styles.scoreDetails}>
              {lastScore.nickname} - {lastScore.datetime}
            </Text>
            <TouchableOpacity 
              style={styles.trophyButton}
              onPress={() => navigation.navigate('RankingScreen')}
            >
              <Ionicons name="trophy" size={32} color="gold" />
            </TouchableOpacity>
          </View>
        )}
      </View>

      <TouchableOpacity 
        style={styles.startButton}
        onPress={() => navigation.navigate('GameScreen')}
      >
        <Ionicons name="play-circle" size={64} color="white" />
        <Text style={styles.startText}>Commencer une partie</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C3E50',
  },
  header: {
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ECF0F1',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  version: {
    color: '#BDC3C7',
    fontSize: 16,
    marginTop: 5,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  scoreBox: {
    backgroundColor: 'rgba(236, 240, 241, 0.1)',
    borderRadius: 15,
    padding: 20,
    width: width * 0.8,
    alignItems: 'center',
    position: 'relative',
    borderColor: '#2C3E50',
    borderWidth: 1,
  },
  scoreTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3498DB',
    marginBottom: 10,
  },
  scoreText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#3498DB',
  },
  scoreDetails: {
    color: '#95A5A6',
    marginTop: 5,
  },
  trophyButton: {
    position: 'absolute',
    top: -20,
    right: -20,
    backgroundColor: '#34495E',
    borderRadius: 25,
    padding: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  startButton: {
    alignItems: 'center',
    marginBottom: 40,
  },
  startText: {
    color: '#ECF0F1',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default HomeScreen;