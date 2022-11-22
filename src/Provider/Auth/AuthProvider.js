import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/Firebase';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import Swal from 'sweetalert2';





export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const [side, setSide] = useState(true)






    const googleProvider = new GoogleAuthProvider();


    const createUser = (email, password, name) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                saveUser(name, email)
                Swal.fire({
                    icon: 'success',
                    title: 'OMG...',
                    text: 'Registration Successfully',
                    footer: '<a href="https://mail.google.com/mail/u/0/#inbox">Please Verify your email</a>'
                })
                updateProfile(auth.currentUser, {
                    displayName: name,


                })
                getToken(email)



            })


    }

    const saveUser = (name, email) => {
        const user = { name, email }
        fetch("http://localhost:5000/users", {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {

            })

    }




    const loginWithEmail = (email, password) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                Swal.fire({
                    icon: 'success',
                    title: 'OMG...',
                    text: 'Login SuccessFull',
                })
                const user = userCredential.user;
                getToken(email)

                // ...
            })
            .catch((error) => {

                let errorMessage = error.message;
                if (errorMessage == 'Firebase: Error (auth/user-not-found).') {
                    errorMessage = 'Your email is not correct. Please try again'
                }
                if (errorMessage == 'Firebase: Error (auth/wrong-password).') {
                    errorMessage = 'Your password is wrong please try again'
                }
                if (errorMessage == 'Firebase: Error (auth/invalid-email).') {
                    errorMessage = 'The user is not valid. Please Create a new User'
                }

                Swal.fire({
                    icon: 'error',
                    title: 'Opps..!',
                    text: errorMessage

                })
            });
    }


    const google = () => {
        setLoading(true)
        signInWithPopup(auth, googleProvider)

            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                saveUser(result.user.displayName, result.user.email)
                Swal.fire({
                    icon: 'success',
                    title: 'Log in successful',
                    text: 'thanks for your log in'
                })
                const email = result.user.email
                getToken(email)



            })
            .catch((error) => {
                const errorMessage = error.message;

            });
    }

    const logOut = () => {
        setLoading(true)
        signOut(auth)
            .then(() => {

                localStorage.removeItem('token')

            })
            .catch((error) => {
                // An error happened.
            });
    }

    const getToken = email => {
        fetch(`http://localhost:5000/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('token', data.accessToken)
                }

            })
    }




    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false)
            setUser(currentUser)
        })
        return () => unsubscribe()
    }, [])

    const authInfo = { google, createUser, loginWithEmail, user, logOut, setLoading, loading, side, setSide }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;