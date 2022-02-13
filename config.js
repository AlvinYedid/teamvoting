import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCrWPc3YKQh72jRq5YFQ6KIV-lVZhLJJhM",
  authDomain: "team-voting-96059.firebaseapp.com",
  projectId: "team-voting-96059",
  storageBucket: "team-voting-96059.appspot.com",
  messagingSenderId: "632261530760",
  appId: "1:632261530760:web:0a179bbcaf53c185b3fb3d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();