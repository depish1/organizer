/* eslint-disable import/no-duplicates */
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyA7ha_CNZoVLDkNMtnHeQu8FRdcJ6FFb-A',
  authDomain: 'organizer-e47b3.firebaseapp.com',
  projectId: 'organizer-e47b3',
  storageBucket: 'organizer-e47b3.appspot.com',
  messagingSenderId: '799178968523',
  appId: '1:799178968523:web:ad12f0d8e499c603dbfa4e',
};

firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebase.auth;
export const firebaseDb = firebase.firestore;
