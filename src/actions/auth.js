import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
})

export const logout = () => ({
    type: 'LOGOUT'
})

export const startLogin = () => { //assync
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider) //sign in with popup system with google services
    }
}

export const startLogout = () => {
    return () => {
      return firebase.auth().signOut();
    };
  };