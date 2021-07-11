/* eslint-disable import/no-duplicates */

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA7ha_CNZoVLDkNMtnHeQu8FRdcJ6FFb-A',
  authDomain: 'organizer-e47b3.firebaseapp.com',
  projectId: 'organizer-e47b3',
  storageBucket: 'organizer-e47b3.appspot.com',
  messagingSenderId: '799178968523',
  appId: '1:799178968523:web:ad12f0d8e499c603dbfa4e',
};
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();

export const getTasksReferrence = (uid: string): firebase.firestore.Query<firebase.firestore.DocumentData> => {
  return db.collection('tasks').where('uid', '==', uid);
};
