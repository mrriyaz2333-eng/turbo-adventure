// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDI6uvCi6jJEAGaA3rS1WhlSvh_25KQGZE",
  authDomain: "proxy-v1-e9ab5.firebaseapp.com",
  databaseURL: "https://proxy-v1-e9ab5-default-rtdb.firebaseio.com",
  projectId: "proxy-v1-e9ab5",
  storageBucket: "proxy-v1-e9ab5.firebasestorage.app",
  messagingSenderId: "723913028090",
  appId: "1:723913028090:web:94ce2b6f47856ba436b443",
  measurementId: "G-YLXQB8JWQL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };alizeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };