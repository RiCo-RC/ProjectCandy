import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const GRID_SIZE = 8;
const CANDY_COLORS = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#FFA500', '#800080'];

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const GRID_WIDTH = Math.min(windowWidth - 32, windowHeight * 0.6);
const CELL_SIZE = (GRID_WIDTH / GRID_SIZE) - 4; 

const GameScreen = ({ navigation }) => {
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(60);
  const [level, setLevel] = useState(1);
  const [grid, setGrid] = useState([]);
  const [selectedCandy, setSelectedCandy] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    initializeGrid();
    const timerInterval = setInterval(() => {
      if (!isPaused) {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(timerInterval);
            return 0;
          }
          return prev - 1;
        });
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [isPaused]);

  const initializeGrid = () => {
    const newGrid = Array(GRID_SIZE).fill().map(() =>
      Array(GRID_SIZE).fill().map(() =>
        CANDY_COLORS[Math.floor(Math.random() * CANDY_COLORS.length)]
      )
    );
    setGrid(newGrid);
  };

  const findMatches = () => {
    let matches = new Set();

    // Check horizontal matches
    for (let row = 0; row < GRID_SIZE; row++) {
      for (let col = 0; col < GRID_SIZE - 2; col++) {
        if (
          grid[row][col] === grid[row][col + 1] &&
          grid[row][col] === grid[row][col + 2]
        ) {
          matches.add(`${row},${col}`);
          matches.add(`${row},${col + 1}`);
          matches.add(`${row},${col + 2}`);
        }
      }
    }

    // Check vertical matches
    for (let row = 0; row < GRID_SIZE - 2; row++) {
      for (let col = 0; col < GRID_SIZE; col++) {
        if (
          grid[row][col] === grid[row + 1][col] &&
          grid[row][col] === grid[row + 2][col]
        ) {
          matches.add(`${row},${col}`);
          matches.add(`${row + 1},${col}`);
          matches.add(`${row + 2},${col}`);
        }
      }
    }

    return matches;
  };

  const removeMatches = (matches) => {
    const newGrid = [...grid];
    matches.forEach(match => {
      const [row, col] = match.split(',').map(Number);
      newGrid[row][col] = null;
    });
    return newGrid;
  };

  const dropCandies = (gridWithNulls) => {
    const newGrid = [...gridWithNulls];
    
    // Drop existing candies
    for (let col = 0; col < GRID_SIZE; col++) {
      let writePos = GRID_SIZE - 1;
      for (let row = GRID_SIZE - 1; row >= 0; row--) {
        if (newGrid[row][col] !== null) {
          newGrid[writePos][col] = newGrid[row][col];
          if (writePos !== row) {
            newGrid[row][col] = null;
          }
          writePos--;
        }
      }
      
      // Fill empty spaces with new candies
      for (let row = writePos; row >= 0; row--) {
        newGrid[row][col] = CANDY_COLORS[Math.floor(Math.random() * CANDY_COLORS.length)];
      }
    }
    
    return newGrid;
  };

  const handleCandyPress = (row, col) => {
    if (isPaused) return;
    
    if (!selectedCandy) {
      setSelectedCandy({ row, col });
    } else {
      const isAdjacent = (
        (Math.abs(selectedCandy.row - row) === 1 && selectedCandy.col === col) ||
        (Math.abs(selectedCandy.col - col) === 1 && selectedCandy.row === row)
      );

      if (isAdjacent) {
        const newGrid = [...grid];
        // Swap candies
        const temp = newGrid[selectedCandy.row][selectedCandy.col];
        newGrid[selectedCandy.row][selectedCandy.col] = newGrid[row][col];
        newGrid[row][col] = temp;
        
        setGrid(newGrid);
        
        // Check for matches after swap, if not matched, swap back
        const matches = findMatches();
        if (matches.size >= 3) {
          setScore(prev => prev + (matches.size * 10));
          const gridWithRemovedCandies = removeMatches(matches);
          const newGridAfterDrop = dropCandies(gridWithRemovedCandies);
          setGrid(newGridAfterDrop);
        } else {
          setTimeout(() => {
            const tempBack = newGrid[selectedCandy.row][selectedCandy.col];
            newGrid[selectedCandy.row][selectedCandy.col] = newGrid[row][col];
            newGrid[row][col] = tempBack;
            setGrid([...newGrid]);
          }, 300);
        }
      }
      setSelectedCandy(null);
    }
  };

  const handlePauseMenu = () => {
    setIsPaused(true);
    navigation.navigate('HomeScreen');
    // Alert.alert(
    //   "Jeu en pause",
    //   "Que souhaitez-vous faire ?",
    //   [
    //     {
    //       text: "Reprendre",
    //       onPress: () => setIsPaused(false),
    //       style: "cancel"
    //     },
    //     {
    //       text: "Retourner au menu principal",
    //       onPress: () => navigation.navigate('HomeScreen'),
    //       style: "destructive"
    //     }
    //   ]
    // );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Score: {score}</Text>
        <Text style={styles.headerText}>Chrono: {timer}s</Text>
        <Text style={styles.headerText}>Niveau: {level}</Text>
      </View>

      <View style={styles.gridWrapper}>
        <View style={styles.gridContainer}>
          {grid.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {row.map((color, colIndex) => (
                <TouchableOpacity
                  key={colIndex}
                  style={[
                    styles.candy,
                    { backgroundColor: color },
                    selectedCandy?.row === rowIndex && selectedCandy?.col === colIndex
                      ? styles.selectedCandy
                      : null,
                  ]}
                  onPress={() => handleCandyPress(rowIndex, colIndex)}
                />
              ))}
            </View>
          ))}
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.iconButton}
          onPress={initializeGrid}
        >
          <Ionicons name="shuffle" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.iconButton}
          onPress={handlePauseMenu}
        >
          <Ionicons name="menu" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C3E50',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  headerText: {
    color: '#ECF0F1',
    fontSize: 16,
    fontWeight: 'bold',
  },
  gridWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridContainer: {
    width: GRID_WIDTH,
    height: GRID_WIDTH,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 2,
  },
  row: {
    flexDirection: 'row',
    height: CELL_SIZE + 4,
    justifyContent: 'space-around',
  },
  candy: {
    width: CELL_SIZE,
    height: CELL_SIZE,
    margin: 2,
    borderRadius: CELL_SIZE * 0.15,
  },
  selectedCandy: {
    borderWidth: 2,
    borderColor: '#F1C40F',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  iconButton: {
    padding: 10,
  },
});

export default GameScreen;