import { firebase as config } from '../config'
<<<<<<< HEAD
const { apiKey, authDomain, databaseUrl, storageBucket } = config
import Firebase from 'firebase'

// Initialize Firebase
Firebase.initializeApp({ apiKey, authDomain, databaseUrl, storageBucket })
=======
const { apiKey, authDomain, databaseURL, storageBucket } = config
import Firebase from 'firebase'

// Initialize Firebase
Firebase.initializeApp({ apiKey, authDomain, databaseURL, storageBucket })
>>>>>>> origin/redux-firebasev3

export default Firebase
