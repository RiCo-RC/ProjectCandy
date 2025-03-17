import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("spacesmatch.db");

export const migrateDbIfNeeded = async () => {
  const DATABASE_VERSION = 1;
  try {
    let { user_version } = await db.getFirstAsync("PRAGMA user_version");
    if (user_version >= DATABASE_VERSION) return;

    if (user_version === 0) {
      await db.execAsync(`
        PRAGMA journal_mode = 'wal';
        CREATE TABLE IF NOT EXISTS users (
          user_id INTEGER PRIMARY KEY AUTOINCREMENT,  
          user_username TEXT UNIQUE NOT NULL,        
          user_latest_play TEXT DEFAULT (datetime('now'))                    
        );
      `);
      await db.execAsync(`
        CREATE TABLE IF NOT EXISTS scores (
          score_id INTEGER PRIMARY KEY AUTOINCREMENT,
          score_points INTEGER NOT NULL,              
          score_registered_on TEXT DEFAULT (datetime('now')), 
          user_id INTEGER,                            
          FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
        );
      `);

      await db.runAsync(`INSERT INTO users (user_username) VALUES (?)`, [
        "testUser",
      ]);
      await db.runAsync(
        `INSERT INTO scores (score_points, user_id) VALUES (?, ?)`,
        [100, 1]
      );
      user_version = 1;
    }

    if (user_version === 1) {
      await db.runAsync(`INSERT INTO users (user_username) VALUES (?)`, ["momo"]);
      await db.runAsync(
        `INSERT INTO scores (score_points, user_id) VALUES (?, ?)`,
        [200, 2]
      );
    }

    await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
  } catch (error) {
    console.error("❌", "Database migration error:", error);
  }
};

// export const databaseInit = async () => {
//   try {
//     await db.execAsync(`
//       CREATE TABLE IF NOT EXISTS users (
//         user_id INTEGER PRIMARY KEY AUTOINCREMENT,
//         user_username TEXT UNIQUE NOT NULL,
//         user_latest_play TEXT
//       );
//     `);
//     console.log("✅","'User' table created successfully!");

//     await db.execAsync(`
//       CREATE TABLE IF NOT EXISTS scores (
//         score_id INTEGER PRIMARY KEY AUTOINCREMENT,
//         score_points INTEGER NOT NULL,
//         score_registered_on TEXT DEFAULT (datetime('now')),
//         user_id INTEGER,
//         FOREIGN KEY (user_id) REFERENCES user(user_id) ON DELETE CASCADE
//       );
//     `);
//     console.log("✅","'Score' table successfully created!");

//   } catch (error) {
//     console.log("❌","Error during database initialization:", error);
//   }
// };

export const addUser = async (username, latestPlay) => {
  try {
    await db.runAsync(
      `INSERT INTO users (user_username, user_latest_play) VALUES (?, ?);`,
      [username, latestPlay]
    );
    console.log("✅", "User successfully added!");
  } catch (error) {
    console.log("❌", "Error adding user:", error);
  }
};

export const addScore = async (points, userId) => {
  try {
    await db.runAsync(
      `INSERT INTO scores (score_points, user_id) VALUES (?, ?);`,
      [points, userId]
    );
    console.log("✅", "Score successfully added!");
  } catch (error) {
    console.log("❌", "Error adding score:", error);
  }
};

export const getLeaderboard = async () => {
  try {
    const result = await db.getAllAsync(
      `SELECT u.user_username AS username, MAX(s.score_points) AS bestScore 
       FROM scores AS s
       INNER JOIN users AS u ON s.user_id = u.user_id
       GROUP BY u.user_id
       ORDER BY bestScore DESC;`
    );

    return result || [];
  } catch (error) {
    console.log("❌", "Error when retrieving classification:", error);
    return [];
  }
};

export const getUserScores = async (userId) => {
  try {
    const result = await db.getAllAsync(
      `SELECT * FROM scores WHERE user_id = ? ORDER BY score_registered_on DESC;`,
      [userId]
    );
    return result || [];
  } catch (error) {
    console.log("❌", "Error retrieving user scores:", error);
    return [];
  }
};

export const getUserScoresByUsername = async (username) => {
};

export const getLatestScore = async () => {
  try {
    const result = await db.getFirstAsync(
      `SELECT s.score_points, u.user_username, s.score_registered_on
       FROM scores AS s
       INNER JOIN users AS u ON s.user_id = u.user_id
       ORDER BY s.score_registered_on DESC
       LIMIT 1;`
    );
    return result || null;
  } catch (error) {
    console.log("❌", "Error when retrieving the last score:", error);
    return null;
  }
};

export const getUser = async (username) => {
  try {
    const result = await db.getFirstAsync(
      `SELECT * FROM users WHERE user_username = ?;`,
      [username]
    );
    return result || null;
  } catch (error) {
    console.log("❌", "Error when retrieving the user:", error);
  }
};

export const updateUser = async (username, latestPlay) => {
  try {
    const user = await getUser(username);
    if (!user) {
      console.log("❌", "User not found:", username);
      return;
    }

    await db.runAsync(
      `UPDATE user SET user_latest_play = ? WHERE user_username = ?;`,
      [latestPlay, username]
    );

    console.log("✅", "Last game updated for", username, ":", latestPlay);
  } catch (error) {
    console.log("❌", "User update error:", error);
  }
};
