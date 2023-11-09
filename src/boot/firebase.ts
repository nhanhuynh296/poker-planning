// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {connectAuthEmulator, getAuth} from 'firebase/auth';
import {getAnalytics} from 'firebase/analytics';
import {getDatabase} from 'firebase/database';
import * as process from 'process';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCNSEPs2l_Up_WlcyPpdVxa5XX-KHdueQg',
  authDomain: 'poker-planning-e2c97.firebaseapp.com',
  projectId: 'poker-planning-e2c97',
  storageBucket: 'poker-planning-e2c97.appspot.com',
  messagingSenderId: '647729377086',
  appId: '1:647729377086:web:5db150d33ff86d3cd5066f',
  measurementId: 'G-DXY2MXHVZN',
  databaseURL: 'https://poker-planning-e2c97-default-rtdb.asia-southeast1.firebasedatabase.app'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
if (!process.env.NODE_ENV || !process.env.NODE_ENV.toLowerCase().startsWith('prod')) {
  connectAuthEmulator(auth, 'http://127.0.0.1:9099');
}
const analytics = getAnalytics(app);
const database = getDatabase(app);

export {app, auth, analytics, database}
