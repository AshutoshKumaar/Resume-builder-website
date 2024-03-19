import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { auth, db } from "../Config/firebase.config";

export const getUserDetail = () => {
    return new Promise((resolve, reject) => {
        const unsubscribeAuth = auth.onAuthStateChanged((userCred) => {
            if(userCred) {
                const userData = userCred.providerData[0];
                const userRef = doc(db, 'user', userData.uid);
                
                const unsubscribeSnapshot = onSnapshot(userRef, (doc) => {
                    if(doc.exists()){
                        resolve(doc.data());
                    } else {
                        setDoc(userRef, userData)
                            .then(() => {
                                resolve(userData);
                            })
                            .catch((error) => {
                                reject(error);
                            });
                    }
                });
                
                // Unsubscribe from the snapshot listener to prevent memory leaks
                return unsubscribeSnapshot;
            } else {
                // Resolve with null or default value instead of rejecting the Promise
                resolve(null);
            }

            // Unsubscribe from the authentication state listener to prevent memory leaks
            return unsubscribeAuth
        });
    });
};
