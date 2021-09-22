// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCO13QbOTXthH6DcZioJPukIMCyybvlwcQ',
    authDomain: 'dstopia-db918.firebaseapp.com',
    databaseURL: 'https://dstopia-db918-default-rtdb.firebaseio.com',
    projectId: 'dstopia-db918',
    storageBucket: 'dstopia-db918.appspot.com',
    messagingSenderId: '634079888128',
    appId: '1:634079888128:web:98d08eebdcf7a0533869e5',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export default db
