// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4RHlYiJ5_TFDazNJOOoUBooVFPO05T4o",
  authDomain: "fir-c2ea0.firebaseapp.com",
  projectId: "fir-c2ea0",
  storageBucket: "fir-c2ea0.appspot.com",
  messagingSenderId: "832503528421",
  appId: "1:832503528421:web:e827f55557411d2b968d0c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
export const auth = getAuth(app);
export default firestore;
