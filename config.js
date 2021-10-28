import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
  apiKey: "AIzaSyB7SKBz-Bkb3-00wJ7oS6YunBV_O2cnUnU",
  authDomain: "complain-app-39b23.firebaseapp.com",
  projectId: "complain-app-39b23",
  storageBucket: "complain-app-39b23.appspot.com",
  messagingSenderId: "93133744031",
  appId: "1:93133744031:web:ba1cd6c53846b965203faa"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

