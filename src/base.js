import Rebase from 're-base';
import firebase from 'firebase';

const config = {
apiKey: "AIzaSyCmkDI0aV1MJwtHFWJdGlO2aJCaklI5shM",
authDomain: "catchoftheday-e1d18.firebaseapp.com",
databaseURL: "https://catchoftheday-e1d18.firebaseio.com",
projectId: "catchoftheday-e1d18",
storageBucket: "catchoftheday-e1d18.appspot.com",
messagingSenderId: "683533485953"
};

const firebaseApp = firebase.initializeApp(config);

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp }

export default base;