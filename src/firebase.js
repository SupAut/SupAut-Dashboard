/* eslint-disable prettier/prettier */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: '',
  authDomain: 'supaut-372209.firebaseapp.com',
  projectId: 'supaut-372209',
  storageBucket: 'supaut-372209.appspot.com',
  messagingSenderId: '579996074459',
  appId: '1:579996074459:web:effa090a0eb2012c38a7fe',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export default getFirestore()
