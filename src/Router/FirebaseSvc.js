// import firebase from 'firebase';
// class FirebaseSvc {
//   constructor() {
//     if (!firebase.apps.length) { 
        
//       firebase.initializeApp({
//         apiKey: "AIzaSyD_xcAV5xGo8yqJqbbyEpn9GdwhR6aXBAE",
//         authDomain: "elearn-aryo.firebaseapp.com",
//         databaseURL: "https://elearn-aryo.firebaseio.com",
//         projectId: "elearn-aryo",
//         storageBucket: "elearn-aryo.appspot.com",
//         messagingSenderId: "497211582595"
//       });
//      }
//   }
// login = async(user, success_callback, failed_callback) => {
//      await firebase.auth()
//        .signInWithEmailAndPassword(user.email, user.password)
//      .then(success_callback, failed_callback);
//   }
// }
// const firebaseSvc = new FirebaseSvc();
// export default firebaseSvc;