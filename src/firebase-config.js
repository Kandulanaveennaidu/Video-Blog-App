import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBGJXx4-wWX2hZhAMdeZ9_2aSRYhpQx_Vg",
  authDomain: "blog-application1.firebaseapp.com",
  databaseURL: "https://blog-application1-default-rtdb.firebaseio.com",
  projectId: "blog-application1",
  storageBucket: "blog-application1.appspot.com",
  messagingSenderId: "960757466675",
  appId: "1:960757466675:web:d0e794199b4b103369c546"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
