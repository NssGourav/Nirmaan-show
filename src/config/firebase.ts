import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDZwNVwvKzPQ6_GxzGjbY4RuuxQZ-1Yw0Y",
  authDomain: "nirmaan-2024.firebaseapp.com",
  databaseURL: "https://nirmaan-2024-default-rtdb.firebaseio.com",
  projectId: "nirmaan-2024",
  storageBucket: "nirmaan-2024.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abc123def456ghi789jkl"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);