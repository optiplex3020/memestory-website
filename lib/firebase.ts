import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAgZ0UAEzmlv7B1BrLjfnMzqFAxCOXW200",
  authDomain: "meme-story-f3454.firebaseapp.com",
  projectId: "meme-story-f3454",
  storageBucket: "meme-story-f3454.appspot.com",
  messagingSenderId: "391941950684",
  appId: "1:391941950684:web:9e6041d74bb616723ab819",
  measurementId: "G-9WJ5VMFH9L"
};

// Initialize Firebase only if not already initialized
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };
