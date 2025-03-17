// import React, { useEffect, useState } from "react";
// import { View, Text, FlatList, StyleSheet } from "react-native";
// import { getScoresByPseudo } from "@utils";

// const DetailsScreen = ({ route }) => {
//   const { pseudo } = route.params;
//   const [scores, setScores] = useState([]);

//   useEffect(() => {
//     getScoresByPseudo(pseudo, setScores);
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>📋 Scores de {pseudo}</Text>
//       <FlatList
//         data={scores}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.scoreItem}>
//             <Text style={styles.scoreText}>🔥 Score: {item.score} pts</Text>
//             <Text style={styles.dateText}>📅 {item.date}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// export default DetailsScreen;

// // Styles
// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#fff", padding: 20 },
//   title: { fontSize: 24, fontWeight: "bold", marginBottom: 15, textAlign: "center" },
//   scoreItem: { padding: 10, borderBottomWidth: 1, borderBottomColor: "#ccc" },
//   scoreText: { fontSize: 18, fontWeight: "bold" },
//   dateText: { fontSize: 14, color: "gray" },
// });
