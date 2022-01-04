import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { createFirestoreInstance } from "redux-firestore";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";

const firebaseConfig = {
  apiKey: "AIzaSyDInan-NJvEeaOVd0l9RTVFs3_Q2uRZap8",
  authDomain: "hellofirebase-b520f.firebaseapp.com",
  projectId: "hellofirebase-b520f",
  storageBucket: "hellofirebase-b520f.appspot.com",
  messagingSenderId: "1092585128007",
  appId: "1:1092585128007:web:92b28eb46015fc6057b162",
  measurementId: "G-KXTPL7XST0",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  // for fire store
  createFirestoreInstance,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
