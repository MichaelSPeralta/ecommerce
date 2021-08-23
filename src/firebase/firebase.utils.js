import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyD0an7KY1Zi8g0xHPDzUIkyX32dW01Q8lQ",
	authDomain: "crwn-db-cb1a5.firebaseapp.com",
	projectId: "crwn-db-cb1a5",
	storageBucket: "crwn-db-cb1a5.appspot.com",
	messagingSenderId: "397152803090",
	appId: "1:397152803090:web:2f88cebc5c3b69ddcefbcb",
	measurementId: "G-TLDSFCM0TC",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log("error creating user", error.message);
		}
	}
	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
